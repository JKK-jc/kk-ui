<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { addUnit } from '../../utils/dom'
import type { ContainerAlign, ContainerJustify, ContainerProps } from './types'

defineOptions({ name: 'KkContainer', inheritAttrs: false })

const props = withDefaults(defineProps<ContainerProps>(), {
  size: 'large',
  padding: 'medium',
  centered: true,
  direction: 'row',
  align: 'stretch',
  justify: 'start',
  wrap: true,
  bordered: false,
  tag: 'div',
  fluid: false,
})

defineEmits<import('./types').ContainerEmits>()

const ns = useNamespace('container')

const SIZE_WIDTH: Record<string, string> = {
  small: '640px',
  medium: '960px',
  large: '1200px',
  full: '100%',
}

const ALIGN_MAP: Record<ContainerAlign, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

const JUSTIFY_MAP: Record<ContainerJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly',
}

const PADDING_MAP: Record<string, string> = {
  none: '0',
  small: 'var(--kk-space-3)',
  medium: 'var(--kk-space-5)',
  large: 'var(--kk-space-6)',
}

const effectiveMaxWidth = computed(() => {
  if (props.maxWidth != null) return addUnit(props.maxWidth)
  return props.fluid ? '100%' : SIZE_WIDTH[props.size]
})

const isCentered = computed(() => props.centered && !props.fluid)

function resolvePadding(): string {
  const p = props.padding
  if (typeof p === 'string' && PADDING_MAP[p]) return PADDING_MAP[p]
  const custom = addUnit(p)
  return custom ?? PADDING_MAP.medium
}

const rootClass = computed(() => [
  ns.b(),
  ns.is('bordered', props.bordered),
  ns.is('centered', isCentered.value),
])

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    maxWidth: effectiveMaxWidth.value,
    padding: resolvePadding(),
    display: 'flex',
    flexDirection: props.direction,
    alignItems: ALIGN_MAP[props.align],
    justifyContent: JUSTIFY_MAP[props.justify],
    gap: addUnit(props.gap) ?? undefined,
    flexWrap: props.wrap ? 'wrap' : 'nowrap',
  }
  if (isCentered.value) {
    style.marginLeft = 'auto'
    style.marginRight = 'auto'
  }
  if (props.minHeight != null) style.minHeight = addUnit(props.minHeight)!
  if (props.bordered) {
    style.border = '1px solid var(--kk-border-color)'
    style.borderRadius = 'var(--kk-radius-lg)'
  }
  return style
})
</script>

<template>
  <component :is="tag" :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <div v-if="$slots.header" :class="ns.e('header')">
      <slot name="header" />
    </div>
    <slot />
    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </div>
  </component>
</template>
