<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { CardProps } from './types'

defineOptions({ name: 'KkCard', inheritAttrs: false })

const props = withDefaults(defineProps<CardProps>(), {
  title: '',
  subtitle: '',
  shadow: 'always',
  padding: 'medium',
  hoverable: false,
  bordered: true,
  loading: false,
})

const slots = useSlots()
const ns = useNamespace('card')

const hasHeader = computed(
  () =>
    Boolean(slots.header) ||
    Boolean(props.title) ||
    Boolean(props.subtitle) ||
    Boolean(slots.extra)
)
const hasFooter = computed(() => Boolean(slots.footer))
const hasCover = computed(() => Boolean(slots.cover))

const classes = computed(() => [
  ns.b(),
  ns.m(`shadow-${props.shadow}`),
  ns.m(`padding-${props.padding}`),
  ns.is('hoverable', props.hoverable),
  ns.is('bordered', props.bordered),
  ns.is('loading', props.loading),
])
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <div v-if="hasCover" :class="ns.e('cover')">
      <slot name="cover" />
    </div>

    <div v-if="hasHeader" :class="ns.e('header')">
      <slot name="header">
        <div :class="ns.e('title-group')">
          <div v-if="title || $slots.title" :class="ns.e('title')">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <div v-if="subtitle || $slots.subtitle" :class="ns.e('subtitle')">
            <slot name="subtitle">
              {{ subtitle }}
            </slot>
          </div>
        </div>
      </slot>
      <div v-if="$slots.extra" :class="ns.e('extra')">
        <slot name="extra" />
      </div>
    </div>

    <div :class="ns.e('body')">
      <slot />
      <div v-if="loading" :class="ns.e('loading')" aria-hidden="true">
        <span :class="ns.e('spinner')" />
      </div>
    </div>

    <div v-if="hasFooter" :class="ns.e('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>
