import { mount } from '@vue/test-utils'
import { describe, it, expect, afterEach, vi } from 'vitest'
import { nextTick } from 'vue'
import { setLocale } from '../../../locale'
import KkDrawer from '../Drawer.vue'

async function flush(): Promise<void> {
  await nextTick()
  await nextTick()
  await nextTick()
}

const wrappers: { unmount: () => void }[] = []

function mountDrawer(
  props: Record<string, unknown> = {},
  slots: Record<string, string> = {}
) {
  const wrapper = mount(KkDrawer, { props, slots, attachTo: document.body })
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
  setLocale('zh-CN')
  vi.restoreAllMocks()
})

describe('KkDrawer', () => {
  it('modelValue 为 false 时不渲染浮层', async () => {
    mountDrawer()
    await flush()
    expect(query('.kk-drawer')).toBeNull()
  })

  it('打开后渲染标题、主体与对话框语义，并带上方向类名', async () => {
    mountDrawer(
      { modelValue: true, title: '标题', subtitle: '副标题', placement: 'left' },
      { default: '<p class="demo-body">内容</p>' }
    )
    await flush()

    const drawer = query('.kk-drawer')
    expect(drawer).not.toBeNull()
    expect(drawer?.classList.contains('kk-drawer--left')).toBe(true)
    expect(drawer?.getAttribute('role')).toBe('dialog')
    expect(drawer?.getAttribute('aria-modal')).toBe('true')
    expect(query('.kk-drawer__title')?.textContent).toContain('标题')
    expect(query('.kk-drawer__subtitle')?.textContent).toContain('副标题')
    expect(query('.demo-body')).not.toBeNull()
  })

  it('size 决定左右方向的宽度，上下方向则写成高度', async () => {
    mountDrawer({ modelValue: true, size: 400 })
    await flush()
    expect((query('.kk-drawer') as HTMLElement).style.width).toBe('400px')

    const top = mountDrawer({ modelValue: true, placement: 'top', size: '50%' })
    await flush()
    const topDrawer = document.body.querySelectorAll('.kk-drawer')[1] as HTMLElement
    expect(topDrawer.style.height).toBe('50%')
    expect(topDrawer.classList.contains('kk-drawer--top')).toBe(true)
    expect(top.vm).toBeTruthy()
  })

  it('点击关闭按钮会关闭并抛出 close 原因', async () => {
    const w = mountDrawer({ modelValue: true, title: '标题' })
    await flush()

    await (query('.kk-drawer__close') as HTMLElement).click()
    await flush()

    expect(w.emitted('close')?.[0]).toEqual(['close'])
    expect(w.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('点击遮罩关闭，maskClosable 为 false 时不关闭', async () => {
    const w = mountDrawer({ modelValue: true, title: '标题' })
    await flush()
    await (query('.kk-drawer__overlay') as HTMLElement).click()
    await flush()
    expect(w.emitted('close')?.[0]).toEqual(['mask'])

    const locked = mountDrawer({ modelValue: true, title: '标题', maskClosable: false })
    await flush()
    const overlays = document.body.querySelectorAll('.kk-drawer__overlay')
    await (overlays[overlays.length - 1] as HTMLElement).click()
    await flush()
    expect(locked.emitted('update:modelValue')).toBeUndefined()
  })

  it('按 Esc 关闭，disabled 时遮罩与 Esc 都不生效', async () => {
    const w = mountDrawer({ modelValue: true, title: '标题' })
    await flush()
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    )
    await flush()
    expect(w.emitted('close')?.[0]).toEqual(['esc'])

    const locked = mountDrawer({ modelValue: true, title: '标题', disabled: true })
    await flush()
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    )
    await (document.body.querySelector('.kk-drawer__overlay') as HTMLElement).click()
    await flush()
    expect(locked.emitted('update:modelValue')).toBeUndefined()
  })

  it('默认底部：取消按钮会关闭抽屉，确定按钮只抛 confirm', async () => {
    const w = mountDrawer({ modelValue: true, title: '标题', footer: true })
    await flush()

    const buttons = document.body.querySelectorAll('.kk-drawer__footer button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].textContent?.trim()).toBe('取消')

    await (buttons[0] as HTMLElement).click()
    await flush()
    expect(w.emitted('cancel')).toHaveLength(1)
    expect(w.emitted('close')?.[0]).toEqual(['cancel'])
    expect(w.emitted('update:modelValue')?.[0]).toEqual([false])

    const second = mountDrawer({ modelValue: true, title: '标题', footer: true })
    await flush()
    const okButtons = document.body.querySelectorAll('.kk-drawer__footer button')
    await (okButtons[okButtons.length - 1] as HTMLElement).click()
    expect(second.emitted('confirm')).toHaveLength(1)
    expect(second.emitted('update:modelValue')).toBeUndefined()
  })

  it('resizable 时渲染拖动手柄，拖动后尺寸被限制在 minSize / maxSize 之间', async () => {
    const w = mountDrawer({
      modelValue: true,
      title: '标题',
      resizable: true,
      minSize: 200,
      maxSize: 600,
    })
    await flush()

    const handle = query('.kk-drawer__resizer')
    expect(handle).not.toBeNull()

    handle?.dispatchEvent(pointer('pointerdown', 0, 0))
    // right 方向向内拖（clientX 变小）本该变小，被 minSize 兜住
    handle?.dispatchEvent(pointer('pointermove', -100, 0))
    await flush()

    const drawer = query('.kk-drawer') as HTMLElement
    expect(drawer.style.width).toBe('200px')
    expect(drawer.classList.contains('is-resizing')).toBe(true)

    handle?.dispatchEvent(pointer('pointerup', -100, 0))
    await flush()
    expect(w.emitted('resize')?.[0]).toEqual([200])
    expect(drawer.classList.contains('is-resizing')).toBe(false)
  })

  it('未开启 resizable 时不渲染拖动手柄', async () => {
    mountDrawer({ modelValue: true, title: '标题' })
    await flush()
    expect(query('.kk-drawer__resizer')).toBeNull()
  })

  it('头部与底部插槽可完全接管内容', async () => {
    mountDrawer(
      { modelValue: true, title: '标题', footer: true },
      {
        header: '<div class="demo-header">自定义头部</div>',
        footer: '<div class="demo-footer">自定义底部</div>',
        close: '<span class="demo-close">x</span>',
      }
    )
    await flush()

    expect(query('.demo-header')).not.toBeNull()
    expect(query('.kk-drawer__title')).toBeNull()
    expect(query('.demo-footer')).not.toBeNull()
    expect(query('.demo-close')).not.toBeNull()
  })

  it('destroyOnClose 关闭后销毁节点，卸载时释放滚动锁', async () => {
    const w = mountDrawer({ modelValue: true, title: '标题', destroyOnClose: true })
    await flush()
    expect(query('.kk-drawer')).not.toBeNull()
    expect(document.body.style.overflow).toBe('hidden')

    await w.setProps({ modelValue: false })
    await new Promise((resolve) => setTimeout(resolve, 500))
    await flush()

    expect(query('.kk-drawer')).toBeNull()
    expect(document.body.style.overflow).toBe('')
  })

  it('实例方法 open / close / reset 可用，close 可指定原因', async () => {
    const w = mountDrawer({ modelValue: false, title: '标题' })
    await flush()

    ;(w.vm as unknown as { open: () => void }).open()
    expect(w.emitted('update:modelValue')?.[0]).toEqual([true])

    ;(w.vm as unknown as { close: (reason?: string) => void }).close('esc')
    expect(w.emitted('close')?.[0]).toEqual(['esc'])

    expect(typeof (w.vm as unknown as { reset: () => void }).reset).toBe('function')
  })

  it('loading 时渲染遮罩层并禁用指针事件', async () => {
    mountDrawer({ modelValue: true, title: '标题', loading: true })
    await flush()
    const drawer = query('.kk-drawer')
    expect(drawer?.classList.contains('is-loading')).toBe(true)
    expect(query('.kk-drawer__loading')).not.toBeNull()
  })
})
