<script setup lang="ts">
import { computed, inject, nextTick, ref } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useId } from '../../hooks/useId'
import { useLocale } from '../../locale'
import { useFloating } from '../../hooks/useFloating'
import { useClickOutside } from '../../hooks/useClickOutside'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../form/context'
import { isArray, isNil } from '../../utils/is'
import type {
  CascaderColumn,
  CascaderEmits,
  CascaderModelValue,
  CascaderNode,
  CascaderOption,
  CascaderPath,
  CascaderProps,
  CascaderValue,
} from './types'

defineOptions({ name: 'KkCascader', inheritAttrs: false })

const props = withDefaults(defineProps<CascaderProps>(), {
  modelValue: undefined,
  options: () => [],
  fieldNames: () => ({
    value: 'value',
    label: 'label',
    children: 'children',
    disabled: 'disabled',
    leaf: 'leaf',
  }),
  multiple: false,
  checkStrictly: true,
  emitPath: true,
  showAllLevels: true,
  separator: ' / ',
  clearable: false,
  disabled: false,
  placeholder: '',
  size: undefined,
  loading: false,
  expandTrigger: 'click',
  loadData: undefined,
  placement: 'bottom-start',
  matchWidth: true,
  popperClass: '',
  block: false,
  name: '',
  filterable: false,
  filterMethod: undefined,
})

const emit = defineEmits<CascaderEmits>()

const ns = useNamespace('cascader')
const idBase = useId('kk-cascader')
const listboxId = `${idBase}-listbox`
const { t } = useLocale()

/** 防御脏数据造成的死循环 */
const MAX_DEPTH = 20

/** 关键词高亮分段 */
interface LabelSegment {
  text: string
  match: boolean
}

/* ---------- 表单上下文 ---------- */
const formContext = inject(FORM_CONTEXT_KEY, undefined)
const formItem = inject(FORM_ITEM_CONTEXT_KEY, undefined)

const isDisabled = computed(() => props.disabled || Boolean(formContext?.disabled))
const mergedSize = computed(() => props.size ?? formContext?.size ?? 'medium')
const isInvalid = computed(() => Boolean(formItem?.message?.value))
const isMultiple = computed(() => props.multiple)

/* ---------- refs ---------- */
const triggerRef = ref<HTMLElement | null>(null)
const popperRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

const query = ref('')
const isOpen = ref(false)
const focused = ref(false)
const mounted = ref(false)
/** 当前展开 / 高亮的路径，长度即已展开层级 */
const activePath = ref<CascaderPath>([])
/** 键盘焦点所在列 */
const activeLevel = ref(0)
/** 懒加载结果：pathKey -> children */
const extraChildren = ref<Map<string, CascaderOption[]>>(new Map())
/** 正在加载的 pathKey */
const loadingKeys = ref<Set<string>>(new Set())

/* ---------- 字段名 ---------- */
const fieldNames = computed(() => ({
  value: props.fieldNames?.value ?? 'value',
  label: props.fieldNames?.label ?? 'label',
  children: props.fieldNames?.children ?? 'children',
  disabled: props.fieldNames?.disabled ?? 'disabled',
  leaf: props.fieldNames?.leaf ?? 'leaf',
}))

/* ---------- 归一化 ---------- */
function pathKey(path: CascaderPath): string {
  return JSON.stringify(path)
}

function childrenOf(
  raw: CascaderOption,
  path: CascaderPath
): CascaderOption[] | undefined {
  const loaded = extraChildren.value.get(pathKey(path))
  if (loaded) return loaded
  const rawChildren = raw[fieldNames.value.children]
  return isArray(rawChildren) ? (rawChildren as CascaderOption[]) : undefined
}

function normalize(
  list: CascaderOption[],
  parentPath: CascaderPath,
  level: number
): CascaderNode[] {
  return list.map((raw) => {
    const rawValue = raw[fieldNames.value.value]
    const value = (isNil(rawValue) ? '' : rawValue) as CascaderValue
    const path = [...parentPath, value]
    const rawChildren = childrenOf(raw, path)
    const children = isArray(rawChildren) ? rawChildren : []
    const isLeaf =
      raw[fieldNames.value.leaf] === true
        ? true
        : children.length > 0
          ? false
          : !props.loadData || rawChildren !== undefined
    const rawLabel = raw[fieldNames.value.label]
    return {
      value,
      label: isNil(rawLabel) ? String(value) : String(rawLabel),
      disabled: raw[fieldNames.value.disabled] === true,
      isLeaf,
      level,
      path,
      children: isLeaf ? [] : normalize(children, path, level + 1),
      raw,
    }
  })
}

