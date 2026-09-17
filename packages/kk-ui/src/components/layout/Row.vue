<script setup lang="ts">
import { computed, provide, type CSSProperties, type Ref } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { RowAlign, RowJustify, RowProps } from './types'
import { ROW_CONTEXT_KEY } from './types'

defineOptions({ name: 'KkRow', inheritAttrs: false })

const props = withDefaults(defineProps<RowProps>(), {
  justify: 'start',
  align: 'stretch',
  wrap: true,
  tag: 'div',
})

defineEmits<import('./types').RowEmits>()

const ns = useNamespace('row')

const JUSTIFY_MAP: Record<RowJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
}

const ALIGN_MAP: Record<RowAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

function toNumber(value?: string | number): number {
  if (value == null) return 0
  if (typeof value === 'number') return value
  const parsed = Number.parseFloat(value)
  return Number.isNaN(parsed) ? 0 : parsed
}

const gutterX = computed(() =>
  Array.isArray(props.gutter) ? toNumber(props.gutter[0]) : toNumber(props.gutter)
)
const gutterY = computed(() =>
  Array.isArray(props.gutter) ? toNumber(props.gutter[1]) : toNumber(props.gutter)
)

// 把水平间距交给 Col，用于左右内边距（配合 Row 的负外边距）
provide(ROW_CONTEXT_KEY, { gutterX: gutterX as unknown as Ref<number> })

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: 'flex',
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
    justifyContent: JUSTIFY_MAP[props.justify],
    alignItems: ALIGN_MAP[props.align],
  }
  if (gutterX.value) {
    style.marginLeft = `-${gutterX.value / 2}px`
    style.marginRight = `-${gutterX.value / 2}px`
  }
  if (gutterY.value) style.rowGap = `${gutterY.value}px`
  return style
})
</script>

<template>
  <component :is="tag" :class="ns.b()" :style="rootStyle" v-bind="$attrs">
    <slot />
  </component>
</template>
