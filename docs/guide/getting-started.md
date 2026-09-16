# 快速开始

## 安装

```bash
pnpm add kk-ui
```

## 全量引入

```ts
import { createApp } from 'vue'
import KkUI, { initTheme } from 'kk-ui'
import 'kk-ui/style.css'
import App from './App.vue'

initTheme()
createApp(App).use(KkUI).mount('#app')
```

`initTheme()` 会优先读取 `localStorage` 中保存的主题，其次跟随系统 `prefers-color-scheme`。

## 按需引入

```vue
<script setup lang="ts">
import { KkButton } from 'kk-ui'
import 'kk-ui/style.css'
</script>

<template>
  <KkButton type="primary">开始</KkButton>
</template>
```

也可以只引入主题 API：

```ts
import { setTheme } from 'kk-ui/theme'
```

## 主题切换

```ts
import { setTheme } from 'kk-ui'

setTheme('dark') // light | dark | soft | cyber
```

## 本地开发

本仓库是 pnpm monorepo：

```bash
pnpm install     # 安装依赖
pnpm dev         # 启动 playground 调试
pnpm docs        # 启动文档站
pnpm test        # 运行单元测试
pnpm typecheck   # 类型检查
pnpm build       # 构建组件库
```

## 目录结构

```
kk/
├─ packages/kk-ui/     # 组件库主包
├─ playground/         # 本地调试
├─ docs/               # VitePress 文档
├─ .changeset/         # 版本管理
└─ .husky/             # Git hooks
```
