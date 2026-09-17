<script setup lang="ts">
import {
  computed,
  defineComponent,
  h,
  provide,
  ref,
  watch,
  watchEffect,
  type CSSProperties,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { KkPagination } from '../pagination'
import {
  KK_TABLE_CONTEXT_KEY,
  type KkTableColumnInternal,
  type KkTableColumnMeta,
  type KkTableContext,
  type KkTableEmits,
  type KkTableInstance,
  type KkTableProps,
  type KkTableSortOrder,
} from './types'

defineOptions({ name: 'KkTable', inheritAttrs: false })

const props = withDefaults(defineProps<KkTableProps>(), {
  data: () => [],
  columns: undefined,
  rowKey: undefined,
  border: true,
  stripe: false,
  size: 'medium',
  height: undefined,
  maxHeight: undefined,
  loading: false,
  emptyText: '',
  rowClassName: undefined,
  cellClassName: undefined,
  rowStyle: undefined,
  cellStyle: undefined,
  showHeader: true,
  defaultExpandAll: false,
  expandRowKeys: undefined,
  highlightCurrentRow: false,
  currentRowKey: undefined,
  selectOnIndeterminate: true,
  pagination: undefined,
  selection: undefined,
  defaultSelection: undefined,
  disabled: false,
})

const emit = defineEmits<KkTableEmits>()

const ns = useNamespace('table')
const { t } = useLocale()

/* ---------- 子组件列注册 ---------- */
const childColumns = ref<KkTableColumnMeta[]>([])
const context: KkTableContext = {
  register: (meta) => {
    if (!childColumns.value.some((c) => c.id === meta.id)) {
      childColumns.value.push(meta)
    }
  },
  unregister: (id) => {
    const idx = childColumns.value.findIndex((c) => c.id === id)
    if (idx >= 0) childColumns.value.splice(idx, 1)
  },
}
provide(KK_TABLE_CONTEXT_KEY, context)

/* ---------- 列归一化（子组件优先） ---------- */
const mergedColumns = computed<KkTableColumnInternal[]>(() => {
  if (childColumns.value.length) {
    return childColumns.value.map((meta) => ({
      ...meta.props,
      id: meta.id,
      slots: meta.slots,
      source: 'child',
    }))
  }
  return (props.columns ?? []).map((col, i) => ({
    ...col,
    id: `col-prop-${col.prop ?? i}`,
    slots: { default: undefined, header: undefined },
    source: 'prop',
  }))
})

const selectionColumn = computed(() =>
  mergedColumns.value.find((c) => c.type === 'selection')
)
const isScrollable = computed(() => props.height != null || props.maxHeight != null)

/* ---------- 行 key ---------- */
function keyOf(row: Record<string, unknown>): string {
  if (props.rowKey) return String(row[props.rowKey])
  return String(props.data.indexOf(row))
}

/* ---------- 排序 ---------- */
const sortColumnId = ref<string | undefined>(undefined)
const sortOrder = ref<KkTableSortOrder>(null)
const sortIsCustom = ref(false)

function sortValue(row: Record<string, unknown>, col: KkTableColumnInternal): unknown {
  if (typeof col.sortBy === 'function') return col.sortBy(row)
  const key = typeof col.sortBy === 'string' ? col.sortBy : col.prop
  return key != null ? row[key] : undefined
}

const sortedData = computed<Record<string, unknown>[]>(() => {
  if (!sortOrder.value || sortColumnId.value == null || sortIsCustom.value) {
    return props.data
  }
  const col = mergedColumns.value.find((c) => c.id === sortColumnId.value)
  if (!col) return props.data
  const arr = [...props.data]
  arr.sort((a, b) => {
    if (col.sortMethod) return col.sortMethod(a, b)
    const va = sortValue(a, col)
    const vb = sortValue(b, col)
    if (va == null && vb == null) return 0
    if (va == null) return 1
    if (vb == null) return -1
    if (va < vb) return -1
    if (va > vb) return 1
    return 0
  })
  if (sortOrder.value === 'descending') arr.reverse()
  return arr
})

function onSortClick(col: KkTableColumnInternal): void {
  if (props.disabled || !col.sortable) return
  const orders = col.sortOrders?.length
    ? col.sortOrders
    : (['ascending', 'descending', null] as KkTableSortOrder[])
  const active = sortColumnId.value === col.id
  const current = active ? sortOrder.value : null
  const idx = orders.indexOf(current)
  const nextOrder = orders[(idx + 1) % orders.length]
  sortColumnId.value = col.id
  sortOrder.value = nextOrder
  sortIsCustom.value = col.sortable === 'custom'
  if (col.sortable === 'custom') {
    emit('sort-change', { column: col, prop: col.prop, order: nextOrder })
  } else {
    emit('sort-change', { column: col, prop: col.prop, order: nextOrder })
  }
}

function sortAria(
  col: KkTableColumnInternal
): 'ascending' | 'descending' | 'none' | undefined {
  if (!col.sortable || sortColumnId.value !== col.id) return undefined
  return sortOrder.value === 'ascending'
    ? 'ascending'
    : sortOrder.value === 'descending'
      ? 'descending'
      : 'none'
}

function sortLabel(col: KkTableColumnInternal): string {
  if (!col.sortable) return ''
  if (sortColumnId.value !== col.id || sortOrder.value == null)
    return t('table.sortAsc')
  return sortOrder.value === 'ascending' ? t('table.sortDesc') : t('table.sortClear')
}

/* ---------- 选择 ---------- */
const selectedKeys = ref<Set<string>>(
  new Set((props.defaultSelection ?? []).map(String))
)

const selectionRows = computed(() =>
  props.data.filter((row) => selectedKeys.value.has(keyOf(row)))
)
const pageRows = computed(() => renderData.value)

function isRowSelected(row: Record<string, unknown>): boolean {
  return selectedKeys.value.has(keyOf(row))
}

function selectableRow(row: Record<string, unknown>, index: number): boolean {
  if (selectionColumn.value?.selectable) {
    return selectionColumn.value.selectable(row, index)
  }
  return true
}

const pageSelectableRows = computed(() =>
  pageRows.value.filter((row, i) => selectableRow(row, i))
)
const allSelected = computed(
  () =>
    pageSelectableRows.value.length > 0 &&
    pageSelectableRows.value.every((row) => isRowSelected(row))
)
const someSelected = computed(() =>
  pageSelectableRows.value.some((row) => isRowSelected(row))
)
const isIndeterminate = computed(() => someSelected.value && !allSelected.value)

function emitSelection(): void {
  const rows = selectionRows.value
  emit('selection-change', rows)
  emit('update:selection', rows)
}

function toggleRow(row: Record<string, unknown>): void {
  if (props.disabled) return
  const key = keyOf(row)
  if (selectedKeys.value.has(key)) selectedKeys.value.delete(key)
  else selectedKeys.value.add(key)
  const rows = selectionRows.value
  emit('select', rows, row)
  emitSelection()
}

function toggleAll(): void {
  if (props.disabled) return
  const keys = pageSelectableRows.value.map((row) => keyOf(row))
  if (allSelected.value) keys.forEach((k) => selectedKeys.value.delete(k))
  else keys.forEach((k) => selectedKeys.value.add(k))
  emit('select-all', selectionRows.value)
  emitSelection()
}

function onHeaderCheckChange(checked: boolean): void {
  if (props.disabled) return
  if (isIndeterminate.value && !props.selectOnIndeterminate) {
    pageSelectableRows.value.forEach((row) => selectedKeys.value.delete(keyOf(row)))
  } else if (checked) {
    pageSelectableRows.value.forEach((row) => selectedKeys.value.add(keyOf(row)))
  } else {
    pageSelectableRows.value.forEach((row) => selectedKeys.value.delete(keyOf(row)))
  }
  emit('select-all', selectionRows.value)
  emitSelection()
}

/* ---------- 展开 ---------- */
const expandKeys = ref<Set<string>>(new Set())
watch(
  () => props.expandRowKeys,
  (keys) => {
    expandKeys.value = new Set((keys ?? []).map(String))
  },
  { immediate: true }
)
watch(
  () => props.defaultExpandAll,
  (val) => {
    if (val) expandKeys.value = new Set(props.data.map((row) => keyOf(row)))
  },
  { immediate: true }
)

function isExpanded(row: Record<string, unknown>): boolean {
  return expandKeys.value.has(keyOf(row))
}

function toggleExpand(row: Record<string, unknown>): void {
  if (props.disabled) return
  const key = keyOf(row)
  if (expandKeys.value.has(key)) expandKeys.value.delete(key)
  else expandKeys.value.add(key)
  emit('expand-change', row, Array.from(expandKeys.value))
}

/* ---------- 当前行 ---------- */
const currentRowKey = ref<string | number | undefined>(props.currentRowKey)

function onRowClick(row: Record<string, unknown>, index: number, e: MouseEvent): void {
  emit('row-click', row, index, e)
  if (props.highlightCurrentRow && !props.disabled) {
    const old =
      currentRowKey.value != null
        ? (props.data.find((r) => keyOf(r) === String(currentRowKey.value)) ?? null)
        : null
    currentRowKey.value = keyOf(row)
    emit('current-change', row, old)
  }
}

function isCurrentRow(row: Record<string, unknown>): boolean {
  return currentRowKey.value != null && keyOf(row) === String(currentRowKey.value)
}

/* ---------- 内置分页器 ---------- */
const pageCfg = computed(() => props.pagination)
const innerCurrentPage = ref(pageCfg.value?.currentPage ?? 1)
const innerPageSize = ref(
  pageCfg.value?.pageSize ?? pageCfg.value?.pageSizes?.[0] ?? 10
)

watch(
  () => props.pagination,
  (cfg) => {
    if (cfg?.currentPage != null) innerCurrentPage.value = cfg.currentPage
    if (cfg?.pageSize != null) innerPageSize.value = cfg.pageSize
  },
  { immediate: true }
)

const pageTotal = computed(() => {
  const cfg = pageCfg.value
  if (cfg?.total != null) return cfg.total
  if (cfg?.pageCount != null) return cfg.pageCount * innerPageSize.value
  return sortedData.value.length
})

const renderData = computed<Record<string, unknown>[]>(() => {
  if (!pageCfg.value) return sortedData.value
  const start = (innerCurrentPage.value - 1) * innerPageSize.value
  return sortedData.value.slice(start, start + innerPageSize.value)
})

function onPageChange(payload: { currentPage: number; pageSize: number }): void {
  innerCurrentPage.value = payload.currentPage
  innerPageSize.value = payload.pageSize
  emit('page-change', payload)
}

/* ---------- 固定列偏移（用声明宽度，不依赖布局） ---------- */
function toPx(v: string | number | undefined): number | undefined {
  if (v == null) return undefined
  if (typeof v === 'number') return v
  const n = parseFloat(v)
  return Number.isNaN(n) ? undefined : n
}

const fixedOffsets = computed<Map<string, { left?: number; right?: number }>>(() => {
  const map = new Map<string, { left?: number; right?: number }>()
  let left = 0
  let right = 0
  for (const col of mergedColumns.value) {
    if (col.fixed === 'left' || col.fixed === true) {
      map.set(col.id, { left })
      const w = toPx(col.width)
      if (w != null) left += w
    }
  }
  for (let i = mergedColumns.value.length - 1; i >= 0; i--) {
    const col = mergedColumns.value[i]
    if (col.fixed === 'right') {
      map.set(col.id, { right })
      const w = toPx(col.width)
      if (w != null) right += w
    }
  }
  return map
})

/* ---------- 单元格辅助 ---------- */
function cellText(row: Record<string, unknown>, col: KkTableColumnInternal): unknown {
  if (col.formatter) {
    return col.formatter(row, col, col.prop != null ? row[col.prop] : undefined, 0)
  }
  return col.prop != null ? row[col.prop] : ''
}

function indexValue(row: Record<string, unknown>, index: number): number {
  const col = mergedColumns.value.find((c) => c.type === 'index')
  if (col?.indexMethod) return col.indexMethod(index, row)
  return pageCfg.value
    ? (innerCurrentPage.value - 1) * innerPageSize.value + index + 1
    : index + 1
}

function buildCellStyle(
  row: Record<string, unknown>,
  col: KkTableColumnInternal,
  rowIndex: number,
  columnIndex: number
): CSSProperties {
  const style: CSSProperties = {}
  const fixed = fixedOffsets.value.get(col.id)
  if (col.fixed === 'left' || col.fixed === true) {
    style.position = 'sticky'
    style.left = fixed?.left != null ? `${fixed.left}px` : '0'
    style.zIndex = 2
    style.background = 'var(--kk-bg-container)'
  } else if (col.fixed === 'right') {
    style.position = 'sticky'
    style.right = fixed?.right != null ? `${fixed.right}px` : '0'
    style.zIndex = 2
    style.background = 'var(--kk-bg-container)'
  }
  const custom = props.cellStyle?.({
    row,
    column: col,
    rowIndex,
    columnIndex,
  })
  if (custom && typeof custom === 'object') Object.assign(style, custom)
  return style
}

function buildHeaderStyle(col: KkTableColumnInternal): CSSProperties {
  const style: CSSProperties = {}
  const fixed = fixedOffsets.value.get(col.id)
  if (col.fixed === 'left' || col.fixed === true) {
    style.position = 'sticky'
    style.left = fixed?.left != null ? `${fixed.left}px` : '0'
    style.zIndex = 3
    style.background = 'var(--kk-bg-subtle)'
  } else if (col.fixed === 'right') {
    style.position = 'sticky'
    style.right = fixed?.right != null ? `${fixed.right}px` : '0'
    style.zIndex = 3
    style.background = 'var(--kk-bg-subtle)'
  }
  return style
}

function cellClass(
  row: Record<string, unknown>,
  col: KkTableColumnInternal,
  rowIndex: number,
  columnIndex: number
): Array<string | false | undefined> {
  const fixed = col.fixed === 'right' ? 'right' : col.fixed ? 'left' : undefined
  return [
    ns.e('cell'),
    ns.is(`align-${col.align}`, true),
    fixed ? ns.is(`fixed-${fixed}`) : undefined,
    col.className,
    props.cellClassName?.({
      row,
      column: col,
      rowIndex,
      columnIndex,
    }),
  ]
}

function headerClass(col: KkTableColumnInternal): Array<string | false | undefined> {
  const fixed = col.fixed === 'right' ? 'right' : col.fixed ? 'left' : undefined
  return [
    ns.e('cell'),
    ns.is(`align-${col.align}`, true),
    fixed ? ns.is(`fixed-${fixed}`) : undefined,
    col.labelClassName,
  ]
}

function rowClass(
  row: Record<string, unknown>,
  rowIndex: number
): Array<string | false | undefined> {
  return [
    ns.e('row'),
    ns.is('striped', props.stripe && rowIndex % 2 === 1),
    ns.is('current', props.highlightCurrentRow && isCurrentRow(row)),
    props.rowClassName?.({ row, rowIndex }),
  ]
}

function rowStyle(
  row: Record<string, unknown>,
  rowIndex: number
): CSSProperties | undefined {
  const custom = props.rowStyle?.({ row, rowIndex })
  return custom && typeof custom === 'object' ? custom : undefined
}

function toSize(v: string | number | undefined): string | undefined {
  if (v == null) return undefined
  return typeof v === 'number' ? `${v}px` : v
}

const bodyStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = { overflow: 'auto' }
  if (props.height != null) style.height = toSize(props.height)
  if (props.maxHeight != null) style.maxHeight = toSize(props.maxHeight)
  return style
})

