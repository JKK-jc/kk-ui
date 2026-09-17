import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { nextTick, ref, type Ref } from 'vue'
import { setLocale } from '../../../locale'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../../form/context'
import KkCascader from '../Cascader.vue'
import type { CascaderModelValue, CascaderOption } from '../types'

const options: CascaderOption[] = [
  {
    value: 'zj',
    label: '浙江省',
    children: [
      {
        value: 'hz',
        label: '杭州市',
        children: [
          { value: 'xh', label: '西湖区' },
          { value: 'bj', label: '滨江区' },
        ],
      },
      { value: 'nb', label: '宁波市' },
    ],
  },
  {
    value: 'js',
    label: '江苏省',
    disabled: true,
    children: [{ value: 'nj', label: '南京市' }],
  },
  { value: 'gd', label: '广东省' },
]

const wrappers: { unmount: () => void }[] = []

function mountCascader(props: Record<string, unknown> = {}, attach = true) {
  const wrapper = mount(KkCascader, {
    props: { options, ...props },
    attachTo: attach ? document.body : undefined,
  })
  wrappers.push(wrapper)
  return wrapper
}

async function flush(): Promise<void> {
  await nextTick()
  await nextTick()
  await nextTick()
}

async function tick(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 0))
  await flush()
}

function all(selector: string): HTMLElement[] {
  return Array.from(document.body.querySelectorAll(selector)) as HTMLElement[]
}

/** 把最后一次 update:modelValue 回灌成受控值 */
async function applyLast(w: ReturnType<typeof mountCascader>): Promise<void> {
  const last = w.emitted('update:modelValue')?.slice(-1)[0]?.[0] as CascaderModelValue
  await w.setProps({ modelValue: last })
  await flush()
}

function one(selector: string): HTMLElement | null {
  return document.body.querySelector(selector)
}

/** 点击第 level 列的第 index 个选项 */
async function clickNode(level: number, index: number): Promise<void> {
  const menus = all('.kk-cascader__menu')
  const nodes = menus[level].querySelectorAll('.kk-cascader__node')
  await (nodes[index] as HTMLElement).click()
  await flush()
}

afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount())
  document.body.innerHTML = ''
  setLocale('zh-CN')
  vi.restoreAllMocks()
})

