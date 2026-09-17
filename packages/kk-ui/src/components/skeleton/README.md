# KkSkeleton 骨架屏

内容加载占位符，支持文本 / 标题 / 段落 / 头像 / 图片 / 按钮等形态，可动画、可组合。

## 何时使用

- 页面或区块正在请求数据，先以骨架占位，数据返回后再替换为真实内容；
- 列表、卡片、详情页等需要「结构先行、内容后至」的体验。

## 基础用法

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)
</script>

<template>
  <KkSkeleton :loading="loading">
    <div>真实内容</div>
    <template #template>
      <KkSkeleton variant="avatar" />
      <KkSkeleton variant="title" />
      <KkSkeleton :rows="3" />
    </template>
  </KkSkeleton>
</template>
```

## 组合

内层骨架不传 `loading` 时直接继承外层状态，便于拼出复杂占位：

```vue
<KkSkeleton :loading="loading">
  <KkSkeleton variant="avatar" />
  <KkSkeleton variant="title" />
  <KkSkeleton :rows="3" />
</KkSkeleton>
```

## 插槽

- `default`：加载完成后展示的真实内容；
- `template`：自定义骨架外观，完全取代内置形态。

## 设计要点

- 容器带 `aria-busy="true"` 与 `aria-label="内容加载中"`，加载态对读屏软件可见；
- 流光动画只改变 `background-position`，不触发重排，并在 `prefers-reduced-motion` 下自动关闭；
- 颜色全部来自 `--kk-bg-subtle` / `--kk-bg-hover`，4 套主题下一致。
