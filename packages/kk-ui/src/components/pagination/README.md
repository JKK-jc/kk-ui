# KkPagination 分页器

页码导航组件，可独立使用，也可由 KkTable 通过 `pagination` prop 内嵌。

## 何时使用

- 数据量较大，需要把结果按页展示；
- 需要自定义每页条数、跳转到指定页，或自由编排上 / 下页、页码、总数等区块。

## 设计要点

- **双向同步**：`v-model:currentPage` 与 `v-model:modelValue` 二选一生效（modelValue 是 currentPage 的别名），翻页时两者都会更新，避免受控冲突；
- **页码折叠**：当总页数超过 `pagerCount`（默认 7，需为奇数）时，当前页两侧保留窗口、两端用 `···` 省略，`···` 可点跳半程；
- **布局编排**：`layout` 用逗号 / 空格分隔区块（`prev, pager, next, jumper, sizes, total`），`->` 之后的区块整体靠右对齐；
- **simple 模式**：仅显示上一页 / 当前 / 下一页 + 总数，适合紧凑场景；
- **每页条数**：轻量内联下拉（复用 `useClickOutside`，不依赖布局，jsdom 安全）；
- **范围安全**：`currentPage` 始终由 `clamp` 钳制在 `[1, pageCount]`。

## 无障碍

- 根节点 `role="navigation"`；
- 当前页码 `aria-current="page"`，上一页 / 下一页带 `aria-label`。

## 提供的实例方法

`prev()` / `next()` / `jump(page)` / `setPageSize(size)`。