const rootNodes = computed<CascaderNode[]>(() => normalize(props.options ?? [], [], 0))

/** 逐列展开：每一级取 activePath 对应的节点继续向下 */
const columns = computed<CascaderColumn[]>(() => {
  const result: CascaderColumn[] = []
  let nodes = rootNodes.value
  let level = 0

  while (level < MAX_DEPTH) {
    result.push({ level, nodes, loading: false })
    const active = activePath.value[level]
    const node = nodes.find((item) => item.value === active)
    if (!node || node.isLeaf) break
    if (loadingKeys.value.has(pathKey(node.path))) {
      result.push({ level: level + 1, nodes: [], loading: true })
      break
    }
    nodes = node.children
    level += 1
  }

  return result
})

function resolveNode(path: CascaderPath): CascaderNode | undefined {
  let list = rootNodes.value
  let found: CascaderNode | undefined
  for (const value of path) {
    found = list.find((item) => item.value === value)
    if (!found) return undefined
    list = found.children
  }
  return found
}

/** 路径转文案数组，节点缺失时回退为值本身 */
function labelsOf(path: CascaderPath): string[] {
  const labels: string[] = []
  let list = rootNodes.value
  for (const value of path) {
    const node = list.find((item) => item.value === value)
    if (!node) {
      labels.push(String(value))
      break
    }
    labels.push(node.label)
    list = node.children
  }
  return labels
}

/** 非 emitPath 模式下由末级值反查完整路径（广度优先，命中最近的先返回） */
function findPathByValue(value: CascaderValue): CascaderPath | undefined {
  const queue: CascaderNode[] = [...rootNodes.value]
  while (queue.length > 0) {
    const node = queue.shift()
    if (!node) break
    if (node.value === value) return node.path
    queue.push(...node.children)
  }
  return undefined
}

/* ---------- 选中值 ---------- */
const selectedPaths = computed<CascaderPath[]>(() => {
  const value = props.modelValue
  if (isNil(value)) return []

  if (isMultiple.value) {
    if (!isArray(value)) return []
    if (props.emitPath) return (value as unknown[]).filter(isArray) as CascaderPath[]
    return (value as CascaderValue[]).map((item) => findPathByValue(item) ?? [item])
  }

  if (isArray(value)) {
    return props.emitPath ? [(value as CascaderValue[]).slice()] : []
  }
  if (props.emitPath) return []
  // 非 emitPath 时 modelValue 为末级值，反查完整路径后同样按「路径数组」归一
  return [findPathByValue(value as CascaderValue) ?? []]
})

function isSelected(node: CascaderNode): boolean {
  const key = pathKey(node.path)
  return selectedPaths.value.some((path) => pathKey(path) === key)
}

function isActiveNode(node: CascaderNode, level: number): boolean {
  return activePath.value[level] === node.value
}

/* ---------- 展示文案 ---------- */
function textOf(labels: string[]): string {
  if (labels.length === 0) return ''
  if (props.showAllLevels) return labels.join(props.separator)
  return labels[labels.length - 1]
}

const placeholderText = computed(() => props.placeholder || t('cascader.placeholder'))
const emptyText = computed(() => t('cascader.noData'))

const displayText = computed(() => {
  if (isMultiple.value) return ''
  const path = selectedPaths.value[0]
  if (!path || path.length === 0) return ''
  return textOf(labelsOf(path))
})

const inputValue = computed(() => {
  if (props.filterable && isOpen.value) return query.value
  return displayText.value
})

const inputReadonly = computed(() => !props.filterable)

const shouldShowPlaceholder = computed(() => {
  if (isMultiple.value) return selectedPaths.value.length === 0 && !query.value
  if (props.filterable) return !isOpen.value && displayText.value === ''
  return displayText.value === ''
})

