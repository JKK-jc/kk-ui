<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { TagProps } from './types'

defineOptions({ name: 'KkTag', inheritAttrs: false })

const props = withDefaults(defineProps<TagProps>(), {
  type: 'default',
  size: 'medium',
  effect: 'light',
  closable: false,
  round: false,
  bordered: true,
})

const emit = defineEmits<{
  close: [e: MouseEvent]
  click: [e: MouseEvent]
}>()

const ns = useNamespace('tag')

const classes = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.m(`effect-${props.effect}`),
  ns.is('round', props.round),
  ns.is('bordered', props.bordered),
])

function handleClose(e: MouseEvent) {
  e.stopPropagation()
  emit('close', e)
}

function handleClick(e: MouseEvent) {
  emit('click', e)
}
</script>

<template>
  <span :class="classes" v-bind="$attrs" @click="handleClick">
    <span v-if="$slots.icon" :class="ns.e('icon')">
      <slot name="icon" />
    </span>
    <span :class="ns.e('text')">
      <slot />
    </span>
    <button
      v-if="closable"
      :class="ns.e('close')"
      type="button"
      aria-label="关闭"
      @click="handleClose"
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
  </span>
</template>
