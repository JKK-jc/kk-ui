<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {
  initLocale,
  initTheme,
  setLocale,
  setTheme,
  useTheme,
  isDarkTheme,
} from 'kk-ui'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import LocaleSwitcher from './components/LocaleSwitcher.vue'
import DocsNav from './components/DocsNav.vue'
import GitHubLink from './components/GitHubLink.vue'
import KkToast from './components/KkToast.vue'
import KkDocMeta from './components/KkDocMeta.vue'
import { resolveOrigin, withThemeTransition } from './utils/theme-transition'
import { useDocsText } from './i18n/use-docs-text'

const { Layout } = DefaultTheme
const { isDark } = useData()
const { theme } = useTheme()

// 让语言切换作用到侧边栏与正文标题（详见 use-docs-text 的说明）
useDocsText()

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
  // 语言同样是全局状态：本地存储优先，其次跟随浏览器语言。
  // 只在客户端初始化，避免 SSR 与客户端首帧语言不一致导致的 hydration 警告。
  initLocale()
  // `?lang=en-US` 深链直达指定语言，便于分享英文链接与自动化验收
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested) setLocale(requested)
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
    <template #nav-bar-content-before>
      <DocsNav />
    </template>
    <template #nav-bar-content-after>
      <ThemeSwitcher />
      <LocaleSwitcher />
      <GitHubLink />
    </template>
    <template #nav-screen-content-before>
      <DocsNav mobile />
    </template>
    <template #aside-outline-after>
      <KkDocMeta />
    </template>
  </Layout>
  <KkToast />
</template>
