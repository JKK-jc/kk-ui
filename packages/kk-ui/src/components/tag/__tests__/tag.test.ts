import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import KkTag from '../Tag.vue'

describe('KkTag', () => {
  it('渲染默认插槽内容', () => {
    const w = mount(KkTag, { slots: { default: '标签' } })
    expect(w.text()).toBe('标签')
    expect(w.classes()).toContain('kk-tag')
  })

  it('type / size / effect 生成对应类名', () => {
    const w = mount(KkTag, {
      props: { type: 'success', size: 'large', effect: 'dark' },
      slots: { default: 'x' },
    })
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'kk-tag--success',
        'kk-tag--large',
        'kk-tag--effect-dark',
      ])
    )
  })

  it('closable 时渲染关闭按钮并触发 close', async () => {
    const w = mount(KkTag, { props: { closable: true }, slots: { default: 'x' } })
    const close = w.find('.kk-tag__close')
    expect(close.exists()).toBe(true)
    await close.trigger('click')
    expect(w.emitted('close')).toHaveLength(1)
  })

  it('点击关闭按钮不冒泡触发 click', async () => {
    const w = mount(KkTag, { props: { closable: true }, slots: { default: 'x' } })
    await w.find('.kk-tag__close').trigger('click')
    expect(w.emitted('click')).toBeUndefined()
  })

  it('未开启 closable 时不渲染关闭按钮', () => {
    const w = mount(KkTag, { slots: { default: 'x' } })
    expect(w.find('.kk-tag__close').exists()).toBe(false)
  })

  it('点击标签本体触发 click', async () => {
    const w = mount(KkTag, { slots: { default: 'x' } })
    await w.trigger('click')
    expect(w.emitted('click')).toHaveLength(1)
  })

  it('round / bordered / icon 插槽生效', () => {
    const w = mount(KkTag, {
      props: { round: true, bordered: false },
      slots: { default: 'x', icon: '<i class="demo-icon" />' },
    })
    expect(w.classes()).toContain('is-round')
    expect(w.classes()).not.toContain('is-bordered')
    expect(w.find('.kk-tag__icon .demo-icon').exists()).toBe(true)
  })
})
