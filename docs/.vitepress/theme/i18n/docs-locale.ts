import { defineLocale } from 'kk-ui'

/**
 * 文档站自有的界面文案。
 *
 * 只补 `docs.*` 命名空间，其余键继续走组件库语言包（`defineLocale` 会与已注册
 * 的同名语言包做深合并）。这样文档站的顶栏 / 首页 / 示例外壳都能跟随语言切换，
 * 又不必把「文档站」的用词混进组件库本身的语言包。
 */

defineLocale('zh-CN', {
  name: 'zh-CN',
  label: '简体中文',
  docs: {
    nav: {
      guide: '指南',
      components: '组件',
      theme: '主题',
    },
    meta: {
      previewTheme: '预览主题',
      switched: '已切换到 {name} 主题',
    },
    demo: {
      viewCode: '查看代码',
      hideCode: '收起代码',
      copy: '复制',
      copied: '已复制',
      copySuccess: '已复制到剪贴板',
      copyFail: '复制失败，请手动选择代码',
      loadFail: '示例加载失败',
    },
    home: {
      badge: '全新多主题系统 · 4 套内置主题',
      heroTitlePrefix: '一套会',
      heroTitleAccent: '呼吸',
      heroTitleSuffix: '的 Vue 3 组件库',
      heroDesc:
        'KK UI 以「柔光几何」为设计语言，提供轻量、圆润、有呼吸感的组件体验。完整 TypeScript 支持，主题一键切换。',
      start: '快速开始',
      browse: '查看组件',
      copy: '复制',
      copied: '已复制到剪贴板',
      copyFail: '复制失败，请手动复制',
      featuresEyebrow: 'Features',
      featuresTitle: '为什么选择 KK UI',
      featuresDesc:
        '在严谨、实用与轻盈之间，KK 用三层 Token 与柔光几何找到了自己的位置。',
      overviewEyebrow: 'Roadmap',
      overviewTitle: '组件总览',
      overviewDesc: '已完成基础组件层，覆盖通用、布局、数据展示、数据录入与反馈五类。',
      count: '{count} 个组件 · 已完成',
      groups: {
        general: '通用',
        layout: '布局',
        nav: '导航',
        data: '数据展示',
        input: '数据录入',
        feedback: '反馈',
      },
      features: {
        theme: {
          title: '多主题系统',
          desc: '4 套内置主题，三层 CSS 变量架构，运行时动态切换，并支持注册自定义主题。',
        },
        ts: {
          title: '完整 TypeScript',
          desc: '全部使用 script setup 与 defineProps 泛型，Props、Events、Slots 类型完整导出。',
        },
        tree: {
          title: '按需引入',
          desc: '每个组件独立目录、独立样式入口，构建产物同时提供 ES 与 CJS 格式。',
        },
        design: {
          title: '柔光几何设计',
          desc: '双层阴影、柔和焦点环、圆润圆角，让界面更有层次与呼吸感。',
        },
        a11y: {
          title: '无障碍支持',
          desc: '语义化标签、ARIA 属性、键盘可达与可见焦点环，交互状态可辨识。',
        },
        doc: {
          title: '配套文档与测试',
          desc: '每个组件都包含组件、类型、样式、测试、README，交付即完整。',
        },
      },
    },
  },
})

defineLocale('en-US', {
  name: 'en-US',
  label: 'English',
  docs: {
    nav: {
      guide: 'Guide',
      components: 'Components',
      theme: 'Theme',
    },
    meta: {
      previewTheme: 'Preview theme',
      switched: 'Switched to {name} theme',
    },
    demo: {
      viewCode: 'View code',
      hideCode: 'Hide code',
      copy: 'Copy',
      copied: 'Copied',
      copySuccess: 'Copied to clipboard',
      copyFail: 'Copy failed, please select the code manually',
      loadFail: 'Failed to load demo',
    },
    home: {
      badge: 'All-new multi-theme system · 4 built-in themes',
      heroTitlePrefix: 'A component library that ',
      heroTitleAccent: 'breathes',
      heroTitleSuffix: '',
      heroDesc:
        'KK UI takes “Soft Geometry” as its design language, delivering a light, rounded and breathable component experience. Full TypeScript support, one-click theme switching.',
      start: 'Get started',
      browse: 'Browse components',
      copy: 'Copy',
      copied: 'Copied to clipboard',
      copyFail: 'Copy failed, please copy manually',
      featuresEyebrow: 'Features',
      featuresTitle: 'Why KK UI',
      featuresDesc:
        'Between rigor, practicality and lightness, KK found its place with three-layer tokens and Soft Geometry.',
      overviewEyebrow: 'Roadmap',
      overviewTitle: 'Component overview',
      overviewDesc:
        'The base component layer is complete, covering general, layout, data display, data entry and feedback.',
      count: '{count} components · done',
      groups: {
        general: 'General',
        layout: 'Layout',
        nav: 'Navigation',
        data: 'Data Display',
        input: 'Data Entry',
        feedback: 'Feedback',
      },
      features: {
        theme: {
          title: 'Multi-theme system',
          desc: '4 built-in themes, a three-layer CSS variable architecture, runtime switching, plus custom theme registration.',
        },
        ts: {
          title: 'Full TypeScript',
          desc: 'All written with script setup and generic defineProps; Props, Events and Slots types are fully exported.',
        },
        tree: {
          title: 'Tree-shakeable',
          desc: 'Each component has its own directory and style entry; builds ship both ES and CJS formats.',
        },
        design: {
          title: 'Soft Geometry design',
          desc: 'Double-layer shadows, soft focus rings and rounded corners give the UI more depth and breathing room.',
        },
        a11y: {
          title: 'Accessibility',
          desc: 'Semantic tags, ARIA attributes, keyboard reachability and visible focus rings make states discernible.',
        },
        doc: {
          title: 'Docs & tests included',
          desc: 'Every component ships with component, types, styles, tests and README — complete on delivery.',
        },
      },
    },
  },
})
