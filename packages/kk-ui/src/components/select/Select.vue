<script setup lang="ts">
import { computed, inject, nextTick, ref, watch, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useId } from '../../hooks/useId'
import { useLocale } from '../../locale'
import { useFloating } from '../../hooks/useFloating'
import { useClickOutside } from '../../hooks/useClickOutside'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../form/context'
import { addUnit } from '../../utils/dom'
import type {
  NormalizedOption,
  SelectEmits,
  SelectModelValue,
  SelectOption,
  SelectOptionValue,
  SelectProps,
} from './types'

defineOptions({ name: 'KkSelect', inheritAttrs: false })

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: undefined,
  options: () => [],
  multiple: false,
  filterable: false,
  remote: false,
  allowCreate: false,
  clearable: false,
  collapseTags: false,
  maxTagCount: undefined,
  multipleLimit: -1,
  selectAll: false,
  disabled: false,
  placeholder: '',
  size: undefined,
  loading: false,
  valueKey: 'value',
  labelKey: 'label',
  emptyText: '',
  placement: 'bottom-start',
  matchWidth: true,
  popperClass: '',
  popperWidth: undefined,
  block: false,
  name: '',
  autofocus: false,
  openOnFocus: false,
})

const emit = defineEmits<SelectEmits>()

const ns = useNamespace('select')
const idBase = useId('kk-select')
const listboxId = `${idBase}-listbox`
const { t } = useLocale()

/* ---------- 表单上下文 ---------- */
const formContext = inject(FORM_CONTEXT_KEY, undefined)
const formItem = inject(FORM_ITEM_CONTEXT_KEY, undefined)

const isDisabled = computed(() => props.disabled || Boolean(formContext?.disabled))
const mergedSize = computed(() => props.size ?? formContext?.size ?? 'medium')
const isInvalid = computed(() => Boolean(formItem?.message?.value))

/* ---------- refs ---------- */
const triggerRef = ref<HTMLElement | null>(null)
const popperRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)

const query = ref('')
const isOpen = ref(false)
const focused = ref(false)
const mounted = ref(false)
const activeIndex = ref(-1)

/** 远程搜索结果（归一化后） */
const remoteOptions = ref<NormalizedOption[]>([])
/** allowCreate 已创建、但不在 props.options 中的选项 */
const createdOptions = ref<NormalizedOption[]>([])

/* ---------- 取值归一化 ---------- */
function mapOption(raw: SelectOption): NormalizedOption {
  const value = raw[props.valueKey] as SelectOptionValue
  const label = (raw[props.labelKey] as string) ?? (value === null ? '' : String(value))
  return {
    value,
    label,
    disabled: Boolean(raw.disabled),
    isCreate: false,
    raw,
  }
}

const normalizedOptions = computed<NormalizedOption[]>(() => {
  const base = (props.options ?? []).map(mapOption)
  return [...base, ...createdOptions.value]
})

const isRemote = computed(() => props.remote)
const isMultiple = computed(() => props.multiple)

/* ---------- 选中值 ---------- */
function isMultipleValue(v: SelectModelValue): v is SelectOptionValue[] {
  return Array.isArray(v)
}

const selectedValues = computed<SelectOptionValue[]>(() => {
  if (isMultiple.value) {
    return isMultipleValue(props.modelValue)
      ? props.modelValue.filter((v) => v !== undefined)
      : []
  }
  return props.modelValue == null ? [] : [props.modelValue as SelectOptionValue]
})

function getOption(value: SelectOptionValue): NormalizedOption | undefined {
  return normalizedOptions.value.find((o) => o.value === value)
}

function isValueSelected(value: SelectOptionValue): boolean {
  return selectedValues.value.includes(value)
}

/* ---------- 搜索 / 过滤 ---------- */
const filterableLocal = computed(() => props.filterable && !props.remote)

const filteredBase = computed<NormalizedOption[]>(() => {
  if (isRemote.value) {
    return [...remoteOptions.value, ...createdOptions.value]
  }
  return normalizedOptions.value
})

const renderOptions = computed<NormalizedOption[]>(() => {
  let list = filteredBase.value
  if (filterableLocal.value) {
    const q = query.value.trim().toLowerCase()
    if (q) {
      list = list.filter((o) =>
        props.filterMethod
          ? props.filterMethod(q, o.raw)
          : String(o.label).toLowerCase().includes(q)
      )
    }
  }
  if (showCreateOption()) {
    const q = query.value.trim()
    list = [
      ...list,
      {
        value: q,
        label: q,
        disabled: false,
        isCreate: true,
        raw: { value: q, label: q },
      },
    ]
  }
  return list
})

