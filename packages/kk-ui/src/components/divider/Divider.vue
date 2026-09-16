<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { DividerProps } from './types'

defineOptions({ name: 'KkDivider', inheritAttrs: false })

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  contentPosition: 'center',
  borderStyle: 'solid',
  accent: false,
})

const slots = useSlots()
const ns = useNamespace('divider')

const hasContent = computed(
  () => props.direction === 'horizontal' && Boolean(slots.default)
)

const classes = computed(() => [
  ns.b(),
  ns.m(props.direction),
  ns.m(`content-${props.contentPosition}`),
  ns.m(`style-${props.borderStyle}`),
  ns.is('accent', props.accent),
  ns.is('with-text', hasContent.value),
])
</script>

<template>
  <div
    :class="classes"
    :role="direction === 'horizontal' ? 'separator' : undefined"
    v-bind="$attrs"
  >
    <span v-if="hasContent" :class="ns.e('text')">
      <slot />
    </span>
  </div>
</template>
