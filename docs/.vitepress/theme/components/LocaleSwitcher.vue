<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { localeLabel, setLocale, useLocale } from 'kk-ui'

/**
 * 导航栏语言切换。
 *
 * 语言是全局状态（见 `packages/kk-ui/src/locale`），切换后：
 * - 文档站里所有用到 `useLocale()` 的组件文案立即跟着变；
 * - 写入 localStorage 并同步 `<html lang>`，刷新后保持。
 */
const { locale, locales } = useLocale()
const mounted = ref(false)
const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)

onMounted(() => {
  mounted.value = true
  document.addEventListener('click', onDocumentClick, true)
})

function onDocumentClick(event: MouseEvent): void {
  const target = event.target as Node | null
  if (rootRef.value && target && !rootRef.value.contains(target)) open.value = false
}

const currentLabel = computed(() => localeLabel(locale.value))
const options = computed(() => locales.value)

function select(name: string): void {
  setLocale(name)
  open.value = false
  window.dispatchEvent(
    new CustomEvent('kk-toast', { detail: `语言已切换为 ${localeLabel(name)}` })
  )
}

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick, true)
})
</script>

<template>
  <div v-if="mounted" ref="rootRef" class="kk-locale-switch">
    <button
      class="kk-locale-switch__trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-label="`当前语言 ${currentLabel}`"
      @click="open = !open"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
      </svg>
      <span class="kk-locale-switch__label">{{ currentLabel }}</span>
      <svg
        class="kk-locale-switch__arrow"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <ul v-show="open" class="kk-locale-switch__menu" role="listbox">
      <li v-for="name in options" :key="String(name)">
        <button
          class="kk-locale-switch__item"
          type="button"
          role="option"
          :aria-selected="name === locale"
          :class="{ 'is-active': name === locale }"
          @click="select(String(name))"
        >
          <span>{{ localeLabel(String(name)) }}</span>
          <svg
            v-if="name === locale"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<style>
.kk-locale-switch {
  position: relative;
  margin-left: 10px;
}

.kk-locale-switch__trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-subtle);
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  cursor: pointer;
  transition: all var(--kk-duration-base) var(--kk-ease-out);
}

.kk-locale-switch__trigger:hover {
  border-color: var(--kk-color-primary);
  color: var(--kk-color-primary);
}

.kk-locale-switch__trigger:focus-visible {
  outline: none;
  box-shadow: var(--kk-focus-ring);
}

.kk-locale-switch__label {
  max-width: 96px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.kk-locale-switch__arrow {
  opacity: 0.6;
}

.kk-locale-switch__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 40;
  min-width: 148px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-elevated);
  box-shadow: var(--kk-shadow-lg);
}

.kk-locale-switch__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 7px 10px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-sm);
  text-align: left;
  cursor: pointer;
  transition: all var(--kk-duration-fast) var(--kk-ease-out);
}

.kk-locale-switch__item:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-text-primary);
}

.kk-locale-switch__item.is-active {
  color: var(--kk-color-primary);
  font-weight: 600;
}
</style>
