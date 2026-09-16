import { describe, it, expect, beforeEach } from 'vitest'
import {
  addIcon,
  addIconSet,
  clearIcons,
  getIconNames,
  hasIcon,
  resolveIcon,
  toTransform,
  toViewBox,
  type IconifyJSON,
} from '..'
import { hasLucideIcon, isLucideLoaded, loadLucideIcons } from '../lucide'

const BODY = '<path d="M0 0"/>'

beforeEach(() => {
  clearIcons()
})

describe('icon registry', () => {
  it('addIcon / resolveIcon 精确匹配', () => {
    addIcon('custom:dot', { body: BODY })
    expect(resolveIcon('custom:dot')?.body).toBe(BODY)
    expect(hasIcon('custom:dot')).toBe(true)
    expect(hasIcon('custom:none')).toBe(false)
  })

  it('空名字直接返回 undefined', () => {
    expect(resolveIcon('')).toBeUndefined()
  })

  it('addIconSet 批量注册并使用图标集默认尺寸', () => {
    const set: IconifyJSON = {
      prefix: 'demo',
      width: 32,
      height: 32,
      icons: { a: { body: BODY }, b: { body: BODY } },
    }
    expect(addIconSet(set)).toBe(2)
    expect(resolveIcon('demo:a')).toEqual({ body: BODY, width: 32, height: 32 })
  })

  it('简写名按注册顺序查找', () => {
    addIconSet({ prefix: 'first', icons: { hit: { body: 'first-body' } } })
    addIconSet({ prefix: 'second', icons: { hit: { body: 'second-body' } } })
    expect(resolveIcon('hit')?.body).toBe('first-body')
  })

  it('别名指向不存在的父图标时跳过', () => {
    const count = addIconSet({
      prefix: 'demo',
      icons: { a: { body: BODY } },
      aliases: { missing: { parent: 'nope' } },
    })
    expect(count).toBe(1)
    expect(resolveIcon('demo:missing')).toBeUndefined()
  })

  it('重复注册同一图标集不会重复记录顺序', () => {
    const set: IconifyJSON = { prefix: 'demo', icons: { a: { body: BODY } } }
    addIconSet(set)
    addIconSet(set)
    expect(getIconNames().filter((n) => n.startsWith('demo:'))).toHaveLength(1)
  })

  it('getIconNames / clearIcons 生效', () => {
    addIcon('a:b', { body: BODY })
    expect(getIconNames()).toContain('a:b')
    clearIcons()
    expect(getIconNames()).toEqual([])
  })

  it('toViewBox 使用默认值与自定义值', () => {
    expect(toViewBox({ body: BODY })).toBe('0 0 24 24')
    expect(toViewBox({ body: BODY, left: 1, top: 2, width: 10, height: 12 })).toBe(
      '1 2 10 12'
    )
  })

  it('toTransform 处理翻转与旋转', () => {
    expect(toTransform({ body: BODY })).toBe('')
    expect(toTransform({ body: BODY, hFlip: true })).toContain('translate(24 0)')
    expect(toTransform({ body: BODY, vFlip: true })).toContain('translate(0 24)')
    expect(toTransform({ body: BODY, rotate: 90 })).toBe('rotate(90 12 12)')
  })
})

describe('lucide 图标集加载', () => {
  it('loadLucideIcons 能成功加载并注册 lucide 图标', async () => {
    await loadLucideIcons()
    expect(isLucideLoaded()).toBe(true)
    expect(hasLucideIcon('search')).toBe(true)
    expect(resolveIcon('lucide:search')).toBeDefined()
  })

  it('重复调用不会重复加载', async () => {
    await loadLucideIcons()
    const first = resolveIcon('lucide:search')
    await loadLucideIcons()
    expect(resolveIcon('lucide:search')).toBe(first)
  })
})
