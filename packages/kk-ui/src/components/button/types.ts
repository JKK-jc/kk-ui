export type ButtonType =
  'primary' | 'success' | 'warning' | 'danger' | 'default' | 'text'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonNativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  block?: boolean
  nativeType?: ButtonNativeType
}

export interface ButtonSlots {
  default?: () => unknown
  icon?: () => unknown
}

export interface ButtonEmits {
  click: [e: MouseEvent]
}
