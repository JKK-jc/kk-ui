import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  watch,
  type ComputedRef,
  type CSSProperties,
  type Ref,
} from 'vue'

export type FloatingPlacement =
  'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end'

export interface UseFloatingOptions {
  /** 触发元素 */
  reference: Ref<HTMLElement | null | undefined>
  /** 浮层元素 */
  floating: Ref<HTMLElement | null | undefined>
  /** 期望位置，默认 bottom-start */
  placement?: () => FloatingPlacement
  /** 与触发元素的间距，默认 6 */
  offset?: () => number
  /** 浮层宽度是否跟随触发元素 */
  matchWidth?: () => boolean
  /** 是否随滚动 / 尺寸变化自动重算，默认 true */
  autoUpdate?: () => boolean
  /** 上下空间不足时是否翻转，默认 true */
  flip?: () => boolean
  /** 视口内边距，默认 8 */
  viewportPadding?: () => number
}

export interface UseFloatingReturn {
  /** 实际生效的位置（可能因翻转而不同于期望值） */
  resolvedPlacement: Ref<FloatingPlacement>
  /** 浮层内联样式 */
  floatingStyle: ComputedRef<CSSProperties>
  /** 强制重算 */
  update: () => Promise<void>
  /** 开始监听滚动与 resize */
  start: () => void
  /** 停止监听 */
  stop: () => void
}

const SCROLLABLE_RE = /(auto|scroll|overlay)/

function getScrollParents(el: HTMLElement | null): HTMLElement[] {
  const parents: HTMLElement[] = []
  let current = el?.parentElement ?? null

  while (current) {
    const style =
      typeof getComputedStyle === 'function' ? getComputedStyle(current) : null
    if (
      style &&
      (SCROLLABLE_RE.test(style.overflow) || SCROLLABLE_RE.test(style.overflowY))
    ) {
      parents.push(current)
    }
    current = current.parentElement
  }

  return parents
}

/**
 * 轻量浮层定位（不引入第三方 popper）。
 *
 * 采用 `position: fixed` + 视口坐标：
 * - 不受滚动容器 `overflow: hidden` 裁剪，配合 `<Teleport to="body">` 最稳
 * - 翻转逻辑只处理上下，左右做视口内钳制，够用且不含糊
 *
 * 滚动监听挂在捕获阶段，因此能捕获任意内层滚动容器的滚动事件。
 */
export function useFloating(options: UseFloatingOptions): UseFloatingReturn {
  const resolvedPlacement = ref<FloatingPlacement>(
    options.placement?.() ?? 'bottom-start'
  )
  const position = ref({
    x: 0,
    y: 0,
    width: undefined as number | undefined,
    ready: false,
  })

  let frame = 0
  let listening = false
  let scrollParents: HTMLElement[] = []
  let observer: ResizeObserver | null = null

  const floatingStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {
      position: 'fixed',
      left: `${position.value.x}px`,
      top: `${position.value.y}px`,
      zIndex: 'var(--kk-floating-z-index, 2000)',
    }
    if (position.value.width !== undefined) style.width = `${position.value.width}px`
    // 定位完成前先不显示，避免闪一下再归位
    if (!position.value.ready) style.visibility = 'hidden'
    return style
  })

  function measure(): void {
    const reference = options.reference.value
    const floating = options.floating.value
    if (!reference || !floating) return

    const offset = options.offset?.() ?? 6
    const padding = options.viewportPadding?.() ?? 8
    const rect = reference.getBoundingClientRect()
    const panel = floating.getBoundingClientRect()

    const desired = options.placement?.() ?? 'bottom-start'
    const [side, align = 'start'] = desired.split('-') as [
      'bottom' | 'top',
      'start' | 'end' | undefined,
    ]

    const viewportHeight = window.innerHeight || 0
    const viewportWidth = window.innerWidth || 0

    let resolvedSide: 'bottom' | 'top' = side
    if (options.flip?.() ?? true) {
      const spaceBelow = viewportHeight - rect.bottom
      const spaceAbove = rect.top
      const needed = panel.height + offset + padding
      if (resolvedSide === 'bottom' && spaceBelow < needed && spaceAbove > spaceBelow) {
        resolvedSide = 'top'
      } else if (
        resolvedSide === 'top' &&
        spaceAbove < needed &&
        spaceBelow > spaceAbove
      ) {
        resolvedSide = 'bottom'
      }
    }

    let x = rect.left
    if (align === 'end') x = rect.right - panel.width
    else if (align !== 'start') x = rect.left + (rect.width - panel.width) / 2

    // 视口左右钳制
    const maxX = viewportWidth - panel.width - padding
    x = Math.min(Math.max(x, padding), Math.max(padding, maxX))

    const y =
      resolvedSide === 'bottom'
        ? rect.bottom + offset
        : rect.top - panel.height - offset

    resolvedPlacement.value = (
      align === 'start' ? resolvedSide : `${resolvedSide}-${align}`
    ) as FloatingPlacement

    position.value = {
      x,
      y,
      width: options.matchWidth?.() ? rect.width : undefined,
      ready: true,
    }
  }

  async function update(): Promise<void> {
    const floating = options.floating.value
    if (!floating) return
    // 先重置为未就绪，避免内容变化后旧坐标残留
    if (!position.value.ready) position.value = { ...position.value, ready: false }
    await nextTick()
    measure()
  }

  function scheduleUpdate(): void {
    if (frame) return
    frame = requestAnimationFrame(() => {
      frame = 0
      measure()
    })
  }

  function start(): void {
    if (listening || typeof window === 'undefined') return
    listening = true
    scrollParents = getScrollParents(options.reference.value ?? null)
    window.addEventListener('scroll', scheduleUpdate, true)
    window.addEventListener('resize', scheduleUpdate)
    scrollParents.forEach((el) => el.addEventListener('scroll', scheduleUpdate, true))

    if (typeof ResizeObserver !== 'undefined' && options.floating.value) {
      observer = new ResizeObserver(scheduleUpdate)
      observer.observe(options.floating.value)
    }
  }

  function stop(): void {
    if (!listening) return
    listening = false
    window.removeEventListener('scroll', scheduleUpdate, true)
    window.removeEventListener('resize', scheduleUpdate)
    scrollParents.forEach((el) =>
      el.removeEventListener('scroll', scheduleUpdate, true)
    )
    scrollParents = []
    observer?.disconnect()
    observer = null
    if (frame) {
      cancelAnimationFrame(frame)
      frame = 0
    }
  }

  // 浮层元素可能晚于触发器出现（懒挂载），这里跟着重算
  watch(
    () => [options.reference.value, options.floating.value] as const,
    ([, floating]) => {
      if (floating) void update()
    }
  )

  onBeforeUnmount(() => stop())

  return { resolvedPlacement, floatingStyle, update, start, stop }
}
