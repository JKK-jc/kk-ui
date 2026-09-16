# KkIcon 图标

基于 Iconify 图标数据渲染的 SVG 图标组件，一套 API 通吃所有图标集。

## 何时使用

- 按钮、菜单、表单前后缀等需要图标的场景；
- 希望统一尺寸、颜色、旋转动画而不写重复 `<svg>` 的场景。

## 基础用法

```vue
<template>
  <KkIcon name="lucide:search" />
  <KkIcon name="lucide:heart" size="20" color="#EF4444" />
  <KkIcon name="lucide:loader" spin />
</template>
```

## 图标来源

默认数据源为 `@iconify-json/lucide`，组件首次遇到未注册图标时会自动按需加载（动态 import）。
也可以手动注册任意 Iconify 图标集：

```ts
import { addIconSet } from 'kk-ui'
import antDesign from '@iconify-json/ant-design/icons.json'

addIconSet(antDesign as never)
```

单图标注册：

```ts
import { addIcon } from 'kk-ui'

addIcon('lucide:dot', { body: '<circle cx="12" cy="12" r="6"/>' })
```

## 命名规则

- 完整名：`前缀:图标名`，例如 `lucide:search`；
- 简写名：`search`，会在已注册的图标集中按注册顺序查找。

## 设计规范

- 默认尺寸引用 `var(--kk-font-size-lg)`，颜色继承 `currentColor`，可直接被父级 `color` 影响；
- 图标与文字基线对齐偏移 `-0.15em`，保证行内排版对齐；
- `spin` 动画使用 `1s linear infinite`，适合 loading 类图标。
