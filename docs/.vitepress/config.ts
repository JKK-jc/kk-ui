import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const dirname = fileURLToPath(new URL('.', import.meta.url))
const src = resolve(dirname, '../../packages/kk-ui/src')

export default defineConfig({
  title: 'KK UI',
  description: '一套会呼吸的 Vue 3 组件库 · 柔光几何',
  lang: 'zh-CN',
  cleanUrls: true,
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
            { text: 'KkSpace 间距', link: '/components/space' },
            { text: 'KkDivider 分割线', link: '/components/divider' },
            { text: 'KkCard 卡片', link: '/components/card' },
          ],
        },
        {
          text: '数据展示',
          items: [{ text: 'KkTag 标签', link: '/components/tag' }],
        },
        {
          text: '数据录入',
          items: [
            { text: 'KkInput 输入框', link: '/components/input' },
            { text: 'KkForm 表单', link: '/components/form' },
            { text: 'KkFormItem 表单项', link: '/components/form-item' },
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
