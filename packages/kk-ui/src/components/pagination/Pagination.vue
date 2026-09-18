<script setup lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { useClickOutside } from '../../hooks/useClickOutside'
import { clamp, range } from '../../utils/format'
import { isFunction } from '../../utils/is'
import type { PaginationInstance, PaginationPagerItem, PaginationProps } from './types'

defineOptions({ name: 'KkPagination', inheritAttrs: false })

const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: undefined,
  currentPage: undefined,
  pageSize: 10,
  total: undefined,
  pageCount: undefined,
  pageSizes: () => [10, 20, 50, 100],
  layout: 'prev, pager, next, jumper, sizes, total',
  pagerCount: 7,
  background: false,
  size: 'medium',
  disabled: false,
  hideOnSinglePage: false,
  mode: 'number',
  prevText: '',
  nextText: '',
  prevIcon: undefined,
  nextIcon: undefined,
  showQuickJumper: true,
})

const emit = defineEmits<{
  'update:modelValue': [page: number]
  'update:currentPage': [page: number]
  'update:pageSize': [size: number]
  change: [payload: { currentPage: number; pageSize: number }]
  'current-change': [page: number]
  'size-change': [size: number]
  'prev-click': [page: number]
  'next-click': [page: number]
}>()

const ns = useNamespace('pagination')
const { t } = useLocale()

const innerPageSize = ref(props.pageSize)

/* ---------- 派生 ---------- */
const pageCount = computed<number>(() => {
  if (props.pageCount != null) return Math.max(1, props.pageCount)
  if (props.total != null) {
    return Math.max(1, Math.ceil(props.total / innerPageSize.value))
  }
  return 1
})

const innerCurrentPage = ref(
  clamp(props.currentPage ?? props.modelValue ?? 1, 1, pageCount.value)
)

const isDisabled = computed(() => props.disabled)

const rootClass = computed(() => [
  ns.b(),
  ns.m(props.size),
  ns.is('background', props.background),
  ns.is('disabled', isDisabled.value),
])

const shouldRender = computed(() => !(props.hideOnSinglePage && pageCount.value <= 1))

/* ---------- 外部受控同步 ---------- */
watch(
  () => [props.currentPage, props.modelValue] as const,
  ([cp, mv]) => {
    const target = cp ?? mv
    if (target != null) innerCurrentPage.value = clamp(target, 1, pageCount.value)
  }
)
watch(
  () => props.pageSize,
  (size) => {
    if (size != null) innerPageSize.value = size
  }
)
watch(pageCount, (count) => {
  if (innerCurrentPage.value > count) innerCurrentPage.value = count
})

/* ---------- 翻页 ---------- */
function emitPageUpdate(page: number): void {
  const next = clamp(page, 1, pageCount.value)
  innerCurrentPage.value = next
  emit('update:modelValue', next)
  emit('update:currentPage', next)
  emit('current-change', next)
  emit('change', { currentPage: next, pageSize: innerPageSize.value })
}

function prev(): void {
  if (isDisabled.value || innerCurrentPage.value <= 1) return
  emit('prev-click', innerCurrentPage.value - 1)
  emitPageUpdate(innerCurrentPage.value - 1)
}

function next(): void {
  if (isDisabled.value || innerCurrentPage.value >= pageCount.value) return
  emit('next-click', innerCurrentPage.value + 1)
  emitPageUpdate(innerCurrentPage.value + 1)
}

function jump(page: number): void {
  if (isDisabled.value || !Number.isFinite(page)) return
  emitPageUpdate(Math.round(page))
}

function setPageSize(size: number): void {
  if (isDisabled.value || size == null) return
  innerPageSize.value = size
  const max = pageCount.value
  if (innerCurrentPage.value > max) innerCurrentPage.value = max
  emit('update:pageSize', size)
  emit('size-change', size)
  emit('change', { currentPage: innerCurrentPage.value, pageSize: size })
}

/* ---------- 页码折叠 ---------- */

/**
 * 用工厂函数生成页码项，避免对象字面量的 `type` 被推断成 `string`，
 * 从而与 `PaginationPagerItem` 的联合类型不兼容。
 */
const pageItem = (page: number): PaginationPagerItem => ({ type: 'page', page })
const moreItem = (dir: 'prev' | 'next'): PaginationPagerItem => ({ type: 'more', dir })

const pagerItems = computed<PaginationPagerItem[]>(() => {
  const count = pageCount.value
  const current = innerCurrentPage.value
  const pager = props.pagerCount
  if (count <= pager) return range(1, count).map(pageItem)

  const half = Math.floor((pager - 1) / 2)
  const leftThreshold = half + 1
  const rightThreshold = count - half

  if (current <= leftThreshold) {
    return [...range(1, pager - 2).map(pageItem), moreItem('next'), pageItem(count)]
  }
  if (current >= rightThreshold) {
    const start = count - (pager - 3)
    return [pageItem(1), moreItem('prev'), ...range(start, count).map(pageItem)]
  }
  const start = current - (half - 1)
  const end = current + (half - 1)
  return [
    pageItem(1),
    moreItem('prev'),
    ...range(start, end).map(pageItem),
    moreItem('next'),
    pageItem(count),
  ]
})

