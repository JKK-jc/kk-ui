import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { KkTabs, KkTabPane, type TabsInstance } from '@kk-ui/components/tabs'

const wrappers: { unmount: () => void }[] = []

async function mountTabs(template: string, data: Record<string, unknown> = {}) {
  const wrapper = mount(
    {
      components: { KkTabs, KkTabPane },
      template,
      data: () => data,
    },
    { attachTo: document.body }
  )
  // 面板在子组件 onMounted 时登记，导航栏随后异步重渲染，等两拍
  await nextTick()
  await nextTick()
  wrappers.push(wrapper)
  return wrapper
}

const BASIC = `
  <KkTabs v-model="active">
    <KkTabPane name="a" label="标签一">内容一</KkTabPane>
    <KkTabPane name="b" label="标签二">内容二</KkTabPane>
    <KkTabPane name="c" label="标签三">内容三</KkTabPane>
  </KkTabs>
`

type Mounted = Awaited<ReturnType<typeof mountTabs>>

/**
 * 内联父组件只是脚手架，`v-model` / 事件都发生在子组件 KkTabs 上。
 * Vue Test Utils 的 `wrapper.emitted()` 只统计该 wrapper 根组件自身抛出的事件，
 * 所以断言必须显式取到 KkTabs 的 wrapper，否则永远拿不到（也不该用 toBeFalsy 蒙过去）。
 */
function tabsOf(wrapper: Mounted) {
  return wrapper.findComponent({ name: 'KkTabs' })
}

afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  document.body.innerHTML = ''
})

