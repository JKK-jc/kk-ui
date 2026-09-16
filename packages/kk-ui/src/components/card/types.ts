export type CardShadow = 'always' | 'hover' | 'never'
export type CardPadding = 'small' | 'medium' | 'large' | 'none'

export interface CardProps {
  title?: string
  subtitle?: string
  /**
   * 阴影策略：始终显示 / 仅 hover 显示 / 不显示
   */
  shadow?: CardShadow
  /**
   * 内容内边距
   */
  padding?: CardPadding
  /**
   * 是否使用可点击样式（hover 上浮）
   */
  hoverable?: boolean
  /**
   * 是否渲染边框
   */
  bordered?: boolean
  /**
   * 加载中，内容区域显示骨架遮罩
   */
  loading?: boolean
}

export interface CardSlots {
  default?: () => unknown
  header?: () => unknown
  title?: () => unknown
  subtitle?: () => unknown
  extra?: () => unknown
  cover?: () => unknown
  footer?: () => unknown
}
