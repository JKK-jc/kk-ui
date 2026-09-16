export type DividerDirection = 'horizontal' | 'vertical'
export type DividerContentPosition = 'left' | 'center' | 'right'
export type DividerBorderStyle = 'solid' | 'dashed' | 'dotted'

export interface DividerProps {
  direction?: DividerDirection
  /**
   * 文案相对位置，仅在 horizontal 且存在默认插槽时生效
   */
  contentPosition?: DividerContentPosition
  borderStyle?: DividerBorderStyle
  /**
   * 是否使用主色强调
   */
  accent?: boolean
}

export interface DividerSlots {
  default?: () => unknown
}
