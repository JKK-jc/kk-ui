# KkModal 弹窗

浮层容器，用于承载需要打断当前流程的内容，支持头部 / 底部插槽与拖动。

## 何时使用

- 需要用户确认或补充信息，且不适合跳转新页面；
- 需要展示较长内容，但不想挤压主页面布局；
- 需要在页面上拖开浮层做对照阅读，或把弹窗当轻量工作面板使用。

## 代码演示

### 基础用法

`v-model` 控制显示，`title` / `subtitle` 走默认头部。

<Demo src="./demos/modal/basic.vue" title="基础弹窗" />

### 拖动

打开 `draggable` 后按住标题栏即可拖动。位移只写进 `transform: translate3d()`，
不触发组件重渲染；默认限制在视口内至少保留 56px，避免把弹窗拖丢。

<Demo src="./demos/modal/draggable.vue" title="可拖动" />

### 默认底部操作区

`footer` 为 `true` 且没有 `#footer` 插槽时渲染默认的取消 / 确定按钮。
默认底部按钮的行为：**取消会同时关闭弹窗**（并抛出 `cancel`，关闭来源为 `'cancel'`），
**确定只抛 `confirm`、不自动关闭**，方便在异步提交期间保持弹窗打开。
需要「只抛事件不关闭」时用 `#footer` 插槽自行渲染按钮。

<Demo src="./demos/modal/footer.vue" title="底部操作区" />

### 自定义插槽

`#header`、`#footer`、`#close`、`#title` 均可覆盖，默认样式只负责留白与分割线。

<Demo src="./demos/modal/slots.vue" title="插槽自定义" />

### 长内容、加载态与程序化控制

主体超高时由内容区内部滚动；`loading` 会盖住内容并屏蔽指针事件；
通过 `ref` 可以拿到 `open` / `close` / `reset`。

<Demo src="./demos/modal/advanced.vue" title="长内容与加载态" />

## API

### Props

| 属性             | 说明                                             | 类型                                       | 默认值       |
| ---------------- | ------------------------------------------------ | ------------------------------------------ | ------------ |
| `modelValue`     | 是否显示                                         | `boolean`                                  | `false`      |
| `title`          | 标题                                             | `string`                                   | `''`         |
| `subtitle`       | 副标题                                           | `string`                                   | `''`         |
| `width`          | 宽度，数字按 px 处理，优先级高于 `size`          | `string \| number`                         | —            |
| `height`         | 高度，不传时由内容撑开                           | `string \| number`                         | —            |
| `maxHeight`      | 最大高度，会与视口推导值取较小者                 | `string \| number`                         | —            |
| `top`            | 距视口顶部留白，`center` 为 `true` 时忽略        | `string \| number`                         | `8vh`        |
| `center`         | 垂直居中（上下留白对称）                         | `boolean`                                  | `false`      |
| `size`           | 预设宽度：420 / 560 / 760 / 92vw                 | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'`   |
| `draggable`      | 是否允许拖动                                     | `boolean`                                  | `false`      |
| `dragHandle`     | 拖动抓手：标题栏 / 整个弹窗                      | `'header' \| 'modal'`                      | `'header'`   |
| `dragBounds`     | 拖动边界：限制在视口内 / 不限制                  | `'viewport' \| 'none'`                     | `'viewport'` |
| `resetOnClose`   | 关闭后把拖动位移归零                             | `boolean`                                  | `true`       |
| `mask`           | 是否显示遮罩底色（关闭后仍会拦截点击）           | `boolean`                                  | `true`       |
| `maskClosable`   | 点击遮罩是否关闭                                 | `boolean`                                  | `true`       |
| `closeOnEsc`     | 按 Esc 是否关闭                                  | `boolean`                                  | `true`       |
| `showClose`      | 是否显示右上角关闭按钮                           | `boolean`                                  | `true`       |
| `destroyOnClose` | 关闭后销毁内容（默认保留 DOM，仅切换可见性）     | `boolean`                                  | `false`      |
| `lockScroll`     | 是否锁定 body 滚动（嵌套时按引用计数）           | `boolean`                                  | `true`       |
| `appendTo`       | Teleport 目标                                    | `string \| HTMLElement`                    | `'body'`     |
| `zIndex`         | 层级，不传按打开顺序自增                         | `number`                                   | —            |
| `footer`         | 无 `#footer` 插槽时渲染默认取消 / 确定按钮       | `boolean`                                  | `false`      |
| `okText`         | 默认确定按钮文案                                 | `string`                                   | `'确定'`     |
| `cancelText`     | 默认取消按钮文案                                 | `string`                                   | `'取消'`     |
| `okLoading`      | 默认确定按钮的 loading 态                        | `boolean`                                  | `false`      |
| `bordered`       | 头部与底部是否显示分割线                         | `boolean`                                  | `true`       |
| `disabled`       | 禁用：不可拖动，关闭按钮 / 遮罩 / Esc 一律不生效 | `boolean`                                  | `false`      |
| `loading`        | 加载中：主体区域显示遮罩并屏蔽指针事件           | `boolean`                                  | `false`      |
| `ariaLabel`      | 无标题时的无障碍名称                             | `string`                                   | `''`         |

