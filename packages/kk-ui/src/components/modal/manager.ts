/**
 * 弹窗之间的共享状态。
 *
 * 放在模块作用域而不是 `<script setup>` 里：`<script setup>` 的顶层代码每个实例都会执行，
 * 计数器必须全局唯一才能保证「多弹窗叠加次序」与「body 滚动锁引用计数」正确。
 */

/** 层级基数：高于文档站导航、下拉等常见层级 */
const BASE_Z_INDEX = 1000

let zIndexSeed = 0
let scrollLockCount = 0
let savedOverflow = ''
let savedPaddingRight = ''

/** 按打开顺序分配层级，后开的弹窗盖在先开的上面 */
export function nextZIndex(): number {
  zIndexSeed += 1
  return BASE_Z_INDEX + zIndexSeed
}

/** 仅用于测试：把层级分配复位 */
export function resetZIndex(): void {
  zIndexSeed = 0
}

/**
 * 锁定 body 滚动，返回释放函数。
 *
 * 两个细节：
 * 1. 用引用计数，嵌套弹窗各自释放不会互相解锁；
 * 2. 补偿滚动条宽度，避免锁定时页面横向抖动。
 */
export function lockScroll(): () => void {
  if (typeof document === 'undefined') return () => {}

  if (scrollLockCount === 0) {
    const { body } = document
    savedOverflow = body.style.overflow
    savedPaddingRight = body.style.paddingRight

    const gap = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (gap > 0) body.style.paddingRight = `${gap}px`
  }

  scrollLockCount += 1

  let released = false
  return () => {
    if (released) return
    released = true

    scrollLockCount = Math.max(0, scrollLockCount - 1)
    if (scrollLockCount === 0) {
      document.body.style.overflow = savedOverflow
      document.body.style.paddingRight = savedPaddingRight
    }
  }
}
