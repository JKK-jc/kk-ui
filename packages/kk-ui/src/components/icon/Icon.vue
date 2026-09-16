<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { resolveIcon, toTransform, toViewBox } from '../../icons/registry'
import { loadLucideIcons } from '../../icons/lucide'
import type { IconProps } from './types'

defineOptions({ name: 'KkIcon', inheritAttrs: false })

const props = withDefaults(defineProps<IconProps>(), {
  size: 'var(--kk-font-size-lg)',
  color: '',
  spin: false,
})

const ns = useNamespace('icon')

/**
 * 图标数据来自已注册的图标集（受信任来源），
 * 因此这里使用 v-html 渲染 svg 路径内容。
 */
const version = ref(0)
const iconData = computed(() => {
  void version.value
  return resolveIcon(props.name)
})

const SIZE_MAP: Record<string, string> = {
  small: 'var(--kk-font-size-sm)',
  medium: 'var(--kk-font-size-lg)',
  large: 'var(--kk-font-size-xl)',
}

const iconStyle = computed(() => {
  const raw = props.size
  const size = typeof raw === 'number' ? `${raw}px` : (SIZE_MAP[raw] ?? raw)
  return {
    width: size,
    height: size,
    color: props.color || undefined,
  }
})

const classes = computed(() => [ns.b(), ns.is('spin', props.spin)])

const viewBox = computed(() =>
  iconData.value ? toViewBox(iconData.value) : '0 0 24 24'
)

const transform = computed(() => (iconData.value ? toTransform(iconData.value) : ''))

const body = computed(() => iconData.value?.body ?? '')

async function ensureIcon(name: string) {
  if (!name || resolveIcon(name)) return
  await loadLucideIcons()
  version.value += 1
}

watch(() => props.name, ensureIcon, { immediate: true })

onMounted(() => {
  void ensureIcon(props.name)
})
</script>

<template>
  <svg
    :class="classes"
    :style="iconStyle"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    :aria-label="name"
    v-bind="$attrs"
  >
    <g v-if="transform" :transform="transform" v-html="body" />
    <g v-else v-html="body" />
  </svg>
</template>
