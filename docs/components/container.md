# KkContainer 布局容器

带预设宽度与内边距的内容容器，用于约束页面主体宽度并统一留白。

## 何时使用

- 需要把页面主体限制在特定宽度（640 / 960 / 1200 / 100%）并水平居中；
- 需要统一的 `padding`、边框、`header` / `footer` 区域与弹性布局。

## 代码演示

### 基础用法

`size` 选择预设宽度档位，`padding` 控制内边距。

<Demo src="./demos/container/basic.vue" title="居中容器" />

### 分区结构

`header` / `footer` 插槽用于构建带上下区域的版式；`direction` / `align` / `justify` 可做任意方向的弹性布局。

<Demo src="./demos/container/sections.vue" title="header / footer 区域" />

## API

### Props

| 属性        | 说明                                                          | 类型                                                                                  | 默认值      |
| ----------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `size`      | 预设最大宽度：small 640 / medium 960 / large 1200 / full 100% | `'small' \| 'medium' \| 'large' \| 'full'`                                            | `'large'`   |
| `maxWidth`  | 自定义最大宽度，优先级高于 `size`                             | `string \| number`                                                                    | —           |
| `minHeight` | 最小高度，数字按 px 处理                                      | `string \| number`                                                                    | —           |
| `padding`   | 内边距档位或具体尺寸                                          | `'none' \| 'small' \| 'medium' \| 'large' \| string \| number`                        | `'medium'`  |
| `centered`  | 是否水平居中                                                  | `boolean`                                                                             | `true`      |
| `gap`       | flex 子元素间距                                               | `string \| number`                                                                    | —           |
| `direction` | 主轴方向                                                      | `'row' \| 'column'`                                                                   | `'row'`     |
| `align`     | 交叉轴对齐                                                    | `'start' \| 'center' \| 'end' \| 'stretch'`                                           | `'stretch'` |
| `justify`   | 主轴对齐                                                      | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'start'`   |
| `wrap`      | 是否换行                                                      | `boolean`                                                                             | `true`      |
| `bordered`  | 是否显示边框                                                  | `boolean`                                                                             | `false`     |
| `tag`       | 渲染标签，默认 `div`                                          | `string`                                                                              | `'div'`     |
| `fluid`     | 流式：忽略 `size` 并撑满、取消居中                            | `boolean`                                                                             | `false`     |

### 插槽

| 名称      | 说明     |
| --------- | -------- |
| `default` | 主体内容 |
| `header`  | 顶部区域 |
| `footer`  | 底部区域 |

## 设计规范

- 预设宽度来自 `--kk-container-*` 推导，居中通过 `margin: auto` 实现；
- 内边距档位映射到 `--kk-space-*`，边框色用 `--kk-border-color`；
- `flex` 容器，配合 `direction` / `align` / `justify` / `gap` 可做任意方向的弹性布局。
