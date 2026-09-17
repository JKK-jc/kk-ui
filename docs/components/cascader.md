# KkCascader 级联选择器

多列联动的下拉选择器，从有层级关系的数据中逐级下钻挑选一个或多个值。

## 何时使用

- 数据有明确层级（省 / 市 / 区、类目 / 子类目、组织 / 部门），需要逐级展开；
- 期望回填完整路径（`emitPath` + `showAllLevels`）而不是只拿末级值；
- 层级很深或数据量很大，需要 `loadData` 按需加载子级；
- 需要一次勾选多条路径（多选标签，每个标签可单独删除）。

与 `KkSelect` 的分工：选项平铺、无层级时选 Select；选项带父子关系时选 Cascader。

## 代码演示

### 基础用法

`emitPath` 默认开启，单选拿到的是完整路径数组。示例里 `check-strictly` 设为 `false`，
因此点击非叶子节点只展开、不提交值，选到叶子才提交并收起浮层。

<Demo src="./demos/cascader/basic.vue" title="单选与完整路径" />

### 多选标签

`multiple` 下勾选不会关闭浮层，可以连续勾选多条路径；每个标签展示完整路径并可单独删除，
路径文案受 `showAllLevels` 与 `separator` 影响。

<Demo src="./demos/cascader/multiple.vue" title="多选标签" />

### 懒加载

传入 `loadData` 后，没有 `children` 的节点点开才请求，请求期间该列显示 `loading` 占位，
加载完成抛出 `load` 事件。加载失败会保持未加载状态，再次点开即可重试。

<Demo src="./demos/cascader/lazy.vue" title="懒加载子级" />

## API

### Props

| 属性            | 说明                                               | 类型                                                                              | 默认值                                                                                         |
| --------------- | -------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `modelValue`    | 选中值，单选为路径或末级值，多选为路径数组         | `CascaderValue \| CascaderPath \| CascaderPath[]`                                 | —                                                                                              |
| `options`       | 选项数据                                           | `CascaderOption[]`                                                                | `[]`                                                                                           |
| `fieldNames`    | 自定义字段名                                       | `CascaderFieldNames`                                                              | `{ value: 'value', label: 'label', children: 'children', disabled: 'disabled', leaf: 'leaf' }` |
| `multiple`      | 是否多选                                           | `boolean`                                                                         | `false`                                                                                        |
| `checkStrictly` | 是否允许选择任意层级，为 `false` 时只能选叶子节点  | `boolean`                                                                         | `true`                                                                                         |
| `emitPath`      | 单选时是否回填完整路径                             | `boolean`                                                                         | `true`                                                                                         |
| `showAllLevels` | 输入框 / 标签是否展示完整路径                      | `boolean`                                                                         | `true`                                                                                         |
| `separator`     | 路径分隔符                                         | `string`                                                                          | `' / '`                                                                                        |
| `clearable`     | 是否可一键清空                                     | `boolean`                                                                         | `false`                                                                                        |
| `disabled`      | 是否禁用                                           | `boolean`                                                                         | `false`                                                                                        |
| `placeholder`   | 占位文本，未设置时跟随 locale                      | `string`                                                                          | `''`                                                                                           |
| `size`          | 尺寸，未设置时继承 `KkForm`                        | `'small' \| 'medium' \| 'large'`                                                  | —                                                                                              |
| `loading`       | 面板加载态                                         | `boolean`                                                                         | `false`                                                                                        |
| `expandTrigger` | 子级展开方式                                       | `'click' \| 'hover'`                                                              | `'click'`                                                                                      |
| `loadData`      | 懒加载子级，存在时没有 `children` 的节点点开会请求 | `(node: CascaderOption, path: CascaderPath) => Promise<CascaderOption[]>`         | —                                                                                              |
| `placement`     | 浮层位置                                           | `'bottom-start' \| 'bottom' \| 'bottom-end' \| 'top-start' \| 'top' \| 'top-end'` | `'bottom-start'`                                                                               |
| `matchWidth`    | 浮层宽度是否跟随触发元素                           | `boolean`                                                                         | `true`                                                                                         |
| `popperClass`   | 浮层额外类名                                       | `string`                                                                          | `''`                                                                                           |
| `block`         | 是否撑满父容器                                     | `boolean`                                                                         | `false`                                                                                        |
| `name`          | 原生 name，用于表单提交                            | `string`                                                                          | `''`                                                                                           |
| `filterable`    | 是否可搜索，开启后按完整路径匹配并高亮关键字       | `boolean`                                                                         | `false`                                                                                        |
| `filterMethod`  | 自定义过滤逻辑，返回 `true` 表示保留该节点         | `(query: string, option: CascaderOption) => boolean`                              | —                                                                                              |

