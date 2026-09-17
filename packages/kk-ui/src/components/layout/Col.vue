<script setup lang="ts">
import { computed, inject, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { ROW_CONTEXT_KEY, type ColProps, type ColSpanValue } from './types'

defineOptions({ name: 'KkCol', inheritAttrs: false })

const props = withDefaults(defineProps<ColProps>(), {
  tag: 'div',
})

defineEmits<import('./types').ColEmits>()

const ns = useNamespace('col')

const rowContext = inject(ROW_CONTEXT_KEY, null)

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'] as const

function spanClasses(prefix: string, value: ColSpanValue): string[] {
  if (typeof value === 'number') return [ns.m(`${prefix}-span-${value}`)]
  const list: string[] = []
  if (value.span != null) list.push(ns.m(`${prefix}-span-${value.span}`))
  if (value.offset != null) list.push(ns.m(`${prefix}-offset-${value.offset}`))
  if (value.push != null) list.push(ns.m(`${prefix}-push-${value.push}`))
  if (value.pull != null) list.push(ns.m(`${prefix}-pull-${value.pull}`))
  return list
}

const hasResponsive = computed(() => BREAKPOINTS.some((bp) => props[bp] != null))

const rootClass = computed(() => {
  const list = [ns.b()]
  if (props.span != null) list.push(ns.m(`span-${props.span}`))
  if (props.offset != null) list.push(ns.m(`offset-${props.offset}`))
  if (props.push != null) list.push(ns.m(`push-${props.push}`))
  if (props.pull != null) list.push(ns.m(`pull-${props.pull}`))
  if (props.span == null && !hasResponsive.value) list.push(ns.m('auto'))
  BREAKPOINTS.forEach((bp) => {
    const val = props[bp]
    if (val != null) list.push(...spanClasses(bp, val))
  })
  return list
})

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {}
  const gx = rowContext?.gutterX.value ?? 0
  if (gx) {
    style.paddingLeft = `${gx / 2}px`
    style.paddingRight = `${gx / 2}px`
  }
  return style
})
</script>

<template>
  <component :is="tag" :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <slot />
  </component>
</template>