const tagList = computed(() =>
  selectedPaths.value.map((path) => ({
    path,
    key: pathKey(path),
    text: textOf(labelsOf(path)),
    node: resolveNode(path)?.raw,
  }))
)

/* ---------- 搜索 ---------- */
const isFiltering = computed(() => props.filterable && query.value.trim().length > 0)

function flatten(nodes: CascaderNode[], output: CascaderNode[] = []): CascaderNode[] {
  nodes.forEach((node) => {
    if (node.isLeaf || props.checkStrictly) output.push(node)
    if (node.children.length > 0) flatten(node.children, output)
  })
  return output
}

const suggestions = computed<CascaderNode[]>(() => {
  if (!isFiltering.value) return []
  const keyword = query.value.trim()
  const lower = keyword.toLowerCase()
  return flatten(rootNodes.value).filter((node) => {
    if (props.filterMethod) return props.filterMethod(keyword, node.raw)
    return textOf(labelsOf(node.path)).toLowerCase().includes(lower)
  })
})

function highlight(text: string, keyword: string): LabelSegment[] {
  const target = keyword.trim()
  if (!target) return [{ text, match: false }]
  const lowerText = text.toLowerCase()
  const lowerTarget = target.toLowerCase()
  const segments: LabelSegment[] = []
  let cursor = 0

  while (cursor < text.length) {
    const hit = lowerText.indexOf(lowerTarget, cursor)
    if (hit === -1) {
      segments.push({ text: text.slice(cursor), match: false })
      break
    }
    if (hit > cursor) segments.push({ text: text.slice(cursor, hit), match: false })
    segments.push({ text: text.slice(hit, hit + target.length), match: true })
    cursor = hit + target.length
  }

  return segments
}

/* ---------- 浮层定位 ---------- */
const floating = useFloating({
  reference: triggerRef,
  floating: popperRef,
  placement: () => props.placement,
  offset: () => 6,
  flip: () => true,
  matchWidth: () => props.matchWidth,
})

const clickOutside = useClickOutside([triggerRef, popperRef], () => close())

/* ---------- 展开 / 收起 ---------- */
function focusInput(): void {
  if (props.filterable) inputRef.value?.focus()
  else triggerRef.value?.focus()
}

function resetActive(): void {
  const path = selectedPaths.value[0] ?? []
  activePath.value = path.slice()
  activeLevel.value = Math.max(0, path.length - 1)
}

async function open(): Promise<void> {
  if (isDisabled.value || isOpen.value) return
  mounted.value = true
  isOpen.value = true
  focused.value = true
  resetActive()
  emit('visible-change', true)
  await nextTick()
  void floating.update()
  floating.start()
  clickOutside.start()
  focusInput()
}

function close(): void {
  if (!isOpen.value) return
  isOpen.value = false
  emit('visible-change', false)
  query.value = ''
  floating.stop()
  clickOutside.stop()
}

function toggle(): void {
  if (isOpen.value) close()
  else void open()
}

function onClickControl(e: MouseEvent): void {
  if (isDisabled.value) return
  if (e.target === inputRef.value) {
    if (!isOpen.value) void open()
    return
  }
  toggle()
}

/* ---------- 懒加载 ---------- */
async function loadChildren(node: CascaderNode): Promise<void> {
  if (!props.loadData) return
  const key = pathKey(node.path)
  const pending = new Set(loadingKeys.value)
  pending.add(key)
  loadingKeys.value = pending
  try {
    const result = await props.loadData(node.raw, node.path)
    const next = new Map(extraChildren.value)
    next.set(key, result ?? [])
    extraChildren.value = next
  } catch {
    // 失败保持未加载状态，再次点开可重试
  } finally {
    const done = new Set(loadingKeys.value)
    done.delete(key)
    loadingKeys.value = done
    emit('load', { node: node.raw, path: node.path })
  }
}

function maybeLoad(node: CascaderNode): void {
  if (!props.loadData || node.isLeaf) return
  const key = pathKey(node.path)
  if (extraChildren.value.has(key) || loadingKeys.value.has(key)) return
  void loadChildren(node)
}

/* ---------- 选择 ---------- */
function setActivePath(level: number, value: CascaderValue): void {
  const next = activePath.value.slice(0, level)
  next[level] = value
  activePath.value = next
}

