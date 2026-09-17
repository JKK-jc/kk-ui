# KkPagination 分页器

页码导航组件，可独立使用，也可由 KkTable 通过 `pagination` prop 内嵌。

## 何时使用

- 数据量较大需要按页展示；
- 需要自定义每页条数、跳转到指定页，或自由编排上 / 下页、页码、总数等区块。

## 代码演示

### 基础用法

`v-model:currentPage` 控制当前页，折叠超出 `pagerCount`（默认 7）的页码，省略号 `···` 可点跳半程。

<Demo src="./demos/pagination/basic.vue" title="基础分页器" />

### 每页条数 + 跳页

`sizes` 区块切换每页条数（轻量内联下拉），`jumper` 区块输入页码回车跳转；`background` 给页码按钮加填充背景。

<Demo src="./demos/pagination/sizes.vue" title="每页条数与跳页" />

### 自定义 layout 编排

`layout` 用逗号 / 空格分隔区块，`->` 之后的区块整体靠右对齐。

<Demo src="./demos/pagination/layout.vue" title="自定义布局" />

## API

### Props

| 属性                              | 说明                                          | 类型                             | 默认值                                    |
| --------------------------------- | --------------------------------------------- | -------------------------------- | ----------------------------------------- |
| `v-model:currentPage` / `v-model` | 当前页（二者二选一，modelValue 为别名）       | `number`                         | `1`                                       |
| `v-model:pageSize`                | 每页条数                                      | `number`                         | `10`                                      |
| `total`                           | 总条数（与 pageCount 二选一）                 | `number`                         | —                                         |
| `pageCount`                       | 总页数（与 total 二选一）                     | `number`                         | —                                         |
| `pageSizes`                       | 每页条数候选                                  | `number[]`                       | `[10,20,50,100]`                          |
| `layout`                          | 区块编排                                      | `string`                         | `prev, pager, next, jumper, sizes, total` |
| `pagerCount`                      | 页码折叠基准（需为奇数）                      | `number`                         | `7`                                       |
| `background`                      | 页码按钮带填充背景                            | `boolean`                        | `false`                                   |
| `size`                            | 尺寸                                          | `'small' \| 'medium' \| 'large'` | `'medium'`                                |
| `disabled`                        | 禁用所有按钮                                  | `boolean`                        | `false`                                   |
| `hideOnSinglePage`                | 只有一页时隐藏                                | `boolean`                        | `false`                                   |
| `mode`                            | `simple` 仅显示 上一页 / 当前 / 下一页 + 总数 | `'number' \| 'simple'`           | `'number'`                                |
| `prevText` / `nextText`           | 上 / 下页文案                                 | `string`                         | `pagination.prev/next`                    |
| `prevIcon` / `nextIcon`           | 自定义上 / 下页图标（返回 VNode 的函数）      | `() => unknown`                  | —                                         |
| `showQuickJumper`                 | 是否显示跳页（等同 layout 增加 jumper）       | `boolean`                        | `true`                                    |

### 事件

| 事件                                       | 说明                    | 参数                          |
| ------------------------------------------ | ----------------------- | ----------------------------- |
| `update:modelValue` / `update:currentPage` | 当前页变化              | `(page: number)`              |
| `update:pageSize`                          | 每页条数变化            | `(size: number)`              |
| `change`                                   | 当前页或每页条数变化    | `({ currentPage, pageSize })` |
| `current-change`                           | 仅当前页变化            | `(page: number)`              |
| `size-change`                              | 仅每页条数变化          | `(size: number)`              |
| `prev-click` / `next-click`                | 点击上 / 下页（翻页前） | `(page: number)`              |

### 插槽

| 名称            | 说明              | 作用域             |
| --------------- | ----------------- | ------------------ |
| `prev` / `next` | 上 / 下页按钮内容 | `{ disabled }`     |
| `pager`         | 单个页码按钮内容  | `{ page, active }` |
| `jumper`        | 跳页区            | —                  |
| `sizes`         | 每页条数下拉      | —                  |

### 实例方法

`prev()` / `next()` / `jump(page)` / `setPageSize(size)`。

## 设计规范

- `currentPage` 始终由 `clamp` 钳制在 `[1, pageCount]`；
- 每页条数下拉复用 `useClickOutside`，不依赖布局，jsdom 安全；
- 分页器输入 / 下拉高度复用 Input 的 `--kk-input-height-*` token，与表单控件对齐。
