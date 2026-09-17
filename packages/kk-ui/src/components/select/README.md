# KkSelect 选择器

下拉选择器，支持单选 / 多选、搜索、远程搜索、可创建选项、多选标签折叠、全选，以及完整键盘导航与无障碍语义。

## 何时使用

- 从一组预设选项中挑选一个（或若干个）值；
- 选项较多需要搜索过滤，或数据来自后端需要远程搜索；
- 需要把自由输入「创建为选项」（allowCreate）。

## 设计要点

- 触发器高度、内边距、圆角复用 `--kk-input-height-*` / `--kk-input-padding-*` /
  `--kk-input-radius`，与 Input 等表单控件同行等高；
- 浮层用 `useFloating` 以 `fixed` 定位，自动翻转与匹配宽度，并通过 `Teleport` 挂到 `body`，
  避免被父级 `overflow` 裁剪；点击外部 / `Esc` / `Tab` 关闭；
- 浮层懒挂载：首次打开后才进 DOM，之后仅切换可见性，不重复重建；
- 多选标签复用 Tag 高度 token，可选择折叠（`collapseTags` + `maxTagCount`）为 `+N`；
- 通过 `FORM_ITEM_CONTEXT_KEY` / `FORM_CONTEXT_KEY` 继承 `size` / `disabled` /
  `invalid`，并在 `change` / `blur` 时触发 `KkFormItem` 校验。

## 键盘与无障碍

- 触发器为 `role="combobox"`（`aria-expanded` / `aria-controls` / `aria-activedescendant`），
  浮层列表为 `role="listbox"`，每个选项为 `role="option"`（`aria-selected`）；
- `↑` / `↓` 移动高亮，`Enter` 选中，`Esc` 关闭，`Tab` 关闭，
  多选且输入框为空时 `Backspace` 删除最后一个标签。

## 性能约定

- 定位与滚动重算挂载在捕获阶段与 `ResizeObserver` 上，关闭后自动解绑；
- 远程搜索返回 Promise，配合 `loading` 展示加载态，不会阻塞触发器交互。