function commitSingle(node: CascaderNode): void {
  const value: CascaderModelValue = props.emitPath ? node.path : node.value
  emit('update:modelValue', value)
  emit('change', value)
  void formItem?.validate('change')
  // 还能继续往下走时保持展开，便于逐层下钻
  if (node.isLeaf) close()
}

function commitMultiple(paths: CascaderPath[]): void {
  const value: CascaderModelValue = props.emitPath
    ? paths
    : paths.map((path) => (path.length > 0 ? path[path.length - 1] : ''))
  emit('update:modelValue', value)
  emit('change', value)
  void formItem?.validate('change')
}

function togglePath(path: CascaderPath): void {
  const key = pathKey(path)
  const index = selectedPaths.value.findIndex((item) => pathKey(item) === key)
  const next =
    index >= 0
      ? selectedPaths.value.filter((_, i) => i !== index)
      : [...selectedPaths.value, path]
  commitMultiple(next)
}

function onNodeClick(node: CascaderNode, level: number): void {
  if (node.disabled) return
  setActivePath(level, node.value)
  activeLevel.value = level
  maybeLoad(node)
  emit('expand-change', node.path)
  if (!props.checkStrictly && !node.isLeaf) return
  if (isMultiple.value) togglePath(node.path)
  else commitSingle(node)
}

function onSuggestionClick(node: CascaderNode): void {
  if (node.disabled) return
  activePath.value = node.path.slice(0, -1)
  activeLevel.value = Math.max(0, node.path.length - 1)
  if (isMultiple.value) togglePath(node.path)
  else commitSingle(node)
}

function onNodeMouseEnter(node: CascaderNode, level: number): void {
  if (props.expandTrigger !== 'hover' || node.disabled) return
  setActivePath(level, node.value)
  activeLevel.value = level
  maybeLoad(node)
  emit('expand-change', node.path)
}

function removePath(path: CascaderPath): void {
  if (isDisabled.value) return
  const key = pathKey(path)
  commitMultiple(selectedPaths.value.filter((item) => pathKey(item) !== key))
  void formItem?.validate('change')
}

function clear(): void {
  if (isDisabled.value) return
  let value: CascaderModelValue = []
  if (!isMultiple.value && !props.emitPath) value = null
  emit('update:modelValue', value)
  emit('change', value)
  emit('clear')
  query.value = ''
  void formItem?.validate('change')
}

/* ---------- 键盘 ---------- */
function currentLevel(): number {
  return Math.min(activeLevel.value, Math.max(0, columns.value.length - 1))
}

function moveActive(delta: number): void {
  const level = currentLevel()
  const column = columns.value[level]
  if (!column || column.nodes.length === 0) return
  let index = column.nodes.findIndex((item) => item.value === activePath.value[level])
  for (let i = 0; i < column.nodes.length; i++) {
    index = (index + delta + column.nodes.length) % column.nodes.length
    if (!column.nodes[index].disabled) break
  }
  const node = column.nodes[index]
  if (!node) return
  setActivePath(level, node.value)
  maybeLoad(node)
}

function enterDeeper(): void {
  const level = currentLevel()
  const column = columns.value[level]
  const node = column?.nodes.find((item) => item.value === activePath.value[level])
  if (!node || node.isLeaf) return
  maybeLoad(node)
  if (columns.value.length > level + 1) activeLevel.value = level + 1
}

function backToParent(): void {
  if (activeLevel.value > 0) activeLevel.value -= 1
}

function selectActive(): void {
  const level = currentLevel()
  const column = columns.value[level]
  const node = column?.nodes.find((item) => item.value === activePath.value[level])
  if (!node || node.disabled) return
  if (!props.checkStrictly && !node.isLeaf) {
    maybeLoad(node)
    emit('expand-change', node.path)
    return
  }
  if (isMultiple.value) togglePath(node.path)
  else commitSingle(node)
}

