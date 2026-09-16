import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import KkIcon from '../Icon.vue'
import {
  addIcon,
  addIconSet,
  clearIcons,
  resolveIcon,
  toViewBox,
} from '../../../icons/registry'

const SEARCH_ICON = '<path d="M11 11L21 21"/><circle cx="7" cy="7" r="5"/>'

beforeEach(() => {
  clearIcons()
})

describe('KkIcon', () => {
  it('未注册图标时渲染空 svg 容器', () => {
    const w = mount(KkIcon, { props: { name: 'lucide:not-exist' } })
    expect(w.classes()).toContain('kk-icon')
    expect(w.html()).not.toContain('<path')
  })

  it('渲染已注册的图标内容', () => {
    addIcon('lucide:search', { body: SEARCH_ICON, width: 24, height: 24 })
    const w = mount(KkIcon, { props: { name: 'lucide:search' } })
    expect(w.find('circle').exists()).toBe(true)
    expect(w.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('默认 size 引用字号 token', () => {
    addIcon('lucide:search', { body: SEARCH_ICON })
    const w = mount(KkIcon, { props: { name: 'lucide:search' } })
    expect(w.attributes('style')).toContain('width: var(--kk-font-size-lg)')
  })

  it('size 支持数字与语义尺寸', () => {
    addIcon('lucide:search', { body: SEARCH_ICON })
    const num = mount(KkIcon, { props: { name: 'lucide:search', size: 20 } })
    expect(num.attributes('style')).toContain('width: 20px')

    const large = mount(KkIcon, {
      props: { name: 'lucide:search', size: 'large' },
    })
    expect(large.attributes('style')).toContain('width: var(--kk-font-size-xl)')
  })

  it('color 写入内联样式，未设置时不写 color', () => {
    addIcon('lucide:search', { body: SEARCH_ICON })
    const colored = mount(KkIcon, {
      props: { name: 'lucide:search', color: '#f00' },
    })
    expect(colored.attributes('style')).toContain('color: rgb(255, 0, 0)')

    const plain = mount(KkIcon, { props: { name: 'lucide:search' } })
    expect(plain.attributes('style')).not.toContain('color:')
  })

  it('spin 时应用 is-spin 类名', () => {
    addIcon('lucide:search', { body: SEARCH_ICON })
    const w = mount(KkIcon, { props: { name: 'lucide:search', spin: true } })
    expect(w.classes()).toContain('is-spin')
  })

  it('支持无前缀简写名', () => {
    addIconSet({
      prefix: 'lucide',
      width: 24,
      height: 24,
      icons: { search: { body: SEARCH_ICON } },
    })
    const w = mount(KkIcon, { props: { name: 'search' } })
    expect(w.find('circle').exists()).toBe(true)
  })

  it('别名与形变会转换为 transform', () => {
    addIconSet({
      prefix: 'lucide',
      icons: { search: { body: SEARCH_ICON } },
      aliases: { find: { parent: 'search', rotate: 90, hFlip: true } },
    })
    const data = resolveIcon('lucide:find')
    expect(data).toBeDefined()
    expect(toViewBox(data!)).toBe('0 0 24 24')
    expect(data!.rotate).toBe(90)
  })
})
