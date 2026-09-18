/**
 * KkCascader 级联选择器类型定义
 */

/** 单个选项值 */
export type CascaderValue = string | number

/** 值路径：从一级到当前级的 value 序列 */
export type CascaderPath = CascaderValue[]

/**
 * 绑定值：
 * - 单选 + `emitPath`：路径数组 `CascaderPath`
 * - 单选 + 非 `emitPath`：末级值 `CascaderValue`
 * - 多选：路径数组 `CascaderPath[]`（非 `emitPath` 时为末级值数组）
 * - 清空时单选非 `emitPath` 抛 `null`，其余形态抛空数组
 */
export type CascaderModelValue =
  CascaderValue | CascaderPath | CascaderPath[] | null | undefined

export type CascaderSize = 'small' | 'medium' | 'large'

export type CascaderPlacement =
  'bottom-start' | 'bottom' | 'bottom-end' | 'top-start' | 'top' | 'top-end'

/** 子级展开方式 */
export type CascaderExpandTrigger = 'click' | 'hover'

/**
 * 选项数据。除约定的 `value` / `label` / `children` / `disabled` / `leaf` 外，
 * 允许携带任意业务字段，字段名通过 `fieldNames` 覆盖。
 */
export interface CascaderOption {
  /** 选项值（键名由 `fieldNames.value` 决定，默认 `value`） */
  value?: CascaderValue
  /** 选项文案（键名由 `fieldNames.label` 决定，默认 `label`） */
  label?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 子级列表（键名由 `fieldNames.children` 决定，默认 `children`） */
  children?: CascaderOption[]
  /** 强制标记为叶子节点（键名由 `fieldNames.leaf` 决定，默认 `leaf`） */
  leaf?: boolean
  /** 任意附加字段 */
  [key: string]: unknown
}

/** 归一化后的节点：补齐层级、路径与叶子判定，供渲染与取值使用 */
export interface CascaderNode {
  /** 原始值 */
  value: CascaderValue
  /** 展示文案，缺失时回退为 value 的字符串形式 */
  label: string
  /** 是否禁用 */
  disabled: boolean
  /** 是否叶子节点（懒加载未加载完时为 false） */
  isLeaf: boolean
  /** 所在层级，从 0 开始 */
  level: number
  /** 从根到自身的完整值路径 */
  path: CascaderPath
  /** 已解析的子节点，叶子节点为空数组 */
  children: CascaderNode[]
  /** 原始数据对象 */
  raw: CascaderOption
}

/** 面板中的一列 */
export interface CascaderColumn {
  /** 列所在层级 */
  level: number
  /** 该列节点 */
  nodes: CascaderNode[]
  /** 该列是否正在懒加载 */
  loading: boolean
}

/** 自定义字段名 */
export interface CascaderFieldNames {
  value?: string
  label?: string
  children?: string
  disabled?: string
  leaf?: string
}

/** 懒加载回调的入参与出参 */
export type CascaderLoadData = (
  node: CascaderOption,
  path: CascaderPath
) => Promise<CascaderOption[]>

/** `load` 事件负载 */
export interface CascaderLoadPayload {
  node: CascaderOption
  path: CascaderPath
}

export interface CascaderProps {
  /** 选中值 */
  modelValue?: CascaderModelValue
  /** 选项数据 */
  options?: CascaderOption[]
  /** 自定义字段名 */
  fieldNames?: CascaderFieldNames
  /** 是否多选 */
  multiple?: boolean
  /** 是否允许选择任意层级，为 false 时只能选叶子节点，默认 true */
  checkStrictly?: boolean
  /** 单选时是否回填完整路径，默认 true */
  emitPath?: boolean
  /** 输入框是否展示完整路径，默认 true */
  showAllLevels?: boolean
  /** 路径分隔符，默认 `' / '` */
  separator?: string
  /** 是否可清空 */
  clearable?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文案（未传入时跟随 locale） */
  placeholder?: string
  /** 尺寸，未设置时继承 `KkForm` */
  size?: CascaderSize
  /** 面板加载态 */
  loading?: boolean
  /** 子级展开方式，默认 `click` */
  expandTrigger?: CascaderExpandTrigger
  /** 懒加载子级，存在时没有 `children` 的节点点开会请求 */
  loadData?: CascaderLoadData
  /** 浮层位置 */
  placement?: CascaderPlacement
  /** 浮层宽度是否跟随触发元素，默认 false（面板按内容自适应，避免被压窄） */
  matchWidth?: boolean
  /** 浮层额外类名 */
  popperClass?: string
  /** 是否撑满父容器 */
  block?: boolean
  /** 原生 name，用于表单提交 */
  name?: string
  /** 是否可搜索 */
  filterable?: boolean
  /** 自定义过滤逻辑，返回 true 表示保留该节点 */
  filterMethod?: (query: string, option: CascaderOption) => boolean
}

export interface CascaderEmits {
  'update:modelValue': [value: CascaderModelValue]
  change: [value: CascaderModelValue]
  'visible-change': [visible: boolean]
  clear: []
  /** 展开层级变化，参数为当前路径 */
  'expand-change': [path: CascaderPath]
  /** 懒加载完成（成功或失败都会抛出） */
  load: [payload: CascaderLoadPayload]
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
}

export interface CascaderSlots {
  /** 自定义每列选项渲染 */
  default?: (scope: {
    node: CascaderOption
    level: number
    label: string
    selected: boolean
    isLeaf: boolean
  }) => unknown
  /** 空数据 */
  empty?: () => unknown
  /** 加载态 */
  loading?: () => unknown
  /** 前缀 */
  prefix?: () => unknown
  /** 后缀 / 箭头 */
  suffix?: () => unknown
  /** 多选标签 */
  tag?: (scope: {
    node: CascaderOption | undefined
    path: CascaderPath
    text: string
    remove: () => void
  }) => unknown
}

export interface CascaderInstance {
  focus: () => void
  blur: () => void
  open: () => void
  close: () => void
  clear: () => void
  /** 取当前选中节点原始数据，单选为 0~1 项 */
  getCheckedNodes: () => CascaderOption[]
}
