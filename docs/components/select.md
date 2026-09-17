# KkSelect 选择器

在一组选项中选择一个或多个值。支持过滤、远程搜索、动态创建、标签折叠与全选，
选项与标签都可以用插槽完全自定义。

## 何时使用

- 需要在若干固定选项中选择，且选项数量不适合平铺成单选组；
- 需要多选并展示已选项；
- 选项来自接口，需要搜索或分页拉取。

## 代码演示

### 基础用法

`options` 传 `{ value, label, disabled }`，`filterable` 打开本地过滤，`clearable` 提供清空按钮。

<Demo src="./demos/select/basic.vue" title="单选与过滤" />

### 多选

`multiple` 打开多选：`collapseTags` + `maxTagCount` 折叠标签，`selectAll` 在面板顶部提供全选，
`multipleLimit` 限制最多可选数量。

<Demo src="./demos/multiple.vue" title="多选与标签折叠" />

### 远程搜索

`remote` + `remoteMethod`：输入关键字后由业务发起请求，配合 `loading` 展示加载态。

<Demo src="./demos/remote.vue" title="远程搜索" />

### 自定义插槽

`#default`（选项）、`#tag`（标签）、`#empty`（空态）、`#header` / `#footer`（面板上下）
都可以接管，组件只负责交互与状态。

<Demo src="./demos/slots.vue" title="插槽自定义" />

## API

### Props

| 属性            | 说明                                  | 类型                                                   | 默认值           |
| --------------- | ------------------------------------- | ------------------------------------------------------ | ---------------- |
| `modelValue`    | 选中值，单选为单值，多选为数组        | `string \| number \| boolean \| null \| (…)[]`         | —                |
| `options`       | 选项列表                              | `SelectOption[]`                                       | `[]`             |
| `multiple`      | 是否多选                              | `boolean`                                              | `false`          |
| `filterable`    | 是否可搜索（本地过滤）                | `boolean`                                              | `false`          |
| `filterMethod`  | 自定义过滤逻辑，返回 `true` 保留      | `(query, option) => boolean`                           | —                |
| `remote`        | 远程搜索模式                          | `boolean`                                              | `false`          |
| `remoteMethod`  | 远程搜索方法                          | `(query) => Promise<SelectOption[]> \| SelectOption[]` | —                |
| `allowCreate`   | 允许创建不在选项中的新值              | `boolean`                                              | `false`          |
| `createFilter`  | 自定义「能否创建」判定                | `(query, options) => boolean`                          | —                |
| `clearable`     | 是否可清空                            | `boolean`                                              | `false`          |
| `collapseTags`  | 多选时折叠标签                        | `boolean`                                              | `false`          |
| `maxTagCount`   | 折叠后最多展示的标签数，超出显示 `+N` | `number`                                               | —                |
| `multipleLimit` | 多选最多可选数量，`-1` 不限制         | `number`                                               | `-1`             |
| `selectAll`     | 多选时在面板顶部展示全选              | `boolean`                                              | `false`          |
| `disabled`      | 是否禁用                              | `boolean`                                              | `false`          |
| `placeholder`   | 占位文案，默认跟随语言包              | `string`                                               | —                |
| `size`          | 尺寸：`small` / `medium` / `large`    | `SelectSize`                                           | `'medium'`       |
| `loading`       | 加载中                                | `boolean`                                              | `false`          |
| `valueKey`      | 取值键名                              | `string`                                               | `'value'`        |
| `labelKey`      | 取文案键名                            | `string`                                               | `'label'`        |
| `emptyText`     | 空数据文案，默认跟随语言包            | `string`                                               | —                |
| `placement`     | 浮层位置                              | `SelectPlacement`                                      | `'bottom-start'` |
| `matchWidth`    | 浮层宽度跟随触发元素                  | `boolean`                                              | `true`           |
| `popperWidth`   | 浮层固定宽度，优先级高于 `matchWidth` | `string \| number`                                     | —                |
| `popperClass`   | 浮层额外类名                          | `string`                                               | —                |
| `block`         | 撑满父容器                            | `boolean`                                              | `false`          |
| `name`          | 原生 `name`，用于表单提交             | `string`                                               | —                |
| `autofocus`     | 自动聚焦                              | `boolean`                                              | `false`          |
| `openOnFocus`   | 聚焦即展开浮层                        | `boolean`                                              | `false`          |

### Events

| 事件                  | 说明                     | 参数                |
| --------------------- | ------------------------ | ------------------- |
| `update:modelValue`   | 选中值变化               | `SelectModelValue`  |
| `change`              | 选中值变化（同 v-model） | `SelectModelValue`  |
| `visible-change`      | 浮层显隐变化             | `boolean`           |
| `clear`               | 点击清空                 | —                   |
| `search`              | 输入关键字（供远程搜索） | `string`            |
| `remove-tag`          | 移除某个标签             | `SelectOptionValue` |
| `select` / `deselect` | 选中 / 取消选中单个选项  | `SelectOption`      |
| `focus` / `blur`      | 聚焦 / 失焦              | `FocusEvent`        |

### Slots

| 插槽      | 说明             | 作用域                                             |
| --------- | ---------------- | -------------------------------------------------- |
| `default` | 自定义选项渲染   | `{ option, index, selected }`                      |
| `tag`     | 自定义多选标签   | `{ label, value, remove }`（`remove(value)` 移除） |
| `prefix`  | 前缀             | —                                                  |
| `suffix`  | 后缀（含箭头）   | —                                                  |
| `arrow`   | 仅箭头           | —                                                  |
| `empty`   | 空数据           | —                                                  |
| `loading` | 加载态           | —                                                  |
| `header`  | 面板顶部         | —                                                  |
| `footer`  | 面板底部         | —                                                  |
| `create`  | 自定义创建项文案 | `{ query }`                                        |

### 实例方法

通过 `ref` 获取：`focus()`、`blur()`、`open()`、`close()`、`toggle()`。

## 设计规范

- **浮层**：`Teleport` 到 `body` + `useFloating` 定位（`position: fixed`），
  上下空间不足时自动翻转、左右做视口钳制；面板首次打开才挂载，之后保留 DOM 只切显隐；
- **键盘**：↑↓ 移动高亮、Enter 选中、Esc 关闭、Backspace 删除最后一个标签，符合 WAI-ARIA
  combobox / listbox 约定（`aria-expanded`、`aria-activedescendant`、`aria-selected`）；
- **表单集成**：可被 `KkFormItem` 包裹，继承 `disabled` / `size` 并在 `change` 时触发校验；
- **尺寸**：复用 `--kk-input-height-*` / `--kk-input-padding-*`，与 `KkInput` 视觉等高。
