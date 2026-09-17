import type { InjectionKey, Ref } from 'vue'

/* ---------------- Layout ---------------- */

export type LayoutDirection = 'horizontal' | 'vertical'

export interface LayoutProps {
  /**
   * 主轴方向：不传时由是否含 sider 自动推断
   * （含 sider → horizontal，否则 vertical）
   */
  direction?: LayoutDirection
  /** 是否含侧边栏，可用于显式声明以触发 horizontal 推断 */
  hasSider?: boolean
  /** 是否固定：容器高度撑满视口，内部滚动区填满 */
  fixed?: boolean
  /** 容器高度，数字按 px 处理 */
  height?: string | number
  /** 子区域间距 */
  gap?: string | number
  /** 是否显示边框 */
  bordered?: boolean
}

export interface LayoutSlots {
  default?: () => unknown
  /** 顶部区域 */
  header?: (scope: LayoutScope) => unknown
  /** 侧边区域 */
  sider?: (scope: LayoutScope) => unknown
  /** 内容区域 */
  content?: () => unknown
  /** 底部区域 */
  footer?: () => unknown
}

export interface LayoutScope {
  /** 当前侧边栏是否收起 */
  collapsed: boolean
  /** 切换侧边栏收起状态 */
  toggle: (value?: boolean) => void
}

export interface LayoutEmits {
  // 布局容器本身不直接派发事件，状态通过 provide/inject 共享
}

export interface LayoutInstance {
  /** 侧边栏是否收起 */
  collapsed: boolean
  /** 切换侧边栏收起状态 */
  toggle: (value?: boolean) => void
}

/** Layout 向后代共享的上下文 */
export interface LayoutContext {
  collapsed: Ref<boolean>
  hasSider: Ref<boolean>
  toggle: (value?: boolean) => void
}

export const LAYOUT_CONTEXT_KEY: InjectionKey<LayoutContext> = Symbol('kk-layout')

/* ---------------- LayoutHeader ---------------- */

export interface LayoutHeaderProps {
  /** 高度，数字按 px 处理 */
  height?: string | number
  /** 是否固定（脱离文档流，由布局容器管理定位） */
  fixed?: boolean
  /** 是否显示底部分割线 */
  bordered?: boolean
}

export interface LayoutHeaderSlots {
  default?: () => unknown
  /** 左侧区域 */
  left?: () => unknown
  /** 右侧区域 */
  right?: () => unknown
}

export interface LayoutHeaderEmits {
  // 纯布局组件，无事件
}

/* ---------------- LayoutSider ---------------- */

export interface LayoutSiderProps {
  /** 展开宽度，数字按 px 处理 */
  width?: string | number
  /** 收起宽度，数字按 px 处理 */
  collapsedWidth?: string | number
  /** 是否收起（支持 v-model:collapsed） */
  collapsed?: boolean
  /** 是否可收起 */
  collapsible?: boolean
  /** 触发器：true 默认箭头 / false 隐藏 / 字符串为自定义触发器插槽名 */
  trigger?: boolean | string
  /** 侧边栏位置 */
  position?: 'left' | 'right'
  /** 是否显示边框 */
  bordered?: boolean
  /** 是否翻转箭头方向 */
  reverseArrow?: boolean
}

export interface LayoutSiderSlots {
  default?: () => unknown
  /** 顶部 Logo 区域 */
  logo?: () => unknown
  /** 自定义触发器，作用域含 collapsed / toggle */
  trigger?: (scope: LayoutScope) => unknown
}

export interface LayoutSiderEmits {
  'update:collapsed': [value: boolean]
  /** 收起状态变化 */
  collapse: [value: boolean]
}

export interface LayoutSiderInstance {
  /** 当前是否收起 */
  collapsed: boolean
  /** 切换收起状态 */
  toggle: (value?: boolean) => void
}

/* ---------------- LayoutContent ---------------- */

export interface LayoutContentProps {
  /** 内边距，数字按 px 处理 */
  padding?: string | number
  /** 内容超出时内部滚动 */
  scrollable?: boolean
}

export interface LayoutContentSlots {
  default?: () => unknown
}

export interface LayoutContentEmits {
  // 纯布局组件，无事件
}

/* ---------------- LayoutFooter ---------------- */

export interface LayoutFooterProps {
  /** 高度，数字按 px 处理 */
  height?: string | number
  /** 是否显示顶部分割线 */
  bordered?: boolean
}

export interface LayoutFooterSlots {
  default?: () => unknown
}

export interface LayoutFooterEmits {
  // 纯布局组件，无事件
}

/* ---------------- Row / Col ---------------- */

export type RowJustify =
  'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'

export type RowAlign = 'start' | 'center' | 'end' | 'stretch'

export type RowGutter = number | string | [number | string, number | string]

export interface RowProps {
  /** 列间距，可为数字 / 字符串 / [水平, 垂直] */
  gutter?: RowGutter
  /** 主轴对齐 */
  justify?: RowJustify
  /** 交叉轴对齐 */
  align?: RowAlign
  /** 是否换行 */
  wrap?: boolean
  /** 渲染标签，默认 div */
  tag?: string
}

export interface RowSlots {
  default?: () => unknown
}

export interface RowEmits {
  // 纯布局组件，无事件
}

export type ColSpanValue =
  number | { span?: number; offset?: number; push?: number; pull?: number }

export interface ColProps {
  /** 占据栅格数 1-24 */
  span?: number
  /** 左侧偏移栅格数 */
  offset?: number
  /** 向右推的栅格数（相对定位） */
  push?: number
  /** 向左拉的栅格数（相对定位） */
  pull?: number
  /** <576px 响应式 */
  xs?: ColSpanValue
  /** ≥576px 响应式 */
  sm?: ColSpanValue
  /** ≥768px 响应式 */
  md?: ColSpanValue
  /** ≥992px 响应式 */
  lg?: ColSpanValue
  /** ≥1200px 响应式 */
  xl?: ColSpanValue
  /** 渲染标签，默认 div */
  tag?: string
}

export interface ColSlots {
  default?: () => unknown
}

export interface ColEmits {
  // 纯布局组件，无事件
}

/** Row 向 Col 共享的水平间距（用于左右内边距） */
export interface RowContext {
  gutterX: Ref<number>
}

export const ROW_CONTEXT_KEY: InjectionKey<RowContext> = Symbol('kk-row')
