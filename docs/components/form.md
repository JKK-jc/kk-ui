# KkForm 表单

表单容器，负责数据收集、规则校验与提交控制，配合 `KkFormItem` 使用。

## 何时使用

- 需要成组录入数据并统一校验、提交、重置；
- 需要统一控制表单项的尺寸、禁用态、标签布局。

## 代码演示

### 基础用法

<Demo src="./demos/form/basic.vue" title="表单校验" />

### 校验规则

内置校验器支持 `required` / `type` / `min` / `max` / `len` / `pattern` / `validator`，不依赖第三方校验库。

<Demo src="./demos/form/rules.vue" title="校验规则" />

### 标签布局

<Demo src="./demos/form/label-position.vue" title="标签在顶部" />

## API

### Props

| 属性                   | 说明                           | 类型                             | 默认值     |
| ---------------------- | ------------------------------ | -------------------------------- | ---------- |
| `model`                | 表单数据对象                   | `Record<string, unknown>`        | `{}`       |
| `rules`                | 表单校验规则                   | `FormRules`                      | `{}`       |
| `labelWidth`           | 标签宽度（数字按 px）          | `string \| number`               | `''`       |
| `labelPosition`        | 标签位置                       | `'top' \| 'left' \| 'right'`     | `'right'`  |
| `size`                 | 统一控件尺寸（下发给 KkInput） | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `disabled`             | 统一禁用（下发给控件）         | `boolean`                        | `false`    |
| `showMessage`          | 是否显示校验提示               | `boolean`                        | `true`     |
| `inline`               | 是否行内表单                   | `boolean`                        | `false`    |
| `validateOnRuleChange` | 规则变化后是否重新校验         | `boolean`                        | `true`     |

### 事件

| 事件名     | 说明                   | 参数                     |
| ---------- | ---------------------- | ------------------------ |
| `validate` | 单个字段校验完成       | `(prop, valid, message)` |
| `submit`   | 提交（已阻止默认行为） | `(e: Event)`             |
| `reset`    | 重置                   | —                        |

### 插槽

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 表单项内容 |

### 暴露方法

| 方法                    | 说明                                  |
| ----------------------- | ------------------------------------- |
| `validate(cb?)`         | 校验全部字段，返回 `Promise<boolean>` |
| `validateField(prop)`   | 校验指定字段，支持数组                |
| `resetFields(props?)`   | 重置字段并清除校验                    |
| `clearValidate(props?)` | 只清除校验提示                        |
| `scrollToField(prop)`   | 滚动到指定字段                        |

### 校验规则结构

| 字段                  | 说明                                     | 类型                                                               |
| --------------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| `required`            | 是否必填                                 | `boolean`                                                          |
| `message`             | 错误提示                                 | `string`                                                           |
| `type`                | 类型校验                                 | `'string' \| 'number' \| 'boolean' \| 'array' \| 'email' \| 'url'` |
| `min` / `max` / `len` | 长度限制（字符串与数组按长度，数组亦可） | `number`                                                           |
| `pattern`             | 正则校验                                 | `RegExp`                                                           |
| `trigger`             | 触发时机                                 | `'blur' \| 'change' \| Array<'blur' \| 'change'>`                  |
| `validator`           | 自定义校验器                             | `(value, rule) => boolean \| string \| Promise<boolean \| string>` |

## 设计规范

- 表单项间距使用 `--kk-space-4`，错误提示使用 `--kk-font-size-xs` + `--kk-color-danger`；
- 尺寸与禁用态通过 provide/inject 下发，避免逐层透传；
- `submit` / `reset` 会阻止浏览器默认行为，交由业务自行处理。
