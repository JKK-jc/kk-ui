import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import KkLayout from '../Layout.vue'
import KkLayoutHeader from '../LayoutHeader.vue'
import KkLayoutSider from '../LayoutSider.vue'
import KkLayoutContent from '../LayoutContent.vue'
import KkLayoutFooter from '../LayoutFooter.vue'
import KkRow from '../Row.vue'
import KkCol from '../Col.vue'

describe('KkLayout', () => {
  it('direction 未传时由是否含 sider 推断', () => {
    const withSider = mount(KkLayout, {
      slots: { sider: '<div class="s">s</div>' },
    })
    expect(withSider.find('.kk-layout').classes()).toContain('kk-layout--horizontal')

    const plain = mount(KkLayout)
    expect(plain.find('.kk-layout').classes()).toContain('kk-layout--vertical')
  })

  it('默认插槽内直接放 KkLayoutSider 时也会推断为 horizontal', async () => {
    // 回归：早前 provide 的是只读 computed，sider 回写被静默忽略，内层布局会错误地保持纵向
    const wrapper = mount(KkLayout, {
      global: { components: { KkLayoutSider } },
      slots: { default: '<KkLayoutSider>nav</KkLayoutSider>' },
    })
    await nextTick()
    expect(wrapper.find('.kk-layout').classes()).toContain('kk-layout--horizontal')
  })

  it('header / content / footer 插槽渲染，slot 内容进入对应区域', () => {
    const wrapper = mount(KkLayout, {
      slots: {
        header: '<div class="hd">顶</div>',
        content: '<div class="ct">中</div>',
        footer: '<div class="ft">底</div>',
      },
    })
    expect(wrapper.find('.hd').exists()).toBe(true)
    expect(wrapper.find('.ct').exists()).toBe(true)
    expect(wrapper.find('.ft').exists()).toBe(true)
  })

  it('#sider 作用域插槽可拿到 collapsed / toggle 并切换', async () => {
    const wrapper = mount(KkLayout, {
      slots: {
        sider: `
          <template #sider="{ collapsed, toggle }">
            <button class="tgl" @click="toggle">{{ collapsed ? '展开' : '收起' }}</button>
          </template>
        `,
      },
    })
    const btn = wrapper.find('.tgl')
    expect(btn.text()).toBe('收起')
    await btn.trigger('click')
    expect(wrapper.find('.tgl').text()).toBe('展开')
  })
})

describe('KkLayoutSider', () => {
  it('collapsed 为 true 时使用 collapsedWidth 收起', () => {
    const wrapper = mount(KkLayoutSider, { props: { collapsed: true } })
    const el = wrapper.find('.kk-layout-sider').element as HTMLElement
    expect(el.style.width).toBe('64px')
    expect(wrapper.find('.kk-layout-sider').classes()).toContain('is-collapsed')
  })

  it('点击触发器切换并派发 update:collapsed 与 collapse', async () => {
    const wrapper = mount(KkLayoutSider, {
      props: { collapsible: true, width: 200, collapsedWidth: 60 },
    })
    expect((wrapper.find('.kk-layout-sider').element as HTMLElement).style.width).toBe(
      '200px'
    )
    await wrapper.find('.kk-layout-sider__trigger').trigger('click')
    expect((wrapper.find('.kk-layout-sider').element as HTMLElement).style.width).toBe(
      '60px'
    )
    expect(wrapper.emitted('update:collapsed')?.[0]).toEqual([true])
    expect(wrapper.emitted('collapse')?.[0]).toEqual([true])
  })

  it('v-model:collapsed 受控：点击只派发事件不直接改内部态', async () => {
    const wrapper = mount(KkLayoutSider, {
      props: { collapsible: true, collapsed: false },
    })
    await wrapper.find('.kk-layout-sider__trigger').trigger('click')
    expect(wrapper.emitted('update:collapsed')?.[0]).toEqual([true])
    // 受控态下宽度仍由 props.collapsed 决定，未回传前保持展开
    expect((wrapper.find('.kk-layout-sider').element as HTMLElement).style.width).toBe(
      '220px'
    )
  })

  it('position 为 right 时设置 order 以便排到内容右侧', () => {
    const wrapper = mount(KkLayoutSider, { props: { position: 'right' } })
    expect((wrapper.find('.kk-layout-sider').element as HTMLElement).style.order).toBe(
      '2'
    )
  })
})

describe('KkLayoutHeader / Content / Footer', () => {
  it('Header 渲染 left/right 插槽与固定/边框类', () => {
    const wrapper = mount(KkLayoutHeader, {
      props: { fixed: true, bordered: false },
      slots: { left: '<span class="l">L</span>', right: '<span class="r">R</span>' },
    })
    expect(wrapper.find('.l').exists()).toBe(true)
    expect(wrapper.find('.r').exists()).toBe(true)
    expect(wrapper.find('.kk-layout-header').classes()).toContain('is-fixed')
    expect(wrapper.find('.kk-layout-header').classes()).not.toContain('is-bordered')
  })

  it('Content 默认可滚动，padding 映射到 --kk-space', () => {
    const scrollable = mount(KkLayoutContent)
    expect(scrollable.find('.kk-layout-content').classes()).toContain('is-scrollable')
    const custom = mount(KkLayoutContent, { props: { scrollable: false, padding: 40 } })
    expect(
      (custom.find('.kk-layout-content').element as HTMLElement).style.padding
    ).toBe('40px')
  })

  it('Footer 渲染默认插槽', () => {
    const wrapper = mount(KkLayoutFooter, {
      slots: { default: '<div class="f">底</div>' },
    })
    expect(wrapper.find('.f').text()).toBe('底')
  })
})

describe('KkRow / KkCol', () => {
  it('Col span 生成百分比宽度类，并在 Row 负外边距下获得内边距', () => {
    const wrapper = mount(KkRow, {
      props: { gutter: 16 },
      slots: { default: '<KkCol :span="12" />' },
      global: { components: { KkCol } },
    })
    const col = wrapper.find('.kk-col')
    expect(col.classes()).toContain('kk-col--span-12')
    const colEl = col.element as HTMLElement
    expect(colEl.style.paddingLeft).toBe('8px')
    expect(colEl.style.paddingRight).toBe('8px')
    // Row 用负外边距抵消 Col 内边距
    const rowEl = wrapper.find('.kk-row').element as HTMLElement
    expect(rowEl.style.marginLeft).toBe('-8px')
  })

  it('Col 响应式对象生成对应断点类', () => {
    const wrapper = mount(KkCol, {
      props: { md: { span: 8, offset: 2 }, lg: 6 },
    })
    const classes = wrapper.find('.kk-col').classes()
    expect(classes).toContain('kk-col--md-span-8')
    expect(classes).toContain('kk-col--md-offset-2')
    expect(classes).toContain('kk-col--lg-span-6')
  })

  it('无 span 时退化为 auto 弹性列', () => {
    const wrapper = mount(KkCol)
    expect(wrapper.find('.kk-col').classes()).toContain('kk-col--auto')
  })

  it('Row 的 justify / align 透传为 flex 样式', () => {
    const wrapper = mount(KkRow, {
      props: { justify: 'space-between', align: 'center' },
    })
    const el = wrapper.find('.kk-row').element as HTMLElement
    expect(el.style.justifyContent).toBe('space-between')
    expect(el.style.alignItems).toBe('center')
  })
})
