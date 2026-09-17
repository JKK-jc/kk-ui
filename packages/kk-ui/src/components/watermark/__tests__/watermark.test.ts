import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, it, expect, afterEach, vi, beforeEach } from 'vitest'
import KkWatermark from '../Watermark.vue'

/** jsdom 没有 canvas：构造一个最小桩，验证绘制流程不崩并产出 dataURL */
interface FakeCtx {
  font: string
  fillStyle: string
  textAlign: string
  textBaseline: string
  measureText: (t: string) => { width: number }
  fillText: (t: string, x: number, y: number) => void
  clearRect: () => void
  translate: () => void
  rotate: () => void
  scale: () => void
  drawImage: () => void
}

let drawnTexts: string[] = []
/**
 * 只需要 `mockRestore`：把类型收窄到最小契约，
 * 避免 `ReturnType<typeof vi.spyOn>` 的宽泛签名与具体重载不兼容。
 */
interface SpyHandle {
  mockRestore: () => void
}

let getContextSpy: SpyHandle | null = null
let toDataUrlSpy: SpyHandle | null = null

function installCanvasStub(): void {
  const fakeCtx: FakeCtx = {
    font: '',
    fillStyle: '',
    textAlign: '',
    textBaseline: '',
    measureText: () => ({ width: 80 }),
    fillText: (text: string) => {
      drawnTexts.push(text)
    },
    clearRect: () => {},
    translate: () => {},
    rotate: () => {},
    scale: () => {},
    drawImage: () => {},
  }
  getContextSpy = vi
    .spyOn(HTMLCanvasElement.prototype, 'getContext')
    .mockReturnValue(fakeCtx as unknown as CanvasRenderingContext2D)
  toDataUrlSpy = vi
    .spyOn(HTMLCanvasElement.prototype, 'toDataURL')
    .mockReturnValue('data:image/png;base64,FAKE')
}

function uninstallCanvasStub(): void {
  getContextSpy?.mockRestore()
  toDataUrlSpy?.mockRestore()
  getContextSpy = null
  toDataUrlSpy = null
}

beforeEach(() => {
  drawnTexts = []
})
afterEach(() => {
  uninstallCanvasStub()
})

describe('KkWatermark', () => {
  it('渲染包裹层与覆盖层，并包裹默认插槽内容', () => {
    const wrapper = mount(KkWatermark, {
      slots: { default: '<p class="doc">机密文档</p>' },
    })
    expect(wrapper.find('.kk-watermark').exists()).toBe(true)
    expect(wrapper.find('.kk-watermark__overlay').exists()).toBe(true)
    expect(wrapper.find('.doc').text()).toBe('机密文档')
  })

  it('opacity 与 zIndex 始终应用（即便 canvas 不可用）', () => {
    const wrapper = mount(KkWatermark, {
      props: { opacity: 0.3, zIndex: 20 },
    })
    const overlay = wrapper.find('.kk-watermark__overlay').element as HTMLElement
    expect(overlay.style.opacity).toBe('0.3')
    expect(overlay.style.zIndex).toBe('20')
  })

  it('canvas getContext 返回 null（jsdom）时不抛错，redraw 可调用', () => {
    // 不安装桩，保持 jsdom 默认 null
    const wrapper = mount(KkWatermark, {
      props: { content: 'abc' },
    })
    const vm = wrapper.vm as unknown as { redraw: () => void }
    expect(() => {
      vm.redraw()
    }).not.toThrow()
    expect(wrapper.find('.kk-watermark__overlay').exists()).toBe(true)
  })

  it('有 canvas 桩时把 content 文案绘制到画布并铺为 background', async () => {
    installCanvasStub()
    const wrapper = mount(KkWatermark, {
      props: { content: '内部资料', cross: false },
    })
    await nextTick()
    const overlay = wrapper.find('.kk-watermark__overlay').element as HTMLElement
    expect(overlay.style.backgroundImage).toContain('url("data:image/png;base64,FAKE")')
    expect(drawnTexts).toContain('内部资料')
  })

  it('cross 为 true 时生成两层背景（双向铺排）', async () => {
    installCanvasStub()
    const wrapper = mount(KkWatermark, {
      props: { content: '机密', cross: true, repeat: true },
    })
    await nextTick()
    const overlay = wrapper.find('.kk-watermark__overlay').element as HTMLElement
    const urls = overlay.style.backgroundImage.match(/url\(/g)
    expect(urls).toHaveLength(2)
    expect(overlay.style.backgroundRepeat).toBe('repeat')
  })

  it('repeat 为 false 时背景不重复', async () => {
    installCanvasStub()
    const wrapper = mount(KkWatermark, {
      props: { content: 'x', cross: false, repeat: false },
    })
    await nextTick()
    const overlay = wrapper.find('.kk-watermark__overlay').element as HTMLElement
    expect(overlay.style.backgroundRepeat).toBe('no-repeat')
  })

  it('#content 插槽文本取代 content 属性参与绘制', async () => {
    installCanvasStub()
    mount(KkWatermark, {
      props: { content: 'should-be-ignored' },
      slots: { content: '插槽机密' },
    })
    await nextTick()
    expect(drawnTexts).toContain('插槽机密')
    expect(drawnTexts).not.toContain('should-be-ignored')
  })

  it('image 模式不抛错（onload 不触发也安全）', () => {
    expect(() => {
      mount(KkWatermark, { props: { image: '/logo.png' } })
    }).not.toThrow()
  })
})
