# KkWatermark 水印

基于 Canvas 生成的页面水印，覆盖在内容之上，支持文字 / 图片、旋转、平铺与交叉铺排。

## 何时使用

- 给文档、报表、截图等页面内容打上所有权或保密标识；
- 需要防误用、可追溯的视觉标记，且不影响内容交互。

## 代码演示

### 文字水印

`content` 支持单行或多行（数组），`rotate` 控制倾斜角度。

<Demo src="./demos/watermark/basic.vue" title="文字水印" />

### 图片水印

`image` 优先级高于 `content`，`imageWidth` / `imageHeight` 可约束尺寸。

<Demo src="./demos/watermark/image.vue" title="图片水印" />

### 自定义内容插槽

`#content` 插槽的**文本**会取代 `content` 文案绘制到画布上。

<Demo src="./demos/watermark/slot.vue" title="插槽内容" />

## API

### Props

| 属性           | 说明                                              | 类型                 | 默认值        |
| -------------- | ------------------------------------------------- | -------------------- | ------------- |
| `content`      | 水印文字，可为多行（数组）                        | `string \| string[]` | `'KK UI'`     |
| `width`        | 单个内容区宽度                                    | `number`             | `120`         |
| `height`       | 单个内容区高度                                    | `number`             | `120`         |
| `rotate`       | 旋转角度（度）                                    | `number`             | `-22`         |
| `gap`          | 水印间距 `[水平, 垂直]`                           | `[number, number]`   | `[100, 100]`  |
| `offset`       | 整体偏移 `[x, y]`                                 | `[number, number]`   | —             |
| `font`         | 字体配置 `{ color, size, family, weight, style }` | `WatermarkFont`      | —             |
| `image`        | 图片水印地址，优先级高于 `content`                | `string`             | —             |
| `imageWidth`   | 图片宽度                                          | `number`             | 自然 / width  |
| `imageHeight`  | 图片高度                                          | `number`             | 自然 / height |
| `opacity`      | 整体不透明度                                      | `number`             | `0.15`        |
| `zIndex`       | 层级                                              | `number`             | `9`           |
| `cross`        | 是否交叉（双向）铺排                              | `boolean`            | `true`        |
| `repeat`       | 是否平铺重复                                      | `boolean`            | `true`        |
| `inheritColor` | 是否继承容器文字颜色                              | `boolean`            | `false`       |

### 插槽

| 名称      | 说明                                             |
| --------- | ------------------------------------------------ |
| `default` | 被水印包裹的真实内容                             |
| `content` | 自定义水印内容（DOM），其文本取代 `content` 文案 |

### 实例方法

| 方法     | 说明     | 签名         |
| -------- | -------- | ------------ |
| `redraw` | 强制重绘 | `() => void` |

## 设计规范

- `getContext('2d')` 返回 `null`（如 jsdom 测试环境）时静默跳过绘制，不抛错；
- 监听 props 变化与容器尺寸变化（优先 `ResizeObserver`，不支持时回退 `window.resize`）自动重绘；
- 颜色默认跟随主题 `--kk-text-tertiary`（`inheritColor` 时可继承容器文字色），不写死硬编码色值。
