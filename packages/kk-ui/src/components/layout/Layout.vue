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

/**
 * 侧边栏存在标记。
 *
 * `props.hasSider` / 具名 `#sider` 槽是显式声明；但业务更常用「默认插槽里直接放
 * KkLayoutSider」，此时父级拿不到 `slots.sider`，需要由子级在 setup 时回写这个 ref。
 * 注意它必须是可写的 `ref`——早前这里 provide 的是只读 computed，
 * 子级 `hasSider.value = true` 会被 Vue 静默忽略，导致内层布局错误地保持纵向。
 */
const siderDetected = ref(false)
const hasSider = computed(
  () => props.hasSider || Boolean(slots.sider) || siderDetected.value
)

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

/**
 * 是否使用具名区域编排（header / sider / content / footer 槽）。
 *
 * - 用具名槽时：header、footer 占满整行，sider 与 content 组成中间一行；
 * - 不用具名槽时（推荐，与 Element Plus 的 Container 一致）：默认插槽的子节点
 *   直接作为主轴上的项，由方向决定横排 / 竖排，
 *   于是 `<KkLayout><KkLayoutHeader/><KkLayout/><KkLayoutFooter/></KkLayout>`
 *   能自然地「顶栏在上、底栏在下」。
 * （早前默认插槽的节点一律被塞进强制横向的 `.kk-layout__main`，导致这种写法被横排错乱。）
 */
const usesNamedRegions = computed(() =>
  Boolean(slots.header || slots.sider || slots.content || slots.footer)
)

provide(LAYOUT_CONTEXT_KEY, {
  collapsed,
  // 提供可写 ref，供 KkLayoutSider 在 setup 时置位（见上方说明）
  hasSider: siderDetected,
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
    <template v-if="usesNamedRegions">
      <div v-if="$slots.header" :class="[ns.e('region'), ns.em('region', 'header')]">
        <slot name="header" v-bind="scope" />
      </div>

      <div :class="ns.e('main')">
        <div v-if="$slots.sider" :class="[ns.e('region'), ns.em('region', 'sider')]">
          <slot name="sider" v-bind="scope" />
        </div>

        <div
          v-if="$slots.content"
          :class="[ns.e('region'), ns.em('region', 'content')]"
        >
          <slot name="content" />
        </div>

        <slot />
      </div>

      <div v-if="$slots.footer" :class="[ns.e('region'), ns.em('region', 'footer')]">
        <slot name="footer" />
      </div>
    </template>

    <!-- 默认插槽：子节点直接作为主轴上的项（参考 Element Plus Container） -->
    <slot v-else />
  </div>
</template>
