import { describe, it, expect } from 'vitest'
import {
  isEmpty,
  isArray,
  isBoolean,
  isElement,
  isFunction,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isString,
  isUndefined,
} from '..'

describe('is 类型判断', () => {
  it('基础类型', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
    expect(isNull(null)).toBe(true)
    expect(isNil(undefined)).toBe(true)
    expect(isNil(null)).toBe(true)
    expect(isNil(0)).toBe(false)
    expect(isString('a')).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(Number.NaN)).toBe(false)
    expect(isBoolean(false)).toBe(true)
    expect(isFunction(() => 1)).toBe(true)
    expect(isArray([1])).toBe(true)
    expect(isObject({})).toBe(true)
  })

  it('isPlainObject 区分普通对象与类实例', () => {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject('str')).toBe(false)
  })

  it('isEmpty 覆盖各种空值', () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty('a')).toBe(false)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty(0)).toBe(false)
  })

  it('isElement 判断 DOM 元素', () => {
    expect(isElement(document.createElement('div'))).toBe(true)
    expect(isElement({})).toBe(false)
  })
})
