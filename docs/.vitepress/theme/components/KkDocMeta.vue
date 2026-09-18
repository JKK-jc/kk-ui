<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { setTheme, useLocale, useTheme } from 'kk-ui'

const route = useRoute()
const { theme } = useTheme()
const { t } = useLocale()

/** 组件文档页自动附带主题切换与设计规范速查 */
const isComponent = computed(() => route.path.startsWith('/components/'))

const THEMES = [
  { name: 'light', label: 'Light' },
  { name: 'dark', label: 'Dark' },
  { name: 'soft', label: 'Soft' },
  { name: 'cyber', label: 'Cyber' },
]

function select(name: string) {
  setTheme(name)
  window.dispatchEvent(
    new CustomEvent('kk-toast', { detail: t('docs.meta.switched', { name }) })
  )
}
</script>

<template>
  <div v-if="isComponent" class="kk-aside-meta">
    <div class="kk-aside-meta__title">{{ t('docs.meta.previewTheme') }}</div>
    <div class="kk-aside-meta__list">
      <button
        v-for="item in THEMES"
        :key="item.name"
        class="kk-aside-meta__btn"
        :class="{ 'is-active': theme === item.name }"
        type="button"
        @click="select(item.name)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style>
.kk-aside-meta {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--kk-border-color);
}

.kk-aside-meta__title {
  font-size: var(--kk-font-size-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--kk-text-tertiary);
  margin-bottom: 10px;
}

.kk-aside-meta__list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.kk-aside-meta__btn {
  padding: 4px 10px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-subtle);
  color: var(--kk-text-secondary);
  font-family: var(--kk-font-sans);
  font-size: var(--kk-font-size-xs);
  cursor: pointer;
  transition: all var(--kk-duration-fast) var(--kk-ease-out);
}

.kk-aside-meta__btn:hover {
  border-color: var(--kk-border-color-hover);
  color: var(--kk-text-primary);
}

.kk-aside-meta__btn.is-active {
  border-color: var(--kk-color-primary);
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-weight: 600;
}
</style>
