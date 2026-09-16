import type { FormRule, FormRules, FormRuleTrigger } from './types'

export type FieldValue = unknown

/**
 * 按 `a.b.c` 读取路径值，支持数组下标
 */
export function getValueByPath(source: unknown, path: string): FieldValue {
  if (!path) return source
  if (typeof source !== 'object' || source === null) return undefined

  const keys = path.split('.')
  let current: unknown = source

  for (const key of keys) {
    if (typeof current !== 'object' || current === null) return undefined
    current = (current as Record<string, unknown>)[key]
  }

  return current
}

/**
 * 按 `a.b.c` 写入路径值
 */
export function setValueByPath(
  target: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const keys = path.split('.')
  let current: Record<string, unknown> = target

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value
      return
    }
    const next = current[key]
    if (typeof next !== 'object' || next === null) {
      current[key] = {}
    }
    current = current[key] as Record<string, unknown>
  })
}

export function normalizeRules(rules?: FormRule | FormRule[]): FormRule[] {
  if (!rules) return []
  return Array.isArray(rules) ? rules : [rules]
}

export function mergeRules(
  ...groups: (FormRule | FormRule[] | undefined)[]
): FormRule[] {
  return groups.flatMap((group) => normalizeRules(group))
}

export function isRequiredRule(rule: FormRule): boolean {
  return rule.required === true
}

export function matchTrigger(rule: FormRule, trigger: FormRuleTrigger): boolean {
  if (!rule.trigger) return trigger === 'change'
  const triggers = Array.isArray(rule.trigger) ? rule.trigger : [rule.trigger]
  return triggers.includes(trigger)
}

const isEmptyValue = (value: FieldValue): boolean => {
  if (value === undefined || value === null) return true
  if (typeof value === 'string') return value.trim() === ''
  if (Array.isArray(value)) return value.length === 0
  return false
}

const EMAIL_RE = /^[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(\.[\w-]+)+$/
const URL_RE = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i

/**
 * 单条规则校验，返回错误信息；校验通过返回空字符串
 * 不依赖任何第三方校验库
 */
export async function validateValue(
  value: FieldValue,
  rule: FormRule
): Promise<string> {
  if (typeof rule.validator === 'function') {
    const result = await rule.validator(value, rule)
    if (result === true || result === undefined || result === null) return ''
    if (result === false) return rule.message || '校验未通过'
    return typeof result === 'string' ? result : rule.message || '校验未通过'
  }

  if (rule.required && isEmptyValue(value)) {
    return rule.message || '该字段为必填项'
  }

  if (isEmptyValue(value)) return ''

  if (rule.type === 'number') {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return rule.message || '请输入数字'
    }
  }

  if (rule.type === 'array' && !Array.isArray(value)) {
    return rule.message || '请选择至少一项'
  }

  if (rule.type === 'email' && (typeof value !== 'string' || !EMAIL_RE.test(value))) {
    return rule.message || '请输入正确的邮箱地址'
  }

  if (rule.type === 'url' && (typeof value !== 'string' || !URL_RE.test(value))) {
    return rule.message || '请输入正确的链接地址'
  }

  if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
    return rule.message || '格式不正确'
  }

  const length = Array.isArray(value)
    ? value.length
    : typeof value === 'string'
      ? value.length
      : undefined

  if (length !== undefined) {
    if (rule.min !== undefined && length < rule.min) {
      return rule.message || `长度不能少于 ${rule.min}`
    }
    if (rule.max !== undefined && length > rule.max) {
      return rule.message || `长度不能超过 ${rule.max}`
    }
    if (rule.len !== undefined && length !== rule.len) {
      return rule.message || `长度必须为 ${rule.len}`
    }
  }

  return ''
}

/**
 * 按触发时机执行一组规则，返回第一条错误信息
 */
export async function validateField(
  value: FieldValue,
  rules: FormRules | FormRule | FormRule[],
  trigger?: FormRuleTrigger
): Promise<string> {
  const list = Array.isArray(rules) ? rules : normalizeRules(rules as FormRule)
  const matched = trigger ? list.filter((rule) => matchTrigger(rule, trigger)) : list

  for (const rule of matched) {
    const error = await validateValue(value, rule)
    if (error) return error
  }

  return ''
}
