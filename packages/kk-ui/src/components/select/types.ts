/**
 * KkSelect 选择器类型定义
 */

/** 基础值类型：单选为单一值，多选为数组 */
export type SelectOptionValue = string | number | boolean | null

/** 单选取单一值，多选取值数组 */
export type SelectModelValue = SelectOptionValue | SelectOptionValue[] | undefined

export type SelectSize = 'small' | 'medium' | 'large'

export type SelectPlacement =
  'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end'

/**
 * 选项数据。除约定的 `value` / `label` / `disabled` 外，允许携带任意业务字段，
 * 通过 `valueKey` / `labelKey` 自定义取值键名。
 */
export interface SelectOption {
  /** 选项值（取值键由 `valueKey` 决定，默认 `value`） */
  value: SelectOptionValue
  /** 选项文案（取值键由 `labelKey` 决定，默认 `label`） */
  label?: string
  /** 是否禁用该项 */
  disabled?: boolean
  /** 任意附加字段 */
  [key: string]: unknown
}

/** 选项内部展开结构，便于渲染与取值 */
export interface NormalizedOption {
  /** 原始值（已按 valueKey 取出） */
  value: SelectOptionValue
  /** 原始文案（已按 labelKey 取出，无则回退为空串） */
  label: string
  /** 是否禁用 */
  disabled: boolean
  /** 是否为 allowCreate 动态创建的选项 */
  isCreate: boolean
  /** 原始数据对象 */
  raw: SelectOption
}

export interface SelectProps {
  /** 选中值，单选为单一值，多选为值数组 */
  modelValue?: SelectModelValue
  /** 选项列表 */
  options?: SelectOption[]
  /** 是否多选 */
  multiple?: boolean
  /** 是否可搜索 */
  filterable?: boolean
  /** 自定义过滤逻辑，返回 true 表示保留该选项 */
  filterMethod?: (query: string, option: SelectOption) => boolean
  /** 是否远程搜索 */
  remote?: boolean
  /** 远程搜索方法，返回 Promise 或同步选项列表 */
  remoteMethod?: (query: string) => Promise<SelectOption[]> | SelectOption[]
  /** 是否允许创建不在选项中的新选项 */
  allowCreate?: boolean
  /** 是否允许创建某输入值的判定，默认只要输入非空就允许 */
  createFilter?: (query: string, options: SelectOption[]) => boolean
  /** 是否可清空 */
  clearable?: boolean
  /** 多选时是否折叠标签（配合 maxTagCount） */
  collapseTags?: boolean
  /** 多选最多展示的标签数，超出显示 +N */
  maxTagCount?: number
  /** 多选最多可选数量，-1 表示不限制 */
  multipleLimit?: number
  /** 多选时是否在面板顶部展示「全选」 */
  selectAll?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文案（未传入时跟随 locale） */
  placeholder?: string
  /** 尺寸 */
  size?: SelectSize
  /** 加载中 */
  loading?: boolean
  /** 取值键名，默认 `value` */
  valueKey?: string
  /** 取文案键名，默认 `label` */
  labelKey?: string
  /** 空数据文案（未传入时跟随 locale） */
  emptyText?: string
  /** 浮层位置 */
  placement?: SelectPlacement
  /** 浮层宽度是否跟随触发元素，默认 true */
  matchWidth?: boolean
  /** 浮层额外类名 */
  popperClass?: string
  /** 浮层固定宽度，优先级高于 matchWidth */
  popperWidth?: string | number
  /** 是否撑满父容器 */
  block?: boolean
  /** 原生 name，用于表单提交 */
  name?: string
  /** 自动聚焦 */
  autofocus?: boolean
  /** 聚焦即展开浮层 */
  openOnFocus?: boolean
}

export interface SelectSlots {
  /** 自定义选项渲染 */
  default?: (scope: {
    option: SelectOption
    index: number
    selected: boolean
  }) => unknown
  /** 自定义多选标签 */
  tag?: (scope: {
    label: string
    value: SelectOptionValue
    /** 移除该标签（需把对应的值传回来） */
    remove: (value: SelectOptionValue) => void
  }) => unknown
  /** 前缀 */
  prefix?: () => unknown
  /** 后缀 / 箭头 */
  suffix?: () => unknown
  /** 箭头（与 suffix 二选一，优先 suffix） */
  arrow?: () => unknown
  /** 空数据 */
  empty?: () => unknown
  /** 加载态 */
  loading?: () => unknown
  /** 面板顶部 */
  header?: () => unknown
  /** 面板底部 */
  footer?: () => unknown
  /** 创建选项 */
  create?: (scope: { query: string }) => unknown
}

export interface SelectEmits {
  'update:modelValue': [value: SelectModelValue]
  change: [value: SelectModelValue]
  'visible-change': [visible: boolean]
  clear: []
  search: [query: string]
  'remove-tag': [value: SelectOptionValue]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  select: [option: SelectOption]
  deselect: [option: SelectOption]
}

export interface SelectInstance {
  focus: () => void
  blur: () => void
  open: () => void
  close: () => void
  toggle: () => void
}
