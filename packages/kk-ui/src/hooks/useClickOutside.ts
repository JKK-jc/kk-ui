import { onBeforeUnmount, onMounted, type Ref } from 'vue'

export interface UseClickOutsideOptions {
  /** 触发事件，默认 pointerdown（比 click 早，拖拽/长按场景更稳） */
  events?: string[]
  /** 返回 false 时忽略本次判定，便于在拖动中等场景临时关闭 */
  enabled?: () => boolean
  capture?: boolean
}

/**
 * 点击「目标之外」时触发回调。
 *
 * 传数组是为了适配 Teleport 出去的浮层：下拉面板挂在 body 上，
 * 与触发器属于两个 DOM 子树，但都算「内部」。
 *
 * jsdom 下 `pointerdown` 不会由 Vue Test Utils 自动派发，
 * 测试里手动 `document.dispatchEvent(new Event('pointerdown'))` 即可。
 */
export function useClickOutside(
  targets: Array<Ref<HTMLElement | null | undefined>>,
  handler: (event: Event) => void,
  options: UseClickOutsideOptions = {}
): { stop: () => void; start: () => void } {
  const events = options.events ?? ['pointerdown']
  const capture = options.capture ?? true
  let listening = false

  function onEvent(event: Event): void {
    if (options.enabled && !options.enabled()) return

    const target = event.target as Node | null
    if (!target) return

    const inside = targets.some((ref) => {
      const el = ref.value
      if (!el) return false
      // 事件源本身被移除（例如列表项点完就销毁）时也算内部
      return el === target || el.contains(target)
    })

    if (!inside) handler(event)
  }

  function start(): void {
    if (listening) return
    listening = true
    events.forEach((name) => document.addEventListener(name, onEvent, capture))
  }

  function stop(): void {
    if (!listening) return
    listening = false
    events.forEach((name) => document.removeEventListener(name, onEvent, capture))
  }

  onMounted(() => {
    if (typeof document !== 'undefined') start()
  })

  onBeforeUnmount(() => {
    if (typeof document !== 'undefined') stop()
  })

  return { start, stop }
}
