# KkWatermark 水印

基于 Canvas 生成的页面水印，覆盖在内容之上，支持文字 / 图片、旋转、平铺与交叉铺排。

## 何时使用

- 给文档、报表、截图等页面内容打上所有权或保密标识；
- 需要防误用、可追溯的视觉标记，且不影响内容交互。

## 基础用法

```vue
<template>
  <KkWatermark content="KK UI 内部资料" :rotate="-22">
    <div class="doc">受保护的内容</div>
  </KkWatermark>
</template>
```

## 多行与图片

```vue
<KkWatermark :content="['张三', '2026-01-01']" />
<KkWatermark image="/logo.png" />
```

## 自定义内容插槽

`#content` 插槽的**文本**会取代 `content` 文案绘制到画布上（适合用图标 + 文字组合后再取文本）：

```vue
<KkWatermark>
  <div class="doc">内容</div>
  <template #content>机密 · 仅限内部</template>
</KkWatermark>
```

## 设计与健壮性

- 通过 `getContext('2d')` 返回 `null`（如 jsdom 测试环境）时**静默跳过绘制**，不会抛错；
- 监听 props 变化与容器尺寸变化（优先 `ResizeObserver`，不支持时回退 `window.resize`）自动重绘；
- 暴露 `{ redraw }` 实例方法，可在特殊时机手动重绘；
- 颜色默认跟随主题 `--kk-text-tertiary`（`inheritColor` 时可继承容器文字色），不写死硬编码色值。
