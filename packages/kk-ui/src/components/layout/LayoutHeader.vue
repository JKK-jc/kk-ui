<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { addUnit } from '../../utils/dom'
import type { LayoutHeaderProps } from './types'

defineOptions({ name: 'KkLayoutHeader', inheritAttrs: false })

const props = withDefaults(defineProps<LayoutHeaderProps>(), {
  height: 60,
  fixed: false,
  bordered: true,
})

defineEmits<import('./types').LayoutHeaderEmits>()

const ns = useNamespace('layout-header')

const rootClass = computed(() => [
  ns.b(),
  ns.is('fixed', props.fixed),
  ns.is('bordered', props.bordered),
])

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = { height: addUnit(props.height) }
  return style
})
</script>

<template>
  <header :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <div v-if="$slots.left" :class="ns.e('left')">
      <slot name="left" />
    </div>
    <div :class="ns.e('center')">
      <slot />
    </div>
    <div v-if="$slots.right" :class="ns.e('right')">
      <slot name="right" />
    </div>
  </header>
</template>
