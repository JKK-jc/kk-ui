import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import KkContainer from '../Container.vue'

describe('KkContainer', () => {
  it('默认渲染为 div 并在 large 档位下限制最大宽度 1200px', () => {
    const wrapper = mount(KkContainer)
    const el = wrapper.find('.kk-container').element as HTMLElement
    expect(el.tagName).toBe('DIV')
    expect(el.style.maxWidth).toBe('1200px')
    expect(el.style.display).toBe('flex')
  })

  it('size 档位映射最大宽度，maxWidth 优先级更高', () => {
    const small = mount(KkContainer, { props: { size: 'small' } })
    expect((small.find('.kk-container').element as HTMLElement).style.maxWidth).toBe(
      '640px'
    )

    const custom = mount(KkContainer, { props: { maxWidth: 800, size: 'large' } })
    expect((custom.find('.kk-container').element as HTMLElement).style.maxWidth).toBe(
      '800px'
    )
  })

  it('centered 默认 true 时两侧自动外边距', () => {
    const on = mount(KkContainer, { props: { centered: true } })
    const off = mount(KkContainer, { props: { centered: false } })
    expect((on.find('.kk-container').element as HTMLElement).style.marginLeft).toBe(
      'auto'
    )
    expect((off.find('.kk-container').element as HTMLElement).style.marginLeft).toBe('')
  })

  it('fluid 时忽略 size 并撑满、取消居中', () => {
    const wrapper = mount(KkContainer, { props: { fluid: true, size: 'small' } })
    const el = wrapper.find('.kk-container').element as HTMLElement
    expect(el.style.maxWidth).toBe('100%')
    expect(el.style.marginLeft).toBe('')
  })

  it('padding 档位映射到 --kk-space，自定义值原样使用', () => {
    const medium = mount(KkContainer, { props: { padding: 'medium' } })
    expect((medium.find('.kk-container').element as HTMLElement).style.padding).toBe(
      'var(--kk-space-5)'
    )

    const custom = mount(KkContainer, { props: { padding: 40 } })
    expect((custom.find('.kk-container').element as HTMLElement).style.padding).toBe(
      '40px'
    )
  })

  it('bordered 渲染边框与圆角', () => {
    const wrapper = mount(KkContainer, { props: { bordered: true } })
    const el = wrapper.find('.kk-container').element as HTMLElement
    expect(el.style.border).toContain('solid')
    expect(el.style.borderRadius).toBe('var(--kk-radius-lg)')
  })

  it('direction / align / justify / gap 透传为 flex 样式', () => {
    const wrapper = mount(KkContainer, {
      props: {
        direction: 'column',
        align: 'center',
        justify: 'space-between',
        gap: 16,
      },
    })
    const el = wrapper.find('.kk-container').element as HTMLElement
    expect(el.style.flexDirection).toBe('column')
    expect(el.style.alignItems).toBe('center')
    expect(el.style.justifyContent).toBe('space-between')
    expect(el.style.gap).toBe('16px')
  })

  it('header / footer 插槽渲染对应区域，默认插槽渲染主体', () => {
    const wrapper = mount(KkContainer, {
      slots: {
        header: '<div class="hd">顶部</div>',
        default: '<div class="bd">主体</div>',
        footer: '<div class="ft">底部</div>',
      },
    })
    expect(wrapper.find('.kk-container__header').text()).toBe('顶部')
    expect(wrapper.find('.bd').exists()).toBe(true)
    expect(wrapper.find('.kk-container__footer').text()).toBe('底部')
  })

  it('tag 可切换渲染标签', () => {
    const wrapper = mount(KkContainer, { props: { tag: 'section' } })
    expect((wrapper.find('.kk-container').element as HTMLElement).tagName).toBe(
      'SECTION'
    )
  })
})
