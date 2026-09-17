import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, afterEach } from 'vitest'
import KkUpload from '../Upload.vue'
import type { KkUploadFile, KkUploadInstance, KkUploadRequestOptions } from '../types'

function makeFile(name: string, content = 'x', type = 'text/plain'): File {
  return new File([content], name, { type })
}

async function pickFiles(
  wrapper: ReturnType<typeof mount>,
  files: File[]
): Promise<void> {
  const input = wrapper.find('input[type="file"]')
  Object.defineProperty(input.element, 'files', {
    value: files,
    configurable: true,
  })
  await input.trigger('change')
  await flushPromises()
  await flushPromises()
}

const wrappers: { unmount: () => void }[] = []

function mountUpload(props: Record<string, unknown> = {}) {
  const wrapper = mount(KkUpload, { props, attachTo: document.body })
  wrappers.push(wrapper)
  return wrapper
}

afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount())
  document.body.innerHTML = ''
  vi.restoreAllMocks()
})

describe('KkUpload', () => {
  it('渲染触发区：role=button + aria-label', () => {
    const wrapper = mountUpload()
    const trigger = wrapper.find('.kk-upload__trigger')
    expect(trigger.exists()).toBe(true)
    expect(trigger.attributes('role')).toBe('button')
    expect(trigger.attributes('aria-label')).toBeTruthy()
    expect(wrapper.find('.kk-upload__input').exists()).toBe(true)
  })

  it('选文件进入列表并回写 modelValue', async () => {
    const wrapper = mountUpload({
      httpRequest: () => Promise.resolve({ ok: 1 }),
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    const last = emitted?.[emitted.length - 1]?.[0] as KkUploadFile[]
    expect(last).toHaveLength(1)
    expect(last[0].name).toBe('a.txt')
  })

  it('limit 超出触发 exceed 与 onExceed，且只保留限额内文件', async () => {
    const onExceed = vi.fn()
    const wrapper = mountUpload({
      limit: 1,
      onExceed,
      httpRequest: () => Promise.resolve({}),
    })
    await pickFiles(wrapper, [makeFile('a.txt'), makeFile('b.txt')])
    expect(wrapper.emitted('exceed')).toBeTruthy()
    expect(onExceed).toHaveBeenCalledTimes(1)
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last).toHaveLength(1)
  })

  it('maxSize 拦截超大文件：状态置 fail 并抛出 error 事件', async () => {
    const wrapper = mountUpload({
      maxSize: 10,
      httpRequest: () => Promise.resolve({}),
    })
    await pickFiles(wrapper, [makeFile('big.txt', 'xxxxxxxxxxxx')])
    expect(wrapper.emitted('error')).toBeTruthy()
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last[0].status).toBe('fail')
  })

  it('minSize 拦截过小文件', async () => {
    const wrapper = mountUpload({
      minSize: 5,
      httpRequest: () => Promise.resolve({}),
    })
    await pickFiles(wrapper, [makeFile('tiny.txt')])
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last[0].status).toBe('fail')
  })

  it('beforeUpload 返回 false 拦截文件', async () => {
    const beforeUpload = vi.fn(() => false)
    const wrapper = mountUpload({
      autoUpload: false,
      beforeUpload,
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    expect(beforeUpload).toHaveBeenCalledTimes(1)
    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeFalsy()
  })

  it('beforeUpload 返回 File 可替换待上传文件', async () => {
    const replaced = makeFile('replaced.txt', 'replaced')
    const wrapper = mountUpload({
      autoUpload: false,
      beforeUpload: () => replaced,
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last[0].raw?.name).toBe('replaced.txt')
    expect(last[0].name).toBe('replaced.txt')
  })

  it('自定义 httpRequest 被调用', async () => {
    const httpRequest = vi.fn((options: KkUploadRequestOptions) =>
      Promise.resolve({ code: 0, size: options.file?.size ?? 0 })
    )
    const wrapper = mountUpload({ httpRequest })
    const file = makeFile('a.txt')
    await pickFiles(wrapper, [file])
    expect(httpRequest).toHaveBeenCalledTimes(1)
    expect(httpRequest.mock.calls[0][0].file).toBe(file)
  })

  it('progress 与 success 事件', async () => {
    const wrapper = mountUpload({
      httpRequest: (options: KkUploadRequestOptions) => {
        options.onProgress({ percent: 40 })
        return Promise.resolve({ code: 0 })
      },
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    const progress = wrapper.emitted('progress')
    expect(progress).toBeTruthy()
    const payload = progress?.[0]?.[0] as { percent: number }
    expect(payload.percent).toBe(40)
    expect(wrapper.emitted('success')).toBeTruthy()
  })

  it('移除文件触发 update:modelValue 数量减少', async () => {
    const wrapper = mountUpload({
      httpRequest: () => Promise.resolve({}),
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    await flushPromises()
    const action = wrapper.find('.kk-upload__action')
    await action.trigger('click')
    await flushPromises()
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last).toHaveLength(0)
    expect(wrapper.emitted('remove')).toBeTruthy()
  })

  it('disabled 不响应：input change 与 trigger 点击均无效', async () => {
    const clickSpy = vi.spyOn(HTMLInputElement.prototype, 'click')
    const wrapper = mountUpload({ disabled: true })
    await pickFiles(wrapper, [makeFile('a.txt')])
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    await wrapper.find('.kk-upload__trigger').trigger('click')
    expect(clickSpy).not.toHaveBeenCalled()
  })

  it('拖拽 drop 添加文件', async () => {
    const wrapper = mountUpload({
      drag: true,
      httpRequest: () => Promise.resolve({}),
    })
    const trigger = wrapper.find('.kk-upload__trigger')
    await trigger.trigger('drop', {
      dataTransfer: { files: [makeFile('dropped.txt')] },
    })
    await flushPromises()
    await flushPromises()
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last).toHaveLength(1)
    expect(last[0].name).toBe('dropped.txt')
  })

  it('autoUpload=false 时由 submit() 触发上传', async () => {
    const httpRequest = vi.fn(() => Promise.resolve({}))
    const wrapper = mountUpload({ autoUpload: false, httpRequest })
    await pickFiles(wrapper, [makeFile('a.txt')])
    expect(httpRequest).not.toHaveBeenCalled()
    const vm = wrapper.vm as unknown as KkUploadInstance
    vm.submit()
    await flushPromises()
    expect(httpRequest).toHaveBeenCalledTimes(1)
  })

  it('picture-card 渲染卡片触发区', () => {
    const wrapper = mountUpload({ listType: 'picture-card' })
    expect(wrapper.find('.kk-upload__card').exists()).toBe(true)
    expect(wrapper.find('.kk-upload__trigger:not(.kk-upload__card)').exists()).toBe(
      false
    )
  })

  it('expose.clear() 清空列表', async () => {
    const wrapper = mountUpload({
      autoUpload: false,
    })
    await pickFiles(wrapper, [makeFile('a.txt')])
    const vm = wrapper.vm as unknown as KkUploadInstance
    vm.clear()
    await flushPromises()
    const last = wrapper.emitted('update:modelValue')?.at(-1)?.[0] as KkUploadFile[]
    expect(last).toHaveLength(0)
  })
})
