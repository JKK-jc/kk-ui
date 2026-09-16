import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import KkCard from '../Card.vue'

describe('KkCard', () => {
  it('渲染默认插槽内容', () => {
    const w = mount(KkCard, { slots: { default: '卡片内容' } })
    expect(w.find('.kk-card__body').text()).toBe('卡片内容')
    expect(w.classes()).toContain('kk-card')
  })

  it('title / subtitle 渲染到头部', () => {
    const w = mount(KkCard, { props: { title: '标题', subtitle: '副标题' } })
    expect(w.find('.kk-card__title').text()).toBe('标题')
    expect(w.find('.kk-card__subtitle').text()).toBe('副标题')
  })

  it('无标题且无 header 插槽时不渲染头部', () => {
    const w = mount(KkCard)
    expect(w.find('.kk-card__header').exists()).toBe(false)
  })

  it('header / extra / footer / cover 插槽生效', () => {
    const w = mount(KkCard, {
      slots: {
        header: 'H',
        extra: 'E',
        footer: 'F',
        cover: '<img src="a.png" />',
      },
    })
    expect(w.find('.kk-card__header').text()).toContain('H')
    expect(w.find('.kk-card__extra').text()).toBe('E')
    expect(w.find('.kk-card__footer').text()).toBe('F')
    expect(w.find('.kk-card__cover img').exists()).toBe(true)
  })

  it('shadow / padding / bordered / hoverable 生成对应类名', () => {
    const w = mount(KkCard, {
      props: {
        shadow: 'never',
        padding: 'large',
        hoverable: true,
        bordered: false,
      },
    })
    expect(w.classes()).toContain('kk-card--shadow-never')
    expect(w.classes()).toContain('kk-card--padding-large')
    expect(w.classes()).toContain('is-hoverable')
    expect(w.classes()).not.toContain('is-bordered')
  })

  it('loading 时渲染遮罩与 spinner', () => {
    const w = mount(KkCard, { props: { loading: true } })
    expect(w.classes()).toContain('is-loading')
    expect(w.find('.kk-card__loading').exists()).toBe(true)
    expect(w.find('.kk-card__spinner').exists()).toBe(true)
  })

  it('title 插槽优先于 title 属性', () => {
    const w = mount(KkCard, {
      props: { title: '属性标题' },
      slots: { title: '插槽标题' },
    })
    expect(w.find('.kk-card__title').text()).toBe('插槽标题')
  })
})