function onPagerItemClick(item: PaginationPagerItem): void {
  if (item.type === 'page') {
    jump(item.page)
    return
  }
  const step = props.pagerCount - 2
  jump(
    item.dir === 'prev' ? innerCurrentPage.value - step : innerCurrentPage.value + step
  )
}

/* ---------- 跳页输入 ---------- */
const jumpValue = ref('')

function onJumperEnter(): void {
  const value = Number(jumpValue.value)
  if (Number.isFinite(value) && value !== 0) {
    jump(value)
    jumpValue.value = ''
  }
}

/* ---------- 每页条数下拉 ---------- */
const sizesOpen = ref(false)
const sizesRef = ref<HTMLElement | null>(null)
const sizesPopperRef = ref<HTMLElement | null>(null)

/**
 * 用「函数 ref」而不是 `ref="xxx"`。
 *
 * `ref="xxx"` 写在 `v-for` 里时，Vue 会把值收集成**数组**，于是 `useClickOutside` 里
 * `el.contains` 变成 `array.contains` → 控制台抛 `TypeError: contains is not a function`，
 * 且下拉反而关不掉。函数 ref 每次只回写单个元素，避免这个坑。
 */
function setSizesRef(el: unknown): void {
  sizesRef.value = (el as HTMLElement | null) ?? null
}

function setSizesPopperRef(el: unknown): void {
  sizesPopperRef.value = (el as HTMLElement | null) ?? null
}

/** 点击外部关闭每页条数下拉（挂在组件挂载时自动生效，无需持有返回值） */
useClickOutside(
  [sizesRef, sizesPopperRef],
  () => {
    sizesOpen.value = false
  },
  { events: ['pointerdown'] }
)

function toggleSizes(): void {
  if (isDisabled.value) return
  sizesOpen.value = !sizesOpen.value
}

function pickSize(size: number): void {
  sizesOpen.value = false
  setPageSize(size)
}

/* ---------- 布局编排 ---------- */
const layoutTokens = computed(() =>
  props.layout
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter(Boolean)
)
const hasJumperFallback = computed(
  () => props.showQuickJumper && !layoutTokens.value.includes('jumper')
)
const effectiveTokens = computed(() =>
  hasJumperFallback.value ? [...layoutTokens.value, 'jumper'] : layoutTokens.value
)
const leftTokens = computed(() => {
  const idx = effectiveTokens.value.indexOf('->')
  return idx === -1 ? effectiveTokens.value : effectiveTokens.value.slice(0, idx)
})
const rightTokens = computed(() => {
  const idx = effectiveTokens.value.indexOf('->')
  return idx === -1 ? [] : effectiveTokens.value.slice(idx + 1)
})

const prevDisabled = computed(() => isDisabled.value || innerCurrentPage.value <= 1)
const nextDisabled = computed(
  () => isDisabled.value || innerCurrentPage.value >= pageCount.value
)

/* ---------- 轻量槽渲染（把函数式作用域插槽渲染成 VNode） ---------- */
const SlotRenderer = defineComponent({
  name: 'KkPaginationSlotRenderer',
  props: {
    fn: { type: Function, default: undefined },
    scope: { type: Object, default: () => ({}) },
  },
  setup(p) {
    return () => (typeof p.fn === 'function' ? p.fn(p.scope) : null)
  },
})

defineExpose<PaginationInstance>({
  prev,
  next,
  jump,
  setPageSize,
})
</script>

