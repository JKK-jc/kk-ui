import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import KkUI from 'kk-ui'
import Layout from './Layout.vue'
import Demo from './components/Demo.vue'
import ThemeGallery from './components/ThemeGallery.vue'
import Home from './components/Home.vue'
import 'kk-ui/style.css'
import './i18n/docs-locale'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 文档站内可直接使用全部 KK 组件
    app.use(KkUI)
    app.component('Demo', Demo)
    app.component('ThemeGallery', ThemeGallery)
    app.component('Home', Home)
  },
} satisfies Theme
