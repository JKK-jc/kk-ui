# KK UI

> 一套会呼吸的 Vue 3 组件库 · 柔光几何（Soft Geometry）

## 特性

- 基于 Vue 3.4 `<script setup>` + TypeScript 编写，完整类型提示
- 三层设计 Token（Primitive → Semantic → Component），内置 4 套主题：`light` / `dark` / `soft` / `cyber`
- 纯 CSS 变量驱动，运行时零成本切换主题，支持注册自定义主题
- 按需引入，每个组件独立目录（组件 / 类型 / 样式 / 测试 / 文档）

## 安装

```bash
pnpm add kk-ui
```

## 使用

```ts
import { createApp } from 'vue'
import KkUI, { initTheme } from 'kk-ui'
import 'kk-ui/style.css'
import App from './App.vue'

initTheme()
createApp(App).use(KkUI).mount('#app')
```

按需引入：

```vue
<script setup lang="ts">
import { KkButton } from 'kk-ui'
import 'kk-ui/style.css'
</script>

<template>
  <KkButton type="primary">开始</KkButton>
</template>
```

## 主题

切换主题只需改 `<html data-kk-theme>`：

```ts
import { setTheme } from 'kk-ui'

setTheme('dark') // light | dark | soft | cyber
```

自定义主题：

```ts
import { defineTheme } from 'kk-ui'

defineTheme('brand', {
  '--kk-color-primary': '#FF7A45',
  '--kk-radius-md': '4px',
})
setTheme('brand')
```

## 组件

| 组件                    | 说明          |
| ----------------------- | ------------- |
| `KkButton`              | 按钮          |
| `KkIcon`                | 图标          |
| `KkSpace`               | 间距          |
| `KkDivider`             | 分割线        |
| `KkCard`                | 卡片          |
| `KkTag`                 | 标签          |
| `KkInput`               | 输入框        |
| `KkForm` / `KkFormItem` | 表单 / 表单项 |

## 开发

```bash
pnpm install
pnpm dev        # 启动 playground
pnpm test       # 单元测试
pnpm build      # 构建产物
pnpm docs       # 文档站
```

## License

MIT
