/** 拖动抓手：只有标题栏可拖 / 整个弹窗都可拖 */
export type ModalDragHandle = 'header' | 'modal'

/** 关闭来源：便于外部区分「用户点遮罩」与「代码主动关闭」 */
export type ModalCloseReason = 'close' | 'mask' | 'esc' | 'cancel'

/** 预设宽度档位，与 `width` 冲突时以 `width` 为准 */
export type ModalSize = 'small' | 'medium' | 'large' | 'full'

/** 拖动范围：限制在视口内（至少露出标题）/ 完全不限制 */
export type ModalDragBounds = 'viewport' | 'none'

export interface ModalPosition {
  x: number
  y: number
}

export interface ModalProps {
  /** 是否显示，配合 `v-model` 使用 */
  modelValue?: boolean
  /** 标题，使用 `#header` 或 `#title` 插槽时以插槽为准 */
  title?: string
  /** 副标题，用于补充说明 */
  subtitle?: string
  /**
   * 宽度：数字按 px 处理，字符串原样使用（如 `'60vw'`）。
   * 优先级高于 `size`。
   */
  width?: string | number
  /** 高度：不传时由内容撑开，超出 `maxHeight` 后主体区域内部滚动 */
  height?: string | number
  /**
   * 最大高度：默认按视口与顶部留白推导（`calc(100vh - 顶部留白 - 底部留白)`），
   * 传入后会与推导值取较小者，避免在小屏上溢出。
   */
  maxHeight?: string | number
  /** 距视口顶部的留白，`center` 为 true 时忽略 */
  top?: string | number
  /** 垂直居中；开启后上下留白对称 */
  center?: boolean
  /** 预设宽度档位 */
  size?: ModalSize
  /** 是否允许按住抓手拖动 */
  draggable?: boolean
  /** 拖动抓手区域，默认只有标题栏可拖 */
  dragHandle?: ModalDragHandle
  /** 拖动范围限制 */
  dragBounds?: ModalDragBounds
  /**
   * 关闭后不保留拖动位移：在下次打开、节点仍隐藏时归零，
   * 因此既不会看到回弹，也不依赖出场动画的回调时机。
   */
  resetOnClose?: boolean
  /** 是否渲染遮罩（关闭后仍会拦截点击） */
  mask?: boolean
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 按 Esc 是否关闭 */
  closeOnEsc?: boolean
  /** 是否显示右上角关闭按钮 */
  showClose?: boolean
  /**
   * 关闭后是否销毁内容：默认保留 DOM，仅切换可见性，
   * 二次打开不重新挂载，适合内容较重或频繁开关的场景。
   */
  destroyOnClose?: boolean
  /** 是否锁定 body 滚动（多弹窗嵌套时按引用计数，不会互相解绑） */
  lockScroll?: boolean
  /**
   * Teleport 目标，默认挂到 `body`。
   * 需要弹窗跟随父级层叠上下文时可改为 `false` 之外的容器选择器。
   */
  appendTo?: string | HTMLElement
  /** 层级：不传按打开顺序自增，保证多弹窗叠加次序正确 */
  zIndex?: number
  /** 是否渲染底部操作区（无 `#footer` 插槽时渲染默认的取消/确定） */
  footer?: boolean
  /** 默认底部按钮文案 */
  okText?: string
  cancelText?: string
  /** 默认确定按钮的 loading 态 */
  okLoading?: boolean
  /** 是否在头部与底部之间显示分割线 */
  bordered?: boolean
  /**
   * 禁用：不可拖动、遮罩与 Esc 不再关闭，默认底部按钮也置灰。
   * 适用于「必须处理完当前弹窗」的场景。
   */
  disabled?: boolean
  /** 加载中：主体区域显示遮罩与 spinner */
  loading?: boolean
  /** 无标题时建议传入，作为无障碍名称 */
  ariaLabel?: string
}

export interface ModalSlots {
  default?: () => unknown
  /** 整个头部内容（替换标题区，关闭按钮与拖动能力保留） */
  header?: () => unknown
  /** 仅标题文字区域 */
  title?: () => unknown
  /** 底部操作区 */
  footer?: () => unknown
  /** 关闭按钮内容 */
  close?: () => unknown
}

export interface ModalEmits {
  'update:modelValue': [value: boolean]
  open: []
  opened: []
  close: [reason: ModalCloseReason]
  closed: []
  /** 点击默认底部确定按钮 */
  confirm: []
  /** 点击默认底部取消按钮 */
  cancel: []
  'drag-start': [position: ModalPosition]
  drag: [position: ModalPosition]
  'drag-end': [position: ModalPosition]
}

export interface ModalInstance {
  /** 主动打开（同样会触发 update:modelValue） */
  open: () => void
  /** 主动关闭，可指定关闭来源 */
  close: (reason?: ModalCloseReason) => void
  /** 把拖动位移归零 */
  reset: () => void
}
