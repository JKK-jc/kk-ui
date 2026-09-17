# KkTable 表格

数据展示与操作的核心组件，支持声明式列（`KkTableColumn`）与数据列（`columns` prop）两种用法，并可内嵌 `KkPagination`。

## 何时使用

- 需要以表格形式展示结构化数据；
- 需要排序、多选、展开行、固定列或分页等能力。

## 代码演示

### 基础用法 + 自定义列插槽

用 `<KkTableColumn>` 声明列，`#default` 作用域插槽可拿到 `{ row, column, index, $index }`。

<Demo src="./demos/table/basic.vue" title="基础表格" />

### 多选 + 跨页

`type="selection"` 渲染多选列，表头含半选态；配合 `rowKey` 可跨页维护选择集合，通过 `v-model:selection` 取回选中行。

<Demo src="./demos/table/selection.vue" title="多选与跨页选择" />

### 排序

`sortable: true` 走本地排序（点击循环 升序 → 降序 → 取消）；`sortable: 'custom'` 只 emit `sort-change` 不重排；可通过 `sortBy` 指定取值键或取值函数。

<Demo src="./demos/table/sort.vue" title="本地排序" />

### 内置分页器

传 `pagination` prop 即可在底部内嵌分页器，表格按当前页切片并 emit `page-change`；自行控制分页时请不要传该 prop。

<Demo src="./demos/table/pagination.vue" title="内置分页器" />

## API

### KkTable Props

| 属性                             | 说明                                          | 类型                                  | 默认值        |
| -------------------------------- | --------------------------------------------- | ------------------------------------- | ------------- |
| `data`                           | 表格数据                                      | `Record<string, unknown>[]`           | `[]`          |
| `columns`                        | 数据列（与 KkTableColumn 二选一，子组件优先） | `KkTableColumnProps[]`                | —             |
| `rowKey`                         | 行 key 字段名，跨页选择 / 展开依赖它          | `string`                              | —             |
| `border`                         | 是否显示边框                                  | `boolean`                             | `true`        |
| `stripe`                         | 斑马纹                                        | `boolean`                             | `false`       |
| `size`                           | 尺寸                                          | `'small' \| 'medium' \| 'large'`      | `'medium'`    |
| `height` / `maxHeight`           | 固定表头容器高度 / 最大高度                   | `string \| number`                    | —             |
| `loading`                        | 加载态                                        | `boolean`                             | `false`       |
| `emptyText`                      | 空数据文案                                    | `string`                              | `table.empty` |
| `showHeader`                     | 是否显示表头                                  | `boolean`                             | `true`        |
| `defaultExpandAll`               | 默认展开所有行（需 rowKey）                   | `boolean`                             | `false`       |
| `expandRowKeys`                  | 受控展开的行的 key 列表                       | `(string \| number)[]`                | —             |
| `highlightCurrentRow`            | 点击行高亮当前行                              | `boolean`                             | `false`       |
| `currentRowKey`                  | 当前行 key                                    | `string \| number`                    | —             |
| `selectOnIndeterminate`          | 表头半选态点击是否全选                        | `boolean`                             | `true`        |
| `pagination`                     | 内置分页器透传配置                            | `KkTablePaginationProp`               | —             |
| `selection`                      | 多选结果（v-model:selection）                 | `Record<string, unknown>[]`           | —             |
| `defaultSelection`               | 默认选中行的 key 列表                         | `(string \| number)[]`                | —             |
| `disabled`                       | 禁用所有交互                                  | `boolean`                             | `false`       |
| `rowClassName` / `cellClassName` | 行 / 单元格 className                         | `(params) => string`                  | —             |
| `rowStyle` / `cellStyle`         | 行 / 单元格 style                             | `(params) => CSSProperties \| string` | —             |

### KkTableColumn Props

| 属性                           | 说明                               | 类型                                              | 默认值                            |
| ------------------------------ | ---------------------------------- | ------------------------------------------------- | --------------------------------- |
| `prop`                         | 对应 data 字段名                   | `string`                                          | —                                 |
| `label`                        | 列标题                             | `string`                                          | —                                 |
| `type`                         | 列类型                             | `'default' \| 'selection' \| 'index' \| 'expand'` | `'default'`                       |
| `width` / `minWidth`           | 列宽 / 最小列宽                    | `string \| number`                                | —                                 |
| `fixed`                        | 固定列                             | `'left' \| 'right' \| boolean`                    | —                                 |
| `align`                        | 对齐                               | `'left' \| 'center' \| 'right'`                   | `'left'`                          |
| `sortable`                     | 排序：本地 / 自定义                | `boolean \| 'custom'`                             | —                                 |
| `sortBy`                       | 排序取值键或取值函数               | `string \| (row) => unknown`                      | `prop`                            |
| `sortOrders`                   | 点击表头循环顺序                   | `SortOrder[]`                                     | `['ascending','descending',null]` |
| `sortMethod`                   | 自定义比较函数                     | `(a, b) => number`                                | —                                 |
| `selectable`                   | 多选行是否可选（type='selection'） | `(row, index) => boolean`                         | —                                 |
| `indexMethod`                  | 序号取值（type='index'）           | `(index, row) => number`                          | —                                 |
| `formatter`                    | 单元格格式化                       | `(row, column, value, index) => unknown`          | —                                 |
| `resizable`                    | 保留占位（列宽拖拽）               | `boolean`                                         | `false`                           |
| `className` / `labelClassName` | 单元格 / 表头额外 class            | `string`                                          | —                                 |

### KkTable 事件

| 事件               | 说明           | 参数                          |
| ------------------ | -------------- | ----------------------------- |
| `select`           | 选择项变化     | `(selection, row)`            |
| `select-all`       | 全选变化       | `(selection)`                 |
| `selection-change` | 选择项变化     | `(selection)`                 |
| `update:selection` | 选择项 v-model | `(selection)`                 |
| `row-click`        | 行点击         | `(row, index, event)`         |
| `row-dblclick`     | 行双击         | `(row, index, event)`         |
| `cell-click`       | 单元格点击     | `(row, column, index, event)` |
| `sort-change`      | 排序变化       | `({ column, prop, order })`   |
| `expand-change`    | 展开行变化     | `(row, expandedKeys)`         |
| `current-change`   | 当前行变化     | `(currentRow, oldRow)`        |
| `page-change`      | 内置分页变化   | `({ currentPage, pageSize })` |

### 插槽

| 名称                     | 说明       | 作用域                           |
| ------------------------ | ---------- | -------------------------------- |
| KkTableColumn `#default` | 单元格内容 | `{ row, column, index, $index }` |
| KkTableColumn `#header`  | 表头内容   | `{ column }`                     |
| `#expand`                | 展开行内容 | `{ row, index }`                 |
| `#empty`                 | 空数据     | —                                |
| `#loading`               | 加载态     | —                                |
| `#append`                | 表尾追加   | —                                |

### 实例方法

`clearSelection` / `toggleRowSelection(row, selected?)` / `toggleAllSelection` /
`setCurrentRow(row)` / `clearSort` / `clearFilter` / `scrollTo(opts)` / `getSelectionRows()`。

## 设计规范

- 固定列用 `position: sticky` + 左右偏移（偏移由声明宽度在 JS 算出，不依赖布局），无需 ResizeObserver；
- 固定表头在 `maxHeight` / `height` 时由 `thead` sticky 实现；
- 排序、展开、选择等交互文案全部走 locale（`table.*`），4 套主题下颜色统一引用语义 token。
