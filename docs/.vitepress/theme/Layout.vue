<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { initTheme, setTheme, useTheme, isDarkTheme } from 'kk-ui'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import KkToast from './components/KkToast.vue'
import KkDocMeta from './components/KkDocMeta.vue'
import { resolveOrigin, withThemeTransition } from './utils/theme-transition'

const { Layout } = DefaultTheme
const { isDark } = useData()
const { theme } = useTheme()

const APPEARANCE_SELECTOR = '.VPSwitchAppearance'

// 明暗档 → kk 主题。dark 档下若当前已是 cyber 则保留，light 档下若当前已是 soft 则保留
function applyAppearance(dark: boolean) {
  const current = theme.value
  if (dark) setTheme(current === 'cyber' ? 'cyber' : 'dark')
  else setTheme(current === 'soft' ? 'soft' : 'light')
}

watch(isDark, (dark) => {
  applyAppearance(dark)
})

// 拦截 VitePress 内置明暗开关：把「切 html.dark」换成带圆形扩散动画的切换。
// 用 document 上的捕获阶段监听，这样不必依赖组件挂载时机；
// 拦截失效时 watch 仍会完成切换，最坏情况只是没有动画。
function onDocumentClick(event: MouseEvent) {
  const target = event.target as Element | null
  const trigger = target?.closest(APPEARANCE_SELECTOR) as HTMLElement | null
  if (!trigger) return

  event.stopPropagation()
  event.preventDefault()

  const next = !isDark.value
  withThemeTransition(
    () => {
      isDark.value = next
      applyAppearance(next)
    },
    resolveOrigin(event, trigger)
  )
}

onMounted(() => {
  initTheme()
  // kk 主题为唯一事实来源，回写 VitePress 明暗档，保证开关状态一致
  isDark.value = isDarkTheme(theme.value)
  document.addEventListener('click', onDocumentClick, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick, true)
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <ThemeSwitcher />
    </template>
    <template #aside-outline-after>
      <KkDocMeta />
    </template>
  </Layout>
  <KkToast />
</template>
