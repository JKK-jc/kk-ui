# KkSpace 间距

为行内子元素提供统一间距，避免手写 margin。

## 何时使用

- 一排按钮、一组标签、表单行内控件之间需要等距排列；
- 需要竖排元素或统一对齐方式时。

## 代码演示

### 基础用法

<Demo src="./demos/space/basic.vue" title="水平间距" />

### 垂直排列

<Demo src="./demos/space/vertical.vue" title="垂直排列" />

### 带分隔符

`split` 为 `true` 时启用 `#split` 插槽，自动插在子项之间。

<Demo src="./demos/space/split.vue" title="带分隔符" />

## API

### Props

| 属性        | 说明                           | 类型                                                      | 默认值         |
| ----------- | ------------------------------ | --------------------------------------------------------- | -------------- |
| `size`      | 间距，支持数组 `[row, column]` | `'small' \| 'medium' \| 'large' \| number \| SpaceSize[]` | `'small'`      |
| `direction` | 排列方向                       | `'horizontal' \| 'vertical'`                              | `'horizontal'` |
| `align`     | 交叉轴对齐                     | `'start' \| 'center' \| 'end' \| 'baseline'`              | `'center'`     |
| `wrap`      | 是否换行                       | `boolean`                                                 | `false`        |
| `fill`      | 是否撑满父容器                 | `boolean`                                                 | `false`        |
| `split`     | 是否在子项之间渲染分隔符       | `boolean`                                                 | `false`        |

### 插槽

| 名称      | 说明                                 |
| --------- | ------------------------------------ |
| `default` | 需要排列的内容                       |
| `split`   | 分隔符内容，`split` 为 `true` 时生效 |

## 设计规范

- 间距全部来自 `--kk-space-*` token：`small` = 8px，`medium` = 12px，`large` = 16px；
- 组件使用 `inline-flex`，可自然嵌入文本行；
- `default` 插槽中的 `v-for` Fragment 会被自动拍平，`split` 不会插在错误层级。
