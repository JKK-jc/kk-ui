import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { Fragment, h } from 'vue'
import KkSpace from '../Space.vue'

describe('KkSpace', () => {
  it('渲染默认插槽内容', () => {
    const w = mount(KkSpace, { slots: { default: '内容' } })
    expect(w.text()).toBe('内容')
    expect(w.classes()).toContain('kk-space')
  })

  it('direction / align 生成对应类名', () => {
    const w = mount(KkSpace, {
      props: { direction: 'vertical', align: 'start' },
      slots: { default: 'x' },
    })
    expect(w.classes()).toContain('kk-space--vertical')
    expect(w.classes()).toContain('kk-space--align-start')
  })

  it('size 为数字时输出 px 间距', () => {
    const w = mount(KkSpace, { props: { size: 16 }, slots: { default: 'x' } })
    expect(w.attributes('style')).toContain('--kk-space-row-gap: 16px')
    expect(w.attributes('style')).toContain('--kk-space-column-gap: 16px')
  })

  it('size 数组分别控制行列间距', () => {
    const w = mount(KkSpace, {
      props: { size: ['small', 'large'] },
      slots: { default: 'x' },
    })
    expect(w.attributes('style')).toContain('--kk-space-row-gap: var(--kk-space-2)')
    expect(w.attributes('style')).toContain('--kk-space-column-gap: var(--kk-space-4)')
  })

  it('默认语义尺寸为 small', () => {
    const w = mount(KkSpace, { slots: { default: 'x' } })
    expect(w.attributes('style')).toContain('var(--kk-space-2)')
  })

  it('wrap / fill 输出状态类名', () => {
    const w = mount(KkSpace, {
      props: { wrap: true, fill: true },
      slots: { default: 'x' },
    })
    expect(w.classes()).toContain('is-wrap')
    expect(w.classes()).toContain('is-fill')
  })

  it('split 为真时在子项之间插入分隔符', () => {
    const w = mount(KkSpace, {
      props: { split: true },
      slots: { default: () => [h('span', 'A'), h('span', 'B'), h('span', 'C')] },
      attachTo: document.body,
    })
    const splits = w.findAll('.kk-space__split')
    expect(splits).toHaveLength(2)
  })

  it('拍平 v-for 产生的 Fragment 子节点', () => {
    const w = mount(KkSpace, {
      props: { split: true },
      slots: {
        default: () => [
          h(
            Fragment,
            null,
            ['A', 'B', 'C'].map((t) => h('span', t))
          ),
        ],
      },
    })
    expect(w.findAll('.kk-space__split')).toHaveLength(2)
  })

  it('未开启 split 时不渲染分隔符', () => {
    const w = mount(KkSpace, {
      slots: { default: () => [h('span', 'A'), h('span', 'B')] },
    })
    expect(w.find('.kk-space__split').exists()).toBe(false)
  })
})
