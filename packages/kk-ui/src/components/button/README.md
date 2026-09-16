# KkButton 按钮

按钮用于触发一个即时操作，是最基础的交互组件。

## 何时使用

- 用户需要提交、确认、取消、删除等触发动作时；
- 需要承载图标 + 文案的轻量操作入口时；
- 表单底部的主次操作区。

## 基础用法

```vue
<template>
  <KkButton type="primary">主要按钮</KkButton>
  <KkButton>默认按钮</KkButton>
  <KkButton type="text">文字按钮</KkButton>
</template>
```

## 类型

`type` 支持 `primary` / `success` / `warning` / `danger` / `default` / `text`，用于表达操作优先级与语义。

## 尺寸

`size` 支持 `small` / `medium`（默认） / `large`。

## 状态

- `disabled`：不可交互，降低透明度并禁用指针；
- `loading`：显示 spinner，阻止点击；
- `block`：宽度撑满父容器。

## 图标

通过 `#icon` 具名插槽放置图标，加载中时图标会被 spinner 替换。

```vue
<KkButton type="primary">
  <template #icon><KkIcon name="lucide:search" /></template>
  搜索
</KkButton>
```

## 设计规范

- 高度跟随 `--kk-button-height-*`，圆角跟随 `--kk-button-radius`，4 套主题自动适配；
- 主按钮在 hover 时上浮 1px 并加深阴影，形成“柔光”层次；
- 文字按钮不占背景，仅在 hover 时使用 `--kk-color-primary-soft` 提供反馈。
