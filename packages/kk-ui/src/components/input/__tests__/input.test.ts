import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import KkInput from '../Input.vue'

describe('KkInput', () => {
  it('渲染默认值与占位符', () => {
    const w = mount(KkInput, { props: { modelValue: 'hello', placeholder: '请输入' } })
    const input = w.find('input')
    expect(input.element.value).toBe('hello')
    expect(input.attributes('placeholder')).toBe('请输入')
    expect(w.find('.kk-input').classes()).toContain('kk-input')
  })

  it('输入时触发 update:modelValue 与 input', async () => {
    const w = mount(KkInput, { props: { modelValue: '' } })
    const input = w.find('input')
    await input.setValue('abc')
    expect(w.emitted('update:modelValue')?.[0]).toEqual(['abc'])
    expect(w.emitted('input')?.[0]).toEqual(['abc'])
  })

  it('change / focus / blur / enter 事件', async () => {
    const w = mount(KkInput, { props: { modelValue: '' } })
    const input = w.find('input')
    await input.trigger('change')
    await input.trigger('focus')
    await input.trigger('blur')
    await input.trigger('keydown', { key: 'Enter' })
    expect(w.emitted('change')).toHaveLength(1)
    expect(w.emitted('focus')).toHaveLength(1)
    expect(w.emitted('blur')).toHaveLength(1)
    expect(w.emitted('enter')).toHaveLength(1)
    expect(w.emitted('keydown')).toHaveLength(1)
  })

  it('disabled 时输入框禁用', () => {
    const w = mount(KkInput, { props: { disabled: true } })
    expect(w.find('input').attributes('disabled')).toBeDefined()
    expect(w.find('.kk-input__control').classes()).toContain('is-disabled')
  })

  it('readonly 时透传 readonly 且不显示清空按钮', () => {
    const w = mount(KkInput, {
      props: { readonly: true, clearable: true, modelValue: 'x' },
    })
    expect(w.find('input').attributes('readonly')).toBeDefined()
    expect(w.find('.kk-input__control').classes()).toContain('is-readonly')
    expect(w.find('.kk-input__clear').exists()).toBe(false)
  })

  it('clearable 且有值时显示清空按钮并触发 clear', async () => {
    const w = mount(KkInput, { props: { modelValue: 'abc', clearable: true } })
    const clear = w.find('.kk-input__clear')
    expect(clear.exists()).toBe(true)
    await clear.trigger('click')
    expect(w.emitted('clear')).toHaveLength(1)
    expect(w.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('clearable 但值为空时不显示清空按钮', () => {
    const w = mount(KkInput, { props: { modelValue: '', clearable: true } })
    expect(w.find('.kk-input__clear').exists()).toBe(false)
  })

  it('showPassword 切换输入类型', async () => {
    const w = mount(KkInput, { props: { showPassword: true } })
    const input = w.find('input')
    expect(input.attributes('type')).toBe('password')
    await w.find('.kk-input__password').trigger('click')
    expect(w.find('input').attributes('type')).toBe('text')
  })

  it('invalid 与 errorMessage 渲染错误态', () => {
    const w = mount(KkInput, {
      props: { invalid: true, errorMessage: '必填项' },
    })
    expect(w.find('.kk-input__control').classes()).toContain('is-invalid')
    expect(w.find('.kk-input__error').text()).toContain('必填项')
    expect(w.find('input').attributes('aria-invalid')).toBe('true')
  })

  it('size / block 生成对应类名', () => {
    const w = mount(KkInput, { props: { size: 'large', block: true } })
    expect(w.find('.kk-input__control').classes()).toContain('kk-input__control--large')
    expect(w.classes()).toContain('is-block')
  })

  it('prefix / suffix / prepend / append 插槽渲染', () => {
    const w = mount(KkInput, {
      slots: {
        prefix: '<i class="p" />',
        suffix: '<i class="s" />',
        prepend: '<i class="pre" />',
        append: '<i class="app" />',
      },
    })
    expect(w.find('.kk-input__prefix .p').exists()).toBe(true)
    expect(w.find('.kk-input__suffix .s').exists()).toBe(true)
    expect(w.find('.kk-input__prepend .pre').exists()).toBe(true)
    expect(w.find('.kk-input__append .app').exists()).toBe(true)
  })

  it('暴露 focus / blur / select 方法', () => {
    const w = mount(KkInput, { attachTo: document.body })
    expect(w.vm.focus).toBeTypeOf('function')
    expect(w.vm.blur).toBeTypeOf('function')
    expect(w.vm.select).toBeTypeOf('function')
    w.vm.focus()
    expect(document.activeElement).toBe(w.find('input').element)
    w.vm.blur()
    expect(document.activeElement).not.toBe(w.find('input').element)
  })

  it('modelValue 为数字时正确展示', () => {
    const w = mount(KkInput, { props: { modelValue: 42 } })
    expect(w.find('input').element.value).toBe('42')
  })
})
