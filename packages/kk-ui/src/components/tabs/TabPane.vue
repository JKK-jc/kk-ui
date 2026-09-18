<script setup lang="ts">
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  watch,
  useSlots,
  type VNode,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useId } from '../../hooks/useId'
import { TABS_CONTEXT_KEY, type TabPaneDescriptor, type TabPaneProps } from './types'

defineOptions({ name: 'KkTabPane', inheritAttrs: false })

const props = withDefaults(defineProps<TabPaneProps>(), {
  label: '',
  disabled: false,
  closable: false,
  lazy: false,
  forceRender: false,
})

const slots = useSlots()

const ns = useNamespace('tab-pane')
const baseId = useId('kk-tab-pane')

const ctx = inject(TABS_CONTEXT_KEY, null)

const active = computed(() => (ctx ? ctx.currentName.value === props.name : false))

/** 渲染策略：激活 / forceRender / 非懒渲染 时都保留在 DOM，否则不挂载 */
const shouldRender = computed(() => active.value || props.forceRender || !props.lazy)

/**
 * uid 由父级 KkTabs 在 `registerPane` 时统一分配（见 Tabs.vue 说明），
 * 这里不要自行生成——script setup 的顶层变量是「每实例一份」，自增会永远得到 1。
 */
const descriptor: TabPaneDescriptor = reactive({
  uid: 0,
  name: props.name,
  label: props.label,
  disabled: props.disabled,
  closable: props.closable,
  hasLabelSlot: Boolean(slots.label),
  renderLabel: () =>
    slots.label
      ? (slots.label({ active: active.value, disabled: props.disabled }) as VNode[])
      : null,
})

watch(
  () =>
    [
      props.name,
      props.label,
      props.disabled,
      props.closable,
      Boolean(slots.label),
    ] as const,
  ([name, label, disabled, closable, hasLabelSlot]) => {
    descriptor.name = name
    descriptor.label = label
    descriptor.disabled = disabled
    descriptor.closable = closable
    descriptor.hasLabelSlot = hasLabelSlot
  }
)

onMounted(() => {
  ctx?.registerPane(descriptor)
})

onBeforeUnmount(() => {
  if (descriptor.uid) ctx?.unregisterPane(descriptor.uid)
})

defineExpose({
  name: props.name,
})
</script>

<template>
  <div
    v-if="shouldRender"
    v-show="active"
    :id="`${baseId}-${props.name}`"
    :class="[ns.b(), ns.is('active', active)]"
    role="tabpanel"
    :aria-hidden="!active || undefined"
  >
    <slot />
  </div>
</template>
