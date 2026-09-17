/**
 * DOM 相关的小工具，保持无副作用、可树摇
 */

export function canUseDOM(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

/**
 * 数值补单位，字符串原样返回。
 * `addUnit(12)` → `12px`，`addUnit('50%')` → `50%`
 */
export function addUnit(
  value?: string | number | null,
  unit = 'px'
): string | undefined {
  if (value === undefined || value === null || value === '') return undefined
  return typeof value === 'number' ? `${value}${unit}` : String(value)
}

let cachedScrollbarWidth: number | null = null

/**
 * 滚动条宽度（含缓存）。SSR 或无需滚动条时返回 0。
 */
export function getScrollbarWidth(): number {
  if (!canUseDOM()) return 0
  if (cachedScrollbarWidth !== null) return cachedScrollbarWidth

  const outer = document.createElement('div')
  outer.style.cssText =
    'position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;'
  document.body.appendChild(outer)
  cachedScrollbarWidth = outer.offsetWidth - outer.clientWidth
  outer.parentNode?.removeChild(outer)

  return cachedScrollbarWidth
}

/** 事件目标是否是输入类元素（键盘快捷键需要放行） */
export function isEditableTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null
  if (!el || !el.tagName) return false
  return (
    el.isContentEditable ||
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName.toUpperCase())
  )
}

/**
 * 判断一个元素当前是否可聚焦（隐藏 / 禁用元素不参与焦点循环）
 */
export function isFocusable(el: HTMLElement): boolean {
  if (el.hasAttribute('disabled')) return false
  if (el.getAttribute('aria-hidden') === 'true') return false
  const style = typeof getComputedStyle === 'function' ? getComputedStyle(el) : null
  if (style && (style.display === 'none' || style.visibility === 'hidden')) return false
  return true
}
