# KkDrawer 抽屉

从屏幕边缘滑出的浮层面板，用于承载表单、详情、设置等「不打断主流程、但需要较长处理时间」的内容。

## 何时使用

- 内容较长，需要一边书写一边对照主页面；
- 表单字段多，弹窗尺寸不够用；
- 需要从某个方向滑出、空间感更强的层级切换。

::: tip 与 KkModal 的取舍
需要用户立刻确认的短内容用 `KkModal`；内容长、需要更大书写空间、或要保留主页面可见性时用 `KkDrawer`。
两者共用同一套层级分配与 body 滚动锁实现，多层嵌套也能正确叠放。
:::

## 代码演示

### 基础用法

`v-model` 控制显示，`size` 决定宽度（左右方向）或高度（上下方向），`footer` 打开默认底部操作区。

<Demo src="./demos/drawer/basic.vue" title="基础抽屉" />

### 四个方向

`placement` 切换滑出方向。中途切换方向会把拖动调整过的尺寸复位，避免超出视口。

<Demo src="./demos/drawer/placement.vue" title="出现方向" />

### 拖动调整尺寸

打开 `resizable` 后拖动内侧边缘即可改变尺寸，受 `minSize` / `maxSize` 约束；
拖动过程中直接写内联宽度、不触发重渲染，松手才抛出 `resize`。

<Demo src="./demos/drawer/resizable.vue" title="可调整尺寸" />

### 自定义底部

用 `#footer` 插槽可以完全接管底部：自己做 loading、二次确认或校验后再关闭。

<Demo src="./demos/drawer/footer.vue" title="底部操作区" />

## API

### Props

| 属性             | 说明                                        | 类型                                     | 默认值    |
| ---------------- | ------------------------------------------- | ---------------------------------------- | --------- |
| `modelValue`     | 是否显示                                    | `boolean`                                | `false`   |
| `title`          | 标题                                        | `string`                                 | `''`      |
| `subtitle`       | 副标题                                      | `string`                                 | `''`      |
| `placement`      | 出现方向                                    | `'right' \| 'left' \| 'top' \| 'bottom'` | `'right'` |
| `size`           | 宽度（左右）/ 高度（上下），数字按 px 处理  | `string \| number`                       | `'30%'`   |
| `width`          | 宽度，优先级高于 `size`（左右方向生效）     | `string \| number`                       | —         |
| `height`         | 高度，优先级高于 `size`（上下方向生效）     | `string \| number`                       | —         |
| `resizable`      | 可拖动内侧边缘调整尺寸                      | `boolean`                                | `false`   |
| `minSize`        | 可调整的最小尺寸（px）                      | `number`                                 | `200`     |
| `maxSize`        | 可调整的最大尺寸（px，`0` 表示不限制）      | `number`                                 | `0`       |
| `mask`           | 是否渲染遮罩                                | `boolean`                                | `true`    |
| `maskClosable`   | 点击遮罩是否关闭                            | `boolean`                                | `true`    |
| `closeOnEsc`     | 按 Esc 是否关闭                             | `boolean`                                | `true`    |
| `showClose`      | 是否显示右上角关闭按钮                      | `boolean`                                | `true`    |
| `destroyOnClose` | 关闭后销毁内容（默认保留 DOM 仅切换可见性） | `boolean`                                | `false`   |
| `lockScroll`     | 锁定 body 滚动（嵌套按引用计数）            | `boolean`                                | `true`    |
| `appendTo`       | Teleport 目标                               | `string \| HTMLElement`                  | `'body'`  |
| `zIndex`         | 层级，不传按打开顺序自增                    | `number`                                 | —         |
| `footer`         | 渲染默认底部操作区                          | `boolean`                                | `false`   |
| `okText`         | 确定按钮文案，默认跟随语言包                | `string`                                 | —         |
| `cancelText`     | 取消按钮文案，默认跟随语言包                | `string`                                 | —         |
| `okLoading`      | 默认确定按钮的 loading 态                   | `boolean`                                | `false`   |
| `bordered`       | 头部 / 底部是否显示分割线                   | `boolean`                                | `true`    |
| `disabled`       | 禁用：不响应遮罩、Esc 与拖动，按钮置灰      | `boolean`                                | `false`   |
| `loading`        | 主体加载态                                  | `boolean`                                | `false`   |
| `ariaLabel`      | 无标题时的无障碍名称                        | `string`                                 | `''`      |

### Events

| 事件                | 说明                                   | 参数                                     |
| ------------------- | -------------------------------------- | ---------------------------------------- |
| `update:modelValue` | 显示状态变化                           | `boolean`                                |
| `open` / `opened`   | 开始打开 / 入场动画结束                | —                                        |
| `close`             | 关闭，`reason` 区分来源                | `'close' \| 'mask' \| 'esc' \| 'cancel'` |
| `closed`            | 出场动画结束                           | —                                        |
| `confirm`           | 点击默认确定按钮（不自动关闭）         | —                                        |
| `cancel`            | 点击默认取消按钮（**同时会关闭抽屉**） | —                                        |
| `resize`            | 拖动调整尺寸结束，返回当前尺寸（px）   | `number`                                 |

### Slots

| 插槽      | 说明                               | 作用域 |
| --------- | ---------------------------------- | ------ |
| `default` | 主体内容                           | —      |
| `header`  | 整个头部（关闭按钮与拖动能力保留） | —      |
| `title`   | 仅标题文字区域                     | —      |
| `footer`  | 底部操作区                         | —      |
| `close`   | 关闭按钮内容                       | —      |

### 实例方法

通过 `ref` 获取，适合在事件回调里程序化控制。

| 方法             | 说明                                     |
| ---------------- | ---------------------------------------- |
| `open()`         | 主动打开（同样触发 `update:modelValue`） |
| `close(reason?)` | 主动关闭，可指定关闭来源                 |
| `reset()`        | 把拖动调整过的尺寸恢复为 `size` 推导值   |

## 设计规范

- **层级**：与 `KkModal` 共用 `nextZIndex()`，从 1000 起按打开顺序递增；
- **滚动**：主体区域 `overscroll-behavior: contain`，滚到底不会把滚动传给背后页面；
  `lockScroll` 用引用计数锁 body，嵌套浮层不会互相解绑；
- **拖动**：`setPointerCapture` 挂在抽屉上而非 document，鼠标移出窗口也不会丢事件；
  拖动期间关闭 transition 与文本选择；
- **无障碍**：`role="dialog"` + `aria-modal`，Tab 在抽屉内循环，关闭后焦点回到触发元素；
  拖动手柄为 `role="separator"` 并带 `aria-label`；
- **动效**：`prefers-reduced-motion` 下关闭位移动画。
