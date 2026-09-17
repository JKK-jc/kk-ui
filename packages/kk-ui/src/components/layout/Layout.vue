<script setup lang="ts">
import { computed, provide, ref, useSlots, type CSSProperties } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { addUnit } from '../../utils/dom'
import {
  LAYOUT_CONTEXT_KEY,
  type LayoutDirection,
  type LayoutProps,
  type LayoutScope,
} from './types'

defineOptions({ name: 'KkLayout', inheritAttrs: false })

const props = withDefaults(defineProps<LayoutProps>(), {
  fixed: false,
  gap: 0,
  bordered: false,
})

defineEmits<import('./types').LayoutEmits>()

const slots = useSlots()
const ns = useNamespace('layout')

const collapsed = ref(false)
const hasSider = computed(() => props.hasSider || Boolean(slots.sider))

const direction = computed<LayoutDirection>(
  () => props.direction ?? (hasSider.value ? 'horizontal' : 'vertical')
)

function toggle(value?: boolean): void {
  collapsed.value = value ?? !collapsed.value
}

const scope = computed<LayoutScope>(() => ({
  collapsed: collapsed.value,
  toggle,
}))

provide(LAYOUT_CONTEXT_KEY, {
  collapsed,
  hasSider,
  toggle,
})

const rootClass = computed(() => [
  ns.b(),
  ns.m(direction.value),
  ns.is('fixed', props.fixed),
  ns.is('bordered', props.bordered),
  ns.is('has-sider', hasSider.value),
])

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: direction.value === 'horizontal' ? 'row' : 'column',
    gap: addUnit(props.gap) ?? undefined,
  }
  if (props.fixed) style.height = '100vh'
  if (props.height != null) style.height = addUnit(props.height)!
  return style
})
</script>

<template>
  <div :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <div v-if="$slots.header" :class="[ns.e('region'), ns.em('region', 'header')]">
      <slot name="header" v-bind="scope" />
    </div>

    <div :class="ns.e('main')">
      <div v-if="$slots.sider" :class="[ns.e('region'), ns.em('region', 'sider')]">
        <slot name="sider" v-bind="scope" />
      </div>

      <div v-if="$slots.content" :class="[ns.e('region'), ns.em('region', 'content')]">
        <slot name="content" />
      </div>

      <slot />
    </div>

    <div v-if="$slots.footer" :class="[ns.e('region'), ns.em('region', 'footer')]">
      <slot name="footer" />
    </div>
  </div>
</template>
