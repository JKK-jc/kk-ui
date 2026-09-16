import type { Ref } from 'vue'
import type { Size } from '../../types'

export type FormLabelPosition = 'top' | 'left' | 'right'
export type FormRuleTrigger = 'blur' | 'change'
export type FormFieldValue = unknown

export interface FormRule {
  required?: boolean
  message?: string
  type?: 'string' | 'number' | 'boolean' | 'array' | 'email' | 'url'
  min?: number
  max?: number
  len?: number
  pattern?: RegExp
  trigger?: FormRuleTrigger | FormRuleTrigger[]
  validator?: (
    value: FormFieldValue,
    rule: FormRule
  ) =>
    boolean | string | undefined | null | Promise<boolean | string | undefined | null>
}

export type FormRules = Record<string, FormRule | FormRule[]>

/**
 * 表单统一上下文，由 KkForm provide，KkFormItem inject
 */
export interface FormContext {
  model: Record<string, unknown>
  rules: FormRules
  size: Size
  disabled: boolean
  labelWidth: string | number
  labelPosition: FormLabelPosition
  showMessage: boolean
  inline: boolean
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
  notifyValidate: (prop: string, valid: boolean, message: string) => void
}

export interface FormItemContext {
  prop: string
  /** 当前字段校验错误信息，空字符串表示通过 */
  message: Ref<string>
  validate: (trigger?: FormRuleTrigger) => Promise<string>
  resetField: () => void
  clearValidate: () => void
}

export interface FormProps {
  model?: Record<string, unknown>
  rules?: FormRules
  labelWidth?: string | number
  labelPosition?: FormLabelPosition
  size?: Size
  disabled?: boolean
  showMessage?: boolean
  inline?: boolean
  /**
   * 规则变更时是否自动重新校验
   */
  validateOnRuleChange?: boolean
}

export interface FormItemProps {
  prop?: string
  label?: string
  labelWidth?: string | number
  required?: boolean
  rules?: FormRule | FormRule[]
  showMessage?: boolean
  /**
   * 是否展示校验失败时的错误提示
   */
  error?: string
}

export interface FormSlots {
  default?: () => unknown
}

export interface FormItemSlots {
  default?: () => unknown
  label?: () => unknown
  error?: () => unknown
}

export interface FormExpose {
  validate: (callback?: (valid: boolean) => void) => Promise<boolean>
  validateField: (props: string | string[]) => Promise<void>
  resetFields: (props?: string[]) => void
  clearValidate: (props?: string[]) => void
  scrollToField: (prop: string) => void
  fields: FormItemContext[]
}