function onKeydown(e: KeyboardEvent): void {
  if (isDisabled.value) return
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) void open()
      else moveActive(1)
      break
    case 'ArrowUp':
      e.preventDefault()
      if (!isOpen.value) void open()
      else moveActive(-1)
      break
    case 'ArrowRight':
      if (isOpen.value) {
        e.preventDefault()
        enterDeeper()
      }
      break
    case 'ArrowLeft':
      if (isOpen.value) {
        e.preventDefault()
        backToParent()
      }
      break
    case 'Enter':
      e.preventDefault()
      if (isOpen.value) selectActive()
      else void open()
      break
    case 'Escape':
      if (isOpen.value) {
        e.preventDefault()
        close()
      }
      break
    case 'Tab':
      if (isOpen.value) close()
      break
  }
}

/* ---------- 输入 ---------- */
function onInput(e: Event): void {
  query.value = (e.target as HTMLInputElement).value
  if (!isOpen.value) void open()
}

function onFocus(e: FocusEvent): void {
  focused.value = true
  emit('focus', e)
}

function onBlur(e: FocusEvent): void {
  focused.value = false
  emit('blur', e)
  void formItem?.validate('blur')
  close()
}

/* ---------- 渲染辅助 ---------- */
function optionId(level: number, index: number): string {
  return `${idBase}-opt-${level}-${index}`
}

const activeDescendant = computed(() => {
  if (!isOpen.value) return undefined
  const level = currentLevel()
  const column = columns.value[level]
  if (!column) return undefined
  const index = column.nodes.findIndex((item) => item.value === activePath.value[level])
  return index >= 0 ? optionId(level, index) : undefined
})

const showClear = computed(
  () => props.clearable && !isDisabled.value && selectedPaths.value.length > 0
)

const showEmptyPanel = computed(
  () => !isFiltering.value && rootNodes.value.length === 0
)

/* ---------- 样式 ---------- */
const rootClasses = computed(() => [
  ns.b(),
  ns.m(mergedSize.value),
  ns.is('disabled', isDisabled.value),
  ns.is('block', props.block),
  ns.is('open', isOpen.value),
  ns.is('focused', focused.value),
  ns.is('invalid', isInvalid.value),
  ns.is('multiple', isMultiple.value),
])

const controlClasses = computed(() => [
  ns.e('control'),
  ns.em('control', mergedSize.value),
  ns.is('disabled', isDisabled.value),
  ns.is('focused', focused.value),
  ns.is('invalid', isInvalid.value),
])

const popperClasses = computed(() => [ns.e('popper'), props.popperClass])

function getCheckedNodes(): CascaderOption[] {
  const result: CascaderOption[] = []
  selectedPaths.value.forEach((path) => {
    const node = resolveNode(path)
    if (node) result.push(node.raw)
  })
  return result
}

defineExpose({
  focus: focusInput,
  blur: () => inputRef.value?.blur(),
  open: () => void open(),
  close,
  clear,
  getCheckedNodes,
})
</script>