function showCreateOption(): boolean {
  if (!props.allowCreate || !props.filterable || isRemote.value) return false
  const q = query.value.trim()
  if (!q) return false
  const hit = normalizedOptions.value.some(
    (o) =>
      String(o.label).toLowerCase() === q.toLowerCase() ||
      String(o.value).toLowerCase() === q.toLowerCase()
  )
  if (hit) return false
  if (props.createFilter && !props.createFilter(q, props.options ?? [])) return false
  return true
}

const hasVisibleOptions = computed(
  () => renderOptions.value.some((o) => !o.isCreate) || showCreateOption()
)

/* ---------- 远程搜索 ---------- */
async function runRemote(q: string): Promise<void> {
  if (!props.remote || !props.remoteMethod) return
  emit('search', q)
  try {
    const result = await props.remoteMethod(q)
    remoteOptions.value = (result ?? []).map(mapOption)
  } catch {
    remoteOptions.value = []
  }
}

/* ---------- 显示文案 ---------- */
const placeholderText = computed(() =>
  props.placeholder
    ? props.placeholder
    : isMultiple.value
      ? t('select.multiplePlaceholder')
      : t('select.placeholder')
)

const emptyText = computed(() => props.emptyText || t('select.noData'))

const displayLabel = computed(() => {
  if (isMultiple.value) return ''
  const v = selectedValues.value[0]
  if (v === undefined) return ''
  return getOption(v)?.label ?? (v === null ? '' : String(v))
})

const inputValue = computed(() => {
  if (props.filterable) {
    if (isMultiple.value) return query.value
    if (isOpen.value) return query.value
    return displayLabel.value
  }
  return displayLabel.value
})

const inputReadonly = computed(() => !props.filterable)

const shouldShowPlaceholder = computed(() => {
  if (isMultiple.value) return selectedValues.value.length === 0 && !query.value
  if (props.filterable) return !isOpen.value && displayLabel.value === ''
  return displayLabel.value === ''
})

/* ---------- 多选标签 ---------- */
const tagList = computed(() =>
  selectedValues.value.map((v) => ({
    value: v,
    label: getOption(v)?.label ?? (v === null ? '' : String(v)),
  }))
)

const visibleTags = computed(() => {
  if (props.collapseTags && props.maxTagCount && props.maxTagCount > 0) {
    return tagList.value.slice(0, props.maxTagCount)
  }
  return tagList.value
})

/**
 * 折叠计数：只有显式开启 `collapseTags` + `maxTagCount` 时才统计。
 * 否则未开启折叠时也会算出 `length - 0`，凭空多渲染一个「+N」标签。
 */
const collapsedCount = computed(() =>
  props.collapseTags && props.maxTagCount && props.maxTagCount > 0
    ? Math.max(0, tagList.value.length - props.maxTagCount)
    : 0
)

const canAddMore = computed(
  () => props.multipleLimit < 0 || selectedValues.value.length < props.multipleLimit
)

/* ---------- 全选 ---------- */
const isAllSelected = computed(() => {
  const selectable = renderOptions.value.filter((o) => !o.disabled && !o.isCreate)
  if (selectable.length === 0) return false
  return selectable.every((o) => isValueSelected(o.value))
})

const isIndeterminate = computed(() => {
  const selectable = renderOptions.value.filter((o) => !o.disabled && !o.isCreate)
  if (selectable.length === 0) return false
  const picked = selectable.filter((o) => isValueSelected(o.value)).length
  return picked > 0 && picked < selectable.length
})

/* ---------- 浮层定位 ---------- */
const floating = useFloating({
  reference: triggerRef,
  floating: popperRef,
  placement: () => props.placement,
  offset: () => 6,
  flip: () => true,
  matchWidth: () => !props.popperWidth && props.matchWidth,
})

const popperStyle = computed<CSSProperties>(() => {
  const width = props.popperWidth ? addUnit(props.popperWidth) : undefined
  return width ? { width } : {}
})

const clickOutside = useClickOutside([triggerRef, popperRef], () => close())

/* ---------- 展开 / 收起 ---------- */
function focusInput(): void {
  if (props.filterable) inputRef.value?.focus()
  else triggerRef.value?.focus()
}

function resetActive(): void {
  const first = renderOptions.value.findIndex((o) => !o.disabled)
  activeIndex.value = first
}

