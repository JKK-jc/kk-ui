# KkCard 卡片

承载信息与操作的容器，是页面中最常用的内容区块。

## 何时使用

- 需要把相关信息聚合成独立区块；
- 列表卡片、概览面板、设置分组；
- 需要在卡片内部组合封面、标题、操作与底部说明时。

## 基础用法

```vue
<template>
  <KkCard title="项目概览" subtitle="最近 7 天数据">
    <template #extra><KkButton type="text">更多</KkButton></template>
    <p>卡片正文内容</p>
    <template #footer>更新时间：刚刚</template>
  </KkCard>
</template>
```

## 变体

- `shadow`：`always`（默认） / `hover` / `never`；
- `padding`：`small` / `medium`（默认） / `large` / `none`；
- `hoverable`：鼠标悬停时上浮 2px 并切换主色边框；
- `bordered`：是否显示 1px 边框；
- `loading`：内容区叠加半透明遮罩与旋转指示器。

## 插槽

`default` / `header` / `title` / `subtitle` / `extra` / `cover` / `footer`。

## 设计规范

- 圆角使用 `--kk-card-radius`，阴影使用 `--kk-card-shadow*`，内边距使用 `--kk-space-*`；
- 卡片内边距通过局部变量 `--kk-card-body-padding` 控制，方便 `padding="none"` 时让内容自行贴边；
- 尊重 `prefers-reduced-motion`，减少动效场景下关闭位移与过渡。
