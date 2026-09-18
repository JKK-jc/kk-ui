<script setup lang="ts">
import { computed, inject, onBeforeUnmount, ref, watch } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { FORM_CONTEXT_KEY } from '../form/context'
import { nextZIndex, lockScroll } from '../modal/manager'
import { formatBytes } from '../../utils/format'
import type { Size } from '../../types'
import type {
  KkUploadBeforeUpload,
  KkUploadFile,
  KkUploadInstance,
  KkUploadProps,
} from './types'

defineOptions({ name: 'KkUpload', inheritAttrs: false })

const props = withDefaults(defineProps<KkUploadProps>(), {
  modelValue: () => [],
  action: '',
  method: 'POST',
  headers: () => ({}),
  data: () => ({}),
  name: 'file',
  withCredentials: false,
  multiple: false,
  accept: '',
  directory: false,
  limit: 0,
  maxSize: 0,
  minSize: 0,
  drag: false,
  listType: 'text',
  showFileList: true,
  disabled: false,
  autoUpload: true,
  paste: false,
  tip: '',
  size: undefined,
  /** 点击预览时是否弹出内置图片预览灯箱；为 false 时仅抛 `preview` 事件 */
  previewModal: true,
})

const emit = defineEmits<{
  'update:modelValue': [files: KkUploadFile[]]
  change: [files: KkUploadFile[]]
  progress: [payload: { file: KkUploadFile; percent: number }]
  success: [payload: { file: KkUploadFile; response: unknown }]
  error: [payload: { file: KkUploadFile; error: string }]
  remove: [file: KkUploadFile]
  exceed: [files: KkUploadFile[]]
  preview: [file: KkUploadFile]
}>()

const ns = useNamespace('upload')
const { t } = useLocale()

/* ---------- 表单上下文 ---------- */
const formContext = inject(FORM_CONTEXT_KEY, undefined)

const isDisabled = computed(() => props.disabled || Boolean(formContext?.disabled))
const mergedSize = computed<Size>(
  () => props.size ?? (formContext?.size as Size | undefined) ?? 'medium'
)

/* ---------- refs ---------- */
const inputRef = ref<HTMLInputElement | null>(null)
const fileList = ref<KkUploadFile[]>(
  props.modelValue ? props.modelValue.map((f) => ({ ...f })) : []
)
const dragCounter = ref(0)
const isDragover = ref(false)

/** 进行中的 XHR，按 uid 映射，便于 abort */
const xhrMap = new Map<string | number, XMLHttpRequest>()
/** 由 createObjectURL 生成的预览地址，卸载 / 移除时统一回收 */
const createdUrls = new Set<string>()

let uidSeed = 0
function genUid(): string {
  uidSeed += 1
  return `kk-upload-${uidSeed}`
}

/* ---------- 受控同步 ---------- */
let lastEmitted: KkUploadFile[] | undefined

function cloneList(): KkUploadFile[] {
  return fileList.value.map((f) => ({ ...f }))
}

function syncModelValue(): void {
  const snapshot = cloneList()
  lastEmitted = snapshot
  emit('update:modelValue', snapshot)
}

function syncModelValueAndChange(): void {
  syncModelValue()
  emit('change', cloneList())
}

watch(
  () => props.modelValue,
  (val) => {
    if (val === lastEmitted) return
    const next = val ? val.map((f) => ({ ...f })) : []
    pruneUrls(next)
    fileList.value = next
  }
)

/* ---------- URL 守卫（jsdom 没有 createObjectURL） ---------- */
function canCreateObjectURL(): boolean {
  return typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function'
}

function safeRevoke(url: string): void {
  if (canCreateObjectURL() && typeof URL.revokeObjectURL === 'function') {
    try {
      URL.revokeObjectURL(url)
    } catch {
      /* ignore */
    }
  }
  createdUrls.delete(url)
}

function pruneUrls(list: KkUploadFile[]): void {
  const keep = new Set(list.map((f) => f.url).filter((u): u is string => Boolean(u)))
  for (const url of [...createdUrls]) {
    if (!keep.has(url)) safeRevoke(url)
  }
}

function revokeAllUrls(): void {
  for (const url of [...createdUrls]) safeRevoke(url)
}