<template>
  <div
    v-if="shouldRender"
    :class="rootClass"
    role="navigation"
    :aria-label="t('pagination.page')"
  >
    <!-- simple 模式：上一页 / 当前 / 下一页 + 总数 -->
    <template v-if="mode === 'simple'">
      <button
        type="button"
        :class="[ns.e('btn'), ns.e('prev')]"
        :disabled="prevDisabled"
        :aria-label="t('pagination.prev')"
        @click="prev"
      >
        <slot name="prev" :disabled="prevDisabled">
          <SlotRenderer v-if="isFunction(prevIcon)" :fn="prevIcon" :scope="{}" />
          <template v-else-if="prevText">{{ prevText }}</template>
          <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M15 6l-6 6 6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </button>
      <span :class="ns.e('simple-pager')">
        {{ innerCurrentPage }} / {{ pageCount }}
      </span>
      <button
        type="button"
        :class="[ns.e('btn'), ns.e('next')]"
        :disabled="nextDisabled"
        :aria-label="t('pagination.next')"
        @click="next"
      >
        <slot name="next" :disabled="nextDisabled">
          <SlotRenderer v-if="isFunction(nextIcon)" :fn="nextIcon" :scope="{}" />
          <template v-else-if="nextText">{{ nextText }}</template>
          <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              d="M9 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </button>
      <span :class="ns.e('total')">{{
        t('pagination.total', { total: total ?? 0 })
      }}</span>
    </template>

    <!-- number 模式：按 layout 编排 -->
    <template v-else>
      <div :class="ns.e('group')">
        <template v-for="(token, i) in leftTokens" :key="`l-${token}-${i}`">
          <button
            v-if="token === 'prev'"
            type="button"
            :class="[ns.e('btn'), ns.e('prev')]"
            :disabled="prevDisabled"
            :aria-label="t('pagination.prev')"
            @click="prev"
          >
            <slot name="prev" :disabled="prevDisabled">
              <SlotRenderer v-if="isFunction(prevIcon)" :fn="prevIcon" :scope="{}" />
              <template v-else-if="prevText">{{ prevText }}</template>
              <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </slot>
          </button>

          <template v-else-if="token === 'pager'">
            <template v-for="(item, pi) in pagerItems" :key="`p-${pi}`">
              <button
                v-if="item.type === 'page'"
                type="button"
                :class="[
                  ns.e('btn'),
                  ns.e('pager'),
                  ns.is('active', item.page === innerCurrentPage),
                ]"
                :aria-current="item.page === innerCurrentPage ? 'page' : undefined"
                @click="onPagerItemClick(item)"
              >
                <slot
                  name="pager"
                  :page="item.page"
                  :active="item.page === innerCurrentPage"
                >
                  {{ item.page }}
                </slot>
              </button>
              <button
                v-else
                type="button"
                :class="[ns.e('btn'), ns.e('pager'), ns.e('more')]"
                :aria-label="
                  t('pagination.goto', {
                    page:
                      item.dir === 'prev'
                        ? innerCurrentPage - (pagerCount - 2)
                        : innerCurrentPage + (pagerCount - 2),
                  })
                "
                @click="onPagerItemClick(item)"
              >
                <span :class="ns.e('more-text')">···</span>
              </button>
            </template>
          </template>

          <button
            v-else-if="token === 'next'"
            type="button"
            :class="[ns.e('btn'), ns.e('next')]"
            :disabled="nextDisabled"
            :aria-label="t('pagination.next')"
            @click="next"
          >
            <slot name="next" :disabled="nextDisabled">
              <SlotRenderer v-if="isFunction(nextIcon)" :fn="nextIcon" :scope="{}" />
              <template v-else-if="nextText">{{ nextText }}</template>
              <svg v-else viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </slot>
          </button>

          <span v-else-if="token === 'total'" :class="ns.e('total')">{{
            t('pagination.total', { total: total ?? 0 })
          }}</span>

          <span v-else-if="token === 'jumper'" :class="ns.e('jumper')">
            <slot name="jumper">
              {{ t('pagination.jumper') }}
              <input
                v-model="jumpValue"
                type="text"
                :class="ns.e('jumper-input')"
                :disabled="isDisabled"
                :aria-label="t('pagination.jumper')"
                @keyup.enter="onJumperEnter"
              />
              {{ t('pagination.page') }}
            </slot>
          </span>

          <span v-else-if="token === 'sizes'" :ref="setSizesRef" :class="ns.e('sizes')">
            <slot name="sizes">
              <button
                type="button"
                :class="ns.e('sizes-trigger')"
                :disabled="isDisabled"
                :aria-haspopup="true"
                :aria-expanded="sizesOpen"
                @click="toggleSizes"
              >
                {{ t('pagination.sizes', { size: innerPageSize }) }}
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  aria-hidden="true"
                  :class="ns.e('sizes-arrow')"
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
              </button>
              <span
                v-if="sizesOpen"
                :ref="setSizesPopperRef"
                :class="ns.e('sizes-popper')"
                role="listbox"
              >
                <button
                  v-for="size in pageSizes"
                  :key="size"
                  type="button"
                  :class="[
                    ns.e('size-option'),
                    ns.is('active', size === innerPageSize),
                  ]"
                  role="option"
                  :aria-selected="size === innerPageSize"
                  @click="pickSize(size)"
                >
                  {{ t('pagination.sizes', { size }) }}
                </button>
              </span>
            </slot>
          </span>
        </template>
      </div>

      <div v-if="rightTokens.length" :class="[ns.e('group'), ns.e('group--right')]">
        <template v-for="(token, i) in rightTokens" :key="`r-${token}-${i}`">
          <span v-if="token === 'total'" :class="ns.e('total')">
            {{ t('pagination.total', { total: total ?? 0 }) }}
          </span>
          <span v-else-if="token === 'jumper'" :class="ns.e('jumper')">
            <slot name="jumper">
              {{ t('pagination.jumper') }}
              <input
                v-model="jumpValue"
                type="text"
                :class="ns.e('jumper-input')"
                :disabled="isDisabled"
                @keyup.enter="onJumperEnter"
              />
              {{ t('pagination.page') }}
            </slot>
          </span>
          <span v-else-if="token === 'sizes'" :ref="setSizesRef" :class="ns.e('sizes')">
            <slot name="sizes">
              <button
                type="button"
                :class="ns.e('sizes-trigger')"
                :disabled="isDisabled"
                :aria-expanded="sizesOpen"
                @click="toggleSizes"
              >
                {{ t('pagination.sizes', { size: innerPageSize }) }}
              </button>
            </slot>
          </span>
        </template>
      </div>
    </template>
  </div>
</template>
