# KkSpace 间距

为行内子元素提供统一间距，避免手写 margin。

## 何时使用

- 一排按钮、一组标签、表单行内控件之间需要等距排列；
- 需要竖排元素或统一对齐方式时。

## 基础用法

```vue
<template>
  <KkSpace>
    <KkButton type="primary">确定</KkButton>
    <KkButton>取消</KkButton>
  </KkSpace>
</template>
```

## 尺寸与方向

- `size`：`small`（8px） / `medium`（12px） / `large`（16px） / 数字（px），也支持 `[row, column]` 数组；
- `direction`：`horizontal` / `vertical`；
- `align`：`start` / `center` / `end` / `baseline`；
- `wrap`：空间不足时换行；`fill`：撑满父容器宽度。

## 分隔符

`split` 为 `true` 时启用 `#split` 插槽：

```vue
<KkSpace split>
  <span>首页</span>
  <span>组件</span>
  <template #split><KkDivider direction="vertical" /></template>
</KkSpace>
```

## 设计规范

- 间距全部来自 `--kk-space-*` token，与全局节奏保持一致；
- 组件使用 `inline-flex`，可以自然嵌入文本行。
