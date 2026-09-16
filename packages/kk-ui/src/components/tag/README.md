# KkTag 标签

用于标记与分类的轻量标签。

## 何时使用

- 列表项需要标注状态、类型、优先级；
- 需要可关闭的筛选条件回显；
- 需要彩色胶囊标签做分类导航。

## 基础用法

```vue
<template>
  <KkTag type="primary">主要</KkTag>
  <KkTag type="success" effect="dark">已完成</KkTag>
  <KkTag type="danger" closable @close="onClose">可关闭</KkTag>
  <KkTag round bordered>胶囊</KkTag>
</template>
```

## 变体

- `type`：`primary` / `success` / `warning` / `danger` / `info` / `default`；
- `effect`：`light`（浅底，默认） / `dark`（实心） / `plain`（纯描边）；
- `size`：`small` / `medium`（默认） / `large`；
- `round`：胶囊圆角；`bordered`：是否显示边框；`closable`：显示关闭按钮。

## 设计规范

- 高度来自 `--kk-tag-height-*`，圆角来自 `--kk-tag-radius`；
- 浅色与描边效果通过 `color-mix` 与语义色混合，保证 4 套主题下对比度稳定；
- 关闭按钮点击不会冒泡到标签本身，避免误触 `click`。
