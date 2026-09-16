/**
 * 全库统一的公共类型
 */

export type Size = 'small' | 'medium' | 'large'

export type StatusType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

/**
 * 所有可交互组件必须支持的基础 Props
 */
export interface CommonProps {
  size?: Size
  disabled?: boolean
  loading?: boolean
}

export interface ComponentSize {
  size?: Size
}