async function open(): Promise<void> {
  if (isDisabled.value || isOpen.value) return
  mounted.value = true
  isOpen.value = true
  focused.value = true
  if (props.filterable && isRemote.value) void runRemote('')
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
  if (props.filterable) query.value = ''
  floating.stop()
  clickOutside.stop()
}

function toggle(): void {
  if (isOpen.value) close()
  else void open()
}

function onClickControl(e: MouseEvent): void {
  if (isDisabled.value) return
  // 点击输入框：关闭态打开，打开态保持（不关闭，便于定位光标）
  if (e.target === inputRef.value) {
    if (!isOpen.value) void open()
    return
  }
  toggle()
}

/* ---------- 选择 ---------- */
function commitOption(opt: NormalizedOption): void {
  if (opt.disabled) return
  if (opt.isCreate) {
    if (!createdOptions.value.some((o) => String(o.value) === String(opt.value))) {
      createdOptions.value = [...createdOptions.value, { ...opt, isCreate: true }]
    }
  }
  if (isMultiple.value) {
    if (isValueSelected(opt.value)) {
      setMultipleValues(selectedValues.value.filter((v) => v !== opt.value))
      emit('deselect', opt.raw)
    } else {
      if (!canAddMore.value) return
      setMultipleValues([...selectedValues.value, opt.value])
      emit('select', opt.raw)
    }
  } else {
    emit('update:modelValue', opt.value)
    emit('change', opt.value)
    emit('select', opt.raw)
    close()
  }
  void formItem?.validate('change')
}

function setMultipleValues(values: SelectOptionValue[]): void {
  emit('update:modelValue', values)
  emit('change', values)
}

function onOptionClick(opt: NormalizedOption): void {
  commitOption(opt)
}

function removeSelected(value: SelectOptionValue): void {
  const opt = getOption(value)
  setMultipleValues(selectedValues.value.filter((v) => v !== value))
  emit('remove-tag', value)
  if (opt) emit('deselect', opt.raw)
  void formItem?.validate('change')
}

function removeTag(value: SelectOptionValue): void {
  removeSelected(value)
}

function clear(): void {
  if (isDisabled.value) return
  if (isMultiple.value) {
    const removed = selectedValues.value
    setMultipleValues([])
    removed.forEach((v) => {
      const opt = getOption(v)
      if (opt) emit('deselect', opt.raw)
    })
  } else {
    emit('update:modelValue', null)
    emit('change', null)
  }
  emit('clear')
  void formItem?.validate('change')
}

function toggleSelectAll(): void {
  const selectable = renderOptions.value.filter((o) => !o.disabled && !o.isCreate)
  if (isAllSelected.value) {
    selectable.forEach((o) => emit('deselect', o.raw))
    setMultipleValues([])
  } else {
    const limit = props.multipleLimit
    const target = limit > 0 ? selectable.slice(0, limit) : selectable
    setMultipleValues(target.map((o) => o.value))
    target.forEach((o) => emit('select', o.raw))
  }
  void formItem?.validate('change')
}

/* ---------- 键盘 ---------- */
function moveActive(delta: number): void {
  const list = renderOptions.value
  if (list.length === 0) return
  let idx = activeIndex.value
  for (let i = 0; i < list.length; i++) {
    idx = (idx + delta + list.length) % list.length
    if (!list[idx].disabled) break
  }
  activeIndex.value = idx
}

function selectActive(): void {
  const opt = renderOptions.value[activeIndex.value]
  if (opt && !opt.disabled) commitOption(opt)
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
    case 'Backspace':
      if (isMultiple.value && !query.value && selectedValues.value.length > 0) {
        e.preventDefault()
        removeSelected(selectedValues.value[selectedValues.value.length - 1])
      }
      break
  }
}

/* ---------- 输入 ---------- */
function onInput(e: Event): void {
  query.value = (e.target as HTMLInputElement).value
  if (isRemote.value) void runRemote(query.value)
  else emit('search', query.value)
  if (!isOpen.value) void open()
}

function onFocus(e: FocusEvent): void {
  focused.value = true
  emit('focus', e)
  if (!isOpen.value && (props.openOnFocus || props.filterable)) void open()
}

function onBlur(e: FocusEvent): void {
  focused.value = false
  emit('blur', e)
  void formItem?.validate('blur')
  close()
}

/* ---------- 渲染辅助 ---------- */
function optionId(index: number): string {
  return `${idBase}-opt-${index}`
}

