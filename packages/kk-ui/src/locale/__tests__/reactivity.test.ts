import { describe, expect, it } from 'vitest'
import { computed, defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { setLocale, useLocale, translate } from '../index'

describe('locale reactivity', () => {
  it('setLocale changes translate output', () => {
    setLocale('zh-CN')
    expect(translate('common.confirm')).toBe('确定')
    setLocale('en-US')
    expect(translate('common.confirm')).toBe('OK')
    setLocale('zh-CN')
  })

  it('useLocale().t inside computed reacts to setLocale', async () => {
    setLocale('zh-CN')
    const Comp = defineComponent({
      setup() {
        const { t } = useLocale()
        const label = computed(() => t('common.confirm'))
        return () => h('span', label.value)
      },
    })
    const wrapper = mount(Comp)
    expect(wrapper.text()).toBe('确定')
    setLocale('en-US')
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('OK')
    setLocale('zh-CN')
  })
})
