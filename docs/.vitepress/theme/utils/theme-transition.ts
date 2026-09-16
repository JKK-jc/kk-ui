/**
 * 明暗切换的圆形扩散过渡（View Transitions API）
 *
 * 做法与 Element Plus 文档站一致：以点击位置为圆心，用 ::view-transition-new(root)
 * 做 clip-path: circle() 扩散，新主题从开关处"荡"开到整个页面。
 * 浏览器不支持或用户开启了「减少动效」时，直接同步切换，不留任何副作用。
 *
 * 注意：回调里的 DOM 变更必须同步完成（CSS 变量/属性直接改），
 * 依赖 Vue 异步渲染的变更会晚于快照，动画里就看不到新主题。
 */

interface ViewTransitionLike {
  ready: Promise<void>
  finished: Promise<void>
  updateCallbackDone: Promise<void>
  skipTransition: () => void
}

type StartViewTransition = (callback: () => void) => ViewTransitionLike

const DURATION = 480
const EASING = 'cubic-bezier(0.22, 0.61, 0.36, 1)'

export interface TransitionOrigin {
  x: number
  y: number
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function getStartViewTransition(): StartViewTransition | undefined {
  if (typeof document === 'undefined') return undefined
  const doc = document as Document & { startViewTransition?: StartViewTransition }
  const start = doc.startViewTransition
  return typeof start === 'function' ? start.bind(document) : undefined
}

/**
 * 取扩散圆心：优先用鼠标位置；键盘触发（clientX/Y 为 0）时退回元素中心
 */
export function resolveOrigin(
  event?: MouseEvent | null,
  fallback?: HTMLElement | null
): TransitionOrigin {
  if (event && (event.clientX || event.clientY)) {
    return { x: event.clientX, y: event.clientY }
  }
  if (fallback) {
    const rect = fallback.getBoundingClientRect()
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
  }
  return {
    x: typeof window === 'undefined' ? 0 : window.innerWidth / 2,
    y: typeof window === 'undefined' ? 0 : window.innerHeight / 2,
  }
}

/**
 * 在圆形扩散动画下执行主题切换
 */
export function withThemeTransition(
  change: () => void,
  origin: TransitionOrigin
): void {
  const start = getStartViewTransition()

  if (!start || prefersReducedMotion()) {
    change()
    return
  }

  const transition = start(change)

  void transition.ready
    .then(() => {
      const { innerWidth, innerHeight } = window
      // 半径取圆心到四个角的最远距离，保证扩散能盖满视口
      const radius = Math.hypot(
        Math.max(origin.x, innerWidth - origin.x),
        Math.max(origin.y, innerHeight - origin.y)
      )
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration: DURATION,
          easing: EASING,
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
    .catch(() => {
      /* 过渡被新一次切换打断时忽略即可 */
    })
}