/* ---------- 校验工具 ---------- */
function matchAccept(file: File, accept: string): boolean {
  const tokens = accept
    .split(',')
    .map((token) => token.trim())
    .filter(Boolean)
  if (tokens.length === 0) return true
  const name = file.name || ''
  const type = file.type || ''
  return tokens.some((token) => {
    if (token.startsWith('.')) {
      return name.toLowerCase().endsWith(token.toLowerCase())
    }
    if (token.endsWith('/*')) {
      return type.startsWith(token.slice(0, -1))
    }
    return type === token
  })
}

function handleError(
  file: KkUploadFile,
  key: string,
  params?: Record<string, string | number>
): boolean {
  const error = t(`upload.${key}`, params)
  file.status = 'fail'
  file.error = error
  // 注意：onError 作为 prop 会被 Vue 自动注册为 `error` 事件的监听器，
  // 因此 emit('error') 本身就会调用它；这里先取返回值决定是否保留默认提示，
  // 仅在不抑制时才 emit，避免被抑制时重复触发。
  const keep = props.onError?.({ file, error }) !== false
  if (keep) emit('error', { file, error })
  return keep
}

async function beforeUploadCheck(file: KkUploadFile): Promise<KkUploadFile | null> {
  const hook = props.beforeUpload as KkUploadBeforeUpload | undefined
  if (!hook) return file
  try {
    const result = await hook(file)
    if (result === false) return null
    if (result instanceof Blob) {
      const replaced = result as File
      return {
        ...file,
        raw: replaced,
        name: replaced.name || file.name,
        size: replaced.size,
        type: replaced.type || file.type,
      }
    }
    return file
  } catch {
    return null
  }
}

function toFlattenFiles(files: FileList | File[] | null | undefined): File[] {
  if (!files) return []
  return Array.isArray(files) ? files : Array.from(files)
}

/* ---------- 选文件主流程 ---------- */
async function handleFiles(
  inputs: FileList | File[] | null | undefined
): Promise<void> {
  if (isDisabled.value) return
  const raws = toFlattenFiles(inputs)
  if (raws.length === 0) return

  const added: KkUploadFile[] = []
  const valid: KkUploadFile[] = []
  for (const raw of raws) {
    const file: KkUploadFile = {
      uid: genUid(),
      name: raw.name,
      size: raw.size,
      type: raw.type,
      status: 'ready',
      percent: 0,
      raw,
    }

    // 1) accept
    if (props.accept && !matchAccept(raw, props.accept)) {
      if (handleError(file, 'typeNotAllowed', { name: file.name })) {
        added.push(file)
      }
      continue
    }

    // 2) size
    const belowMin = props.minSize > 0 && raw.size < props.minSize
    const aboveMax = props.maxSize > 0 && raw.size > props.maxSize
    if (belowMin || aboveMax) {
      const size = belowMin ? props.minSize : props.maxSize
      if (
        handleError(file, 'sizeExceed', {
          name: file.name,
          size: formatBytes(size),
        })
      ) {
        added.push(file)
      }
      continue
    }

    // 3) beforeUpload（可能替换文件）
    const checked = await beforeUploadCheck(file)
    if (!checked) continue

    // picture 形态预生成缩略图
    if (
      (props.listType === 'picture' || props.listType === 'picture-card') &&
      canCreateObjectURL() &&
      checked.raw
    ) {
      const url = URL.createObjectURL(checked.raw)
      checked.url = url
      createdUrls.add(url)
    }

    added.push(checked)
    valid.push(checked)
  }

  if (added.length === 0) return

  // 4) limit（失败项同样占位，因此以 added 计算，valid 同步裁剪）
  if (props.limit > 0) {
    const remain = props.limit - fileList.value.length
    if (added.length > remain && remain >= 0) {
      const excess = added.slice(remain)
      emit('exceed', excess)
      added.splice(remain)
      valid.splice(remain)
    }
  }

  fileList.value.push(...added)
  syncModelValueAndChange()

  // 仅对通过校验的文件发起上传，失败项保持 fail 状态
  if (props.autoUpload) {
    valid.forEach((f) => upload(f))
  }
}