const isEmpty = computed(() => renderData.value.length === 0)
const resolvedEmptyText = computed(() => props.emptyText || t('table.empty'))
const resolvedLoadingText = computed(() => t('table.loading'))

/* ---------- 复选框（支持半选） ---------- */
// 只服务于 KkTable 的极小部件，刻意与 Table 同文件，避免对外多出两个导出面
// eslint-disable-next-line vue/one-component-per-file
const TriCheckbox = defineComponent({
  name: 'KkTableCheckbox',
  props: {
    modelValue: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: '' },
  },
  emits: ['update:modelValue', 'change'],
  setup(cp, ctx) {
    const el = ref<HTMLInputElement | null>(null)
    watchEffect(() => {
      if (el.value) el.value.indeterminate = cp.indeterminate
    })
    return () =>
      h('input', {
        ref: el,
        type: 'checkbox',
        class: ns.e('checkbox'),
        checked: cp.modelValue,
        disabled: cp.disabled,
        'aria-checked': cp.indeterminate ? 'mixed' : cp.modelValue,
        'aria-label': cp.label,
        onChange: (e: Event) => {
          const value = (e.target as HTMLInputElement).checked
          ctx.emit('update:modelValue', value)
          ctx.emit('change', value)
        },
      })
  },
})

/* ---------- 函数式插槽渲染 ---------- */
// 同上：把作用域插槽包成组件，才能在 render 函数里按行列坐标渲染
// eslint-disable-next-line vue/one-component-per-file
const SlotRenderer = defineComponent({
  name: 'KkTableSlotRenderer',
  props: {
    fn: { type: Function, default: undefined },
    scope: { type: Object, default: () => ({}) },
  },
  setup(p) {
    return () => (typeof p.fn === 'function' ? p.fn(p.scope) : null)
  },
})

