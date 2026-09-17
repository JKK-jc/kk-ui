# KkDrawer 抽屉

从屏幕边缘滑出的浮层面板，用于承载表单、详情、设置等「不打断主流程但需要较长时间处理」的内容。

## 用法

```vue
<KkDrawer v-model="visible" title="版本详情" placement="right" size="420px" footer>
  <p>抽屉主体内容</p>
</KkDrawer>
```

## 与 KkModal 的取舍

| 场景                         | 建议       |
| ---------------------------- | ---------- |
| 需要用户立即确认的短内容     | `KkModal`  |
| 内容较长、需要一边对照主页面 | `KkDrawer` |
| 表单字段多、需要更大书写空间 | `KkDrawer` |

## 主要 Props

| 属性             | 说明                                 | 类型                                     | 默认值    |
| ---------------- | ------------------------------------ | ---------------------------------------- | --------- |
| `modelValue`     | 是否显示（`v-model`）                | `boolean`                                | `false`   |
| `title`          | 标题                                 | `string`                                 | `''`      |
| `subtitle`       | 副标题                               | `string`                                 | `''`      |
| `placement`      | 出现方向                             | `'right' \| 'left' \| 'top' \| 'bottom'` | `'right'` |
| `size`           | 宽度（左右）/ 高度（上下）           | `string \| number`                       | `'30%'`   |
| `width`          | 宽度，优先级高于 `size`              | `string \| number`                       | —         |
| `height`         | 高度，优先级高于 `size`              | `string \| number`                       | —         |
| `resizable`      | 可拖动内侧边缘调整尺寸               | `boolean`                                | `false`   |
| `minSize`        | 可调整的最小尺寸（px）               | `number`                                 | `200`     |
| `maxSize`        | 可调整的最大尺寸（px，0 表示不限制） | `number`                                 | `0`       |
| `mask`           | 是否显示遮罩                         | `boolean`                                | `true`    |
| `maskClosable`   | 点击遮罩是否关闭                     | `boolean`                                | `true`    |
| `closeOnEsc`     | 按 Esc 是否关闭                      | `boolean`                                | `true`    |
| `showClose`      | 是否显示关闭按钮                     | `boolean`                                | `true`    |
| `destroyOnClose` | 关闭后销毁内容                       | `boolean`                                | `false`   |
| `lockScroll`     | 锁定 body 滚动（嵌套按引用计数）     | `boolean`                                | `true`    |
| `footer`         | 渲染默认底部操作区                   | `boolean`                                | `false`   |
| `disabled`       | 禁用：不响应遮罩 / Esc / 拖动        | `boolean`                                | `false`   |
| `loading`        | 主体加载态                           | `boolean`                                | `false`   |

## 事件

`update:modelValue` / `open` / `opened` / `close(reason)` / `closed` / `confirm` / `cancel` / `resize(size)`。

`close` 的 reason 为 `'close' | 'mask' | 'esc' | 'cancel'`，便于区分关闭来源。

## 插槽

`default`、`header`、`title`、`footer`、`close`。

## 实例方法

`open()`、`close(reason?)`、`reset()`（把拖动调整过的尺寸恢复为 `size` 推导值）。

## 设计约束

- 层级与 body 滚动锁复用 Modal 的实现（`components/modal/manager.ts`），多个浮层嵌套时引用计数不会互相解绑；
- 拖动调整尺寸时直接写内联宽度，过程中不触发响应式更新，松手才 emit `resize`；
- 默认底部「取消」会同时关闭抽屉（与 `KkModal` 行为一致），需要只抛事件时用 `#footer` 插槽；
- `prefers-reduced-motion` 下关闭位移动画。
