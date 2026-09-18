import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/**
 * 判断事件目标是否落在某个「目标」节点内。
 *
 * 两个必须兜住的边界：
 * 1. `ref="xxx"` 写在 `v-for` 里时，Vue 会把值收集成**数组**（Pagination 的 sizes 就踩过：
 *    `array.contains` → `TypeError: contains is not a function`，控制台报错且下拉关不掉）；
 * 2. 目标可能不是 Node（组件实例代理等），没有 `contains` 方法。
 * 这里统一展开成节点列表并对 `contains` 做类型保护，避免把「点击外部」逻辑整个打断。
 */
function isInside(value: unknown, target: Node): boolean {
  if (!value) return false
  const nodes = Array.isArray(value) ? value : [value]
  return nodes.some((node) => {
    if (!node) return false
    if (node === target) return true
    const contains = (node as { contains?: unknown }).contains
    return (
      typeof contains === 'function' &&
      (contains as (other: Node) => boolean).call(node, target)
    )
  })
}

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

    const inside = targets.some((ref) => isInside(ref.value, target))

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
