import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { describe, it, expect } from 'vitest'
import KkSkeleton from '../Skeleton.vue'

describe('KkSkeleton', () => {
  it('默认 loading 渲染骨架占位（text 形态）', () => {
    const wrapper = mount(KkSkeleton)
    expect(wrapper.find('.kk-skeleton').exists()).toBe(true)
    expect(wrapper.find('.kk-skeleton__item').exists()).toBe(true)
    expect(wrapper.find('.kk-skeleton__item--text').exists()).toBe(true)
    // 默认容器为加载态，带无障碍忙标识
    expect(wrapper.find('.kk-skeleton').attributes('aria-busy')).toBe('true')
    expect(wrapper.find('.kk-skeleton').attributes('aria-label')).toBe('内容加载中')
  })

  it('loading 为 false 时渲染默认插槽真实内容', () => {
    const wrapper = mount(KkSkeleton, {
      props: { loading: false },
      slots: { default: '<p class="real">已加载</p>' },
    })
    expect(wrapper.find('.real').text()).toBe('已加载')
    expect(wrapper.find('.kk-skeleton__item').exists()).toBe(false)
    expect(wrapper.find('.kk-skeleton').attributes('aria-busy')).toBeUndefined()
  })

  it('paragraph 形态按 rows 渲染多行，且末行更窄', () => {
    const wrapper = mount(KkSkeleton, {
      props: { variant: 'paragraph', rows: 3, rowWidths: ['100%', '80%'] },
    })
    const items = wrapper.findAll('.kk-skeleton__item--text')
    expect(items).toHaveLength(3)
    // 未指定宽度的末行回落到 60%
    expect(items[2].attributes('style')).toContain('width: 60%')
    expect(items[0].attributes('style')).toContain('width: 100%')
    expect(items[1].attributes('style')).toContain('width: 80%')
  })

  it('avatar / image 形态圆角，并通过 width/height 覆盖尺寸', () => {
    const wrapper = mount(KkSkeleton, {
      props: { variant: 'avatar', width: 64, height: 64 },
    })
    const item = wrapper.find('.kk-skeleton__item')
    expect(item.classes()).toContain('is-round')
    expect(item.attributes('style')).toContain('width: 64px')
    expect(item.attributes('style')).toContain('height: 64px')
  })

  it('使用 #template 自定义骨架时取代内置形态', () => {
    const wrapper = mount(KkSkeleton, {
      props: { loading: true },
      slots: { template: '<div class="my-skel">x</div>' },
    })
    expect(wrapper.find('.my-skel').exists()).toBe(true)
    expect(wrapper.find('.kk-skeleton__item').exists()).toBe(false)
  })

  it('组合：外层 loading 控制内层拼块继承状态', async () => {
    const wrapper = mount(KkSkeleton, {
      props: { loading: true },
      slots: {
        default: () => [
          h(KkSkeleton, { variant: 'avatar' }),
          h(KkSkeleton, { variant: 'title' }),
        ],
      },
    })
    // 内层拼块跟随外层 loading，渲染出骨架
    expect(wrapper.findAll('.kk-skeleton__item')).toHaveLength(2)

    // 外层关闭加载后，内层拼块不再渲染（真实内容由业务在 default 插槽提供）
    await wrapper.setProps({ loading: false })
    expect(wrapper.findAll('.kk-skeleton__item')).toHaveLength(0)
  })

  it('count 重复渲染多块骨架', () => {
    const wrapper = mount(KkSkeleton, { props: { count: 3, variant: 'button' } })
    expect(wrapper.findAll('.kk-skeleton__item--button')).toHaveLength(3)
  })

  it('animated 为 false 时不挂动画类', () => {
    const on = mount(KkSkeleton, { props: { animated: true } })
    const off = mount(KkSkeleton, { props: { animated: false } })
    expect(on.find('.kk-skeleton').classes()).toContain('is-animated')
    expect(off.find('.kk-skeleton').classes()).not.toContain('is-animated')
  })
})
