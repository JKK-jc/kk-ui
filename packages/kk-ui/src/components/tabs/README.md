# KkTabs 标签页

通过页签在同一区域内切换不同内容，常与 `KkTabPane` 配合使用。支持下划线 / 卡片 / 胶囊三种风格，可放置于上 / 下 / 左 / 右四个方位，内置标签栏横向滚动、关闭 / 新增、切换前校验等能力。

## 用法

```vue
<KkTabs v-model="active" type="line">
  <KkTabPane name="a" label="标签一">内容一</KkTabPane>
  <KkTabPane name="b" label="标签二">内容二</KkTabPane>
</KkTabs>
```

- `KkTabs` 是容器，负责渲染标签栏与切换逻辑；
- `KkTabPane` 通过 `provide / inject`（`TABS_CONTEXT_KEY`）向容器登记自身，仅渲染面板内容；
- 非激活面板默认仍保留在 DOM（仅隐藏）以保留状态，设 `lazy` 可在非激活时不挂载内容。

## 主要 Props

| 属性          | 说明                                      | 类型                                                                | 默认值     |
| ------------- | ----------------------------------------- | ------------------------------------------------------------------- | ---------- |
| `modelValue`  | 当前激活的 tab name（`v-model`）          | `string \| number`                                                  | `''`       |
| `type`        | 风格：`line` / `card` / `segment`         | `'line' \| 'card' \| 'segment'`                                     | `'line'`   |
| `size`        | 尺寸：`small` / `medium` / `large`        | `'small' \| 'medium' \| 'large'`                                    | `'medium'` |
| `closable`    | 所有标签可关闭                            | `boolean`                                                           | `false`    |
| `addable`     | 显示新增按钮                              | `boolean`                                                           | `false`    |
| `editable`    | 等同 `addable` + `closable`               | `boolean`                                                           | `false`    |
| `position`    | 方位：`top` / `bottom` / `left` / `right` | `'top' \| 'bottom' \| 'left' \| 'right'`                            | `'top'`    |
| `stretch`     | 标签均分填满                              | `boolean`                                                           | `false`    |
| `animated`    | 过渡动画                                  | `boolean`                                                           | `true`     |
| `beforeLeave` | 切换前校验，返回 `false` 阻止切换         | `(name, oldName) => boolean \| Promise<boolean>`                    | —          |
| `justify`     | 标签栏对齐（非 stretch 时生效）           | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around'` | `'start'`  |

## 事件

`update:modelValue` / `change({ name, oldName })` / `tab-change` / `tab-click(name)` / `tab-remove(name)` / `tab-add`。

## 实例方法

`setActive(name)`、`removeTab(name)`、`addTab()`、`currentName`。

## 设计约束

- 样式全部通过 `--kk-*` token 引用，不硬编码颜色；
- 尺寸复用按钮高度 token（`--kk-button-height-*`），与表单控件对齐；
- 文案走 `useLocale`，复用 `tabs.add` / `tabs.close` 等已有键。
