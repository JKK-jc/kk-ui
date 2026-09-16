<script setup lang="ts">
import { computed, h, Fragment, isVNode, type VNode } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { SpaceProps, SpaceSize } from './types'

defineOptions({ name: 'KkSpace', inheritAttrs: false })

const props = withDefaults(defineProps<SpaceProps>(), {
  size: 'small',
  direction: 'horizontal',
  align: 'center',
  wrap: false,
  fill: false,
  split: false,
})

const slots = defineSlots<{
  default?: () => unknown
  split?: () => unknown
}>()

const ns = useNamespace('space')

const SIZE_MAP: Record<string, string> = {
  small: 'var(--kk-space-2)',
  medium: 'var(--kk-space-3)',
  large: 'var(--kk-space-4)',
}

function toLength(value: SpaceSize | undefined): string {
  if (value === undefined) return SIZE_MAP.small
  if (typeof value === 'number') return `${value}px`
  return SIZE_MAP[value] ?? SIZE_MAP.small
}

const classes = computed(() => [
  ns.b(),
  ns.m(props.direction),
  ns.m(`align-${props.align}`),
  ns.is('wrap', props.wrap),
  ns.is('fill', props.fill),
])

const gapStyle = computed<Record<string, string>>(() => {
  const size = props.size
  const [row, column] = Array.isArray(size) ? size : [size, size]
  return {
    '--kk-space-row-gap': toLength(row),
    '--kk-space-column-gap': toLength(column),
  }
})

/**
 * 拍平 default 插槽（处理 v-for 产生的 Fragment），
 * 并在开启 split 时于子项之间插入分隔符
 */
const items = computed<VNode[]>(() => {
  const flat: VNode[] = []

  const walk = (nodes: unknown): void => {
    if (Array.isArray(nodes)) {
      nodes.forEach(walk)
      return
    }
    if (isVNode(nodes)) {
      if (nodes.type === Fragment && Array.isArray(nodes.children)) {
        walk(nodes.children)
        return
      }
      flat.push(nodes)
    }
  }

  walk(slots.default?.() ?? [])

  if (!props.split || flat.length <= 1) return flat

  const result: VNode[] = []
  flat.forEach((item, index) => {
    if (index > 0) {
      result.push(
        h(
          'span',
          { class: ns.e('split'), key: `split-${index}` },
          slots.split?.() as VNode[]
        )
      )
    }
    result.push(item)
  })
  return result
})

/**
 * 把已是 VNode 的子项原样渲染，避免模板层再包一层真实 DOM
 */
const SpaceNode = (nodeProps: { node: VNode }) => nodeProps.node
</script>

<template>
  <div :class="classes" :style="gapStyle" v-bind="$attrs">
    <SpaceNode v-for="(item, index) in items" :key="index" :node="item" />
  </div>
</template>
