import type { InjectionKey } from 'vue'
import type { FormContext, FormItemContext } from './types'

export const FORM_CONTEXT_KEY: InjectionKey<FormContext> = Symbol('kk-form-context')

export const FORM_ITEM_CONTEXT_KEY: InjectionKey<FormItemContext> =
  Symbol('kk-form-item-context')