const activeDescendant = computed(() =>
  isOpen.value && activeIndex.value >= 0 ? optionId(activeIndex.value) : undefined
)

const showClear = computed(
  () =>
    props.clearable &&
    !isDisabled.value &&
    (isMultiple.value
      ? selectedValues.value.length > 0
      : selectedValues.value.length > 0)
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

watch(
  () => props.modelValue,
  () => {
    if (isRemote.value && isOpen.value) void runRemote(query.value)
  }
)

defineExpose({
  focus: focusInput,
  blur: () => inputRef.value?.blur(),
  open: () => void open(),
  close,
  toggle: () => toggle(),
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
      tabindex="0"
      @click="onClickControl"
      @keydown="onKeydown"
    >
      <span v-if="$slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </span>

      <span v-if="isMultiple" :class="ns.e('tags')">
        <span v-for="tag in visibleTags" :key="String(tag.value)" :class="ns.e('tag')">
          <slot name="tag" :label="tag.label" :value="tag.value" :remove="removeTag">
            <span :class="ns.e('tag-text')">{{ tag.label }}</span>
            <button
              v-if="!isDisabled"
              type="button"
              :class="ns.e('tag-close')"
              :aria-label="t('select.removeTag', { label: tag.label })"
              @click.stop="removeTag(tag.value)"
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
        <span
          v-if="collapsedCount > 0"
          :class="[ns.e('tag'), ns.e('tag--collapse')]"
          :title="t('select.selectedCount', { count: tagList.length })"
        >
          +{{ collapsedCount }}
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
        :autofocus="autofocus"
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
        :aria-label="t('select.clear')"
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
          <slot name="arrow">
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
        :style="[floating.floatingStyle.value, popperStyle]"
        @mousedown.prevent
      >
        <div :class="ns.e('dropdown')">
          <div v-if="$slots.header" :class="ns.e('header')">
            <slot name="header" />
          </div>

          <label
            v-if="selectAll && isMultiple"
            :class="[
              ns.e('select-all'),
              ns.is('checked', isAllSelected),
              ns.is('indeterminate', isIndeterminate),
            ]"
            @click.prevent="toggleSelectAll"
          >
            <input
              type="checkbox"
              :checked="isAllSelected"
              :indeterminate="isIndeterminate"
            />
            <span>{{
              isAllSelected ? t('select.deselectAll') : t('select.selectAll')
            }}</span>
          </label>

          <ul
            v-if="hasVisibleOptions"
            :id="listboxId"
            :class="ns.e('list')"
            role="listbox"
            :aria-multiselectable="isMultiple || undefined"
          >
            <template v-for="(opt, index) in renderOptions" :key="String(opt.value)">
              <li
                v-if="!opt.isCreate"
                :id="optionId(index)"
                :class="[
                  ns.e('option'),
                  ns.is('selected', isValueSelected(opt.value)),
                  ns.is('active', index === activeIndex),
                  ns.is('disabled', opt.disabled),
                ]"
                role="option"
                :aria-selected="isValueSelected(opt.value)"
                :aria-disabled="opt.disabled || undefined"
                @click="onOptionClick(opt)"
                @mouseenter="activeIndex = index"
              >
                <slot
                  name="default"
                  :option="opt.raw"
                  :index="index"
                  :selected="isValueSelected(opt.value)"
                >
                  <span :class="ns.e('option-label')">{{ opt.label }}</span>
                </slot>
              </li>
              <li
                v-else
                :id="optionId(index)"
                :class="[
                  ns.e('option'),
                  ns.e('option--create'),
                  ns.is('active', index === activeIndex),
                ]"
                role="option"
                :aria-selected="false"
                @click="onOptionClick(opt)"
                @mouseenter="activeIndex = index"
              >
                <slot name="create" :query="String(opt.value)">
                  <span :class="ns.e('option-label')">
                    {{ t('select.create', { label: String(opt.value) }) }}
                  </span>
                </slot>
              </li>
            </template>
          </ul>

          <div v-if="props.loading" :class="ns.e('loading')" role="status">
            <slot name="loading">
              {{ t('select.loading') }}
            </slot>
          </div>

          <div
            v-else-if="!hasVisibleOptions && !showCreateOption()"
            :class="ns.e('empty')"
          >
            <slot name="empty">
              {{ emptyText }}
            </slot>
          </div>

          <div v-if="$slots.footer" :class="ns.e('footer')">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
