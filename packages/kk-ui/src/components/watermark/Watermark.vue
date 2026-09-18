<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type CSSProperties,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { addUnit } from '../../utils/dom'
import type { WatermarkFont, WatermarkInstance } from './types'

defineOptions({ name: 'KkWatermark', inheritAttrs: false })

const props = withDefaults(defineProps<import('./types').WatermarkProps>(), {
  width: 120,
  height: 120,
  rotate: -22,
  gap: () => [100, 100],
  opacity: 0.15,
  zIndex: 9,
  cross: true,
  repeat: true,
  inheritColor: false,
  /** 跟随鼠标移动：容器范围内只显示单个水印并跟随光标（参考 Element Plus 的 moveable） */
  moveable: false,
})

defineEmits<import('./types').WatermarkEmits>()

const ns = useNamespace('watermark')
const { t } = useLocale()

const containerRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const dataUrls = ref<string[]>([])
const lastTileSize = ref({ w: 0, h: 0 })

const moveablePos = ref({ x: 0, y: 0 })
const isHovering = ref(false)

function onPointerMove(e: PointerEvent): void {
  if (!props.moveable || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  moveablePos.value = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  }
  isHovering.value = true
}

function onPointerLeave(): void {
  if (props.moveable) isHovering.value = false
}

let destroyed = false
let ro: ResizeObserver | null = null
let resizeHandler: (() => void) | null = null

function resolveVar(name: string, fallback: string): string {
  if (typeof window === 'undefined' || typeof getComputedStyle !== 'function')
    return fallback
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return value || fallback
}

const font = computed<Required<Omit<WatermarkFont, 'color'>> & { color: string }>(
  () => {
    const f = props.font ?? {}
    let color = f.color
    if (!color) {
      if (props.inheritColor && containerRef.value) {
        color = getComputedStyle(containerRef.value).color
      } else {
        color = resolveVar('--kk-text-tertiary', '#9ba3b7')
      }
    }
    return {
      color,
      size: f.size ?? 16,
      family: f.family ?? resolveVar('--kk-font-sans', 'sans-serif'),
      weight: f.weight ?? 'normal',
      style: f.style ?? 'normal',
    }
  }
)

/** 计算水印文案：优先 #content 插槽文本，其次 content 属性，最后回退本地化默认值 */
function getContentLines(): string[] {
  if (contentRef.value) {
    const text = (contentRef.value.textContent ?? '').trim()
    const lines = text
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean)
    if (lines.length) return lines
  }
  const c = props.content
  if (c == null) return [t('watermark.text')]
  const arr = Array.isArray(c) ? c : [c]
  const lines = arr.map(String).filter((s) => s.length > 0)
  return lines.length ? lines : [t('watermark.text')]
}

/** 安全获取 2d 上下文：jsdom 等环境会抛 "Not implemented"，这里兜底返回 null 不报错 */
function getCanvasContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D | null {
  try {
    return canvas.getContext('2d')
  } catch {
    return null
  }
}

function drawTextPattern(rotateDeg: number): string | undefined {
  const canvas = document.createElement('canvas')
  const ctx = getCanvasContext(canvas)
  // jsdom 等环境无 canvas 实现：直接跳过绘制，不报错
  if (!ctx) return undefined

  const ratio =
    typeof window !== 'undefined' && window.devicePixelRatio
      ? window.devicePixelRatio
      : 1
  const f = font.value
  const lines = getContentLines()
  const lineHeight = f.size + 4
  const textHeight = lines.length * lineHeight

  ctx.font = `${f.style} ${f.weight} ${f.size}px ${f.family}`
  const widths = lines.map((line) => ctx.measureText(line).width)
  const maxTextWidth = Math.max(1, ...widths)
  const contentWidth = Math.max(maxTextWidth, props.width)
  const contentHeight = Math.max(textHeight, props.height)

  const angle = (rotateDeg * Math.PI) / 180
  const absCos = Math.abs(Math.cos(angle))
  const absSin = Math.abs(Math.sin(angle))
  const rotatedW = contentWidth * absCos + contentHeight * absSin
  const rotatedH = contentWidth * absSin + contentHeight * absCos

  const tileW = Math.ceil(Math.max(rotatedW, contentWidth) + props.gap[0])
  const tileH = Math.ceil(Math.max(rotatedH, contentHeight) + props.gap[1])

  canvas.width = tileW * ratio
  canvas.height = tileH * ratio
  ctx.scale(ratio, ratio)
  ctx.clearRect(0, 0, tileW, tileH)

  ctx.translate(tileW / 2, tileH / 2)
  ctx.rotate(angle)
  ctx.font = `${f.style} ${f.weight} ${f.size}px ${f.family}`
  ctx.fillStyle = f.color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const startY = -((lines.length - 1) * lineHeight) / 2
  lines.forEach((line, i) => ctx.fillText(line, 0, startY + i * lineHeight))

  lastTileSize.value = { w: tileW, h: tileH }
  return canvas.toDataURL()
}