describe('KkTabs', () => {
  it('渲染标签并默认激活第一项', async () => {
    const wrapper = await mountTabs(BASIC, { active: 'a' })
    expect(wrapper.findAll('.kk-tabs__item')).toHaveLength(3)
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('标签一')
    expect(wrapper.find('.kk-tab-pane').text()).toContain('内容一')
  })

  it('不传 v-model 时回退激活首个面板', async () => {
    const wrapper = await mountTabs(`
      <KkTabs>
        <KkTabPane name="x" label="X">x</KkTabPane>
        <KkTabPane name="y" label="Y">y</KkTabPane>
      </KkTabs>
    `)
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('X')
  })

  it('点击标签切换 modelValue 并触发 change', async () => {
    const wrapper = await mountTabs(BASIC, { active: 'a' })
    const items = wrapper.findAll('.kk-tabs__item')
    await items[1].trigger('click')
    expect(tabsOf(wrapper).emitted('update:modelValue')).toBeTruthy()
    expect(tabsOf(wrapper).emitted('update:modelValue')?.[0]).toEqual(['b'])
    expect(tabsOf(wrapper).emitted('change')?.[0]).toEqual([
      { name: 'b', oldName: 'a' },
    ])
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('标签二')
  })

  it('点击标签触发 tab-click', async () => {
    const wrapper = await mountTabs(BASIC, { active: 'a' })
    await wrapper.findAll('.kk-tabs__item')[2].trigger('click')
    expect(tabsOf(wrapper).emitted('tab-click')?.[0]).toEqual(['c'])
  })

  it('disabled 标签不可点击切换', async () => {
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active">
        <KkTabPane name="a" label="A">a</KkTabPane>
        <KkTabPane name="b" label="B" :disabled="true">b</KkTabPane>
      </KkTabs>
    `,
      { active: 'a' }
    )
    const items = wrapper.findAll('.kk-tabs__item')
    expect(items[1].classes()).toContain('is-disabled')
    await items[1].trigger('click')
    expect(tabsOf(wrapper).emitted('update:modelValue')).toBeFalsy()
    expect(tabsOf(wrapper).emitted('tab-click')).toBeFalsy()
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('A')
  })

  it('closable 关闭触发 tab-remove；关闭激活项时同步切换到相邻标签', async () => {
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active" :closable="true">
        <KkTabPane name="a" label="A">a</KkTabPane>
        <KkTabPane name="b" label="B">b</KkTabPane>
        <KkTabPane name="c" label="C">c</KkTabPane>
      </KkTabs>
    `,
      { active: 'a' }
    )
    const closeBtn = wrapper.find('.kk-tabs__item-close')
    expect(closeBtn.exists()).toBe(true)
    expect(closeBtn.attributes('aria-label')).toContain('A')

    // 先关非激活项 b：仅抛 tab-remove，不切换激活
    const btns = wrapper.findAll('.kk-tabs__item-close')
    await btns[1].trigger('click')
    expect(tabsOf(wrapper).emitted('tab-remove')?.[0]).toEqual(['b'])
    expect(tabsOf(wrapper).emitted('update:modelValue')).toBeFalsy()

    // 再关激活项 a：切换并同步 modelValue 到相邻标签 b
    await wrapper.findAll('.kk-tabs__item-close')[0].trigger('click')
    expect(tabsOf(wrapper).emitted('tab-remove')?.[1]).toEqual(['a'])
    expect(tabsOf(wrapper).emitted('update:modelValue')?.[0]).toEqual(['b'])
  })

  it('addable 点击新增触发 tab-add', async () => {
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active" :addable="true">
        <KkTabPane name="a" label="A">a</KkTabPane>
      </KkTabs>
    `,
      { active: 'a' }
    )
    const addBtn = wrapper.find('.kk-tabs__add')
    expect(addBtn.exists()).toBe(true)
    expect(addBtn.attributes('aria-label')).toBeTruthy()
    await addBtn.trigger('click')
    expect(tabsOf(wrapper).emitted('tab-add')).toBeTruthy()
  })

  it('editable 同时显示新增与关闭', async () => {
    const wrapper = await mountTabs(`
      <KkTabs editable>
        <KkTabPane name="a" label="A">a</KkTabPane>
      </KkTabs>
    `)
    expect(wrapper.find('.kk-tabs__add').exists()).toBe(true)
    expect(wrapper.find('.kk-tabs__item-close').exists()).toBe(true)
  })

  it('card / segment 类型渲染对应类名', async () => {
    const card = await mountTabs(
      `<KkTabs type="card"><KkTabPane name="a" label="A"/></KkTabs>`
    )
    expect(card.find('.kk-tabs').classes()).toContain('kk-tabs--card')
    const segment = await mountTabs(
      `<KkTabs type="segment"><KkTabPane name="a" label="A"/></KkTabs>`
    )
    expect(segment.find('.kk-tabs').classes()).toContain('kk-tabs--segment')
  })

  it('label 插槽生效且携带 active 作用域', async () => {
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active">
        <KkTabPane name="a" v-slot:label="{ active }">
          <span class="custom-label">{{ active ? '激活' : '未激活' }}</span>
        </KkTabPane>
      </KkTabs>
    `,
      { active: 'a' }
    )
    const label = wrapper.find('.custom-label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toContain('激活')
  })

  it('beforeLeave 返回 false 阻止切换', async () => {
    const beforeLeave = (): boolean => false
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active" :before-leave="beforeLeave">
        <KkTabPane name="a" label="A">a</KkTabPane>
        <KkTabPane name="b" label="B">b</KkTabPane>
      </KkTabs>
    `,
      { active: 'a', beforeLeave }
    )
    await wrapper.findAll('.kk-tabs__item')[1].trigger('click')
    expect(tabsOf(wrapper).emitted('update:modelValue')).toBeFalsy()
    expect(tabsOf(wrapper).emitted('change')).toBeFalsy()
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('A')
  })

  it('position=left 渲染纵向类名', async () => {
    const wrapper = await mountTabs(
      `<KkTabs position="left"><KkTabPane name="a" label="A"/></KkTabs>`
    )
    const root = wrapper.find('.kk-tabs')
    expect(root.classes()).toContain('kk-tabs--left')
    expect(root.classes()).toContain('is-vertical')
  })

  it('非激活面板用 v-show 隐藏（保留 DOM）', async () => {
    const wrapper = await mountTabs(BASIC, { active: 'a' })
    const panes = wrapper.findAll('.kk-tab-pane')
    expect(panes).toHaveLength(3)
    expect(panes[0].isVisible()).toBe(true)
    expect((panes[1].element as HTMLElement).style.display).toBe('none')
    expect((panes[2].element as HTMLElement).style.display).toBe('none')
  })

  it('lazy 的非激活面板不渲染内容', async () => {
    const wrapper = await mountTabs(
      `
      <KkTabs v-model="active">
        <KkTabPane name="a" label="A">AA</KkTabPane>
        <KkTabPane name="b" label="B" lazy>BB</KkTabPane>
      </KkTabs>
    `,
      { active: 'a' }
    )
    const panes = wrapper.findAll('.kk-tab-pane')
    expect(panes).toHaveLength(1)
    expect(panes[0].text()).toContain('AA')
  })

  it('实例方法 setActive 可程序化切换', async () => {
    const wrapper = await mountTabs(BASIC, { active: 'a' })
    const vm = wrapper.findComponent({ name: 'KkTabs' }).vm as unknown as TabsInstance
    await vm.setActive('c')
    await nextTick()
    await nextTick()
    expect(tabsOf(wrapper).emitted('update:modelValue')?.[0]).toEqual(['c'])
    expect(wrapper.find('.kk-tabs__item.is-active').text()).toContain('标签三')
  })
})
