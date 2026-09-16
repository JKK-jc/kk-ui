# KkIcon 图标

基于 Iconify 图标数据渲染的 SVG 图标组件，一套 API 通吃所有图标集。

## 何时使用

- 按钮、菜单、表单前后缀等需要图标的场景；
- 需要统一尺寸、颜色、旋转动画而不写重复 `<svg>` 的场景。

## 代码演示

### 基础用法

<Demo src="./demos/icon/basic.vue" title="基础用法" />

### 尺寸

`size` 支持语义尺寸、数字（px）与任意 CSS 长度。

<Demo src="./demos/icon/size.vue" title="图标尺寸" />

### 颜色与旋转

<Demo src="./demos/icon/color.vue" title="颜色与旋转" />

## API

### Props

| 属性    | 说明                                         | 类型                                                 | 默认值                   |
| ------- | -------------------------------------------- | ---------------------------------------------------- | ------------------------ |
| `name`  | 图标名，支持 `lucide:search` 或简写 `search` | `string`                                             | —                        |
| `size`  | 尺寸：语义值 / 数字(px) / CSS 长度           | `'small' \| 'medium' \| 'large' \| number \| string` | `var(--kk-font-size-lg)` |
| `color` | 颜色，默认继承 `currentColor`                | `string`                                             | `''`                     |
| `spin`  | 是否旋转                                     | `boolean`                                            | `false`                  |

### 图标来源

默认数据源为 `@iconify-json/lucide`，组件首次遇到未注册图标时会自动按需加载。也可以手动注册：

```ts
import {
  addIcon,
  addIconSet,
  clearIcons,
  getIconNames,
  hasIcon,
  resolveIcon,
} from 'kk-ui'
```

| 方法                  | 说明                                  |
| --------------------- | ------------------------------------- |
| `addIcon(name, data)` | 注册单个图标                          |
| `addIconSet(set)`     | 注册整个 Iconify 图标集，返回注册数量 |
| `resolveIcon(name)`   | 解析图标数据（含简写名查找）          |
| `hasIcon(name)`       | 判断图标是否存在                      |
| `getIconNames()`      | 列出全部已注册图标名                  |
| `clearIcons()`        | 清空注册表                            |

## 设计规范

- 默认尺寸引用 `var(--kk-font-size-lg)`，颜色继承 `currentColor`，可被父级 `color` 影响；
- 图标与文字基线偏移 `-0.15em`，保证行内排版对齐；
- `spin` 使用 `1s linear infinite`，适合 loading 类图标。
