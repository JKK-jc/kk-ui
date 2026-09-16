# KkInput 输入框

基础表单控件，通过键盘输入内容。

## 何时使用

- 需要用户录入单行文本、密码、搜索词等；
- 需要前后缀图标、附加内容、一键清空等增强能力时。

## 代码演示

### 基础用法

<Demo src="./demos/input/basic.vue" title="基础用法" />

### 前后缀与附加内容

<Demo src="./demos/input/affix.vue" title="前后缀与附加内容" />

### 尺寸与错误态

<Demo src="./demos/input/size.vue" title="尺寸与错误态" />

## API

### Props

| 属性                      | 说明                        | 类型                                                               | 默认值   |
| ------------------------- | --------------------------- | ------------------------------------------------------------------ | -------- |
| `modelValue`              | 绑定值                      | `string \| number`                                                 | `''`     |
| `type`                    | 原生类型                    | `'text' \| 'password' \| 'email' \| 'number' \| 'search' \| 'tel'` | `'text'` |
| `size`                    | 尺寸，未设置时继承 `KkForm` | `'small' \| 'medium' \| 'large'`                                   | —        |
| `placeholder`             | 占位文本                    | `string`                                                           | `''`     |
| `disabled`                | 是否禁用                    | `boolean`                                                          | `false`  |
| `readonly`                | 是否只读                    | `boolean`                                                          | `false`  |
| `clearable`               | 是否可一键清空              | `boolean`                                                          | `false`  |
| `showPassword`            | 是否显示密码开关            | `boolean`                                                          | `false`  |
| `maxlength` / `minlength` | 原生长度限制                | `number`                                                           | —        |
| `invalid`                 | 是否错误态                  | `boolean`                                                          | `false`  |
| `errorMessage`            | 错误提示文案                | `string`                                                           | `''`     |
| `block`                   | 是否撑满父容器              | `boolean`                                                          | `false`  |
| `autofocus`               | 是否自动聚焦                | `boolean`                                                          | `false`  |
| `name`                    | 原生 name                   | `string`                                                           | `''`     |
| `autocomplete`            | 原生 autocomplete           | `string`                                                           | `'off'`  |

### 事件

| 事件名              | 说明          | 参数                 |
| ------------------- | ------------- | -------------------- |
| `update:modelValue` | 值变化        | `(value: string)`    |
| `input`             | 输入时触发    | `(value: string)`    |
| `change`            | change 时触发 | `(value: string)`    |
| `clear`             | 点击清空      | —                    |
| `focus` / `blur`    | 聚焦 / 失焦   | `(e: FocusEvent)`    |
| `keydown`           | 按键          | `(e: KeyboardEvent)` |
| `enter`             | 回车          | `(e: KeyboardEvent)` |

### 插槽

| 名称                 | 说明             |
| -------------------- | ---------------- |
| `prefix` / `suffix`  | 输入框内部前后缀 |
| `prepend` / `append` | 输入框外侧拼接块 |

### 暴露方法

| 方法       | 说明                |
| ---------- | ------------------- |
| `focus()`  | 聚焦                |
| `blur()`   | 失焦                |
| `select()` | 全选                |
| `inputRef` | 原生 input 元素引用 |

## 设计规范

- 高度与内边距来自 `--kk-input-height-*` / `--kk-input-padding-*`，圆角来自 `--kk-input-radius`；
- 聚焦时使用 `--kk-focus-ring`，错误态使用 `--kk-color-danger` 生成的柔光外环；
- 置于 `KkFormItem` 内时，会自动继承表单的 `size` 与 `disabled`，并在 `change` / `blur` 时触发校验。