/* ---------- 实例方法 ---------- */
const bodyWrapRef = ref<HTMLElement | null>(null)

function clearSelection(): void {
  selectedKeys.value = new Set()
  emitSelection()
}
function toggleRowSelection(row: Record<string, unknown>, selected?: boolean): void {
  if (props.disabled) return
  const key = keyOf(row)
  const shouldAdd = selected ?? !selectedKeys.value.has(key)
  if (shouldAdd) selectedKeys.value.add(key)
  else selectedKeys.value.delete(key)
  emitSelection()
}
function toggleAllSelection(): void {
  toggleAll()
}
function setCurrentRow(row: Record<string, unknown>): void {
  const old =
    currentRowKey.value != null
      ? (props.data.find((r) => keyOf(r) === String(currentRowKey.value)) ?? null)
      : null
  currentRowKey.value = keyOf(row)
  emit('current-change', row, old)
}
function clearSort(): void {
  sortColumnId.value = undefined
  sortOrder.value = null
}
function clearFilter(): void {
  /* 当前版本未实现筛选，占位以保持 API 一致 */
}
function scrollTo(options: { key?: string | number; index?: number }): void {
  const wrap = bodyWrapRef.value
  if (!wrap) return
  const rows = Array.from(wrap.querySelectorAll<HTMLElement>('tr[data-kk-table-row]'))
  let target: HTMLElement | undefined
  if (options.key != null) {
    target = rows.find((r) => r.dataset.kkTableRow === String(options.key))
  } else if (options.index != null) {
    target = rows[options.index]
  }
  if (target) target.scrollIntoView({ block: 'nearest' })
}
function getSelectionRows(): Record<string, unknown>[] {
  return selectionRows.value
}

