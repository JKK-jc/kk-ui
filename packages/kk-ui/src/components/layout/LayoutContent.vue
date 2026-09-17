<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { addUnit } from '../../utils/dom'
import type { LayoutContentProps } from './types'

defineOptions({ name: 'KkLayoutContent', inheritAttrs: false })

const props = withDefaults(defineProps<LayoutContentProps>(), {
  padding: 'medium',
  scrollable: true,
})

defineEmits<import('./types').LayoutContentEmits>()

const ns = useNamespace('layout-content')

const PADDING_MAP: Record<string, string> = {
  none: '0',
  small: 'var(--kk-space-3)',
  medium: 'var(--kk-space-5)',
  large: 'var(--kk-space-6)',
}

const rootClass = computed(() => [ns.b(), ns.is('scrollable', props.scrollable)])

const rootStyle = computed<CSSProperties>(() => {
  const p = props.padding
  const padding = typeof p === 'string' && PADDING_MAP[p] ? PADDING_MAP[p] : addUnit(p)
  return { padding: padding ?? PADDING_MAP.medium }
})
</script>

<template>
  <main :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <slot />
  </main>
</template>
