<script setup lang="ts">
import { computed, inject, provide, useSlots, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { addUnit } from '../../utils/dom'
import { SKELETON_CONTEXT_KEY, type SkeletonProps, type SkeletonVariant } from './types'

defineOptions({ name: 'KkSkeleton', inheritAttrs: false })

const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: true,
  animated: true,
  variant: 'text',
  rows: 0,
  rowWidths: () => [],
  round: false,
  count: 1,
  block: false,
})

defineEmits<import('./types').SkeletonEmits>()

const slots = useSlots()
const ns = useNamespace('skeleton')
const { t } = useLocale()

const parentContext = inject(SKELETON_CONTEXT_KEY, null)

const hasContentSlot = computed(() => Boolean(slots.default))
const hasTemplateSlot = computed(() => Boolean(slots.template))
// 拥有真实内容插槽或自定义模板插槽即视为容器：使用自己的 loading
const isWrapper = computed(() => hasContentSlot.value || hasTemplateSlot.value)

const effectiveLoading = computed<boolean>(() => {
  if (parentContext && !isWrapper.value) return parentContext.loading.value
  return props.loading
})

// 内层拼块（继承外层 loading 且自身无内容插槽）不对外暴露忙状态，避免重复播报
const isInner = computed(() => Boolean(parentContext) && !hasContentSlot.value)

provide(SKELETON_CONTEXT_KEY, { loading: effectiveLoading })

const rootClass = computed(() => [
  ns.b(),
  ns.is('animated', props.animated && effectiveLoading.value),
  ns.is('block', props.block),
  ns.is('root', isWrapper.value),
])

/* ---------- 形态尺寸推导 ---------- */

const VARIANT_SIZE: Record<
  SkeletonVariant,
  { width?: string; height: string; round: boolean }
> = {
  text: { width: '100%', height: '14px', round: false },
  title: { width: '38%', height: '20px', round: false },
  button: { width: '72px', height: '32px', round: true },
  avatar: { height: '40px', round: true },
  image: { width: '100%', height: '160px', round: false },
  paragraph: { width: '100%', height: '14px', round: false },
}

function resolveSize(): { width?: string; height?: string; round: boolean } {
  const base = VARIANT_SIZE[props.variant]
  return {
    width: props.width != null ? addUnit(props.width) : base.width,
    height: props.height != null ? addUnit(props.height) : base.height,
    round: props.round || base.round,
  }
}

const singleItemStyle = computed<CSSProperties>(() => {
  const size = resolveSize()
  const style: CSSProperties = { height: size.height }
  if (size.width) style.width = size.width
  return style
})

const singleItemClass = computed(() => [
  ns.e('item'),
  ns.em('item', props.variant),
  ns.is('round', resolveSize().round),
])

const paragraphRows = computed<number>(() =>
  props.variant === 'paragraph' ? (props.rows > 0 ? props.rows : 3) : 0
)

function rowWidth(index: number): string {
  const widths = props.rowWidths
  if (widths && widths[index]) return widths[index]
  const last = index === paragraphRows.value - 1
  return last ? '60%' : '100%'
}

const repeatCount = computed(() => Math.max(1, props.count))
</script>

<template>
  <div
    :class="rootClass"
    :aria-busy="effectiveLoading && !isInner ? 'true' : undefined"
    :aria-label="effectiveLoading && !isInner ? t('skeleton.loading') : undefined"
  >
    <!-- 容器：默认插槽承载真实内容或内层拼块，由 loading 驱动内层拼块显隐 -->
    <template v-if="hasContentSlot">
      <slot />
    </template>

    <!-- 自定义模板骨架 -->
    <template v-else-if="hasTemplateSlot && effectiveLoading">
      <div :class="ns.e('custom')">
        <slot name="template" />
      </div>
    </template>

    <!-- 内置骨架拼块 -->
    <template v-else-if="effectiveLoading">
      <div v-if="paragraphRows > 0">
        <div
          v-for="i in paragraphRows"
          :key="i"
          :class="[ns.e('item'), ns.em('item', 'text'), ns.is('block', props.block)]"
          :style="{ width: rowWidth(i - 1), height: '14px' }"
        />
      </div>
      <template v-else>
        <div
          v-for="n in repeatCount"
          :key="n"
          :class="singleItemClass"
          :style="singleItemStyle"
        />
      </template>
    </template>
  </div>
</template>
