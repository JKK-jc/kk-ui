# KkCascader 级联选择器

多列联动的下拉选择器，用于从有层级关系的数据中挑选一个或多个值。支持任意层级可选、只能选叶子、多选标签、懒加载、搜索与完整键盘导航。

## 何时使用

- 数据有明确层级（省 / 市 / 区、类目 / 子类目、组织 / 部门），需要逐级下钻；
- 期望回填完整路径（默认 `emitPath` + `showAllLevels`）而不是只拿末级值；
- 层级很深或数据量很大，需要按需 `loadData` 懒加载子级；
- 需要一次勾选多个路径（多选标签，每个标签可单独删除）。

## 设计要点

- 触发器高度、内边距、圆角复用 `--kk-input-height-*` / `--kk-input-padding-*` /
  `--kk-input-radius`，与 KkInput / KkSelect 同行等高；
- 浮层用 `useFloating` 以 `fixed` 定位，`Teleport` 到 `body`，点击外部 / `Esc` / `Tab` 关闭，
  打开后才挂载，之后仅切换可见性；
- 面板按层级横向铺开，每列独立纵向滚动，列与列之间用 `--kk-border-color-soft` 分隔；
- `checkStrictly` 默认 `true`（任意层级可选）；设为 `false` 时点击非叶子只展开、不提交值；
- 懒加载结果按「路径」缓存，加载中该列显示 `loading` 插槽，失败可再次点开重试；
- 通过 `FORM_ITEM_CONTEXT_KEY` / `FORM_CONTEXT_KEY` 继承 `size` / `disabled` / `invalid`，
  并在 `change` / `blur` 时触发 `KkFormItem` 校验。

## 键盘与无障碍

- 触发器为 `role="combobox"`（`aria-expanded` / `aria-haspopup="listbox"` /
  `aria-controls` / `aria-activedescendant`），每列为 `role="listbox"`，
  每个选项为 `role="option"`（`aria-selected` / `aria-disabled`）；
- `↑` / `↓` 在当前列移动高亮，`→` 进入下一列，`←` 回到上一列，
  `Enter` 选中，`Esc` / `Tab` 关闭。

## 性能约定

- 归一化按渲染时计算，懒加载结果以 `Map` 缓存，重复展开不再请求；
- 定位与滚动重算挂在捕获阶段与 `ResizeObserver` 上，关闭后自动解绑。
