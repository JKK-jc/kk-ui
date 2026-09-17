import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { nextTick, ref, type Ref } from 'vue'
import { setLocale } from '../../../locale'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../../form/context'
import KkSelect from '../Select.vue'
import type { SelectModelValue, SelectOption } from '../types'

const options: SelectOption[] = [
  { value: 'a', label: '苹果' },
  { value: 'b', label: '香蕉' },
  { value: 'c', label: '橙子', disabled: true },
  { value: 'd', label: '西瓜' },
]

const wrappers: { unmount: () => void }[] = []

function mountSelect(props: Record<string, unknown> = {}, attach = true) {
  const wrapper = mount(KkSelect, {
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

function query(selector: string): HTMLElement | null {
  return document.body.querySelector(selector)
}

afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount())
  document.body.innerHTML = ''
  setLocale('zh-CN')
  vi.restoreAllMocks()
})

describe('KkSelect', () => {
  it('默认渲染触发器并展示 placeholder', () => {
    const w = mountSelect()
    expect(w.find('.kk-select').exists()).toBe(true)
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('false')
    expect(w.find('input').attributes('placeholder')).toBe('请选择')
    // 浮层懒挂载，未打开时不在 DOM 中
    expect(query('.kk-select__popper')).toBeNull()
  })

  it('点击触发器展开浮层并渲染选项', async () => {
    const w = mountSelect()
    await w.find('.kk-select__control').trigger('click')
    await flush()
    expect(query('.kk-select__popper')?.style.display).not.toBe('none')
    expect(document.querySelectorAll('.kk-select__option')).toHaveLength(4)
    expect(w.emitted('visible-change')?.[0]).toEqual([true])
  })

  it('单选：点击选项更新 modelValue 与 change，并收起', async () => {
    const w = mountSelect()
    await w.find('.kk-select__control').trigger('click')
    await flush()
    await (document.querySelectorAll('.kk-select__option')[1] as HTMLElement).click()
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual(['b'])
    expect(w.emitted('change')?.[0]).toEqual(['b'])
    expect(w.emitted('select')?.[0]).toBeTruthy()
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('false')
  })

  it('disabled 时不响应点击展开', async () => {
    const w = mountSelect({ disabled: true })
    await w.find('.kk-select__control').trigger('click')
    await flush()
    expect(query('.kk-select__popper')).toBeNull()
    expect(w.classes()).toContain('is-disabled')
  })

  it('clearable 在多选有值时展示清空按钮并清空', async () => {
    const w = mountSelect({ multiple: true, clearable: true, modelValue: ['a', 'b'] })
    await flush()
    expect(w.findAll('.kk-select__tag')).toHaveLength(2)
    await w.find('.kk-select__clear').trigger('click')
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual([[]])
    expect(w.emitted('clear')).toHaveLength(1)
  })

  it('多选：点击选项切换标签，再次点击取消', async () => {
    const w = mountSelect({ multiple: true })
    /**
     * `emitted(name)` 返回的是「每次 emit 的参数数组」列表，
     * 所以最后一个载荷 `[0]` 才是第一个参数（多选下即选中值数组）。
     * 少取一层就会把 `[['a']]` 当成 modelValue 回灌，标签看着是 1 个但选中态判断失效。
     */
    const lastValue = (): SelectModelValue =>
      w.emitted('update:modelValue')?.slice(-1)[0]?.[0] as SelectModelValue

    await w.find('.kk-select__control').trigger('click')
    await flush()
    await (document.querySelectorAll('.kk-select__option')[0] as HTMLElement).click()
    await flush()
    await w.setProps({ modelValue: lastValue() })

    expect(w.findAll('.kk-select__tag')).toHaveLength(1)
    expect(
      (document.querySelectorAll('.kk-select__option')[0] as HTMLElement).className
    ).toContain('is-selected')

    await (document.querySelectorAll('.kk-select__option')[0] as HTMLElement).click()
    await flush()
    await w.setProps({ modelValue: lastValue() })

    expect(w.findAll('.kk-select__tag')).toHaveLength(0)
    expect(w.emitted('deselect')).toBeTruthy()
  })

  it('filterable：输入关键字过滤选项', async () => {
    const w = mountSelect({ filterable: true })
    await w.find('input').setValue('香蕉')
    await flush()
    const labels = Array.from(
      document.querySelectorAll('.kk-select__option-label')
    ).map((el) => el.textContent)
    expect(labels).toEqual(['香蕉'])
  })

  it('allowCreate：无匹配时创建新选项', async () => {
    const w = mountSelect({ filterable: true, allowCreate: true })
    await w.find('input').setValue('葡萄')
    await flush()
    const create = document.querySelector('.kk-select__option--create')
    expect(create).not.toBeNull()
    await (create as HTMLElement).click()
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual(['葡萄'])
  })

  it('键盘：ArrowDown 移动高亮，Enter 选中', async () => {
    const w = mountSelect()
    await w.find('.kk-select__control').trigger('click')
    await flush()
    // 打开后默认高亮第一项
    expect(
      document.querySelector('.kk-select__option.is-active')?.textContent
    ).toContain('苹果')
    await w.find('.kk-select__control').trigger('keydown', { key: 'ArrowDown' })
    await flush()
    expect(
      document.querySelector('.kk-select__option.is-active')?.textContent
    ).toContain('香蕉')
    await w.find('.kk-select__control').trigger('keydown', { key: 'Enter' })
    await flush()
    expect(w.emitted('update:modelValue')?.[0]).toEqual(['b'])
  })

  it('Esc 与点击外部均可关闭浮层', async () => {
    const w = mountSelect()
    await w.find('.kk-select__control').trigger('click')
    await flush()
    await w.find('.kk-select__control').trigger('keydown', { key: 'Escape' })
    await flush()
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('false')

    await w.find('.kk-select__control').trigger('click')
    await flush()
    document.dispatchEvent(new Event('pointerdown'))
    await flush()
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('false')
  })

  it('collapseTags 与 maxTagCount 折叠为 +N', async () => {
    const w = mountSelect({
      multiple: true,
      collapseTags: true,
      maxTagCount: 1,
      modelValue: ['a', 'b', 'd'],
    })
    await flush()
    expect(w.findAll('.kk-select__tag')).toHaveLength(2)
    expect(w.find('.kk-select__tag--collapse').text()).toBe('+2')
  })

  it('selectAll 可全选 / 取消全选', async () => {
    const w = mountSelect({ multiple: true, selectAll: true })
    await w.find('.kk-select__control').trigger('click')
    await flush()
    await (document.querySelector('.kk-select__select-all') as HTMLElement).click()
    await flush()
    expect(w.emitted('update:modelValue')?.[0]?.[0]).toEqual(['a', 'b', 'd'])

    // 把选中结果回灌：组件是受控的，不回灌则永远停留在「未选中」，
    // 「全选」按钮也就不会切换成「取消全选」
    await w.setProps({ modelValue: ['a', 'b', 'd'] })
    await flush()
    await (document.querySelector('.kk-select__select-all') as HTMLElement).click()
    await flush()
    const last = w.emitted('update:modelValue')?.slice(-1)[0]?.[0]
    expect(last).toEqual([])
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
    const w2 = mount(KkSelect, {
      props: { options },
      attachTo: document.body,
      global: {
        provide: {
          [FORM_CONTEXT_KEY as symbol]: { disabled: true, size: 'large' },
          [FORM_ITEM_CONTEXT_KEY as symbol]: formItem,
        },
      },
    })
    wrappers.push(w2)
    await w2.find('.kk-select__control').trigger('click')
    await flush()
    expect(query('.kk-select__popper')).toBeNull()
    expect(w2.classes()).toContain('kk-select--large')

    const w3 = mount(KkSelect, {
      props: { options },
      attachTo: document.body,
      global: {
        provide: {
          [FORM_ITEM_CONTEXT_KEY as symbol]: formItem,
        },
      },
    })
    wrappers.push(w3)
    await w3.find('.kk-select__control').trigger('click')
    await flush()
    await (document.querySelectorAll('.kk-select__option')[1] as HTMLElement).click()
    await flush()
    expect(validate).toHaveBeenCalledWith('change')
  })

  it('暴露 open / close / focus 实例方法', async () => {
    const w = mountSelect()
    const vm = w.vm as unknown as {
      open: () => void
      close: () => void
      focus: () => void
      toggle: () => void
    }
    vm.open()
    await flush()
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('true')
    vm.close()
    await flush()
    expect(w.find('.kk-select__control').attributes('aria-expanded')).toBe('false')
    expect(typeof vm.focus).toBe('function')
    expect(typeof vm.toggle).toBe('function')
  })
})
