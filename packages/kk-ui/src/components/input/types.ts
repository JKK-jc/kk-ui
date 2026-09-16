export type InputSize = 'small' | 'medium' | 'large'
export type InputType = 'text' | 'password' | 'email' | 'number' | 'search' | 'tel'

export interface InputProps {
  modelValue?: string | number
  type?: InputType
  size?: InputSize
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  showPassword?: boolean
  maxlength?: number
  minlength?: number
  /**
   * 是否校验失败状态
   */
  invalid?: boolean
  /**
   * 校验失败提示文案，展示在输入框下方
   */
  errorMessage?: string
  /**
   * 是否撑满父容器
   */
  block?: boolean
  autofocus?: boolean
  name?: string
  autocomplete?: string
}

export interface InputSlots {
  prefix?: () => unknown
  suffix?: () => unknown
  prepend?: () => unknown
  append?: () => unknown
}

export interface InputEmits {
  'update:modelValue': [value: string]
  input: [value: string]
  change: [value: string]
  clear: []
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  keydown: [e: KeyboardEvent]
  enter: [e: KeyboardEvent]
}

export interface InputExpose {
  focus: () => void
  blur: () => void
  select: () => void
  inputRef: HTMLInputElement | undefined
}
