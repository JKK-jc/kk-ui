<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { ButtonProps } from './types'

defineOptions({ name: 'KkButton', inheritAttrs: false })

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false,
  nativeType: 'button',
})

const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

const ns = useNamespace('button')

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.is('disabled', props.disabled),
  ns.is('loading', props.loading),
  ns.is('block', props.block),
])

function handleClick(e: MouseEvent) {
  if (props.disabled || props.loading) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit('click', e)
}
</script>

<template>
  <button
    :class="classes"
    :type="nativeType"
    :disabled="disabled || loading"
    :aria-disabled="disabled || loading"
    :aria-busy="loading"
    v-bind="$attrs"
    @click="handleClick"
  >
    <span v-if="loading" :class="ns.e('spinner')" aria-hidden="true" />
    <span v-else-if="$slots.icon" :class="ns.e('icon')">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" :class="ns.e('text')">
      <slot />
    </span>
  </button>
</template>
