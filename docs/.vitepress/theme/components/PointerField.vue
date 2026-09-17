<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * 首页全页面鼠标动效：颗粒（点）+ 连线（线）。
 *
 * 设计取向 —— 与「柔光几何」保持一致：
 * - 颗粒用极小的圆点，连线用品牌色低透明度细线，只做氛围，不抢内容；
 * - 参数受控：粒子数按视口面积推导后封顶，DPR 上限 2，透明度与颜色分桶绘制，
 *   把 Canvas 状态切换次数压到常数级；
 * - 鼠标只产生「冲量」而非直接位移，冲量按帧衰减（0.94），移开后自然归位；
 * - 只连距离内的相邻粒子，距离判断走平方比较，避免开方。
 *
 * 性能兜底：
 * - 页面不可见（切标签页 / 最小化）时停掉 rAF；
 * - prefers-reduced-motion 下不跑循环，仅在鼠标移动与主题切换时按需绘制静态帧；
 * - 组件卸载（离开首页或 SPA 换页）时取消 rAF、摘掉全部监听与观察器。
 */

interface Particle {
  x: number
  y: number
  /** 基础漂移速度，保证画面始终有微弱生命感 */
  driftX: number
  driftY: number
  /** 鼠标冲量，逐帧衰减 */
  impulseX: number
  impulseY: number
  /** 视觉层级 0 / 1 / 2，用于分桶批量绘制 */
  tier: number
}

interface Rgb {
  r: number
  g: number
  b: number
}

const props = withDefaults(
  defineProps<{
    /** 粒子数量上限（实际值按视口面积推导后封顶） */
    maxCount?: number
    /** 邻居连线距离阈值（px） */
    linkDistance?: number
    /** 鼠标影响半径（px） */
    pointerRadius?: number
  }>(),
  {
    maxCount: 110,
    linkDistance: 116,
    pointerRadius: 190,
  }
)

/** 与主题变量同域的兜底色，保证首帧不会画出透明色 */
const FALLBACK_DOT: Rgb = { r: 91, g: 79, b: 233 }
const FALLBACK_LINK: Rgb = { r: 199, g: 204, b: 218 }

/** 透明度分桶：桶内共用一次 globalAlpha，减少状态切换 */
const LINK_ALPHA = [0.05, 0.1, 0.16, 0.24]
const POINTER_ALPHA = [0.1, 0.2, 0.32, 0.5]
const DOT_ALPHA = [0.22, 0.42, 0.68]

const canvasRef = ref<HTMLCanvasElement | null>(null)

let ctx: CanvasRenderingContext2D | null = null
let rafId = 0
let staticRafId = 0
let resizeRafId = 0
let pointerTimer: ReturnType<typeof setTimeout> | undefined
let themeObserver: MutationObserver | null = null
let viewWidth = 0
let viewHeight = 0
let reducedMotion = false
let running = false

const particles: Particle[] = []
const pointer = { x: -9999, y: -9999, active: false }
const dotColor: Rgb = { ...FALLBACK_DOT }
const linkColor: Rgb = { ...FALLBACK_LINK }

// 复用的分桶容器：每帧只清空长度，不重新分配数组
const dotBuckets: number[][] = [[], [], []]
const linkBuckets: number[][] = [[], [], [], []]
const pointerBuckets: number[][] = [[], [], [], []]

function toRgbString(color: Rgb): string {
  return `rgb(${color.r}, ${color.g}, ${color.b})`
}

/** 支持 #rgb / #rrggbb / rgb() / rgba()，其它格式退回兜底色 */
function parseColor(value: string, fallback: Rgb): Rgb {
  const input = value.trim()
  if (input === '') return fallback

  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(input)
  if (hex) {
    const digits =
      hex[1].length === 3
        ? hex[1]
            .split('')
            .map((char) => char + char)
            .join('')
        : hex[1]
    return {
      r: Number.parseInt(digits.slice(0, 2), 16),
      g: Number.parseInt(digits.slice(2, 4), 16),
      b: Number.parseInt(digits.slice(4, 6), 16),
    }
  }

  const rgb = /rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(input)
  if (rgb) {
    return {
      r: Math.round(Number(rgb[1])),
      g: Math.round(Number(rgb[2])),
      b: Math.round(Number(rgb[3])),
    }
  }

  return fallback
}