defineExpose<KkTableInstance>({
  clearSelection,
  toggleRowSelection,
  toggleAllSelection,
  setCurrentRow,
  clearSort,
  clearFilter,
  scrollTo,
  getSelectionRows,
})

const rootClass = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.is('border', props.border),
  ns.is('scrollable', isScrollable.value),
  ns.is('disabled', props.disabled),
])
</script>

<template>
  <div :class="rootClass" role="region">
    <!-- 声明式列（KkTableColumn）在此挂载并注册，自身不渲染可见内容 -->
    <div :class="ns.e('columns')" style="display: none">
      <slot />
    </div>
    <div ref="bodyWrapRef" :class="ns.e('body-wrap')" :style="bodyStyle">
      <table :class="ns.e('table')" cellspacing="0" cellpadding="0">
        <colgroup>
          <col
            v-for="col in mergedColumns"
            :key="col.id"
            :style="{ width: toPx(col.width) }"
          />
        </colgroup>

        <thead v-if="props.showHeader">
          <tr :class="ns.e('header-row')">
            <th
              v-for="col in mergedColumns"
              :key="col.id"
              :class="headerClass(col)"
              :style="buildHeaderStyle(col)"
              :aria-sort="sortAria(col)"
              scope="col"
            >
              <TriCheckbox
                v-if="col.type === 'selection'"
                :model-value="allSelected"
                :indeterminate="isIndeterminate"
                :disabled="props.disabled || pageSelectableRows.length === 0"
                :label="t('table.selectAll')"
                @change="onHeaderCheckChange"
              />
              <span v-else-if="col.type === 'expand'" />
              <span v-else-if="col.type === 'index'">{{ col.label || '#' }}</span>
              <template v-else>
                <SlotRenderer
                  v-if="col.slots.header"
                  :fn="col.slots.header"
                  :scope="{ column: col }"
                />
                <span v-else :class="ns.e('header-label')">{{ col.label }}</span>
                <button
                  v-if="col.sortable"
                  type="button"
                  :class="[ns.e('sort'), ns.is('active', sortColumnId === col.id)]"
                  :aria-label="sortLabel(col)"
                  @click="onSortClick(col)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    aria-hidden="true"
                    :class="ns.e('sort-icon')"
                  >
                    <path
                      d="M12 5l5 6H7z"
                      :class="
                        ns.is(
                          'asc',
                          sortColumnId === col.id && sortOrder === 'ascending'
                        )
                      "
                      fill="currentColor"
                    />
                    <path
                      d="M12 19l-5-6h10z"
                      :class="
                        ns.is(
                          'desc',
                          sortColumnId === col.id && sortOrder === 'descending'
                        )
                      "
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </template>
            </th>
          </tr>
        </thead>

        <tbody>
          <template v-for="(row, rIndex) in renderData" :key="keyOf(row)">
            <tr
              :data-kk-table-row="keyOf(row)"
              :class="rowClass(row, rIndex)"
              :style="rowStyle(row, rIndex)"
              @click="onRowClick(row, rIndex, $event)"
              @dblclick="emit('row-dblclick', row, rIndex, $event)"
            >
              <td
                v-for="(col, cIndex) in mergedColumns"
                :key="col.id"
                :class="cellClass(row, col, rIndex, cIndex)"
                :style="buildCellStyle(row, col, rIndex, cIndex)"
                @click="emit('cell-click', row, col, cIndex, $event)"
              >
                <TriCheckbox
                  v-if="col.type === 'selection'"
                  :model-value="isRowSelected(row)"
                  :disabled="props.disabled || !selectableRow(row, rIndex)"
                  :label="t('table.selectRow')"
                  @change="toggleRow(row)"
                />
                <span v-else-if="col.type === 'index'">{{
                  indexValue(row, rIndex)
                }}</span>
                <button
                  v-else-if="col.type === 'expand'"
                  type="button"
                  :class="ns.e('expand-btn')"
                  :aria-expanded="isExpanded(row)"
                  :aria-label="
                    isExpanded(row) ? t('table.collapseRow') : t('table.expandRow')
                  "
                  @click="toggleExpand(row)"
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <template v-else>
                  <SlotRenderer
                    v-if="col.slots.default"
                    :fn="col.slots.default"
                    :scope="{ row, column: col, index: rIndex, $index: rIndex }"
                  />
                  <span v-else :class="ns.e('cell-text')">{{
                    cellText(row, col)
                  }}</span>
                </template>
              </td>
            </tr>
            <tr v-if="isExpanded(row)" :class="ns.e('expanded-row')">
              <td :colspan="mergedColumns.length" :class="ns.e('expanded-cell')">
                <slot name="expand" :row="row" :index="rIndex">{{ '' }}</slot>
              </td>
            </tr>
          </template>

          <tr v-if="isEmpty" :class="ns.e('empty-row')">
            <td :colspan="mergedColumns.length" :class="ns.e('empty')">
              <slot name="empty">{{ resolvedEmptyText }}</slot>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="props.loading" :class="ns.e('loading')" role="status">
        <slot name="loading">{{ resolvedLoadingText }}</slot>
      </div>
    </div>

    <KkPagination
      v-if="pageCfg"
      v-bind="pageCfg"
      :current-page="innerCurrentPage"
      :page-size="innerPageSize"
      :total="pageTotal"
      :size="pageCfg?.size ?? props.size"
      :disabled="props.disabled"
      @change="onPageChange"
    />

    <div v-if="$slots.append" :class="ns.e('append')">
      <slot name="append" />
    </div>
  </div>
</template>
