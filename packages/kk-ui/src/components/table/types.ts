/**
 * KkTable / KkTableColumn 类型定义
 */
import type { CSSProperties, InjectionKey } from 'vue'
import type { PaginationProps } from '../pagination'

export type KkTableSize = 'small' | 'medium' | 'large'

export type KkTableColumnType = 'default' | 'selection' | 'index' | 'expand'

export type KkTableColumnAlign = 'left' | 'center' | 'right'

export type KkTableColumnFixed = 'left' | 'right' | boolean

export type KkTableSortOrder = 'ascending' | 'descending' | null

export type KkTableSortable = boolean | 'custom'

/** 排序取值：函数优先，否则按 sortBy 字符串取列，再退回 prop */
export type KkTableSortGetter = (row: Record<string, unknown>) => unknown

export interface KkTableColumnProps {
  /** 对应 data 的字段名 */
  prop?: string
  /** 列标题 */
  label?: string
  /** 列宽（数字按 px），用于固定列表头/列对齐 */
  width?: string | number
  /** 最小列宽 */
  minWidth?: string | number
  /** 固定列：'left' / 'right'，true 等同 'left' */
  fixed?: KkTableColumnFixed
  /** 内容对齐 */
  align?: KkTableColumnAlign
  /** 排序：true 走本地排序，'custom' 仅 emit sort-change */
  sortable?: KkTableSortable
  /** 排序取值键或取值函数；缺省取 prop */
  sortBy?: string | KkTableSortGetter
  /** 点击表头循环的顺序，默认 ['ascending','descending',null] */
  sortOrders?: KkTableSortOrder[]
  /** 自定义排序比较函数；返回负数表示 a 在前 */
  sortMethod?: (a: Record<string, unknown>, b: Record<string, unknown>) => number
  /** 列可拖拽改变宽度（预留，目前仅占位） */
  resizable?: boolean
  /** 多选列行是否可选（仅 type='selection' 生效） */
  selectable?: (row: Record<string, unknown>, index: number) => boolean
  /** 列类型 */
  type?: KkTableColumnType
  /** 序号列的取值函数（仅 type='index' 生效） */
  indexMethod?: (index: number, row: Record<string, unknown>) => number
  /** 单元格格式化（仅 default 列生效） */
  formatter?: (
    row: Record<string, unknown>,
    column: KkTableColumnProps,
    value: unknown,
    index: number
  ) => unknown
  /** 单元格额外 class */
  className?: string
  /** 表头单元格额外 class */
  labelClassName?: string
}

/** 子组件（KkTableColumn）注册进 Table 的元数据 */
export interface KkTableColumnMeta {
  id: string
  props: KkTableColumnProps
  slots: {
    default?: (scope: KkTableColumnScope) => unknown
    header?: (scope: { column: KkTableColumnProps }) => unknown
  }
}

/** 单元格作用域插槽入参 */
export interface KkTableColumnScope {
  row: Record<string, unknown>
  column: KkTableColumnProps
  index: number
  $index: number
}

/** Table 内部归一化后的列 */
export interface KkTableColumnInternal extends KkTableColumnProps {
  id: string
  slots: KkTableColumnMeta['slots']
  source: 'child' | 'prop'
}

export interface KkTableRowClassParams {
  row: Record<string, unknown>
  rowIndex: number
}

export interface KkTableCellClassParams {
  row: Record<string, unknown>
  column: KkTableColumnProps
  rowIndex: number
  columnIndex: number
}

export type KkTableStyleReturn = CSSProperties | string

/** 传给内置分页器的透传配置（`modelValue` 由 Table 内部控制，其余可透传） */
export type KkTablePaginationProp = Partial<Omit<PaginationProps, 'modelValue'>>