/** 主题切换后必须重新取色：变量值在 CSS 里，Canvas 读不到 */
function readColors(): void {
  const styles = getComputedStyle(document.documentElement)
  Object.assign(
    dotColor,
    parseColor(styles.getPropertyValue('--kk-color-primary'), FALLBACK_DOT)
  )
  Object.assign(
    linkColor,
    parseColor(styles.getPropertyValue('--kk-border-color-hover'), FALLBACK_LINK)
  )
}

function seed(): void {
  particles.length = 0
  const count = Math.max(
    20,
    Math.min(props.maxCount, Math.round((viewWidth * viewHeight) / 26000))
  )

  for (let index = 0; index < count; index += 1) {
    particles.push({
      x: Math.random() * viewWidth,
      y: Math.random() * viewHeight,
      driftX: (Math.random() - 0.5) * 0.34,
      driftY: (Math.random() - 0.5) * 0.34,
      impulseX: 0,
      impulseY: 0,
      tier: index % 3,
    })
  }
}

function resize(): void {
  const canvas = canvasRef.value
  if (!canvas) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  viewWidth = window.innerWidth
  viewHeight = window.innerHeight

  canvas.width = Math.round(viewWidth * dpr)
  canvas.height = Math.round(viewHeight * dpr)
  canvas.style.width = `${viewWidth}px`
  canvas.style.height = `${viewHeight}px`

  ctx = canvas.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)

  seed()
}

function step(particle: Particle): void {
  if (!reducedMotion) {
    if (pointer.active) {
      const dx = pointer.x - particle.x
      const dy = pointer.y - particle.y
      const distance = Math.hypot(dx, dy)
      if (distance < props.pointerRadius && distance > 0.001) {
        // 越靠近鼠标冲量越大，单帧上限 1.4px 保证不会瞬间被吸走
        const force = (1 - distance / props.pointerRadius) * 0.42
        particle.impulseX += (dx / distance) * force
        particle.impulseY += (dy / distance) * force
      }
    }

    particle.impulseX *= 0.94
    particle.impulseY *= 0.94
    particle.x += particle.driftX + Math.max(-1.4, Math.min(1.4, particle.impulseX))
    particle.y += particle.driftY + Math.max(-1.4, Math.min(1.4, particle.impulseY))
  }

  // 环绕出界：从另一侧回来，避免粒子逐渐跑光
  if (particle.x < -40) particle.x = viewWidth + 40
  if (particle.x > viewWidth + 40) particle.x = -40
  if (particle.y < -40) particle.y = viewHeight + 40
  if (particle.y > viewHeight + 40) particle.y = -40
}

function resetBuckets(): void {
  for (let index = 0; index < linkBuckets.length; index += 1) {
    linkBuckets[index].length = 0
    pointerBuckets[index].length = 0
  }
  for (let index = 0; index < dotBuckets.length; index += 1) {
    dotBuckets[index].length = 0
  }
}

function drawStroke(
  target: CanvasRenderingContext2D,
  buckets: number[][],
  stroke: string,
  alphas: number[]
): void {
  target.strokeStyle = stroke
  target.lineWidth = 1

  for (let index = 0; index < buckets.length; index += 1) {
    const segment = buckets[index]
    if (segment.length === 0) continue

    target.globalAlpha = alphas[index]
    target.beginPath()
    for (let cursor = 0; cursor < segment.length; cursor += 4) {
      target.moveTo(segment[cursor], segment[cursor + 1])
      target.lineTo(segment[cursor + 2], segment[cursor + 3])
    }
    target.stroke()
  }
}

function drawDots(target: CanvasRenderingContext2D): void {
  target.fillStyle = toRgbString(dotColor)

  for (let tier = 0; tier < dotBuckets.length; tier += 1) {
    const bucket = dotBuckets[tier]
    if (bucket.length === 0) continue

    target.globalAlpha = DOT_ALPHA[tier]
    const radius = 0.9 + tier * 0.55
    target.beginPath()
    for (let cursor = 0; cursor < bucket.length; cursor += 2) {
      target.moveTo(bucket[cursor] + radius, bucket[cursor + 1])
      target.arc(bucket[cursor], bucket[cursor + 1], radius, 0, Math.PI * 2)
    }
    target.fill()
  }
}

