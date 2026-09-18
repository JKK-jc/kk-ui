import type { ComputedRef, InjectionKey, VNode } from 'vue'
import type { Size } from '../../types'

/** 标签形态：下划线 / 卡片 / 胶囊分段 */
export type TabsType = 'line' | 'card' | 'segment'

/** 标签栏方位，left / right 时整体纵向排布 */
export type TabsPosition = 'top' | 'bottom' | 'left' | 'right'

/** 标签栏主轴对齐方式（`stretch` 为 true 时被均分覆盖） */
export type TabsJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around'

/** 标签标识，允许字符串或数字 */
export type TabName = string | number

export interface TabsProps {
  /** 当前激活标签，配合 `v-model` 使用 */
  modelValue?: TabName
  /** 标签形态 */
  type?: TabsType
  /** 尺寸档 */
  size?: Size
  /** 是否可关闭（也可在单个 pane 上单独开启） */
  closable?: boolean
  /** 是否显示新增按钮 */
  addable?: boolean
  /** 同时开启可关闭与可新增 */
  editable?: boolean
  /** 标签栏方位 */
  position?: TabsPosition
  /** 标签均分填满标签栏 */
  stretch?: boolean
  /** 面板切换是否带淡入动效 */
  animated?: boolean
  /** 标签栏主轴对齐 */
  justify?: TabsJustify
  /**
   * 切换前拦截，返回 `false` 或 resolve 为 `false` 时阻止切换。
   * 支持返回 Promise，便于做「表单未保存」确认。
   */
  beforeLeave?: (name: TabName, oldName?: TabName) => boolean | Promise<boolean>
}

export interface TabPaneProps {
  /** 标签标识，必填且需唯一 */
  name: TabName
  /** 标签文字，使用 `#label` 插槽时以插槽为准 */
  label?: TabName
  /** 禁用后不可点击、不可关闭 */
  disabled?: boolean
  /** 单独控制该标签能否关闭 */
  closable?: boolean
  /**
   * 懒渲染：为 `true` 时未激活过则不渲染内容。
   * 默认 `false`——非激活面板会渲染但隐藏，以保留内部状态（表单输入、滚动位置等）。
   */
  lazy?: boolean
  /** 配合 `lazy` 使用：即使未激活也强制渲染 */
  forceRender?: boolean
}

/** `change` / `tab-change` 的载荷 */
export interface TabsChangePayload {
  /** 即将（或已经）激活的标签 */
  name: TabName
  /** 切换前的标签，首次激活时为 undefined */
  oldName?: TabName
}

export interface TabsEmits {
  'update:modelValue': [name: TabName]
  /** 切换完成（已通过 `beforeLeave` 校验） */
  change: [payload: TabsChangePayload]
  /** 与 `change` 同义，便于和旧版本写法兼容 */
  'tab-change': [payload: TabsChangePayload]
  'tab-click': [name: TabName]
  'tab-remove': [name: TabName]
  'tab-add': []
}

export interface TabsSlots {
  default?: () => unknown
  /** 标签栏右侧额外内容 */
  extra?: () => unknown
  /** 标签栏前缀 */
  prefix?: () => unknown
  /** 溢出时右侧「更多」区域 */
  more?: () => unknown
  'add-icon'?: () => unknown
  'nav-prev'?: () => unknown
  'nav-next'?: () => unknown
}

export interface TabPaneSlots {
  default?: () => unknown
  /** 自定义标签内容 */
  label?: (props: { active: boolean; disabled: boolean }) => unknown
}

export interface TabsInstance {
  /** 激活指定标签（会走 `beforeLeave`） */
  setActive: (name: TabName) => Promise<void>
  /**
   * 关闭指定标签。若关闭的是当前激活项，会先同步 `modelValue` 到相邻标签
   * （优先右侧、回退左侧），再抛 `tab-remove`，交由外部移除 pane。
   */
  removeTab: (name: TabName) => void
  /** 新增标签（仅抛 `tab-add`） */
  addTab: () => void
  /** 当前激活标签 */
  currentName: ComputedRef<TabName>
}

/**
 * 已注册到 Tabs 的面板描述。
 *
 * 用响应式对象承载，面板自身在 `watch` 里就地更新字段，
 * 这样父组件改 `label` / `disabled` 时标签栏能同步刷新，
 * 又不必在 Tabs 侧再维护一份映射表。
 */
export interface TabPaneDescriptor {
  /** 递增序号，作为列表 key 与注销依据 */
  uid: number
  name: TabName
  label?: TabName
  disabled: boolean
  closable: boolean
  /** 是否提供了 `#label` 插槽 */
  hasLabelSlot: boolean
  /** 渲染自定义标签内容 */
  renderLabel: () => VNode[] | null
}

export interface TabsContext {
  /** 当前激活标签（只读） */
  currentName: ComputedRef<TabName>
  /** 面板挂载时登记自身 */
  registerPane: (pane: TabPaneDescriptor) => void
  /** 面板卸载时按 uid 注销 */
  unregisterPane: (uid: number) => void
}

export const TABS_CONTEXT_KEY: InjectionKey<TabsContext> = Symbol('kkTabsContext')
