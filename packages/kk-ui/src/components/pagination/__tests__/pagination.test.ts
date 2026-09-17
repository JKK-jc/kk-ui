import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { h } from 'vue'
import KkPagination from '../Pagination.vue'

describe('KkPagination', () => {
  it('渲染：total 较大时显示页码按钮', () => {
    const wrapper = mount(KkPagination, { props: { total: 100, pageSize: 10 } })
    expect(wrapper.find('.kk-pagination').exists()).toBe(true)
    expect(wrapper.find('.kk-pagination__prev').exists()).toBe(true)
    expect(wrapper.find('.kk-pagination__next').exists()).toBe(true)
    expect(wrapper.find('.kk-pagination__total').text()).toContain('100')
  })

  it('点击下一页：emits update:modelValue / current-change / change', async () => {
    const wrapper = mount(KkPagination, { props: { total: 100, pageSize: 10 } })
    await wrapper.find('.kk-pagination__next').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    expect(wrapper.emitted('current-change')?.[0]).toEqual([2])
    expect(wrapper.emitted('change')?.[0]).toEqual([{ currentPage: 2, pageSize: 10 }])
    expect(wrapper.find('.kk-pagination__pager.is-active').text()).toBe('2')
  })

  it('点击上一页：首页时禁用', async () => {
    const wrapper = mount(KkPagination, { props: { total: 100, pageSize: 10 } })
    expect(wrapper.find('.kk-pagination__prev').attributes('disabled')).toBeDefined()
    await wrapper.setProps({ currentPage: 3 })
    await wrapper.find('.kk-pagination__prev').trigger('click')
    expect(wrapper.emitted('update:currentPage')?.[0]).toEqual([2])
  })

  it('每页条数下拉：选择后 emits update:pageSize / size-change', async () => {
    const wrapper = mount(KkPagination, {
      props: { total: 100, pageSize: 10, pageSizes: [10, 20, 50] },
    })
    await wrapper.find('.kk-pagination__sizes-trigger').trigger('click')
    const options = wrapper.findAll('.kk-pagination__size-option')
    expect(options.length).toBe(3)
    await options[1].trigger('click')
    expect(wrapper.emitted('update:pageSize')?.[0]).toEqual([20])
    expect(wrapper.emitted('size-change')?.[0]).toEqual([20])
  })

  it('total 与 pageSize 推导 pageCount', () => {
    const wrapper = mount(KkPagination, { props: { total: 95, pageSize: 10 } })
    // 95 / 10 => 10 页
    expect(wrapper.find('.kk-pagination__pager.is-active').text()).toBe('1')
    expect(wrapper.findAll('.kk-pagination__pager').length).toBeGreaterThan(1)
  })

  it('页码折叠：页数很多时渲染省略号', () => {
    const wrapper = mount(KkPagination, {
      props: { total: 200, pageSize: 10, currentPage: 1 },
    })
    expect(wrapper.find('.kk-pagination__more').exists()).toBe(true)
  })

  it('pageCount prop：代替 total，且页数少不折叠', () => {
    const wrapper = mount(KkPagination, { props: { pageCount: 5 } })
    expect(wrapper.find('.kk-pagination__more').exists()).toBe(false)
    expect(wrapper.findAll('.kk-pagination__pager').length).toBe(5)
  })

  it('disabled：所有按钮禁用', async () => {
    const wrapper = mount(KkPagination, {
      props: { total: 100, pageSize: 10, disabled: true },
    })
    expect(wrapper.find('.kk-pagination').classes()).toContain('is-disabled')
    expect(wrapper.find('.kk-pagination__next').attributes('disabled')).toBeDefined()
    await wrapper.find('.kk-pagination__next').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('跳页输入：回车跳转', async () => {
    const wrapper = mount(KkPagination, { props: { total: 100, pageSize: 10 } })
    const input = wrapper.find('.kk-pagination__jumper-input')
    await input.setValue('5')
    await input.trigger('keyup', { key: 'Enter' })
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([5])
  })

  it('modelValue 别名：点击同步更新 modelValue', async () => {
    const wrapper = mount(KkPagination, {
      props: { modelValue: 1, total: 100, pageSize: 10 },
    })
    await wrapper.find('.kk-pagination__next').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
  })

  it('simple 模式：只显示 上一页 / 当前 / 下一页 + 总数', () => {
    const wrapper = mount(KkPagination, {
      props: { total: 100, pageSize: 10, mode: 'simple' },
    })
    expect(wrapper.find('.kk-pagination__simple-pager').exists()).toBe(true)
    expect(wrapper.find('.kk-pagination__pager').exists()).toBe(false)
    expect(wrapper.find('.kk-pagination__total').exists()).toBe(true)
  })

  it('layout 编排：含 -> 时 total 出现在右组', () => {
    const wrapper = mount(KkPagination, {
      props: {
        total: 100,
        pageSize: 10,
        layout: 'prev, pager, next, ->, total, sizes',
      },
    })
    expect(wrapper.find('.kk-pagination__group--right').exists()).toBe(true)
    expect(
      wrapper.find('.kk-pagination__group--right .kk-pagination__total').exists()
    ).toBe(true)
  })

  it('hideOnSinglePage：只有一页时整体隐藏', () => {
    const wrapper = mount(KkPagination, {
      props: { total: 5, pageSize: 10, hideOnSinglePage: true },
    })
    expect(wrapper.find('.kk-pagination').exists()).toBe(false)
  })

  it('prev-click / next-click 事件在翻页前触发', async () => {
    const wrapper = mount(KkPagination, { props: { total: 100, pageSize: 10 } })
    await wrapper.find('.kk-pagination__next').trigger('click')
    expect(wrapper.emitted('next-click')?.[0]).toEqual([2])
  })

  it('自定义 prevIcon 渲染（函数式图标）', () => {
    const wrapper = mount(KkPagination, {
      props: { total: 100, pageSize: 10, prevIcon: () => h('i', { class: 'my-icon' }) },
    })
    expect(wrapper.find('.my-icon').exists()).toBe(true)
  })
})