### 事件

| 事件名              | 说明                   | 参数                                               |
| ------------------- | ---------------------- | -------------------------------------------------- |
| `update:modelValue` | 显示状态变化           | `(value: boolean)`                                 |
| `open`              | 开始打开               | —                                                  |
| `opened`            | 入场动画结束           | —                                                  |
| `close`             | 请求关闭，携带关闭来源 | `(reason: 'close' \| 'mask' \| 'esc' \| 'cancel')` |
| `closed`            | 出场动画结束           | —                                                  |
| `confirm`           | 点击默认确定按钮       | —                                                  |
| `cancel`            | 点击默认取消按钮       | —                                                  |
| `drag-start`        | 开始拖动               | `(position: { x: number; y: number })`             |
| `drag`              | 拖动中                 | `(position: { x: number; y: number })`             |
| `drag-end`          | 结束拖动               | `(position: { x: number; y: number })`             |

### 插槽

| 名称      | 说明                                   |
| --------- | -------------------------------------- |
| `default` | 主体内容                               |
| `header`  | 整个头部内容（关闭按钮与拖动能力保留） |
| `title`   | 仅标题文字区域                         |
| `footer`  | 底部操作区                             |
| `close`   | 关闭按钮内容                           |

### 实例方法

| 方法    | 说明         | 签名                                  |
| ------- | ------------ | ------------------------------------- |
| `open`  | 主动打开     | `() => void`                          |
| `close` | 主动关闭     | `(reason?: ModalCloseReason) => void` |
| `reset` | 拖动位移归零 | `() => void`                          |

## 设计规范

- 圆角、内边距、阴影、遮罩色均来自组件 token：`--kk-modal-radius` /
  `--kk-modal-padding` / `--kk-modal-shadow` / `--kk-modal-mask-bg`，
  4 套主题下分别调整遮罩浓度，浮层与页面背景始终保持可辨识的层次；
- 顶部留白由 `--kk-modal-top`（默认 `8vh`）控制，最大高度是
  `min(--kk-modal-max-height, 100vh - 顶部留白 - 底部留白)`，
  因此不会出现「弹窗比屏幕还高」的情况；
- 遮罩**不做 backdrop-filter**：全屏模糊在低端设备上是持续的合成开销，
  靠遮罩浓度已经足够收拢注意力；
- `will-change: transform` 只在拖动期间叠加，不常驻占用显存。

## 性能与交互约定

- **拖动**：指针事件用 `setPointerCapture` 挂在弹窗自身，移出窗口也不丢事件，
  且不需要 document 级监听；位移直接写内联 `transform`，不进入响应式更新，
  拖动的渲染成本是常数；
- **挂载策略**：首次打开先挂载再显示（保证入场动画），之后只切 `v-show`；
  需要彻底销毁时使用 `destroyOnClose`；
- **滚动锁**：多弹窗嵌套时按引用计数，各自释放不会互相解锁，
  并补偿滚动条宽度避免锁定瞬间页面横向抖动；
- **焦点**：打开后焦点移入弹窗，`Tab` 在弹窗内循环，关闭后回到打开前的元素；
- **减少动效**：`prefers-reduced-motion: reduce` 下关闭进出场过渡。
