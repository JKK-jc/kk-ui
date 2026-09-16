import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import KkButton from '../Button.vue'

describe('KkButton', () => {
  it('渲染默认插槽内容', () => {
    const w = mount(KkButton, { slots: { default: '点击' } })
    expect(w.text()).toBe('点击')
  })

  it('disabled 时不触发 click', async () => {
    const onClick = vi.fn()
    const w = mount(KkButton, { props: { disabled: true }, attrs: { onClick } })
    await w.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('loading 时显示 spinner 且阻止点击', async () => {
    const onClick = vi.fn()
    const w = mount(KkButton, { props: { loading: true }, attrs: { onClick } })
    expect(w.find('.kk-button__spinner').exists()).toBe(true)
    await w.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })

  it('根据 type 生成对应类名', () => {
    const w = mount(KkButton, { props: { type: 'primary' } })
    expect(w.classes()).toContain('kk-button--primary')
  })

  it('block 时应用 is-block 类名', () => {
    const w = mount(KkButton, { props: { block: true } })
    expect(w.classes()).toContain('is-block')
  })

  it('渲染 icon 插槽', () => {
    const w = mount(KkButton, { slots: { icon: '<i class="demo-icon" />' } })
    expect(w.find('.kk-button__icon').exists()).toBe(true)
    expect(w.find('.demo-icon').exists()).toBe(true)
  })

  it('loading 优先于 icon 插槽', () => {
    const w = mount(KkButton, {
      props: { loading: true },
      slots: { icon: '<i class="demo-icon" />' },
    })
    expect(w.find('.kk-button__spinner').exists()).toBe(true)
    expect(w.find('.demo-icon').exists()).toBe(false)
  })

  it('点击时透传原生事件', async () => {
    const w = mount(KkButton)
    await w.trigger('click')
    expect(w.emitted('click')).toHaveLength(1)
  })

  it('各尺寸与状态类名正确', () => {
    const w = mount(KkButton, {
      props: { size: 'small', type: 'danger', disabled: true },
    })
    expect(w.classes()).toEqual(
      expect.arrayContaining([
        'kk-button',
        'kk-button--danger',
        'kk-button--small',
        'is-disabled',
      ])
    )
  })

  it('nativeType 透传到 button 元素', () => {
    const w = mount(KkButton, { props: { nativeType: 'submit' } })
    expect(w.attributes('type')).toBe('submit')
  })
})
