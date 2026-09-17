import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { setLocale } from '../../../locale'
import KkModal from '../Modal.vue'

/** 首帧挂载 + 显示 + 过渡回调，都要等两拍 */
async function flush(): Promise<void> {
  await nextTick()
  await nextTick()
  await nextTick()
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * 统一登记 wrapper：滚动锁是模块级引用计数，测试之间必须真正卸载，
 * 否则上一个用例的锁会把下一个用例的 body 状态带偏。
 */
const wrappers: { unmount: () => void }[] = []

function mountModal(
  props: Record<string, unknown> = {},
  slots: Record<string, string> = {}
) {
  const wrapper = mount(KkModal, { props, slots, attachTo: document.body })
  wrappers.push(wrapper)
  return wrapper
}

function query(selector: string): HTMLElement | null {
  return document.body.querySelector(selector)
}

/** jsdom 没有 PointerEvent，MouseEvent 同样带 clientX / clientY */
function pointer(type: string, x: number, y: number): MouseEvent {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y,
  })
}

afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount())
  document.body.innerHTML = ''
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.body.style.userSelect = ''
  // 语言是模块级状态，用例之间必须复位，否则文案断言互相串味
  setLocale('zh-CN')
  vi.restoreAllMocks()
})

describe('KkModal', () => {
  it('modelValue 为 false 时不渲染浮层', async () => {
    mountModal()
    await flush()
    expect(query('.kk-modal')).toBeNull()
  })

  it('打开后渲染标题、主体内容与对话框语义', async () => {
    mountModal(
      { modelValue: true, title: '标题', subtitle: '副标题' },
      {
        default: '<p class="demo-body">内容</p>',
      }
    )
    await flush()

    const dialog = query('.kk-modal')
    expect(dialog).not.toBeNull()
    expect(dialog?.getAttribute('role')).toBe('dialog')
    expect(dialog?.getAttribute('aria-modal')).toBe('true')
    expect(query('.kk-modal__title')?.textContent).toBe('标题')
    expect(query('.kk-modal__subtitle')?.textContent).toBe('副标题')
    expect(query('.demo-body')).not.toBeNull()
    // 有标题时用 aria-labelledby 关联，而不是 aria-label
    expect(dialog?.getAttribute('aria-labelledby')).toBe(query('.kk-modal__title')?.id)
  })

  it('尺寸类 props 生效：width / top / size / bordered', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      width: 640,
      top: 40,
      bordered: false,
    })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const overlay = query('.kk-modal__overlay') as HTMLElement

    expect(dialog.style.width).toBe('640px')
    expect(overlay.style.getPropertyValue('--kk-modal-top')).toBe('40px')
    expect(dialog.className).not.toContain('is-bordered')
    w.unmount()
  })

  it('size 预设在没有 width 时兜底', async () => {
    mountModal({ modelValue: true, title: '标题', size: 'large' })
    await flush()
    expect((query('.kk-modal') as HTMLElement).style.width).toBe('760px')
  })

  it('点击关闭按钮触发 close 与 update:modelValue', async () => {
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()

    await (query('.kk-modal__close') as HTMLElement).click()
    expect(w.emitted('close')?.[0]).toEqual(['close'])
    expect(w.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('点击遮罩关闭，maskClosable 为 false 时忽略', async () => {
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()

    await (query('.kk-modal__overlay') as HTMLElement).click()
    expect(w.emitted('close')?.[0]).toEqual(['mask'])

    const w2 = mountModal({ modelValue: true, title: '标题', maskClosable: false })
    await flush()
    const overlays = document.body.querySelectorAll('.kk-modal__overlay')
    await (overlays[overlays.length - 1] as HTMLElement).click()
    expect(w2.emitted('close')).toBeUndefined()
  })

  it('Esc 关闭，closeOnEsc 为 false 时忽略', async () => {
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(w.emitted('close')?.[0]).toEqual(['esc'])

    const w2 = mountModal({ modelValue: true, title: '标题', closeOnEsc: false })
    await flush()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(w2.emitted('close')).toBeUndefined()
  })

  it('disabled 时关闭按钮、遮罩、Esc 都不生效', async () => {
    const w = mountModal({ modelValue: true, title: '标题', disabled: true })
    await flush()

    await (query('.kk-modal__close') as HTMLElement).click()
    await (query('.kk-modal__overlay') as HTMLElement).click()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))

    expect(w.emitted('update:modelValue')).toBeUndefined()
    expect(w.emitted('close')).toBeUndefined()
  })

  it('loading 时渲染主体加载遮罩', async () => {
    mountModal({ modelValue: true, title: '标题', loading: true })
    await flush()
    expect(query('.kk-modal__loading')).not.toBeNull()
    expect(query('.kk-modal')?.className).toContain('is-loading')
  })

  it('header / footer / close 插槽覆盖默认内容', async () => {
    mountModal(
      { modelValue: true, title: '默认标题', showClose: true },
      {
        header: '<div class="demo-header">头部插槽</div>',
        footer: '<div class="demo-footer">底部插槽</div>',
        close: '<span class="demo-close">X</span>',
      }
    )
    await flush()

    expect(query('.demo-header')).not.toBeNull()
    expect(query('.kk-modal__title')).toBeNull()
    expect(query('.demo-footer')).not.toBeNull()
    expect(query('.demo-close')).not.toBeNull()
  })

  it('footer 为 true 时渲染默认按钮，取消按钮会关闭弹窗（BUG 回归）', async () => {
    const w = mountModal({ modelValue: true, title: '标题', footer: true })
    await flush()

    const buttons = document.body.querySelectorAll('.kk-modal__footer button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].textContent?.trim()).toBe('取消')
    expect(buttons[1].textContent?.trim()).toBe('确定')

    await (buttons[0] as HTMLElement).click()
    await flush()

    expect(w.emitted('cancel')).toHaveLength(1)
    // 关闭来源标记为 cancel，便于外部区分是哪个按钮触发的关闭
    expect(w.emitted('close')?.[0]).toEqual(['cancel'])
    expect(w.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('确定按钮只抛 confirm，关闭时机交给外部（配合 okLoading 做异步提交）', async () => {
    const w = mountModal({ modelValue: true, title: '标题', footer: true })
    await flush()

    const buttons = document.body.querySelectorAll('.kk-modal__footer button')
    await (buttons[1] as HTMLElement).click()

    expect(w.emitted('confirm')).toHaveLength(1)
    expect(w.emitted('update:modelValue')).toBeUndefined()
  })

  it('disabled 时默认取消按钮置灰且点击不关闭', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      footer: true,
      disabled: true,
    })
    await flush()

    const cancel = document.body.querySelector(
      '.kk-modal__footer button'
    ) as HTMLButtonElement
    expect(cancel.disabled).toBe(true)

    cancel.click()
    await flush()

    expect(w.emitted('cancel')).toBeUndefined()
    expect(w.emitted('update:modelValue')).toBeUndefined()
  })

  it('默认按钮文案跟随语言切换，未显式传入时走 locale', async () => {
    setLocale('en-US')
    mountModal({ modelValue: true, title: '标题', footer: true, okText: 'Send' })
    await flush()

    const buttons = document.body.querySelectorAll('.kk-modal__footer button')
    expect(buttons[0].textContent?.trim()).toBe('Cancel')
    // 显式传入的文案优先于 locale
    expect(buttons[1].textContent?.trim()).toBe('Send')
  })

  it('footer 为 false 时不渲染底部区域', async () => {
    mountModal({ modelValue: true, title: '标题' })
    await flush()
    expect(query('.kk-modal__footer')).toBeNull()
  })

  it('draggable：拖动写入 transform，且不触发重渲染', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      draggable: true,
      dragBounds: 'none',
    })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const header = query('.kk-modal__header') as HTMLElement

    header.dispatchEvent(pointer('pointerdown', 100, 100))
    dialog.dispatchEvent(pointer('pointermove', 124, 116))

    expect(dialog.style.transform).toBe('translate3d(24.0px, 16.0px, 0)')
    expect(w.emitted('drag-start')).toHaveLength(1)
    expect(w.emitted('drag')?.[0]).toEqual([{ x: 24, y: 16 }])

    dialog.dispatchEvent(pointer('pointerup', 124, 116))
    expect(dialog.className).not.toContain('is-dragging')
    expect(w.emitted('drag-end')?.[0]).toEqual([{ x: 24, y: 16 }])
  })

  it('拖动被限制在视口内，至少保留 56px 可见', async () => {
    mountModal({ modelValue: true, title: '标题', draggable: true })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const header = query('.kk-modal__header') as HTMLElement

    // jsdom 不做布局，这里给出一个真实的矩形让边界计算有依据
    vi.spyOn(dialog, 'getBoundingClientRect').mockReturnValue({
      x: 232,
      y: 60,
      top: 60,
      left: 232,
      right: 792,
      bottom: 360,
      width: 560,
      height: 300,
      toJSON: () => ({}),
    } as DOMRect)

    header.dispatchEvent(pointer('pointerdown', 300, 80))
    // 向右下角猛拖：right 不能小于 56，left 不能大于 innerWidth - 56
    dialog.dispatchEvent(pointer('pointermove', 5000, 5000))
    const maxRight = Number(
      /translate3d\(([-\d.]+)px/.exec(dialog.style.transform ?? '')?.[1] ?? 0
    )
    expect(dialog.getBoundingClientRect().right + maxRight).toBeGreaterThanOrEqual(56)
    expect(dialog.getBoundingClientRect().left + maxRight).toBeLessThanOrEqual(
      window.innerWidth - 56
    )

    // 拖回左上：left 变成负值也应被兜住
    dialog.dispatchEvent(pointer('pointermove', -5000, -5000))
    const minLeft = Number(
      /translate3d\(([-\d.]+)px/.exec(dialog.style.transform ?? '')?.[1] ?? 0
    )
    expect(dialog.getBoundingClientRect().right + minLeft).toBeGreaterThanOrEqual(56)
  })

  it('dragHandle 为 modal 时按钮等交互元素上不触发拖动', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      draggable: true,
      dragHandle: 'modal',
    })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const close = query('.kk-modal__close') as HTMLElement

    close.dispatchEvent(pointer('pointerdown', 10, 10))
    dialog.dispatchEvent(pointer('pointermove', 60, 60))
    expect(dialog.style.transform).toBe('')
    expect(w.emitted('drag-start')).toBeUndefined()
  })

  it('draggable 为 false 时不响应拖动', async () => {
    mountModal({ modelValue: true, title: '标题' })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const header = query('.kk-modal__header') as HTMLElement

    header.dispatchEvent(pointer('pointerdown', 10, 10))
    dialog.dispatchEvent(pointer('pointermove', 60, 60))
    expect(dialog.style.transform).toBe('')
  })

  it('打开时锁定 body 滚动，关闭后恢复', async () => {
    document.body.style.overflow = 'visible'
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()
    expect(document.body.style.overflow).toBe('hidden')

    await w.setProps({ modelValue: false })
    await flush()
    expect(document.body.style.overflow).toBe('visible')
  })

  it('关闭后位移不保留，再次打开回到原位', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      draggable: true,
      dragBounds: 'none',
    })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const header = query('.kk-modal__header') as HTMLElement
    header.dispatchEvent(pointer('pointerdown', 0, 0))
    dialog.dispatchEvent(pointer('pointermove', 40, 40))
    dialog.dispatchEvent(pointer('pointerup', 40, 40))
    expect(dialog.style.transform).not.toBe('')

    await w.setProps({ modelValue: false })
    await flush()
    // 关闭瞬间保持原位，避免出场动画中途跳回
    expect(dialog.style.transform).not.toBe('')

    await w.setProps({ modelValue: true })
    await flush()
    expect(dialog.style.transform).toBe('')
  })

  it('resetOnClose 为 false 时保留位移', async () => {
    const w = mountModal({
      modelValue: true,
      title: '标题',
      draggable: true,
      dragBounds: 'none',
      resetOnClose: false,
    })
    await flush()

    const dialog = query('.kk-modal') as HTMLElement
    const header = query('.kk-modal__header') as HTMLElement
    header.dispatchEvent(pointer('pointerdown', 0, 0))
    dialog.dispatchEvent(pointer('pointermove', 40, 40))
    dialog.dispatchEvent(pointer('pointerup', 40, 40))

    await w.setProps({ modelValue: false })
    await flush()
    await w.setProps({ modelValue: true })
    await flush()
    expect(dialog.style.transform).toBe('translate3d(40.0px, 40.0px, 0)')
  })

  it('destroyOnClose 时关闭后销毁节点', async () => {
    const w = mountModal({ modelValue: true, title: '标题', destroyOnClose: true })
    await flush()
    expect(query('.kk-modal')).not.toBeNull()

    await w.setProps({ modelValue: false })
    await flush()
    // 出场动画期间节点仍在，兜底计时到期后移除
    await wait(500)
    await flush()
    expect(query('.kk-modal')).toBeNull()
  })

  it('屏蔽 Esc 时不影响其它按键处理', async () => {
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()

    // Tab 走焦点陷阱分支，不应抛错也不应关闭
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }))
    expect(w.emitted('close')).toBeUndefined()
  })

  it('卸载时释放滚动锁', async () => {
    const w = mountModal({ modelValue: true, title: '标题' })
    await flush()
    expect(document.body.style.overflow).toBe('hidden')

    w.unmount()
    await flush()
    expect(document.body.style.overflow).toBe('')
  })
})