describe('KkCascader', () => {
  it('默认渲染触发器并展示 placeholder', () => {
    const w = mountCascader()
    expect(w.find('.kk-cascader').exists()).toBe(true)
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('false')
    expect(w.find('.kk-cascader__control').attributes('aria-haspopup')).toBe('listbox')
    expect(w.find('input').attributes('placeholder')).toBe('请选择')
    expect(one('.kk-cascader__popper')).toBeNull()
  })

  it('点击触发器展开浮层，逐级展开下一列并高亮当前路径', async () => {
    const w = mountCascader({ checkStrictly: false })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    expect(one('.kk-cascader__popper')?.style.display).not.toBe('none')
    expect(w.emitted('visible-change')?.[0]).toEqual([true])
    expect(all('.kk-cascader__menu')).toHaveLength(1)
    expect(all('.kk-cascader__node')).toHaveLength(3)

    await clickNode(0, 0)
    expect(all('.kk-cascader__menu')).toHaveLength(2)
    expect(w.emitted('expand-change')?.[0]).toEqual([['zj']])
    const active = one('.kk-cascader__menu:nth-child(1) .kk-cascader__node.is-active')
    expect(active?.textContent).toContain('浙江省')
  })

  it('checkStrictly=false：点击非叶子只展开不提交，点击叶子提交完整路径并收起', async () => {
    const w = mountCascader({ checkStrictly: false })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 0)
    expect(w.emitted('update:modelValue')).toBeUndefined()

    await clickNode(1, 0)
    expect(w.emitted('update:modelValue')).toBeUndefined()

    await clickNode(2, 0)
    expect(w.emitted('update:modelValue')?.[0]).toEqual([['zj', 'hz', 'xh']])
    expect(w.emitted('change')?.[0]).toEqual([['zj', 'hz', 'xh']])
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('false')
  })

  it('checkStrictly=true（默认）：任意层级都能选中且不收起', async () => {
    const w = mountCascader()
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 0)
    expect(w.emitted('update:modelValue')?.[0]).toEqual([['zj']])
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('true')
  })

  it('emitPath=false 只提交末级值，回显仍展示完整路径', async () => {
    const w = mountCascader({ checkStrictly: false, emitPath: false })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 0)
    await clickNode(1, 0)
    await clickNode(2, 0)
    expect(w.emitted('update:modelValue')?.[0]).toEqual(['xh'])

    await w.setProps({ modelValue: 'xh' })
    await flush()
    expect(w.find('input').element.value).toBe('浙江省 / 杭州市 / 西湖区')

    await w.setProps({ showAllLevels: false })
    await flush()
    expect(w.find('input').element.value).toBe('西湖区')
  })

  it('separator 与 showAllLevels 影响单选回显', async () => {
    const w = mountCascader({ modelValue: ['zj', 'hz', 'xh'], separator: '>' })
    await flush()
    expect(w.find('input').element.value).toBe('浙江省>杭州市>西湖区')
  })

  it('disabled 时不响应点击展开', async () => {
    const w = mountCascader({ disabled: true })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    expect(one('.kk-cascader__popper')).toBeNull()
    expect(w.classes()).toContain('is-disabled')
  })

  it('clearable 在有值时出现清空按钮并清空', async () => {
    const w = mountCascader({ clearable: true, modelValue: ['zj', 'hz'] })
    await flush()
    const clearBtn = w.find('.kk-cascader__clear')
    expect(clearBtn.exists()).toBe(true)
    expect(clearBtn.attributes('aria-label')).toBe('清空')
    await clearBtn.trigger('click')
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual([[]])
    expect(w.emitted('clear')).toHaveLength(1)
  })

  it('多选：勾选不收起浮层，标签展示完整路径且可单独删除', async () => {
    const w = mountCascader({ multiple: true, checkStrictly: false })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 0)
    await clickNode(1, 0)
    await clickNode(2, 0)
    await applyLast(w)
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('true')
    expect(w.findAll('.kk-cascader__tag')).toHaveLength(1)
    expect(w.find('.kk-cascader__tag').text()).toContain('浙江省 / 杭州市 / 西湖区')

    await clickNode(0, 2)
    await applyLast(w)
    expect(w.findAll('.kk-cascader__tag')).toHaveLength(2)

    await w.findAll('.kk-cascader__tag-close')[0].trigger('click')
    await flush()
    const last = w.emitted('update:modelValue')?.slice(-1)[0]?.[0]
    expect(last).toEqual([['gd']])
  })

  it('懒加载：点开才请求，加载中该列显示 loading，完成后展开下一列', async () => {
    // 手动控制 resolve，保证能在「加载中」这一帧做断言
    let resolveLoad: (value: CascaderOption[]) => void = () => {}
    const loadData = vi.fn(
      () =>
        new Promise<CascaderOption[]>((resolve) => {
          resolveLoad = resolve
        })
    )
    const w = mountCascader({ options: [{ value: 'a', label: 'A' }], loadData })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    expect(all('.kk-cascader__menu')).toHaveLength(1)

    await clickNode(0, 0)
    expect(one('.kk-cascader__menu.is-loading')).not.toBeNull()
    expect(one('.kk-cascader__loading')?.textContent).toContain('加载中')

    resolveLoad([{ value: 'a1', label: 'A-1' }])
    await tick()
    expect(loadData).toHaveBeenCalledTimes(1)
    expect(w.emitted('load')).toHaveLength(1)
    expect(w.emitted('load')?.[0]?.[0]).toMatchObject({ path: ['a'] })
    expect(all('.kk-cascader__menu')).toHaveLength(2)
    expect(all('.kk-cascader__menu')[1].textContent).toContain('A-1')
  })

  it('键盘：↑↓ 移动高亮，→ 进入下一列，Enter 选中', async () => {
    const w = mountCascader({ checkStrictly: false })
    const control = w.find('.kk-cascader__control')
    await control.trigger('click')
    await flush()

    await control.trigger('keydown', { key: 'ArrowDown' })
    await flush()
    expect(one('.kk-cascader__node.is-active')?.textContent).toContain('浙江省')

    await control.trigger('keydown', { key: 'ArrowRight' })
    await flush()
    await control.trigger('keydown', { key: 'ArrowDown' })
    await flush()
    expect(
      one('.kk-cascader__menu:nth-child(2) .kk-cascader__node.is-active')?.textContent
    ).toContain('杭州市')

    await control.trigger('keydown', { key: 'ArrowRight' })
    await flush()
    await control.trigger('keydown', { key: 'ArrowDown' })
    await flush()
    await control.trigger('keydown', { key: 'Enter' })
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual([['zj', 'hz', 'xh']])

    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await w.find('.kk-cascader__control').trigger('keydown', { key: 'ArrowLeft' })
    await flush()
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('true')
  })

  it('Esc 与点击外部均可关闭浮层', async () => {
    const w = mountCascader()
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await w.find('.kk-cascader__control').trigger('keydown', { key: 'Escape' })
    await flush()
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('false')

    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    document.dispatchEvent(new Event('pointerdown'))
    await flush()
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('false')
  })

  it('hover 展开：expandTrigger=hover 时鼠标移入即展开', async () => {
    const w = mountCascader({ expandTrigger: 'hover' })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    const node = all('.kk-cascader__node')[0]
    node.dispatchEvent(new MouseEvent('mouseenter'))
    await flush()
    expect(all('.kk-cascader__menu')).toHaveLength(2)
    expect(w.emitted('expand-change')?.[0]).toEqual([['zj']])
  })

  it('禁用项不可点击，空数据展示 empty 插槽', async () => {
    const w = mountCascader()
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 1)
    expect(w.emitted('expand-change')).toBeUndefined()
    wrappers.splice(0).forEach((item) => item.unmount())

    const empty = mountCascader({ options: [] })
    await empty.find('.kk-cascader__control').trigger('click')
    await flush()
    expect(one('.kk-cascader__empty')?.textContent).toContain('无匹配数据')
  })

  it('filterable：搜索并高亮关键字，点击结果直接选中', async () => {
    const w = mountCascader({ filterable: true })
    await w.find('.kk-cascader__control').trigger('click')
    await flush()
    await w.find('input').setValue('西湖')
    await flush()
    const suggestions = all('.kk-cascader__list .kk-cascader__node')
    expect(suggestions).toHaveLength(1)
    expect(one('.kk-cascader__match')?.textContent).toBe('西湖')
    await suggestions[0].click()
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual([['zj', 'hz', 'xh']])

    await w.find('input').setValue('不存在的地区')
    await flush()
    expect(one('.kk-cascader__empty')?.textContent).toContain('无匹配数据')
  })

  it('fieldNames 可自定义字段名', async () => {
    const w = mountCascader({
      fieldNames: { value: 'code', label: 'name', children: 'items' },
      options: [{ code: 'a', name: 'A', items: [{ code: 'a1', name: 'A-1' }] }],
      modelValue: ['a'],
    })
    await flush()
    expect(w.find('input').element.value).toBe('A')
  })

  it('继承 form 上下文的 disabled / size 并在 change 时触发校验', async () => {
    const validate = vi.fn().mockResolvedValue('')
    const message: Ref<string> = ref('')
    const formItem = {
      prop: 'x',
      message,
      validate,
      resetField: vi.fn(),
      clearValidate: vi.fn(),
    }

    const locked = mount(KkCascader, {
      props: { options },
      attachTo: document.body,
      global: {
        provide: {
          [FORM_CONTEXT_KEY as symbol]: { disabled: true, size: 'large' },
          [FORM_ITEM_CONTEXT_KEY as symbol]: formItem,
        },
      },
    })
    wrappers.push(locked)
    await locked.find('.kk-cascader__control').trigger('click')
    await flush()
    expect(one('.kk-cascader__popper')).toBeNull()
    expect(locked.classes()).toContain('kk-cascader--large')
    locked.unmount()
    wrappers.splice(wrappers.indexOf(locked), 1)

    const live = mount(KkCascader, {
      props: { options },
      attachTo: document.body,
      global: {
        provide: { [FORM_ITEM_CONTEXT_KEY as symbol]: formItem },
      },
    })
    wrappers.push(live)
    await live.find('.kk-cascader__control').trigger('click')
    await flush()
    await clickNode(0, 2)
    expect(validate).toHaveBeenCalledWith('change')
  })

  it('暴露 open / close / clear / getCheckedNodes 实例方法', async () => {
    const w = mountCascader({ modelValue: ['zj', 'hz', 'xh'] })
    const vm = w.vm as unknown as {
      open: () => void
      close: () => void
      clear: () => void
      focus: () => void
      blur: () => void
      getCheckedNodes: () => CascaderOption[]
    }
    vm.open()
    await flush()
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('true')
    vm.close()
    await flush()
    expect(w.find('.kk-cascader__control').attributes('aria-expanded')).toBe('false')

    expect(vm.getCheckedNodes()).toEqual([options[0].children?.[0].children?.[0]])
    vm.clear()
    await flush()
    expect(w.emitted('clear')).toHaveLength(1)
    expect(typeof vm.focus).toBe('function')
    expect(typeof vm.blur).toBe('function')
  })
})
