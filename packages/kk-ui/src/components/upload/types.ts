/**
 * KkUpload 上传组件类型定义
 */

/** 上传状态机：ready → uploading → success | fail */
export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

/** 列表展示形态 */
export type KkUploadListType = 'text' | 'picture' | 'picture-card'

/** 尺寸（与 Form / Input / Button 对齐） */
export type KkUploadSize = 'small' | 'medium' | 'large'

/**
 * 单个文件项。受控模式下由 `modelValue` 传入，组件内部只做浅层克隆后回写。
 */
export interface KkUploadFile {
  /** 组件内唯一标识，用于 key / XHR 映射 */
  uid: string | number
  /** 文件名 */
  name: string
  /** 字节数 */
  size: number
  /** MIME 类型，可选 */
  type?: string
  /** 状态 */
  status: UploadStatus
  /** 上传进度 0-100 */
  percent: number
  /** 缩略图 / 预览地址（picture / picture-card 由 createObjectURL 生成） */
  url?: string
  /** 原始 File 对象 */
  raw?: File
  /** 上传成功后的响应体 */
  response?: unknown
  /** 失败原因（locale 文案） */
  error?: string
}

/** 自定义请求回调收到的参数 */
export interface KkUploadRequestOptions {
  /** 原始文件对象 */
  file: File | undefined
  /** 表单字段名，默认 `file` */
  name: string
  /** 额外表单字段 */
  data: Record<string, unknown>
  /** 请求头 */
  headers: Record<string, string>
  /** 是否携带凭证 */
  withCredentials: boolean
  /** 上传地址 */
  action: string
  /** 请求方法（大写） */
  method: string
  /** 进度回调 */
  onProgress: (event: { percent: number }) => void
  /** 成功回调 */
  onSuccess: (response: unknown) => void
  /** 失败回调 */
  onError: (error: unknown) => void
}

/** 自定义上传方法，可返回 Promise（由组件接管成功/失败），或返回 undefined 自行通过 options 回调驱动 */
export type KkUploadHttpRequest = (
  options: KkUploadRequestOptions
) => Promise<unknown> | undefined

/**
 * 上传前钩子：
 * - 返回 `false` 拦截该文件（不加入列表）
 * - 返回 `File` / `Blob` 用其替换原始文件
 * - 返回 `true` / `undefined` / Promise 解析为上述值，按对应语义处理
 */
export type KkUploadBeforeUpload = (
  file: KkUploadFile
) => boolean | File | Blob | Promise<boolean | File | Blob | undefined>

/** 删除前钩子，返回 false 取消删除 */
export type KkUploadBeforeRemove = (file: KkUploadFile) => boolean | Promise<boolean>

/**
 * 失败提示覆盖钩子。返回 `false` 表示抑制默认失败提示（文件不进入列表）。
 */
export type KkUploadOnError = (context: {
  file: KkUploadFile
  error: string
}) => boolean | void

export interface KkUploadProps {
  /** 受控文件列表 */
  modelValue?: KkUploadFile[]
  /** 上传地址（自定义 httpRequest 时可省略） */
  action?: string
  /** 请求方法，默认 POST */
  method?: string
  /** 请求头 */
  headers?: Record<string, string>
  /** 额外表单字段 */
  data?: Record<string, unknown>
  /** 表单字段名，默认 file */
  name?: string
  /** 是否携带凭证 */
  withCredentials?: boolean
  /** 多选 */
  multiple?: boolean
  /** 接受的文件类型，透传给 input[accept] */
  accept?: string
  /** 目录选择（webkitdirectory） */
  directory?: boolean
  /** 最大文件数，0 表示不限制 */
  limit?: number
  /** 单文件最大字节数 */
  maxSize?: number
  /** 单文件最小字节数 */
  minSize?: number
  /** 整块拖拽区 */
  drag?: boolean
  /** 列表形态 */
  listType?: KkUploadListType
  /** 是否展示文件列表，默认 true */
  showFileList?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 选中后自动上传，默认 true；为 false 时由 submit() 触发 */
  autoUpload?: boolean
  /** 自定义上传方法，扩展点，优先于内置 XHR */
  httpRequest?: KkUploadHttpRequest
  /** 上传前钩子 */
  beforeUpload?: KkUploadBeforeUpload
  /** 删除前钩子 */
  beforeRemove?: KkUploadBeforeRemove
  /** 超出 limit 时回调 */
  onExceed?: (files: KkUploadFile[]) => void
  /** 失败提示覆盖钩子 */
  onError?: KkUploadOnError
  /** 开启粘贴上传（在组件容器内粘贴文件） */
  paste?: boolean
  /** 辅助提示文案 */
  tip?: string
  /** 尺寸 */
  size?: KkUploadSize
}

export interface KkUploadEmits {
  'update:modelValue': [files: KkUploadFile[]]
  /** 文件列表变化（增删或状态变更） */
  change: [files: KkUploadFile[]]
  /** 进度变化 */
  progress: [payload: { file: KkUploadFile; percent: number }]
  /** 上传成功 */
  success: [payload: { file: KkUploadFile; response: unknown }]
  /** 上传失败 */
  error: [payload: { file: KkUploadFile; error: string }]
  /** 移除文件 */
  remove: [file: KkUploadFile]
  /** 超出数量限制 */
  exceed: [files: KkUploadFile[]]
  /** 点击预览 */
  preview: [file: KkUploadFile]
}

export interface KkUploadSlots {
  /** 触发区内容，默认渲染按钮；作用域含 disabled / openFileDialog */
  default?: (scope: { disabled: boolean; openFileDialog: () => void }) => unknown
  /** 辅助提示 */
  tip?: () => unknown
  /** 自定义文件项；作用域含 file / index 与操作函数 */
  file?: (scope: {
    file: KkUploadFile
    index: number
    remove: (e?: Event) => void
    retry: () => void
    preview: () => void
  }) => unknown
  /** picture-card 触发卡片的图标 */
  icon?: () => unknown
  /** 空列表占位 */
  empty?: () => unknown
}

export interface KkUploadInstance {
  /** 上传所有 ready 文件 */
  submit: () => void
  /** 中断上传，不传 uid 中断全部 */
  abort: (uid?: string | number) => void
  /** 清空列表 */
  clear: () => void
  /** 上传指定文件；不传则上传所有 ready */
  upload: (file?: KkUploadFile) => void
  /** 打开文件选择框 */
  openFileDialog: () => void
}
