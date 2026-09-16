import { describe, it, expect } from 'vitest'
import { useNamespace } from '..'

describe('useNamespace', () => {
  const ns = useNamespace('button')

  it('b 返回块级类名', () => {
    expect(ns.b()).toBe('kk-button')
  })

  it('e 返回元素类名', () => {
    expect(ns.e('icon')).toBe('kk-button__icon')
  })

  it('m 返回修饰符类名', () => {
    expect(ns.m('primary')).toBe('kk-button--primary')
  })

  it('em 返回元素修饰符类名', () => {
    expect(ns.em('suffix', 'disabled')).toBe('kk-button__suffix--disabled')
  })

  it('is 根据条件输出状态类名', () => {
    expect(ns.is('disabled')).toBe('is-disabled')
    expect(ns.is('disabled', false)).toBe('')
  })

  it('cssVarName / cssVar 走全局前缀', () => {
    expect(ns.cssVarName('color-primary')).toBe('--kk-color-primary')
    expect(ns.cssVar('color-primary')).toBe('var(--kk-color-primary)')
  })

  it('cssVarBlock 走组件前缀', () => {
    expect(ns.cssVarBlock('height-md')).toBe('var(--kk-button-height-md)')
  })
})
