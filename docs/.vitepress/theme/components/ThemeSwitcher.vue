<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initTheme, setTheme, useTheme } from 'kk-ui'

interface ThemeOption {
  name: string
  label: string
}

const OPTIONS: ThemeOption[] = [
  { name: 'light', label: 'Light 亮色' },
  { name: 'dark', label: 'Dark 暗色' },
  { name: 'soft', label: 'Soft 柔光' },
  { name: 'cyber', label: 'Cyber 赛博' },
]

const { theme } = useTheme()
const mounted = ref(false)

onMounted(() => {
  initTheme()
  mounted.value = true
})

function select(name: string) {
  setTheme(name)
  window.dispatchEvent(
    new CustomEvent('kk-toast', {
      detail: `已切换到 ${OPTIONS.find((o) => o.name === name)?.label ?? name}`,
    })
  )
}
</script>

<template>
  <div v-if="mounted" class="kk-theme-switch" role="group" aria-label="主题切换">
    <button
      v-for="option in OPTIONS"
      :key="option.name"
      class="kk-theme-switch__dot"
      :class="{ 'is-active': theme === option.name }"
      :data-theme="option.name"
      :title="option.label"
      :aria-label="option.label"
      :aria-pressed="theme === option.name"
      type="button"
      @click="select(option.name)"
    />
  </div>
</template>

<style>
.kk-theme-switch {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  margin-left: 12px;
  border-radius: var(--kk-radius-full);
  border: 1px solid var(--kk-border-color);
  background: var(--kk-bg-subtle);
}

.kk-theme-switch__dot {
  width: 20px;
  height: 20px;
  padding: 0;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform var(--kk-duration-base) var(--kk-ease-out),
    border-color var(--kk-duration-base) var(--kk-ease-out);
}

.kk-theme-switch__dot:hover {
  transform: scale(1.15);
}

.kk-theme-switch__dot.is-active {
  border-color: var(--kk-bg-container);
  box-shadow: 0 0 0 2px var(--kk-color-primary);
}

.kk-theme-switch__dot[data-theme='light'] {
  background: linear-gradient(135deg, #ffffff 50%, #5b4fe9 50%);
}

.kk-theme-switch__dot[data-theme='dark'] {
  background: linear-gradient(135deg, #1f242f 50%, #8b80ff 50%);
}

.kk-theme-switch__dot[data-theme='soft'] {
  background: linear-gradient(135deg, #ffeaf2 50%, #e879a6 50%);
}

.kk-theme-switch__dot[data-theme='cyber'] {
  background: linear-gradient(135deg, #0c1220 50%, #00e5ff 50%);
}
</style>