<template>
  <div :class="rootClasses" v-bind="$attrs">
    <div
      ref="triggerRef"
      :class="controlClasses"
      role="combobox"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      :aria-controls="listboxId"
      :aria-disabled="isDisabled || undefined"
      :aria-invalid="isInvalid || undefined"
      :aria-activedescendant="activeDescendant"
      tabindex="0"
      @click="onClickControl"
      @keydown="onKeydown"
    >
      <span v-if="$slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </span>

      <span v-if="isMultiple" :class="ns.e('tags')">
        <span v-for="tag in tagList" :key="tag.key" :class="ns.e('tag')">
          <slot
            name="tag"
            :node="tag.node"
            :path="tag.path"
            :text="tag.text"
            :remove="() => removePath(tag.path)"
          >
            <span :class="ns.e('tag-text')">{{ tag.text }}</span>
            <button
              v-if="!isDisabled"
              type="button"
              :class="ns.e('tag-close')"
              :aria-label="t('common.remove')"
              @click.stop="removePath(tag.path)"
            >
              <svg viewBox="0 0 24 24" width="10" height="10" aria-hidden="true">
                <path
                  d="M5 5L19 19M19 5L5 19"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </slot>
        </span>
      </span>

      <input
        ref="inputRef"
        :class="ns.e('input')"
        :value="inputValue"
        :readonly="inputReadonly"
        :placeholder="shouldShowPlaceholder ? placeholderText : ''"
        :disabled="isDisabled"
        :name="name || undefined"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="isOpen"
        :aria-controls="listboxId"
        :aria-activedescendant="activeDescendant"
        autocomplete="off"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
      />

      <button
        v-if="showClear"
        type="button"
        :class="ns.e('clear')"
        :aria-label="t('cascader.clear')"
        @click.stop="clear"
      >
        <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
          <path
            d="M5 5L19 19M19 5L5 19"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>

      <span :class="ns.e('suffix')">
        <slot name="suffix">
          <svg
            :class="ns.e('arrow')"
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </span>
    </div>

    <Teleport to="body">
      <div
        v-if="mounted"
        v-show="isOpen"
        :id="idBase"
        ref="popperRef"
        :class="popperClasses"
        :style="floating.floatingStyle.value"
        @mousedown.prevent
      >
        <div :class="ns.e('dropdown')">
          <div v-if="props.loading" :class="ns.e('loading')" role="status">
            <slot name="loading">
              {{ t('cascader.loading') }}
            </slot>
          </div>

          <template v-else-if="isFiltering">
            <ul
              v-if="suggestions.length > 0"
              :id="listboxId"
              :class="ns.e('list')"
              role="listbox"
              :aria-multiselectable="isMultiple || undefined"
            >
              <li
                v-for="(node, index) in suggestions"
                :id="optionId(0, index)"
                :key="pathKey(node.path)"
                :class="[
                  ns.e('node'),
                  ns.is('selected', isSelected(node)),
                  ns.is('disabled', node.disabled),
                ]"
                role="option"
                :aria-selected="isSelected(node)"
                :aria-disabled="node.disabled || undefined"
                @click="onSuggestionClick(node)"
              >
                <span :class="ns.e('label')">
                  <template
                    v-for="(segment, i) in highlight(
                      textOf(labelsOf(node.path)),
                      query
                    )"
                    :key="i"
                  >
                    <span v-if="segment.match" :class="ns.e('match')">{{
                      segment.text
                    }}</span>
                    <template v-else>{{ segment.text }}</template>
                  </template>
                </span>
              </li>
            </ul>
            <div v-else :class="ns.e('empty')">
              <slot name="empty">
                {{ t('common.noMatch') }}
              </slot>
            </div>
          </template>

          <div v-else-if="showEmptyPanel" :class="ns.e('empty')">
            <slot name="empty">
              {{ emptyText }}
            </slot>
          </div>

          <div v-else :class="ns.e('panel')">
            <ul
              v-for="column in columns"
              :id="column.level === 0 ? listboxId : undefined"
              :key="column.level"
              :class="[ns.e('menu'), ns.is('loading', column.loading)]"
              role="listbox"
              :aria-multiselectable="isMultiple || undefined"
            >
              <li v-if="column.loading" :class="ns.e('loading')" role="status">
                <slot name="loading">
                  {{ t('cascader.loading') }}
                </slot>
              </li>
              <li v-else-if="column.nodes.length === 0" :class="ns.e('empty')">
                <slot name="empty">
                  {{ emptyText }}
                </slot>
              </li>
              <template v-else>
                <li
                  v-for="(node, index) in column.nodes"
                  :id="optionId(column.level, index)"
                  :key="pathKey(node.path)"
                  :class="[
                    ns.e('node'),
                    ns.is('active', isActiveNode(node, column.level)),
                    ns.is('selected', isSelected(node)),
                    ns.is('disabled', node.disabled),
                  ]"
                  role="option"
                  :aria-selected="isSelected(node)"
                  :aria-disabled="node.disabled || undefined"
                  @click="onNodeClick(node, column.level)"
                  @mouseenter="onNodeMouseEnter(node, column.level)"
                >
                  <span v-if="isMultiple" :class="ns.e('checkbox')">
                    <input
                      type="checkbox"
                      tabindex="-1"
                      :checked="isSelected(node)"
                      @click.prevent
                    />
                  </span>

                  <span :class="ns.e('label')">
                    <slot
                      name="default"
                      :node="node.raw"
                      :level="column.level"
                      :label="node.label"
                      :selected="isSelected(node)"
                      :is-leaf="node.isLeaf"
                    >
                      {{ node.label }}
                    </slot>
                  </span>

                  <svg
                    v-if="!node.isLeaf"
                    :class="ns.e('node-arrow')"
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
