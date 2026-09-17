import { ref, type Ref } from 'vue'
import type { ModalDragBounds, ModalPosition } from './types'

/**
 * 弹窗拖动。
 *
 * 性能取向：拖动过程中**不触发组件重渲染**。
 * - 位移只写目标元素的 `transform: translate3d(...)`，交给合成层合成，不碰布局（避免 reflow）；
 * - `dragging` 只在按下 / 抬起时各变更一次，渲染成本是常数；
 * - 指针事件用 `setPointerCapture` 挂在弹窗自身，指针移出窗口也不会丢事件，
 *   且不需要挂 document 级监听。
 */

/** 拖动时至少留在视口内的像素，避免整块被拖出可视区后点不回来 */
const MIN_VISIBLE = 56

/** 落在这些元素上的按下不触发拖动（关闭按钮、正文里的表单控件等） */
const NO_DRAG_SELECTOR = 'button, a, input, textarea, select, [data-kk-modal-no-drag]'

export interface ModalDragOptions {
  /** 拖动作用的元素（弹窗根节点） */
  target: Ref<HTMLElement | null>
  /** 是否允许拖动 */
  enabled: () => boolean
  /** 边界策略 */
  bounds: () => ModalDragBounds
  onStart?: () => void
  onMove?: (position: ModalPosition) => void
  onEnd?: (position: ModalPosition) => void
}

export function useModalDrag(options: ModalDragOptions) {
  const dragging = ref(false)
  const position = ref<ModalPosition>({ x: 0, y: 0 })

  let startX = 0
  let startY = 0
  let originX = 0
  let originY = 0
  let minX = 0
  let maxX = 0
  let minY = 0
  let maxY = 0
  let clampEnabled = true
  let savedUserSelect = ''

  /** 位移为 0 时清掉内联 transform，把 enter/leave 动画的 transform 还回去 */
  function apply(): void {
    const el = options.target.value
    if (!el) return

    const { x, y } = position.value
    if (x === 0 && y === 0) {
      el.style.removeProperty('transform')
      return
    }
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
  }

  /**
   * 以「按下那一刻」的矩形为基准算出允许的位移区间。
   * 拖动中元素只改变换矩阵，尺寸与位置信息一次测量即可。
   */
  function measure(): void {
    clampEnabled = options.bounds() !== 'none'
    const el = options.target.value
    if (!clampEnabled || !el) return

    const rect = el.getBoundingClientRect()
    minX = MIN_VISIBLE - rect.right
    maxX = window.innerWidth - MIN_VISIBLE - rect.left
    minY = MIN_VISIBLE - rect.bottom
    maxY = window.innerHeight - MIN_VISIBLE - rect.top
  }

  function addListeners(el: HTMLElement): void {
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
  }

  function removeListeners(el: HTMLElement): void {
    el.removeEventListener('pointermove', onPointerMove)
    el.removeEventListener('pointerup', onPointerUp)
    el.removeEventListener('pointercancel', onPointerUp)
  }

  function onPointerDown(event: PointerEvent): void {
    if (!options.enabled() || event.button !== 0) return

    // 交互元素上的按下永远不当作拖动起点：
    // 否则「整窗可拖」模式下点关闭按钮、拉滚动条、选中正文都会带着弹窗跑
    const origin = event.target as Element | null
    if (origin?.closest(NO_DRAG_SELECTOR)) return

    const el = options.target.value
    if (!el) return

    // 阻止默认行为，避免拖动时选中文字或触发原生拖拽
    event.preventDefault()

    dragging.value = true
    startX = event.clientX
    startY = event.clientY
    originX = position.value.x
    originY = position.value.y

    measure()

    savedUserSelect = document.body.style.userSelect
    document.body.style.userSelect = 'none'

    el.setPointerCapture?.(event.pointerId)
    addListeners(el)
    options.onStart?.()
  }

  function onPointerMove(event: PointerEvent): void {
    if (!dragging.value) return

    const nextX = originX + (event.clientX - startX)
    const nextY = originY + (event.clientY - startY)

    position.value = {
      x: clampEnabled ? Math.min(maxX, Math.max(minX, nextX)) : nextX,
      y: clampEnabled ? Math.min(maxY, Math.max(minY, nextY)) : nextY,
    }

    apply()
    options.onMove?.(position.value)
  }

  function onPointerUp(event: PointerEvent): void {
    if (!dragging.value) return

    const el = options.target.value
    dragging.value = false

    if (el) {
      if (el.hasPointerCapture?.(event.pointerId)) {
        el.releasePointerCapture(event.pointerId)
      }
      removeListeners(el)
    }

    document.body.style.userSelect = savedUserSelect
    options.onEnd?.(position.value)
  }

  /** 位移归零（关闭后复位 / 外部调用） */
  function reset(): void {
    position.value = { x: 0, y: 0 }
    apply()
  }

  return { dragging, position, onPointerDown, reset }
}
