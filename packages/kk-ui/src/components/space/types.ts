export type SpaceSize = 'small' | 'medium' | 'large' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'center' | 'end' | 'baseline'

export interface SpaceProps {
  /**
   * 间距，支持语义尺寸与数字（px）
   */
  size?: SpaceSize | SpaceSize[]
  direction?: SpaceDirection
  align?: SpaceAlign
  wrap?: boolean
  fill?: boolean
  /**
   * 是否在子项之间渲染分隔符插槽
   */
  split?: boolean
}

export interface SpaceSlots {
  default?: () => unknown
  split?: () => unknown
}
