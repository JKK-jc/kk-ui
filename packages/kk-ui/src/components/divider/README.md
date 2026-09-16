# KkDivider 分割线

区隔内容的分割线，可承载简短文案。

## 何时使用

- 需要把一段内容切分成多个区块；
- 表单、列表段落之间需要视觉停顿；
- 行内元素需要竖直分隔（如 `KkSpace` 的 `#split`）。

## 基础用法

```vue
<template>
  <KkDivider />
  <KkDivider>分组标题</KkDivider>
  <KkDivider content-position="left" border-style="dashed">左侧标题</KkDivider>
  <KkDivider direction="vertical" />
</template>
```

## 设计规范

- 颜色来自 `--kk-divider-color`，`accent` 时切换为 `--kk-color-primary`；
- 水平有文案时，左右两侧通过 `flex: 1` 伪元素自动均分；
- 竖直分割线高度固定 `1em` 并与文字垂直居中。
