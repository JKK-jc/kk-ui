import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h } from 'vue'
import { withInstall, withInstallGroup } from '..'

describe('withInstall', () => {
  it('为组件挂载 install 并注册 name', () => {
    const Comp = defineComponent({ name: 'KkDemo', render: () => h('div') })
    const installed = withInstall(Comp)
    const app = { component: vi.fn() }
    expect(installed.install).toBeTypeOf('function')
    installed.install!(app as never)
    expect(app.component).toHaveBeenCalledWith('KkDemo', installed)
  })

  it('支持显式指定注册名', () => {
    const Comp = defineComponent({ render: () => h('div') })
    const installed = withInstall(Comp, 'KkCustom')
    const app = { component: vi.fn() }
    installed.install!(app as never)
    expect(app.component).toHaveBeenCalledWith('KkCustom', installed)
  })

  it('无名称时跳过注册', () => {
    const Comp = defineComponent({ render: () => h('div') })
    const installed = withInstall(Comp)
    const app = { component: vi.fn() }
    installed.install!(app as never)
    expect(app.component).not.toHaveBeenCalled()
  })

  it('withInstallGroup 批量处理', () => {
    const A = defineComponent({ name: 'KkA', render: () => h('div') })
    const B = defineComponent({ name: 'KkB', render: () => h('div') })
    const list = withInstallGroup([A, B])
    expect(list).toHaveLength(2)
    expect(list[0].install).toBeTypeOf('function')
    expect(list[1].install).toBeTypeOf('function')
  })
})