### 事件

| 事件名              | 说明                             | 参数                                                      |
| ------------------- | -------------------------------- | --------------------------------------------------------- |
| `update:modelValue` | 选中值变化                       | `(value: CascaderModelValue)`                             |
| `change`            | 选中值变化                       | `(value: CascaderModelValue)`                             |
| `visible-change`    | 浮层展开 / 收起                  | `(visible: boolean)`                                      |
| `clear`             | 点击清空                         | —                                                         |
| `expand-change`     | 展开层级变化                     | `(path: CascaderPath)`                                    |
| `load`              | 懒加载结束（成功或失败都会抛出） | `(payload: { node: CascaderOption; path: CascaderPath })` |
| `focus` / `blur`    | 聚焦 / 失焦                      | `(e: FocusEvent)`                                         |

### 插槽

| 名称      | 说明                                  | 作用域                                     |
| --------- | ------------------------------------- | ------------------------------------------ |
| `default` | 自定义每列选项渲染                    | `{ node, level, label, selected, isLeaf }` |
| `empty`   | 空数据 / 无匹配结果                   | —                                          |
| `loading` | 加载中占位                            | —                                          |
| `prefix`  | 触发器前缀                            | —                                          |
| `suffix`  | 触发器后缀（默认是下拉箭头）          | —                                          |
| `tag`     | 多选标签，默认渲染路径文案 + 删除按钮 | `{ node, path, text, remove }`             |

### 实例方法

| 方法              | 说明                     | 签名                     |
| ----------------- | ------------------------ | ------------------------ |
| `focus`           | 聚焦触发器               | `() => void`             |
| `blur`            | 让触发器失焦             | `() => void`             |
| `open`            | 展开浮层                 | `() => void`             |
| `close`           | 收起浮层                 | `() => void`             |
| `clear`           | 清空选中值               | `() => void`             |
| `getCheckedNodes` | 取当前选中节点的原始数据 | `() => CascaderOption[]` |

## 设计规范

- 触发器高度、内边距、圆角复用 `--kk-input-height-*` / `--kk-input-padding-*` /
  `--kk-input-radius`，与 `KkInput` / `KkSelect` 同行等高，4 套主题下无需单独调参；
- 浮层用 `useFloating` 以 `fixed` 定位并 `Teleport` 到 `body`，圆角与阴影取自
  `--kk-radius-md` / `--kk-shadow-lg`，被父级 `overflow` 裁剪的场景也能正常弹出；
- 面板按层级横向铺开，每列独立纵向滚动，列之间用 `--kk-border-color-soft` 分隔；
  列宽只给 `min-width`，层级深时整体横向滚动而不是互相挤压；
- 当前路径各级用 `is-active`（`--kk-bg-hover`）标记，选中项用 `--kk-color-primary`
  着色，禁用项走 `--kk-text-disabled` 且不响应 hover，层级关系一眼可辨。

## 交互与性能约定

- **挂载策略**：浮层首次打开才挂载，之后只切换可见性，不重复重建；
- **懒加载**：结果按路径缓存，已加载的节点重复展开不再请求；加载中该列显示
  `loading` 占位，失败保持未加载状态，点开即可重试；
- **键盘**：`↑` / `↓` 在当前列移动高亮，`→` 进入下一列，`←` 回到上一列，
  `Enter` 选中，`Esc` / `Tab` 关闭；多选勾选后浮层保持展开；
- **无障碍**：触发器 `role="combobox"`（`aria-expanded` / `aria-haspopup="listbox"` /
  `aria-controls` / `aria-activedescendant`），每列 `role="listbox"`，
  选项 `role="option"`（`aria-selected` / `aria-disabled`）；
- **表单**：通过 `FORM_CONTEXT_KEY` / `FORM_ITEM_CONTEXT_KEY` 继承 `size` / `disabled` /
  `invalid`，并在 `change` / `blur` 时触发 `KkFormItem` 校验。
