# KkDivider 分割线

区隔内容的分割线，可承载简短文案。

## 何时使用

- 需要把一段内容切分成多个区块；
- 表单、列表段落之间需要视觉停顿；
- 行内元素需要竖直分隔。

## 代码演示

### 基础用法

<Demo src="./demos/divider/basic.vue" title="水平分割线" />

### 竖直分割线

<Demo src="./demos/divider/vertical.vue" title="竖直分割线" />

## API

### Props

| 属性              | 说明                             | 类型                              | 默认值         |
| ----------------- | -------------------------------- | --------------------------------- | -------------- |
| `direction`       | 方向                             | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| `contentPosition` | 文案位置（仅水平且有文案时生效） | `'left' \| 'center' \| 'right'`   | `'center'`     |
| `borderStyle`     | 线条样式                         | `'solid' \| 'dashed' \| 'dotted'` | `'solid'`      |
| `accent`          | 是否使用主色强调                 | `boolean`                         | `false`        |

### 插槽

| 名称      | 说明                  |
| --------- | --------------------- |
| `default` | 分割线中间/侧边的文案 |

## 设计规范

- 颜色来自 `--kk-divider-color`，`accent` 时切换为 `--kk-color-primary`；
- 水平有文案时，左右两侧通过 `flex: 1` 伪元素自动均分；`contentPosition` 会压缩对应一侧；
- 竖直分割线高度固定 `1em`，与文字垂直居中，适合放在 `KkSpace` 的 `#split` 中。
