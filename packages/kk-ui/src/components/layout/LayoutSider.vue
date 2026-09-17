<script setup lang="ts">
import {
  computed,
  getCurrentInstance,
  inject,
  ref,
  watch,
  type CSSProperties,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useLocale } from '../../locale'
import { addUnit } from '../../utils/dom'
import { LAYOUT_CONTEXT_KEY, type LayoutSiderProps, type LayoutScope } from './types'

defineOptions({ name: 'KkLayoutSider', inheritAttrs: false })

const props = withDefaults(defineProps<LayoutSiderProps>(), {
  width: 220,
  collapsedWidth: 64,
  collapsible: false,
  trigger: true,
  position: 'left',
  bordered: true,
  reverseArrow: false,
})

const emit = defineEmits<import('./types').LayoutSiderEmits>()

const ns = useNamespace('layout-sider')
const { t } = useLocale()

const context = inject(LAYOUT_CONTEXT_KEY, null)
const localCollapsed = ref(props.collapsed ?? context?.collapsed.value ?? false)
const collapsedRef = context ? context.collapsed : localCollapsed
// 受控态判定：父级是否真正绑定了 collapsed（v-model），而非依赖默认值
const instance = getCurrentInstance()
const isControlled = computed(() => instance?.vnode.props?.collapsed !== undefined)

const effectiveCollapsed = computed(() => collapsedRef.value)

function toggle(value?: boolean): void {
  // 事件句柄可能传入 MouseEvent 等非 boolean 入参，统一按「取反当前态」处理
  const next = typeof value === 'boolean' ? value : !effectiveCollapsed.value
  // 受控态（父级通过 v-model 绑定了 collapsed）下仅派发事件，内部态交由父级回写
  if (!isControlled.value) collapsedRef.value = next
  emit('update:collapsed', next)
  emit('collapse', next)
}

watch(
  () => props.collapsed,
  (value) => {
    if (value !== undefined) collapsedRef.value = value
  }
)

// 让外层布局感知侧边栏存在（即便 sider 通过插槽而非 hasSider 声明）
if (context) context.hasSider.value = true

const rootClass = computed(() => [
  ns.b(),
  ns.is('collapsed', effectiveCollapsed.value),
  ns.is('bordered', props.bordered),
  ns.m(props.position),
])

const rootStyle = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    width: addUnit(effectiveCollapsed.value ? props.collapsedWidth : props.width),
    order: props.position === 'right' ? 2 : 0,
  }
  return style
})

const triggerSlotName = computed(() =>
  typeof props.trigger === 'string' ? props.trigger : 'trigger'
)
const showTrigger = computed(() => props.collapsible && props.trigger !== false)

const scope = computed<LayoutScope>(() => ({
  collapsed: effectiveCollapsed.value,
  toggle,
}))

const arrowReversed = computed(() => effectiveCollapsed.value !== !props.reverseArrow)
</script>

<template>
  <aside :class="rootClass" :style="rootStyle" v-bind="$attrs">
    <div v-if="$slots.logo" :class="ns.e('logo')">
      <slot name="logo" v-bind="scope" />
    </div>

    <div :class="ns.e('body')">
      <slot v-bind="scope" />
    </div>

    <div
      v-if="showTrigger"
      :class="ns.e('trigger')"
      role="button"
      tabindex="0"
      :aria-label="effectiveCollapsed ? t('common.expand') : t('common.collapse')"
      @click="toggle()"
      @keydown.enter.prevent="toggle()"
      @keydown.space.prevent="toggle()"
    >
      <slot :name="triggerSlotName" v-bind="scope">
        <svg
          class="kk-layout-sider__arrow"
          :class="{ 'is-reversed': arrowReversed }"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M10 3L5 8l5 5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </slot>
    </div>
  </aside>
</template>