export interface KkTableProps {
  /** 表格数据 */
  data?: Record<string, unknown>[]
  /** 数据列（与 KkTableColumn 子组件二选一，子组件优先） */
  columns?: KkTableColumnProps[]
  /** 行 key 字段名，跨页选择 / 展开依赖它 */
  rowKey?: string
  /** 是否显示边框 */
  border?: boolean
  /** 斑马纹 */
  stripe?: boolean
  /** 尺寸 */
  size?: KkTableSize
  /** 固定表头：容器高度，内部滚动 */
  height?: string | number
  /** 固定表头：容器最大高度，内部滚动 */
  maxHeight?: string | number
  /** 加载态 */
  loading?: boolean
  /** 空数据文案（未传跟随 locale） */
  emptyText?: string
  /** 行 className */
  rowClassName?: (params: KkTableRowClassParams) => string
  /** 单元格 className */
  cellClassName?: (params: KkTableCellClassParams) => string
  /** 行 style */
  rowStyle?: (params: KkTableRowClassParams) => KkTableStyleReturn
  /** 单元格 style */
  cellStyle?: (params: KkTableCellClassParams) => KkTableStyleReturn
  /** 是否显示表头 */
  showHeader?: boolean
  /** 默认展开所有行（需 rowKey） */
  defaultExpandAll?: boolean
  /** 受控展开的行的 key 列表 */
  expandRowKeys?: (string | number)[]
  /** 点击行高亮当前行 */
  highlightCurrentRow?: boolean
  /** 当前行 key */
  currentRowKey?: string | number
  /** 表头半选态点击是否全选 */
  selectOnIndeterminate?: boolean
  /** 内置分页器：传入即在底部渲染分页器并按当前页切片 */
  pagination?: KkTablePaginationProp
  /** 多选结果（v-model:selection） */
  selection?: Record<string, unknown>[]
  /** 默认选中行的 key 列表 */
  defaultSelection?: (string | number)[]
  /** 禁用：所有交互不可用 */
  disabled?: boolean
}

export interface KkTableSortChangePayload {
  column: KkTableColumnProps
  prop: string | undefined
  order: KkTableSortOrder
}

export interface KkTablePageChangePayload {
  currentPage: number
  pageSize: number
}

export interface KkTableEmits {
  select: [selection: Record<string, unknown>[], row: Record<string, unknown>]
  'select-all': [selection: Record<string, unknown>[]]
  'selection-change': [selection: Record<string, unknown>[]]
  'update:selection': [selection: Record<string, unknown>[]]
  'row-click': [row: Record<string, unknown>, index: number, event: MouseEvent]
  'row-dblclick': [row: Record<string, unknown>, index: number, event: MouseEvent]
  'cell-click': [
    row: Record<string, unknown>,
    column: KkTableColumnProps,
    index: number,
    event: MouseEvent,
  ]
  'sort-change': [payload: KkTableSortChangePayload]
  'expand-change': [row: Record<string, unknown>, expandedKeys: (string | number)[]]
  'current-change': [
    currentRow: Record<string, unknown>,
    oldRow: Record<string, unknown> | null,
  ]
  'page-change': [payload: KkTablePageChangePayload]
}

export interface KkTableInstance {
  /** 清空选择 */
  clearSelection: () => void
  /** 切换某行选中（selected 省略则取反） */
  toggleRowSelection: (row: Record<string, unknown>, selected?: boolean) => void
  /** 切换当前页全选 */
  toggleAllSelection: () => void
  /** 设置当前行 */
  setCurrentRow: (row: Record<string, unknown>) => void
  /** 清空排序 */
  clearSort: () => void
  /** 清空筛选（当前版本无筛选功能，占位） */
  clearFilter: () => void
  /** 滚动到指定行（最佳努力） */
  scrollTo: (options: { key?: string | number; index?: number }) => void
  /** 获取已选行 */
  getSelectionRows: () => Record<string, unknown>[]
}

/** Table 提供给 KkTableColumn 的注册上下文 */
export interface KkTableContext {
  register: (meta: KkTableColumnMeta) => void
  unregister: (id: string) => void
}

export const KK_TABLE_CONTEXT_KEY: InjectionKey<KkTableContext> =
  Symbol('kk-table-context')
