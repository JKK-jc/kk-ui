# KkButton 按钮

按钮用于触发一个即时操作，是最基础的交互组件。

## 何时使用

- 用户需要提交、确认、取消、删除等触发动作时；
- 需要承载图标 + 文案的轻量操作入口时；
- 表单底部的主次操作区。

## 代码演示

### 基础用法

<Demo src="./demos/button/basic.vue" title="基础用法" />

### 按钮类型

通过 `type` 表达操作优先级与语义。

<Demo src="./demos/button/type.vue" title="按钮类型" />

### 按钮尺寸

`size` 支持 `small` / `medium` / `large`。

<Demo src="./demos/button/size.vue" title="按钮尺寸" />

### 按钮状态

`loading` 显示 spinner 并阻止点击；`disabled` 完全禁用。

<Demo src="./demos/button/status.vue" title="按钮状态" />

### 带图标

通过 `#icon` 具名插槽放置图标；loading 时图标会被 spinner 替换。

<Demo src="./demos/button/icon.vue" title="带图标" />

### 块级按钮

`block` 让按钮撑满父容器宽度。

<Demo src="./demos/button/block.vue" title="块级按钮" />

## API

### Props

| 属性         | 说明                | 类型                                                                     | 默认值      |
| ------------ | ------------------- | ------------------------------------------------------------------------ | ----------- |
| `type`       | 按钮类型            | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'default' \| 'text'` | `'default'` |
| `size`       | 按钮尺寸            | `'small' \| 'medium' \| 'large'`                                         | `'medium'`  |
| `disabled`   | 是否禁用            | `boolean`                                                                | `false`     |
| `loading`    | 是否加载中          | `boolean`                                                                | `false`     |
| `block`      | 是否块级宽度        | `boolean`                                                                | `false`     |
| `nativeType` | 原生 button 的 type | `'button' \| 'submit' \| 'reset'`                                        | `'button'`  |

### 事件

| 事件名  | 说明                                    | 参数              |
| ------- | --------------------------------------- | ----------------- |
| `click` | 点击按钮（disabled / loading 时不触发） | `(e: MouseEvent)` |

### 插槽

| 名称      | 说明                                 |
| --------- | ------------------------------------ |
| `default` | 按钮文字                             |
| `icon`    | 图标内容，loading 时被替换为 spinner |

## 设计规范

- 高度来自 `--kk-button-height-*`，内边距来自 `--kk-button-padding-*`，圆角来自 `--kk-button-radius`；
- 主按钮 hover 上浮 1px 并加深阴影，形成柔光层次；按下回到原位；
- 文字按钮不占背景，仅在 hover 时使用 `--kk-color-primary-soft`；
- 禁用态降低到 45% 透明度并彻底移除位移与阴影，保证状态可辨识。
