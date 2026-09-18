# KkLayout 布局

页面级布局与栅格系统，包含 `KkLayout` / `KkLayoutHeader` / `KkLayoutSider` /
`KkLayoutContent` / `KkLayoutFooter` 以及 `KkRow` / `KkCol` 栅格。

## 何时使用

- 搭建后台管理、文档站等需要顶栏 + 侧边栏 + 内容区的整体框架；
- 用 24 栅格做响应式内容排布。

## 代码演示

### 整体框架

`KkLayout` 嵌套组合出「顶栏 + 侧边 + 内容 + 底栏」的页面骨架。

<Demo src="./demos/layout/basic.vue" title="后台框架" />

### 可折叠侧边栏

`KkLayoutSider` 通过 `v-model:collapsed` 受控，或用内置触发器自由切换；折叠状态通过
provide/inject 在 `KkLayout` 的 `#sider` 作用域插槽中共享。

<Demo src="./demos/layout/sider.vue" title="折叠侧边栏" />

### 嵌套与右侧边栏

`KkLayoutSider` 支持 `position="right"`；`KkLayout` 可任意嵌套，组合出主内容 + 辅助栏等版式。

<Demo src="./demos/layout/aside.vue" title="嵌套与右侧边栏" />

### 栅格系统

`KkRow` / `KkCol` 提供 24 栅格，`gutter` 用负外边距 + 内边距实现，`xs/sm/md/lg/xl` 支持响应式。

<Demo src="./demos/layout/grid.vue" title="24 栅格" />

## API

### KkLayout Props

| 属性        | 说明                                     | 类型                         | 默认值   |
| ----------- | ---------------------------------------- | ---------------------------- | -------- |
| `direction` | 主轴方向，不传时由是否含 sider 推断      | `'horizontal' \| 'vertical'` | 自动推断 |
| `hasSider`  | 是否含侧边栏（用于触发 horizontal 推断） | `boolean`                    | `false`  |
| `fixed`     | 高度撑满视口，内部滚动区填满             | `boolean`                    | `false`  |
| `height`    | 容器高度，数字按 px 处理                 | `string \| number`           | —        |
| `gap`       | 子区域间距                               | `string \| number`           | `0`      |
| `bordered`  | 是否显示边框                             | `boolean`                    | `false`  |

### KkLayout 插槽

| 名称      | 说明     | 作用域                  |
| --------- | -------- | ----------------------- |
| `default` | 主体内容 | —                       |
| `header`  | 顶部区域 | `{ collapsed, toggle }` |
| `sider`   | 侧边区域 | `{ collapsed, toggle }` |
| `content` | 内容区域 | —                       |
| `footer`  | 底部区域 | —                       |

### KkLayoutSider Props

| 属性             | 说明                                                    | 类型                | 默认值   |
| ---------------- | ------------------------------------------------------- | ------------------- | -------- |
| `width`          | 展开宽度，数字按 px 处理                                | `string \| number`  | `220`    |
| `collapsedWidth` | 收起宽度，数字按 px 处理                                | `string \| number`  | `64`     |
| `collapsed`      | 是否收起（支持 `v-model:collapsed`）                    | `boolean`           | —        |
| `collapsible`    | 是否可收起                                              | `boolean`           | `false`  |
| `trigger`        | 触发器：`true` 默认箭头 / `false` 隐藏 / 字符串为插槽名 | `boolean \| string` | `true`   |
| `position`       | 侧边栏位置                                              | `'left' \| 'right'` | `'left'` |
| `bordered`       | 是否显示边框                                            | `boolean`           | `true`   |
| `reverseArrow`   | 是否翻转箭头方向                                        | `boolean`           | `false`  |

### KkLayoutSider 插槽 / 事件

| 插槽      | 说明           | 作用域                  |
| --------- | -------------- | ----------------------- |
| `default` | 侧边栏内容     | `{ collapsed, toggle }` |
| `logo`    | 顶部 Logo 区域 | `{ collapsed, toggle }` |
| `trigger` | 自定义触发器   | `{ collapsed, toggle }` |

| 事件               | 说明       | 参数               |
| ------------------ | ---------- | ------------------ |
| `update:collapsed` | 折叠态变化 | `(value: boolean)` |
| `collapse`         | 折叠态变化 | `(value: boolean)` |

### KkRow / KkCol

`KkRow`：`gutter`（`number | string | [x,y]`）、`justify`、`align`、`wrap`、`tag`。
`KkCol`：`span`、`offset`、`push`、`pull`，以及响应式 `xs/sm/md/lg/xl`（`number` 或 `{ span, offset, push, pull }`）、`tag`。

## 设计规范

- 折叠态宽度由 `collapsedWidth` 控制，`width` 与 `collapsedWidth` 均支持数字 / 字符串；
- 间距、边框、分隔线全部来自 `--kk-space-*` / `--kk-border-color*`；
- 栅格宽度用百分比计算，`gutter` 通过 Row 负外边距 + Col 内边距实现，无额外 DOM。