function draw(): void {
  const target = ctx
  if (!target) return

  target.clearRect(0, 0, viewWidth, viewHeight)
  resetBuckets()

  const linkDistance = props.linkDistance
  const linkSquared = linkDistance * linkDistance

  for (let i = 0; i < particles.length; i += 1) {
    const particle = particles[i]
    step(particle)

    for (let j = i + 1; j < particles.length; j += 1) {
      const other = particles[j]
      const dx = particle.x - other.x
      const dy = particle.y - other.y
      const squared = dx * dx + dy * dy
      if (squared > linkSquared) continue

      const alpha = (1 - Math.sqrt(squared) / linkDistance) * 0.24
      const bucket = Math.min(linkBuckets.length - 1, Math.floor(alpha / 0.06))
      linkBuckets[bucket].push(particle.x, particle.y, other.x, other.y)
    }

    if (pointer.active) {
      const dx = particle.x - pointer.x
      const dy = particle.y - pointer.y
      const squared = dx * dx + dy * dy
      const radius = props.pointerRadius
      if (squared < radius * radius) {
        const alpha = (1 - Math.sqrt(squared) / radius) * 0.5
        const bucket = Math.min(pointerBuckets.length - 1, Math.floor(alpha / 0.125))
        pointerBuckets[bucket].push(particle.x, particle.y, pointer.x, pointer.y)
      }
    }

    dotBuckets[particle.tier].push(particle.x, particle.y)
  }

  drawStroke(target, linkBuckets, toRgbString(linkColor), LINK_ALPHA)
  drawStroke(target, pointerBuckets, toRgbString(dotColor), POINTER_ALPHA)
  drawDots(target)
  target.globalAlpha = 1
}

/** 静态模式（减少动效）下的按需重绘，用 rAF 合并同一帧内的多次触发 */
function scheduleStaticDraw(): void {
  if (staticRafId) return
  staticRafId = requestAnimationFrame(() => {
    staticRafId = 0
    draw()
  })
}

function frame(): void {
  draw()
  rafId = requestAnimationFrame(frame)
}

function start(): void {
  if (running || reducedMotion) return
  running = true
  rafId = requestAnimationFrame(frame)
}

function stop(): void {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = 0
  running = false
}

function schedulePointerReset(): void {
  if (pointerTimer) clearTimeout(pointerTimer)
  // 鼠标静止 2.4s 后收起高亮，避免画面一直「粘」在一点
  pointerTimer = setTimeout(() => {
    pointer.active = false
    if (reducedMotion) scheduleStaticDraw()
  }, 2400)
}

function onPointerMove(event: PointerEvent): void {
  pointer.x = event.clientX
  pointer.y = event.clientY
  pointer.active = true
  schedulePointerReset()
  if (reducedMotion) scheduleStaticDraw()
}

function onPointerLeave(): void {
  pointer.active = false
  if (reducedMotion) scheduleStaticDraw()
}

function onVisibilityChange(): void {
  if (document.hidden) stop()
  else start()
}

function onResize(): void {
  if (resizeRafId) cancelAnimationFrame(resizeRafId)
  resizeRafId = requestAnimationFrame(() => {
    resizeRafId = 0
    resize()
    if (reducedMotion) draw()
  })
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  resize()
  readColors()
  draw()

  window.addEventListener('pointermove', onPointerMove, { passive: true })
  window.addEventListener('pointerleave', onPointerLeave, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange)

  // 明暗/主题切换会改 html 上的属性，取色需要跟着走
  themeObserver = new MutationObserver(() => {
    readColors()
    if (reducedMotion) scheduleStaticDraw()
  })
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-kk-theme', 'class', 'style'],
  })

  start()
})

onBeforeUnmount(() => {
  stop()
  if (staticRafId) cancelAnimationFrame(staticRafId)
  staticRafId = 0
  if (resizeRafId) cancelAnimationFrame(resizeRafId)
  resizeRafId = 0
  if (pointerTimer) clearTimeout(pointerTimer)
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerleave', onPointerLeave)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  themeObserver?.disconnect()
  themeObserver = null
})
</script>

<template>
  <canvas ref="canvasRef" class="kk-pointer-field" aria-hidden="true" />
</template>

<style>
.kk-pointer-field {
  position: fixed;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.9;
}
</style>
