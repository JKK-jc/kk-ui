# KkSkeleton 骨架屏

内容加载占位符，支持文本 / 标题 / 段落 / 头像 / 图片 / 按钮等形态，可动画、可组合。

## 何时使用

- 页面或区块正在请求数据，先以骨架占位，数据返回后替换为真实内容；
- 列表、卡片、详情页等需要「结构先行、内容后至」的体验。

## 代码演示

### 基础用法

`loading` 控制占位与真实内容的切换，自定义骨架放进 `#template` 插槽。

<Demo src="./demos/skeleton/basic.vue" title="加载占位" />

### 列表占位

段落形态按 `rows` 渲染多行，末行自动收窄，贴近真实排版。

<Demo src="./demos/skeleton/list.vue" title="列表骨架" />

### 自由组合

把多个骨架拼成复杂占位，内层不带 `loading` 时自动继承外层状态。

<Demo src="./demos/skeleton/combine.vue" title="组合骨架" />

## API

### Props

| 属性        | 说明                                     | 类型                                                                  | 默认值   |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------- | -------- |
| `loading`   | 是否加载态，false 时渲染默认插槽真实内容 | `boolean`                                                             | `true`   |
| `animated`  | 是否显示流光动画                         | `boolean`                                                             | `true`   |
| `variant`   | 占位形态                                 | `'text' \| 'title' \| 'paragraph' \| 'avatar' \| 'image' \| 'button'` | `'text'` |
| `width`     | 单块宽度，数字按 px 处理                 | `string \| number`                                                    | —        |
| `height`    | 单块高度，数字按 px 处理                 | `string \| number`                                                    | —        |
| `rows`      | paragraph 行数，为 0 时回落 3 行         | `number`                                                              | `0`      |
| `rowWidths` | 逐行宽度覆盖，索引对应行号               | `string[]`                                                            | `[]`     |
| `round`     | 是否圆角（avatar / image 默认圆角）      | `boolean`                                                             | `false`  |
| `count`     | 重复渲染的骨架数量                       | `number`                                                              | `1`      |
| `block`     | 是否撑满父容器宽度                       | `boolean`                                                             | `false`  |

### 插槽

| 名称       | 说明                             |
| ---------- | -------------------------------- |
| `default`  | 加载完成后展示的真实内容         |
| `template` | 自定义骨架外观，完全取代内置形态 |

## 设计规范

- 容器带 `aria-busy="true"` 与 `aria-label="内容加载中"`，加载态对读屏软件可见；
- 流光动画只改变 `background-position`，不触发重排，并在 `prefers-reduced-motion` 下自动关闭；
- 颜色全部来自 `--kk-bg-subtle` / `--kk-bg-hover`，4 套主题下一致。