/* ---------- 上传实现 ---------- */
function upload(file?: KkUploadFile): void {
  if (!file) {
    submit()
    return
  }
  if (file.status === 'success') return

  file.status = 'uploading'
  file.percent = 0
  syncModelValueAndChange()

  const onProgress = (event: { percent: number }): void => {
    file.percent = Math.min(100, Math.max(0, Math.round(event.percent)))
    emit('progress', { file, percent: file.percent })
    syncModelValue()
  }

  const onSuccess = (response: unknown): void => {
    file.status = 'success'
    file.percent = 100
    file.response = response
    emit('success', { file, response })
    syncModelValueAndChange()
  }

  const onFail = (error: unknown): void => {
    file.status = 'fail'
    const message =
      error instanceof Error
        ? error.message
        : typeof error === 'string'
          ? error
          : t('upload.fail')
    file.error = message
    emit('error', { file, error: message })
    syncModelValueAndChange()
  }

  const options = {
    file: file.raw,
    name: props.name ?? 'file',
    data: props.data ?? {},
    headers: props.headers ?? {},
    withCredentials: Boolean(props.withCredentials),
    action: props.action ?? '',
    method: (props.method ?? 'POST').toUpperCase(),
    onProgress,
    onSuccess,
    onError: onFail,
  }

  // 自定义请求优先
  if (props.httpRequest) {
    const result = props.httpRequest(options)
    if (result !== undefined) {
      Promise.resolve(result)
        .then((response) => onSuccess(response))
        .catch((err) => onFail(err))
    }
    return
  }

  // 内置 XHR
  if (!options.action) {
    onFail(new Error(t('upload.empty')))
    return
  }

  const xhr = new XMLHttpRequest()
  xhrMap.set(file.uid, xhr)
  xhr.withCredentials = options.withCredentials
  xhr.open(options.method, options.action, true)

  for (const [key, value] of Object.entries(options.headers)) {
    xhr.setRequestHeader(key, value)
  }

  // jsdom 没有 xhr.upload；无进度则只为有实现的环境注册
  if (xhr.upload) {
    xhr.upload.addEventListener('progress', (event: ProgressEvent) => {
      if (event.lengthComputable) {
        onProgress({ percent: (event.loaded / event.total) * 100 })
      }
    })
  }

  xhr.addEventListener('load', () => {
    xhrMap.delete(file.uid)
    if (xhr.status < 200 || xhr.status >= 300) {
      onFail(new Error(`HTTP ${xhr.status}`))
      return
    }
    let response: unknown = xhr.response
    try {
      response = JSON.parse(xhr.responseText)
    } catch {
      /* 非 JSON 响应保留原始文本 */
    }
    onSuccess(response)
  })

  xhr.addEventListener('error', () => {
    xhrMap.delete(file.uid)
    onFail(new Error(t('upload.fail')))
  })

  xhr.addEventListener('abort', () => {
    xhrMap.delete(file.uid)
  })

  const formData = new FormData()
  for (const [key, value] of Object.entries(options.data)) {
    formData.append(key, String(value))
  }
  if (options.file) {
    formData.append(options.name, options.file, file.name)
  }
  xhr.send(formData)
}

function submit(): void {
  fileList.value.filter((f) => f.status === 'ready').forEach((f) => upload(f))
}

function abort(uid?: string | number): void {
  if (uid != null) {
    xhrMap.get(uid)?.abort()
    xhrMap.delete(uid)
    return
  }
  xhrMap.forEach((xhr) => xhr.abort())
  xhrMap.clear()
}

function clear(): void {
  abort()
  revokeAllUrls()
  fileList.value = []
  syncModelValueAndChange()
}

/* ---------- 移除 / 重试 / 预览 ---------- */
async function remove(file: KkUploadFile, e?: Event): Promise<void> {
  e?.preventDefault?.()
  if (isDisabled.value) return
  if (props.beforeRemove) {
    try {
      const ok = await props.beforeRemove(file)
      if (ok === false) return
    } catch {
      return
    }
  }
  const index = fileList.value.findIndex((f) => f.uid === file.uid)
  if (index === -1) return
  const [removed] = fileList.value.splice(index, 1)
  if (removed?.url && createdUrls.has(removed.url)) {
    safeRevoke(removed.url)
  }
  emit('remove', removed as KkUploadFile)
  syncModelValueAndChange()
}

function retry(file: KkUploadFile): void {
  file.status = 'ready'
  file.error = undefined
  upload(file)
}

/* ---------- 内置预览灯箱 ---------- */
const previewVisible = ref(false)
const previewFile = ref<KkUploadFile | null>(null)
const previewZIndex = ref(0)
let releasePreviewScroll: (() => void) | null = null

