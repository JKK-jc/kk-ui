/**
 * KkPagination 分页器类型定义
 */

export type PaginationSize = 'small' | 'medium' | 'large'

export type PaginationMode = 'number' | 'simple'

/** 布局区块：逗号 / 空格分隔，`->` 之后的区块整体靠右 */
export type PaginationLayoutBlock =
  'prev' | 'pager' | 'next' | 'jumper' | 'sizes' | 'total' | '->'

/** 自定义图标渲染函数（可选，返回 VNode） */
export type PaginationIconRender = () => unknown

export interface PaginationProps {
  /** 当前页（与 currentPage 二选一生效，modelValue 是其别名） */
  modelValue?: number
  /** 当前页 */
  currentPage?: number
  /** 每页条数（支持 v-model:pageSize） */
  pageSize?: number
  /** 总条数，与 pageCount 二选一 */
  total?: number
  /** 总页数，与 total 二选一 */
  pageCount?: number
  /** 每页条数候选，默认 [10, 20, 50, 100] */
  pageSizes?: number[]
  /**
   * 区块编排，逗号 / 空格分隔：
   * `prev, pager, next, jumper, sizes, total, ->`
   * `->` 表示其后区块整体靠右对齐。
   */
  layout?: string
  /** 页码折叠基准（含当前页附近的窗口），需为奇数，默认 7 */
  pagerCount?: number
  /** 页码按钮是否带填充背景 */
  background?: boolean
  /** 尺寸 */
  size?: PaginationSize
  /** 禁用：所有按钮不可点 */
  disabled?: boolean
  /** 只有一页时是否隐藏整个分页器 */
  hideOnSinglePage?: boolean
  /** 模式：simple 仅显示 上一页 / 当前 / 下一页 + 总数 */
  mode?: PaginationMode
  /** 上一页文案（未传跟随 locale） */
  prevText?: string
  /** 下一页文案（未传跟随 locale） */
  nextText?: string
  /** 自定义上一页图标（返回 VNode 的函数） */
  prevIcon?: PaginationIconRender
  /** 自定义下一页图标（返回 VNode 的函数） */
  nextIcon?: PaginationIconRender
  /** 是否显示跳页输入框（默认 true，等同 layout 增加 jumper 区块） */
  showQuickJumper?: boolean
}

export interface PaginationChangePayload {
  currentPage: number
  pageSize: number
}

export interface PaginationSlots {
  /** 上一页按钮内容，作用域 `{ disabled }` */
  prev?: (scope: { disabled: boolean }) => unknown
  /** 下一页按钮内容，作用域 `{ disabled }` */
  next?: (scope: { disabled: boolean }) => unknown
  /** 单个页码按钮内容，作用域 `{ page, active }` */
  pager?: (scope: { page: number; active: boolean }) => unknown
  /** 跳页区自定义内容 */
  jumper?: () => unknown
  /** 每页条数下拉自定义内容 */
  sizes?: () => unknown
}

export interface PaginationEmits {
  'update:modelValue': [page: number]
  'update:currentPage': [page: number]
  'update:pageSize': [size: number]
  /** 当前页或每页条数变化 */
  change: [payload: PaginationChangePayload]
  /** 仅当前页变化 */
  'current-change': [page: number]
  /** 仅每页条数变化 */
  'size-change': [size: number]
  /** 点击上一页（发生在实际翻页前） */
  'prev-click': [page: number]
  /** 点击下一页（发生在实际翻页前） */
  'next-click': [page: number]
}

export interface PaginationInstance {
  /** 上一页 */
  prev: () => void
  /** 下一页 */
  next: () => void
  /** 跳转到指定页（自动钳制到合法范围） */
  jump: (page: number) => void
  /** 设置每页条数 */
  setPageSize: (size: number) => void
}

/** 页码条目：普通页码或省略号（可点击跳半程） */
export type PaginationPagerItem =
  { type: 'page'; page: number } | { type: 'more'; dir: 'prev' | 'next' }
