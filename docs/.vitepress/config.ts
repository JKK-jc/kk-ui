import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const src = resolve(dirname, '../../packages/kk-ui/src')

// Gitee Pages 的站点地址形如 https://<user>.gitee.io/<repo>/，静态资源带子路径，
// 生产构建必须设置 base，否则 CSS/JS 会按根路径请求，页面能开但样式全丢。
// 本地 `vitepress dev` 时 NODE_ENV 不是 production，仍走根路径，不影响调试。
// 允许用环境变量整体覆盖（部署到其它平台时用），如 DOCS_BASE=/ DOCS_OUT_DIR=.vitepress/dist-publish
const rawBase =
  process.env.DOCS_BASE ?? (process.env.NODE_ENV === 'production' ? '/kk-ui/' : '/')

// VitePress 要求 base 形如 `/xx/`。这里统一补齐首尾斜杠：
// 一是 DOCS_BASE 传成 `kk-ui`（无斜杠）时资源路径会拼错，
// 二是下面的 favicon 需要手工拼 base（VitePress 不会为用户 head 补 base）。
const trimmedBase = rawBase.replace(/^\/+|\/+$/g, '')
const base = trimmedBase === '' ? '/' : `/${trimmedBase}/`

const outDir = process.env.DOCS_OUT_DIR ?? '.vitepress/dist'

export default defineConfig({
  title: 'KK UI',
  description: '一套会呼吸的 Vue 3 组件库 · 柔光几何',
  lang: 'zh-CN',
  base,
  outDir,
  cleanUrls: true,
  // 浏览器标签图标（`docs/public/logo.svg`）。
  // 注意：VitePress 只会给 preload/prefetch 一类的内置 link 补 base，用户自定义的
  // head 项会原样输出，所以这里必须自己拼上 base，否则生产环境会 404 退回默认图标。
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}logo.svg` }],
    ['link', { rel: 'alternate icon', href: `${base}logo.svg` }],
    ['meta', { name: 'theme-color', content: '#5b4fe9' }],
  ],
  markdown: {
    // 四套 kk 主题的 --kk-bg-code 均为深色，代码高亮必须用暗色方案，
    // 否则浅色方案的深色文字落在深色背景上几乎不可见（无语言代码块完全隐形）
    theme: 'github-dark',
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/' },
      { text: '主题', link: '/theme/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '设计 token', link: '/guide/design-tokens' },
          ],
        },
      ],
      '/theme/': [
        {
          text: '主题',
          items: [
            { text: '主题系统', link: '/theme/' },
            { text: '自定义主题', link: '/theme/custom' },
          ],
        },
      ],
      '/components/': [
        {
          text: '通用',
          items: [
            { text: 'KkButton 按钮', link: '/components/button' },
            { text: 'KkIcon 图标', link: '/components/icon' },
          ],
        },
        {
          text: '布局',
          items: [
            { text: 'KkLayout 布局', link: '/components/layout' },
            { text: 'KkContainer 容器', link: '/components/container' },
            { text: 'KkSpace 间距', link: '/components/space' },
            { text: 'KkDivider 分割线', link: '/components/divider' },
            { text: 'KkCard 卡片', link: '/components/card' },
          ],
        },
        {
          text: '导航',
          items: [{ text: 'KkTabs 标签页', link: '/components/tabs' }],
        },
        {
          text: '数据展示',
          items: [
            { text: 'KkTag 标签', link: '/components/tag' },
            { text: 'KkTable 表格', link: '/components/table' },
            { text: 'KkPagination 分页器', link: '/components/pagination' },
            { text: 'KkWatermark 水印', link: '/components/watermark' },
          ],
        },
        {
          text: '数据录入',
          items: [
            { text: 'KkInput 输入框', link: '/components/input' },
            { text: 'KkSelect 选择器', link: '/components/select' },
            { text: 'KkCascader 级联选择', link: '/components/cascader' },
            { text: 'KkUpload 上传', link: '/components/upload' },
            { text: 'KkForm 表单', link: '/components/form' },
            { text: 'KkFormItem 表单项', link: '/components/form-item' },
          ],
        },
        {
          text: '反馈',
          items: [
            { text: 'KkModal 弹窗', link: '/components/modal' },
            { text: 'KkDrawer 抽屉', link: '/components/drawer' },
            { text: 'KkSkeleton 骨架屏', link: '/components/skeleton' },
          ],
        },
      ],
    },
    socialLinks: [],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'KK UI · 柔光几何',
    },
  },
  vite: {
    resolve: {
      alias: [
        { find: 'kk-ui/style.css', replacement: resolve(src, 'styles.ts') },
        { find: 'kk-ui/styles', replacement: resolve(src, 'styles.ts') },
        { find: 'kk-ui/theme', replacement: resolve(src, 'theme/index.ts') },
        { find: 'kk-ui', replacement: resolve(src, 'index.ts') },
        { find: '@kk-ui', replacement: src },
      ],
    },
    ssr: {
      noExternal: ['kk-ui'],
    },
  },
})
