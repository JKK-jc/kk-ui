import { describe, it, expect } from 'vitest'
import {
  getValueByPath,
  matchTrigger,
  mergeRules,
  normalizeRules,
  setValueByPath,
  validateField,
  validateValue,
} from '../validator'
import type { FormRule } from '../types'

describe('路径读写', () => {
  it('getValueByPath 支持多层路径', () => {
    const source = { user: { profile: { name: 'kk' } } }
    expect(getValueByPath(source, 'user.profile.name')).toBe('kk')
    expect(getValueByPath(source, 'user.missing.deep')).toBeUndefined()
    expect(getValueByPath(source, '')).toBe(source)
    expect(getValueByPath(null, 'a')).toBeUndefined()
    expect(getValueByPath('str', 'a')).toBeUndefined()
  })

  it('setValueByPath 自动创建中间对象', () => {
    const target: Record<string, unknown> = {}
    setValueByPath(target, 'a.b.c', 1)
    expect(target).toEqual({ a: { b: { c: 1 } } })
  })
})

describe('规则归一化', () => {
  it('normalizeRules 统一为数组', () => {
    expect(normalizeRules(undefined)).toEqual([])
    expect(normalizeRules({ required: true })).toHaveLength(1)
    expect(normalizeRules([{ required: true }, { min: 2 }])).toHaveLength(2)
  })

  it('mergeRules 合并多个来源', () => {
    const merged = mergeRules({ required: true }, undefined, [{ min: 3 }])
    expect(merged).toHaveLength(2)
  })

  it('matchTrigger 默认按 change 触发', () => {
    expect(matchTrigger({ required: true }, 'change')).toBe(true)
    expect(matchTrigger({ required: true }, 'blur')).toBe(false)
    expect(matchTrigger({ required: true, trigger: 'blur' }, 'blur')).toBe(true)
    expect(matchTrigger({ required: true, trigger: ['blur', 'change'] }, 'blur')).toBe(
      true
    )
  })
})

describe('validateValue', () => {
  it('required 校验各种空值', async () => {
    expect(await validateValue('', { required: true })).toBe('该字段为必填项')
    expect(await validateValue('  ', { required: true })).toBe('该字段为必填项')
    expect(await validateValue([], { required: true })).toBe('该字段为必填项')
    expect(await validateValue(null, { required: true })).toBe('该字段为必填项')
    expect(await validateValue('x', { required: true })).toBe('')
  })

  it('非必填且为空时跳过后续校验', async () => {
    expect(await validateValue('', { min: 5 })).toBe('')
  })

  it('支持自定义 message', async () => {
    expect(await validateValue('', { required: true, message: '必填!' })).toBe('必填!')
  })

  it('类型校验', async () => {
    expect(await validateValue('a', { type: 'number' })).toBe('请输入数字')
    expect(await validateValue(1, { type: 'number' })).toBe('')
    expect(await validateValue('a', { type: 'array' })).toBe('请选择至少一项')
    expect(await validateValue('a@b.com', { type: 'email' })).toBe('')
    expect(await validateValue('nope', { type: 'email' })).toBe('请输入正确的邮箱地址')
    expect(await validateValue('https://kk.dev', { type: 'url' })).toBe('')
    expect(await validateValue('kk', { type: 'url' })).toBe('请输入正确的链接地址')
  })

  it('pattern 校验', async () => {
    expect(await validateValue('abc', { pattern: /^\d+$/ })).toBe('格式不正确')
    expect(await validateValue('123', { pattern: /^\d+$/ })).toBe('')
  })

  it('长度校验覆盖 min / max / len 与数组', async () => {
    expect(await validateValue('ab', { min: 3 })).toBe('长度不能少于 3')
    expect(await validateValue('abcd', { max: 3 })).toBe('长度不能超过 3')
    expect(await validateValue('ab', { len: 3 })).toBe('长度必须为 3')
    expect(await validateValue([1, 2], { min: 3 })).toBe('长度不能少于 3')
  })

  it('自定义 validator 的多种返回', async () => {
    expect(await validateValue('x', { validator: () => true })).toBe('')
    expect(await validateValue('x', { validator: () => undefined })).toBe('')
    expect(await validateValue('x', { validator: () => false })).toBe('校验未通过')
    expect(
      await validateValue('x', { validator: () => false, message: '自定义' })
    ).toBe('自定义')
    expect(await validateValue('x', { validator: () => '具体原因' })).toBe('具体原因')
    expect(await validateValue('x', { validator: async () => true })).toBe('')
  })
})

describe('validateField', () => {
  it('返回第一条命中的错误', async () => {
    const rules: FormRule[] = [{ required: true }, { min: 5 }]
    expect(await validateField('', rules)).toBe('该字段为必填项')
  })

  it('按 trigger 过滤规则', async () => {
    const rules: FormRule[] = [
      { required: true, trigger: 'blur', message: 'blur 必填' },
      { min: 3, trigger: 'change', message: 'change 太短' },
    ]
    expect(await validateField('', rules, 'blur')).toBe('blur 必填')
    expect(await validateField('ab', rules, 'change')).toBe('change 太短')
    expect(await validateField('abc', rules, 'change')).toBe('')
  })

  it('无 trigger 时执行全部规则', async () => {
    expect(await validateField('', [{ required: true }])).toBe('该字段为必填项')
  })

  it('支持传入单条规则对象', async () => {
    expect(await validateField('', { required: true })).toBe('该字段为必填项')
  })
})
