/** 抽屉出现方向 */
export type DrawerPlacement = 'right' | 'left' | 'top' | 'bottom'

/** 关闭来源 */
export type DrawerCloseReason = 'close' | 'mask' | 'esc' | 'cancel'

export interface DrawerProps {
  /** 是否显示，配合 `v-model` 使用 */
  modelValue?: boolean
  /** 标题，使用 `#header` 或 `#title` 插槽时以插槽为准 */
  title?: string
  /** 副标题 */
  subtitle?: string
  /** 出现方向 */
  placement?: DrawerPlacement
  /**
   * 抽屉宽度（left / right）或高度（top / bottom）。
   * 数字按 px 处理，字符串原样使用，默认 `30%`。
   */
  size?: string | number
  /** 宽度，优先级高于 `size`（仅左右方向生效） */
  width?: string | number
  /** 高度，优先级高于 `size`（仅上下方向生效） */
  height?: string | number
  /**
   * 是否允许拖动边缘调整尺寸。
   * 拖动时以 px 直接写内联样式，过程中不触发响应式更新。
   */
  resizable?: boolean
  /** 可调整的最小尺寸（px） */
  minSize?: number
  /** 可调整的最大尺寸（px） */
  maxSize?: number
  /** 是否渲染遮罩 */
  mask?: boolean
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 按 Esc 是否关闭 */
  closeOnEsc?: boolean
  /** 是否显示右上角关闭按钮 */
  showClose?: boolean
  /** 关闭后销毁内容（默认保留 DOM 仅切换可见性） */
  destroyOnClose?: boolean
  /** 是否锁定 body 滚动（多浮层嵌套按引用计数） */
  lockScroll?: boolean
  /** Teleport 目标 */
  appendTo?: string | HTMLElement
  /** 层级，不传按打开顺序自增 */
  zIndex?: number
  /** 是否渲染底部操作区 */
  footer?: boolean
  /** 默认底部按钮文案 */
  okText?: string
  cancelText?: string
  /** 默认确定按钮的 loading 态 */
  okLoading?: boolean
  /** 头部与主体之间是否显示分割线 */
  bordered?: boolean
  /** 禁用：不可拖动、遮罩与 Esc 不再关闭，默认按钮置灰 */
  disabled?: boolean
  /** 加载中：主体区域显示遮罩与 spinner */
  loading?: boolean
  /** 无标题时建议传入 */
  ariaLabel?: string
}

export interface DrawerEmits {
  'update:modelValue': [value: boolean]
  open: []
  opened: []
  close: [reason: DrawerCloseReason]
  closed: []
  /** 点击默认底部确定按钮 */
  confirm: []
  /** 点击默认底部取消按钮（会同时关闭抽屉） */
  cancel: []
  /** 拖动边缘调整尺寸结束，返回当前尺寸（px） */
  resize: [size: number]
}

export interface DrawerSlots {
  default?: () => unknown
  /** 整个头部内容（关闭按钮保留） */
  header?: () => unknown
  /** 仅标题文字区域 */
  title?: () => unknown
  /** 底部操作区 */
  footer?: () => unknown
  /** 关闭按钮内容 */
  close?: () => unknown
}

export interface DrawerInstance {
  /** 主动打开 */
  open: () => void
  /** 主动关闭 */
  close: (reason?: DrawerCloseReason) => void
  /** 把拖动调整过的尺寸恢复为 `size` 推导值 */
  reset: () => void
}
