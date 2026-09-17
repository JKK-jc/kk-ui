# KkContainer 布局容器

带预设宽度与内边距的内容容器，用于约束页面主体宽度并统一留白。

## 何时使用

- 需要把页面主体限制在特定宽度（640 / 960 / 1200 / 100%）并水平居中；
- 需要统一的 `padding`、边框、`header` / `footer` 区域与弹性布局。

## 基础用法

```vue
<template>
  <KkContainer size="medium" padding="large">
    <h2>标题</h2>
    <p>容器内的内容。</p>
  </KkContainer>
</template>
```

## 插槽

- `default`：主体内容；
- `header`：顶部区域；
- `footer`：底部区域。

## 设计要点

- 预设宽度来自 `--kk-container-*` 推导，居中通过 `margin: auto` 实现；
- 内边距档位映射到 `--kk-space-*`，边框色用 `--kk-border-color`；
- `flex` 容器，配合 `direction` / `align` / `justify` / `gap` 可做任意方向的弹性布局。