function openPreview(file: KkUploadFile): void {
  previewFile.value = file
  previewVisible.value = true
  previewZIndex.value = nextZIndex()
  releasePreviewScroll = lockScroll()
}

function closePreview(): void {
  previewVisible.value = false
  previewFile.value = null
  releasePreviewScroll?.()
  releasePreviewScroll = null
}

function preview(file: KkUploadFile): void {
  emit('preview', file)
  if (props.previewModal && file.url) openPreview(file)
}

function onPreviewKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') closePreview()
}

watch(previewVisible, (visible) => {
  if (typeof window === 'undefined') return
  if (visible) window.addEventListener('keydown', onPreviewKeydown)
  else window.removeEventListener('keydown', onPreviewKeydown)
})

/* ---------- 触发区交互 ---------- */
function openFileDialog(): void {
  if (isDisabled.value) return
  inputRef.value?.click()
}

function onInputChange(e: Event): void {
  const target = e.target as HTMLInputElement
  void handleFiles(target.files)
  target.value = ''
}

function onTriggerClick(): void {
  openFileDialog()
}

function onTriggerKeydown(e: KeyboardEvent): void {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    openFileDialog()
  }
}

/* ---------- 拖拽（计数避免闪烁） ---------- */
function onDragEnter(e: DragEvent): void {
  if (isDisabled.value || !props.drag) return
  e.preventDefault()
  dragCounter.value += 1
  isDragover.value = true
}

function onDragOver(e: DragEvent): void {
  if (isDisabled.value || !props.drag) return
  e.preventDefault()
}

function onDragLeave(e: DragEvent): void {
  if (isDisabled.value || !props.drag) return
  e.preventDefault()
  dragCounter.value -= 1
  if (dragCounter.value <= 0) {
    dragCounter.value = 0
    isDragover.value = false
  }
}

function onDrop(e: DragEvent): void {
  if (isDisabled.value || !props.drag) return
  e.preventDefault()
  dragCounter.value = 0
  isDragover.value = false
  void handleFiles(e.dataTransfer?.files ?? null)
}

/* ---------- 粘贴 ---------- */
function onPaste(e: ClipboardEvent): void {
  if (isDisabled.value || !props.paste) return
  const files = e.clipboardData?.files
  if (files && files.length > 0) {
    e.preventDefault()
    void handleFiles(files)
  }
}

onBeforeUnmount(() => {
  abort()
  revokeAllUrls()
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onPreviewKeydown)
  }
  releasePreviewScroll?.()
})

/* ---------- 计算属性 ---------- */
const inputAttrs = computed<Record<string, unknown>>(() => {
  const attrs: Record<string, unknown> = {}
  if (props.accept) attrs.accept = props.accept
  if (props.multiple && !props.directory) attrs.multiple = true
  if (props.directory) attrs.webkitdirectory = true
  return attrs
})

const rootClasses = computed(() => [
  ns.b(),
  ns.m(mergedSize.value),
  ns.is('disabled', isDisabled.value),
  ns.is('drag', props.drag),
  ns.is('picture-card', props.listType === 'picture-card'),
])

const listClasses = computed(() => [
  ns.e('list'),
  ns.m(props.listType),
  ns.is('dragover', isDragover.value && props.drag),
])

const isCard = computed(() => props.listType === 'picture-card')

defineExpose<KkUploadInstance>({
  submit,
  abort,
  clear,
  upload,
  openFileDialog,
})
</script>

