import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import KkDivider from '../Divider.vue'

describe('KkDivider', () => {
  it('默认水平渲染并带 separator 语义', () => {
    const w = mount(KkDivider)
    expect(w.classes()).toContain('kk-divider--horizontal')
    expect(w.attributes('role')).toBe('separator')
  })

  it('vertical 模式不设置 separator 角色', () => {
    const w = mount(KkDivider, { props: { direction: 'vertical' } })
    expect(w.classes()).toContain('kk-divider--vertical')
    expect(w.attributes('role')).toBeUndefined()
  })

  it('有默认插槽时渲染文案并加 is-with-text', () => {
    const w = mount(KkDivider, { slots: { default: '分组' } })
    expect(w.find('.kk-divider__text').text()).toBe('分组')
    expect(w.classes()).toContain('is-with-text')
  })

  it('vertical 模式忽略文案', () => {
    const w = mount(KkDivider, {
      props: { direction: 'vertical' },
      slots: { default: '分组' },
    })
    expect(w.find('.kk-divider__text').exists()).toBe(false)
  })

  it('contentPosition 与 borderStyle 生成对应类名', () => {
    const w = mount(KkDivider, {
      props: { contentPosition: 'left', borderStyle: 'dashed' },
    })
    expect(w.classes()).toContain('kk-divider--content-left')
    expect(w.classes()).toContain('kk-divider--style-dashed')
  })

  it('accent 时应用 is-accent', () => {
    const w = mount(KkDivider, { props: { accent: true } })
    expect(w.classes()).toContain('is-accent')
  })
})
