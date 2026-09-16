import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, nextTick, reactive, ref } from 'vue'
import KkForm from '../Form.vue'
import KkFormItem from '../../form-item/FormItem.vue'
import KkInput from '../../input/Input.vue'
import type { FormRules } from '../types'
import type { FormExpose } from '../types'

function createHost(
  options: { rules?: FormRules; labelPosition?: 'top' | 'left' | 'right' } = {}
) {
  const model = reactive<Record<string, unknown>>({ name: '', email: '' })
  const formRef = ref<FormExpose>()

  const Host = defineComponent({
    setup() {
      return () =>
        h(
          KkForm,
          {
            ref: formRef,
            model,
            rules: options.rules ?? {},
            labelPosition: options.labelPosition,
          },
          () => [
            h(KkFormItem, { prop: 'name', label: '名称' }, () =>
              h(KkInput, {
                modelValue: model.name as string,
                'onUpdate:modelValue': (v: string) => (model.name = v),
              })
            ),
            h(KkFormItem, { prop: 'email', label: '邮箱' }, () =>
              h(KkInput, {
                modelValue: model.email as string,
                'onUpdate:modelValue': (v: string) => (model.email = v),
              })
            ),
          ]
        )
    },
  })

  const wrapper = mount(Host, { attachTo: document.body })
  return {
    wrapper,
    model,
    form: () => formRef.value as FormExpose,
  }
}

describe('KkForm + KkFormItem', () => {
  it('渲染表单项与标签', () => {
    const { wrapper } = createHost()
    expect(wrapper.findAll('.kk-form-item')).toHaveLength(2)
    expect(wrapper.text()).toContain('名称')
    expect(wrapper.text()).toContain('邮箱')
  })

  it('validate 在必填校验失败时返回 false 并展示错误', async () => {
    const { wrapper, form } = createHost({ rules: { name: [{ required: true }] } })
    const valid = await form().validate()
    await nextTick()
    expect(valid).toBe(false)
    expect(wrapper.find('.kk-form-item__error').text()).toContain('该字段为必填项')
  })

  it('validate 校验通过时返回 true', async () => {
    const { model, form } = createHost({ rules: { name: [{ required: true }] } })
    model.name = 'kk-ui'
    const valid = await form().validate()
    expect(valid).toBe(true)
  })

  it('validate 支持回调', async () => {
    const { form } = createHost({ rules: { name: [{ required: true }] } })
    const cb = vi.fn()
    await form().validate(cb)
    expect(cb).toHaveBeenCalledWith(false)
  })

  it('email 类型规则校验', async () => {
    const { model, form } = createHost({
      rules: { email: [{ type: 'email', message: '邮箱格式错误' }] },
    })
    model.email = 'not-an-email'
    const valid = await form().validate()
    expect(valid).toBe(false)
  })

  it('validateField 只校验指定字段', async () => {
    const { wrapper, form } = createHost({
      rules: { name: [{ required: true }], email: [{ required: true }] },
    })
    await form().validateField('name')
    await nextTick()
    expect(wrapper.findAll('.kk-form-item__error')).toHaveLength(1)
  })

  it('clearValidate 清空错误提示', async () => {
    const { wrapper, form } = createHost({ rules: { name: [{ required: true }] } })
    await form().validate()
    await nextTick()
    expect(wrapper.find('.kk-form-item__error').exists()).toBe(true)
    form().clearValidate()
    await nextTick()
    expect(wrapper.find('.kk-form-item__error').exists()).toBe(false)
  })

  it('resetFields 清空错误并触发 reset 事件', async () => {
    const { wrapper, form } = createHost({ rules: { name: [{ required: true }] } })
    await form().validate()
    await nextTick()
    form().resetFields()
    await nextTick()
    expect(wrapper.find('.kk-form-item__error').exists()).toBe(false)
    expect(wrapper.findComponent(KkForm).emitted('reset')).toHaveLength(1)
  })

  it('required 属性会在标签前生成必填星号', () => {
    const wrapper = mount(KkForm, {
      slots: {
        default: () =>
          h(KkFormItem, { label: '必填项', required: true }, () => h(KkInput)),
      },
    })
    expect(wrapper.find('.kk-form-item').classes()).toContain('is-required')
  })

  it('表单项错误态类名与 role 正确', async () => {
    const { wrapper, form } = createHost({ rules: { name: [{ required: true }] } })
    await form().validate()
    await nextTick()
    expect(wrapper.find('.kk-form-item').classes()).toContain('is-error')
    expect(wrapper.find('.kk-form-item__error').attributes('role')).toBe('alert')
  })

  it('输入触发 change 校验', async () => {
    const { wrapper, form } = createHost({ rules: { name: [{ required: true }] } })
    await form().validate()
    await nextTick()
    const input = wrapper.findAll('input')[0]
    await input.setValue('kk')
    await nextTick()
    expect(wrapper.find('.kk-form-item__error').exists()).toBe(false)
  })

  it('blur 触发 blur 类规则', async () => {
    const { wrapper } = createHost({
      rules: { name: [{ required: true, trigger: 'blur', message: 'blur 必填' }] },
    })
    expect(wrapper.find('.kk-form-item__error').exists()).toBe(false)

    await wrapper.findAll('input')[0].trigger('blur')
    await nextTick()
    expect(wrapper.find('.kk-form-item__error').text()).toContain('blur 必填')
  })

  it('labelPosition 与 inline 生成对应类名', () => {
    const wrapper = mount(KkForm, { props: { labelPosition: 'top', inline: true } })
    expect(wrapper.classes()).toContain('kk-form--label-top')
    expect(wrapper.classes()).toContain('is-inline')
  })

  it('disabled 透传给表单控件', async () => {
    const model = reactive({ name: '' })
    const wrapper = mount(KkForm, {
      props: { model, disabled: true },
      slots: {
        default: () =>
          h(KkFormItem, { prop: 'name' }, () =>
            h(KkInput, {
              modelValue: model.name,
              'onUpdate:modelValue': (v: string) => (model.name = v),
            })
          ),
      },
    })
    await nextTick()
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('size 由表单统一下发给输入框', async () => {
    const wrapper = mount(KkForm, {
      props: { size: 'large' },
      slots: {
        default: () => h(KkFormItem, { prop: 'name' }, () => h(KkInput)),
      },
    })
    await nextTick()
    expect(wrapper.find('.kk-input__control').classes()).toContain(
      'kk-input__control--large'
    )
  })

  it('submit 与 reset 事件被拦截默认行为', async () => {
    const wrapper = mount(KkForm)
    await wrapper.find('form').trigger('submit')
    await wrapper.find('form').trigger('reset')
    expect(wrapper.emitted('submit')).toHaveLength(1)
    expect(wrapper.emitted('reset')).toHaveLength(1)
  })

  it('scrollToField 在缺少元素时不报错', () => {
    const wrapper = mount(KkForm)
    expect(() => wrapper.vm.scrollToField('nope')).not.toThrow()
  })
})
