import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref, type Ref } from 'vue'
import { useClickOutside } from '../useClickOutside'

const mounted: { unmount: () => void }[] = []

function mountHook(
  targets: Array<Ref<HTMLElement | null | undefined>>,
  handler: (e: Event) => void
) {
  const Comp = defineComponent({
    setup() {
      useClickOutside(targets, handler)
      return () => h('div')
    },
  })
  const wrapper = mount(Comp, { attachTo: document.body })
  mounted.push(wrapper)
  return wrapper
}

function press(el: Element | Document): void {
  el.dispatchEvent(new Event('pointerdown', { bubbles: true }))
}

afterEach(() => {
  mounted.splice(0).forEach((w) => w.unmount())
  document.body.innerHTML = ''
})

describe('useClickOutside', () => {
  it('点击目标之外触发回调，点击目标（含其子孙）不触发', () => {
    const box = document.createElement('div')
    const child = document.createElement('span')
    box.appendChild(child)
    const outside = document.createElement('button')
    document.body.append(box, outside)

    const handler = vi.fn()
    mountHook([ref<HTMLElement | null>(box)], handler)

    press(document) // 目标之外
    expect(handler).toHaveBeenCalledTimes(1)

    press(outside) // 目标之外
    expect(handler).toHaveBeenCalledTimes(2)

    press(child) // 在目标内部（子孙节点）
    expect(handler).toHaveBeenCalledTimes(2)
  })

  it('ref 的值是数组（v-for 场景）时能正确判定且不抛错', () => {
    // 回归：Pagination 的 sizes 把 ref 写在 v-for 里，Vue 收集成数组，
    // 旧实现会走到 `array.contains` → TypeError: contains is not a function
    const a = document.createElement('div')
    const b = document.createElement('div')
    document.body.append(a, b)

    const handler = vi.fn()
    mountHook([ref<unknown>([a, b]) as never], handler)

    expect(() => press(a)).not.toThrow()
    expect(handler).not.toHaveBeenCalled()
    expect(() => press(b)).not.toThrow()
    expect(handler).not.toHaveBeenCalled()

    // 关键断言：点在「数组之外」必须能回调。
    // 旧实现会在 `.some` 里先抛 `contains is not a function`，回调整个不执行。
    const outside = document.createElement('button')
    document.body.appendChild(outside)
    press(outside)
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('ref 的值不是 Node 时静默忽略，不抛错', () => {
    const handler = vi.fn()
    mountHook([ref<unknown>({ fake: true }) as never], handler)

    expect(() => press(document)).not.toThrow()
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
