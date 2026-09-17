# KkTable 表格

数据展示与操作的核心组件，支持声明式列（`KkTableColumn`）与数据列（`columns` prop）两种用法，并可内嵌 `KkPagination`。

## 何时使用

- 需要以表格形式展示结构化数据；
- 需要排序、多选、展开行、固定列或分页等能力。

## 两种列定义方式

- **声明式**：用 `<KkTableColumn>` 子组件定义列，支持 `#default`（单元格）与 `#header`（表头）作用域插槽；
- **数据列**：直接传 `columns: KkTableColumnProps[]`。

二者至少支持一种，**子组件优先**（存在子组件列时以子组件为准）。

## 设计要点

- **多选**：表头复选框含 indeterminate 半选态；配合 `rowKey` 可跨页维护选择集合；
- **序号列 / 展开行**：`type='index'` 支持 `indexMethod`，`type='expand'` 配合 `#expand` 插槽；
- **固定列**：`position: sticky` + 左右偏移（偏移由声明宽度在 JS 算出，不依赖布局，jsdom 安全），无需 ResizeObserver；
- **排序**：`sortable: true` 走本地排序（点击循环 升序 → 降序 → 取消），`sortable: 'custom'` 仅 emit `sort-change`；
- **固定表头**：`maxHeight` / `height` 时 `thead` sticky 固定；
- **内置分页器**：传 `pagination` prop 时，Table 在底部渲染分页器并按当前页切片，同时 emit `page-change`；自行控制分页则不要传。

## 无障碍

- 表格语义标签 + `role="region"`；可排序列 `th` 带 `aria-sort`；
- 排序按钮 / 展开按钮带 `aria-label`，复选框带 `aria-checked`。

## 提供的实例方法

`clearSelection` / `toggleRowSelection` / `toggleAllSelection` / `setCurrentRow` /
`clearSort` / `clearFilter` / `scrollTo` / `getSelectionRows`。
