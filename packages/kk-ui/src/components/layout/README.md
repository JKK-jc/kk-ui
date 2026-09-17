# KkLayout 布局

页面级布局与栅格系统，包含 `KkLayout` / `KkLayoutHeader` / `KkLayoutSider` /
`KkLayoutContent` / `KkLayoutFooter` 以及 `KkRow` / `KkCol` 栅格。

## 何时使用

- 搭建后台管理、文档站等需要顶栏 + 侧边栏 + 内容区的整体框架；
- 用 24 栅格做响应式内容排布。

## 基础用法

```vue
<template>
  <KkLayout>
    <KkLayoutHeader>顶栏</KkLayoutHeader>
    <KkLayout>
      <KkLayoutSider collapsible>侧边</KkLayoutSider>
      <KkLayoutContent>内容</KkLayoutContent>
    </KkLayout>
    <KkLayoutFooter>底栏</KkLayoutFooter>
  </KkLayout>
</template>
```

## 折叠侧边栏

`KkLayoutSider` 通过 `v-model:collapsed` 受控，也可在内部用触发器自由切换；
折叠状态通过 provide/inject 在 `KkLayout` 的 `#sider` 作用域插槽中共享：

```vue
<KkLayout>
  <template #sider="{ collapsed, toggle }">
    <button @click="toggle">{{ collapsed ? '展开' : '收起' }}</button>
  </template>
</KkLayout>
```

## 栅格

```vue
<KkRow :gutter="16">
  <KkCol :span="8">1/3</KkCol>
  <KkCol :span="8">1/3</KkCol>
  <KkCol :span="8">1/3</KkCol>
</KkRow>
```

`KkCol` 支持 `xs/sm/md/lg/xl` 响应式（`number` 或 `{ span, offset, push, pull }`）。

## 设计要点

- 折叠态宽度由 `collapsedWidth` 控制，`width` 与 `collapsedWidth` 均支持数字 / 字符串；
- 间距、边框、分隔线全部来自 `--kk-space-*` / `--kk-border-color*`；
- 栅格宽度用百分比计算，`gutter` 通过 Row 负外边距 + Col 内边距实现，无额外 DOM。