function drawImagePattern(img: HTMLImageElement): string | undefined {
  const canvas = document.createElement('canvas')
  const ctx = getCanvasContext(canvas)
  if (!ctx) return undefined

  const ratio =
    typeof window !== 'undefined' && window.devicePixelRatio
      ? window.devicePixelRatio
      : 1
  const iw = props.imageWidth || img.naturalWidth || props.width
  const ih = props.imageHeight || img.naturalHeight || props.height

  const angle = (props.rotate * Math.PI) / 180
  const absCos = Math.abs(Math.cos(angle))
  const absSin = Math.abs(Math.sin(angle))
  const rotatedW = iw * absCos + ih * absSin
  const rotatedH = iw * absSin + ih * absCos
  const tileW = Math.ceil(Math.max(rotatedW, iw) + props.gap[0])
  const tileH = Math.ceil(Math.max(rotatedH, ih) + props.gap[1])

  canvas.width = tileW * ratio
  canvas.height = tileH * ratio
  ctx.scale(ratio, ratio)
  ctx.clearRect(0, 0, tileW, tileH)
  ctx.translate(tileW / 2, tileH / 2)
  ctx.rotate(angle)
  try {
    ctx.drawImage(img, -iw / 2, -ih / 2, iw, ih)
  } catch {
    return undefined
  }

  lastTileSize.value = { w: tileW, h: tileH }
  return canvas.toDataURL()
}

function render(): void {
  if (destroyed) return
  dataUrls.value = []

  if (props.image) {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const url = drawImagePattern(img)
      if (url) dataUrls.value = [url]
    }
    img.onerror = () => {
      // 图片加载失败时无差别跳过，不抛出
    }
    img.src = props.image
    return
  }

  const main = drawTextPattern(props.rotate)
  if (main == null) return
  if (props.cross) {
    const second = drawTextPattern(-props.rotate)
    dataUrls.value = second != null ? [main, second] : [main]
  } else {
    dataUrls.value = [main]
  }
}

const overlayStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    opacity: props.opacity,
    zIndex: props.zIndex,
  }
  if (dataUrls.value.length) {
    const { w, h } = lastTileSize.value
    style.backgroundImage = dataUrls.value.map((url) => `url("${url}")`).join(', ')
    if (props.moveable) {
      // 跟随鼠标：仅展示单个水印并定位到光标，未悬停时隐藏
      style.backgroundRepeat = 'no-repeat'
      style.backgroundSize = `${w}px ${h}px`
      style.backgroundPosition = `${moveablePos.value.x - w / 2}px ${
        moveablePos.value.y - h / 2
      }px`
      style.opacity = isHovering.value ? props.opacity : 0
    } else {
      style.backgroundRepeat = props.repeat ? 'repeat' : 'no-repeat'
      style.backgroundSize = dataUrls.value.map(() => `${w}px ${h}px`).join(', ')
      style.backgroundPosition = props.offset
        ? `${addUnit(props.offset[0])} ${addUnit(props.offset[1])}`
        : '0 0'
    }
  }
  return style
})

watch(
  () => [
    props.content,
    props.image,
    props.width,
    props.height,
    props.rotate,
    props.gap,
    props.offset,
    props.font,
    props.opacity,
    props.zIndex,
    props.cross,
    props.repeat,
    props.inheritColor,
  ],
  render,
  { deep: true }
)

onMounted(() => {
  render()
  const el = containerRef.value
  if (!el) return
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(() => render())
    ro.observe(el)
  } else if (typeof window !== 'undefined') {
    resizeHandler = () => render()
    window.addEventListener('resize', resizeHandler)
  }
})

onBeforeUnmount(() => {
  destroyed = true
  ro?.disconnect()
  if (resizeHandler && typeof window !== 'undefined') {
    window.removeEventListener('resize', resizeHandler)
  }
})

defineExpose<WatermarkInstance>({ redraw: render })
</script>

<template>
  <div
    ref="containerRef"
    :class="[ns.b(), ns.is('moveable', props.moveable)]"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <slot />
    <span
      v-if="$slots.content"
      ref="contentRef"
      :class="ns.e('content')"
      aria-hidden="true"
    >
      <slot name="content" />
    </span>
    <div :class="ns.e('overlay')" :style="overlayStyle" aria-hidden="true" />
  </div>
</template>
