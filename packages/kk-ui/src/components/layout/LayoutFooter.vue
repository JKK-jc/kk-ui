<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { addUnit } from '../../utils/dom'
import type { LayoutFooterProps } from './types'

defineOptions({ name: 'KkLayoutFooter', inheritAttrs: false })

const props = withDefaults(defineProps<LayoutFooterProps>(), {
  height: 56,
  bordered: true,
})

defineEmits<import('./types').LayoutFooterEmits>()

const ns = useNamespace('layout-footer')

const rootClass = computed(() => [ns.b(), ns.is('bordered', props.bordered)])

const rootStyle = computed<CSSProperties>(() => ({
  height: addUnit(props.height),
}))
</script>

<template>
  <footer :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <slot />
  </footer>
</template>