<template>
  <div :class="rootClasses" v-bind="$attrs" @paste="onPaste">
    <input
      ref="inputRef"
      class="kk-upload__input"
      type="file"
      v-bind="inputAttrs"
      @change="onInputChange"
    />

    <!-- 非 picture-card：触发区在列表上方 -->
    <div
      v-if="!isCard"
      :class="[ns.e('trigger'), ns.is('dragover', isDragover && drag)]"
      role="button"
      tabindex="0"
      :aria-disabled="isDisabled || undefined"
      :aria-label="t('upload.clickUpload')"
      @click="onTriggerClick"
      @keydown="onTriggerKeydown"
      @dragenter="onDragEnter"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
      @drop="onDrop"
    >
      <slot :disabled="isDisabled" :open-file-dialog="openFileDialog">
        <button type="button" :class="ns.e('btn')" :disabled="isDisabled">
          {{ t('upload.clickUpload') }}
        </button>
      </slot>
    </div>

    <div v-if="tip || $slots.tip" :class="ns.e('tip')">
      <slot name="tip">
        {{ tip }}
      </slot>
    </div>

    <!-- 文件列表 -->
    <div
      v-if="showFileList"
      :class="listClasses"
      role="list"
      @dragenter="isCard && drag ? onDragEnter : undefined"
      @dragover="isCard && drag ? onDragOver : undefined"
      @dragleave="isCard && drag ? onDragLeave : undefined"
      @drop="isCard && drag ? onDrop : undefined"
    >
      <template v-if="fileList.length">
        <div
          v-for="(file, index) in fileList"
          :key="file.uid"
          :class="[ns.e('item'), ns.m(props.listType)]"
          role="listitem"
        >
          <slot
            name="file"
            :file="file"
            :index="index"
            :remove="(e?: Event) => remove(file, e)"
            :retry="() => retry(file)"
            :preview="() => preview(file)"
          >
            <div
              v-if="
                (props.listType === 'picture' || props.listType === 'picture-card') &&
                file.url
              "
              :class="ns.e('thumb')"
            >
              <img :src="file.url" :alt="file.name" />
            </div>

            <div :class="ns.e('item-body')">
              <span :class="ns.e('item-name')" :title="file.name">{{ file.name }}</span>

              <div v-if="file.status === 'uploading'" :class="ns.e('progress')">
                <div
                  :class="ns.e('progress-bar')"
                  :style="{ width: file.percent + '%' }"
                />
              </div>

              <span
                v-else-if="file.status === 'fail' && file.error"
                :class="ns.e('item-error')"
              >
                {{ file.error }}
              </span>
              <span v-else-if="file.status === 'success'" :class="ns.e('item-done')">
                {{ t('upload.success') }}
              </span>
            </div>

            <div :class="ns.e('actions')">
              <button
                v-if="props.listType !== 'text' && file.url && !isDisabled"
                type="button"
                :class="ns.e('action')"
                :aria-label="t('upload.preview')"
                @click="preview(file)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <button
                v-if="file.status === 'fail' && !isDisabled"
                type="button"
                :class="ns.e('action')"
                :aria-label="t('upload.retry')"
                @click="retry(file)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    d="M4 12a8 8 0 1 1 2.3 5.6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M4 20v-5h5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                v-if="!isDisabled"
                type="button"
                :class="ns.e('action')"
                :aria-label="`${t('upload.remove')} ${file.name}`"
                @click="remove(file, $event)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    d="M5 7h14M9 7V5h6v2M7 7l1 12h8l1-12"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </slot>
        </div>
      </template>

      <div v-else-if="!isCard" :class="ns.e('empty')">
        <slot name="empty">
          {{ t('upload.empty') }}
        </slot>
      </div>

      <!-- picture-card：触发卡片追加在列表末尾 -->
      <div
        v-if="isCard && !isDisabled"
        :class="[ns.e('trigger'), ns.e('card'), ns.is('dragover', isDragover && drag)]"
        role="button"
        tabindex="0"
        :aria-disabled="isDisabled || undefined"
        :aria-label="t('upload.clickUpload')"
        @click="onTriggerClick"
        @keydown="onTriggerKeydown"
      >
        <slot name="icon">
          <span :class="ns.e('plus')">+</span>
        </slot>
        <span :class="ns.e('card-text')">{{ t('upload.clickUpload') }}</span>
      </div>
    </div>

    <!-- 内置图片预览灯箱：Teleport 到 body，跨浮层也能正常使用 i18n -->
    <Teleport to="body">
      <div
        v-if="previewVisible"
        :class="ns.e('preview')"
        :style="{ zIndex: previewZIndex || undefined }"
        role="dialog"
        aria-modal="true"
        :aria-label="t('upload.preview')"
        @click.self="closePreview"
      >
        <button
          type="button"
          :class="ns.e('preview-close')"
          :aria-label="t('upload.close')"
          @click="closePreview"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <img
          v-if="previewFile?.url"
          :class="ns.e('preview-img')"
          :src="previewFile.url"
          :alt="previewFile.name"
        />
        <div :class="ns.e('preview-name')">{{ previewFile?.name }}</div>
      </div>
    </Teleport>
  </div>
</template>
