# KkTag 标签

用于标记与分类的轻量标签。

## 何时使用

- 列表项需要标注状态、类型、优先级；
- 需要可关闭的筛选条件回显；
- 需要彩色胶囊标签做分类导航。

## 代码演示

### 基础用法与可关闭

<Demo src="./demos/tag/basic.vue" title="可关闭标签" />

### 动态添加

`KkTag` 负责展示与关闭，配合一个输入框即可实现「新增 + 删除」的动态标签（回车确认、Esc 取消）。

<Demo src="./demos/tag/dynamic.vue" title="动态添加" />

### 标签类型

<Demo src="./demos/tag/type.vue" title="标签类型" />

### 效果与尺寸

<Demo src="./demos/tag/effect.vue" title="效果与尺寸" />

## API

### Props

| 属性       | 说明         | 类型                                                                     | 默认值      |
| ---------- | ------------ | ------------------------------------------------------------------------ | ----------- |
| `type`     | 标签类型     | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'default'` |
| `size`     | 尺寸         | `'small' \| 'medium' \| 'large'`                                         | `'medium'`  |
| `effect`   | 视觉风格     | `'light' \| 'dark' \| 'plain'`                                           | `'light'`   |
| `closable` | 是否可关闭   | `boolean`                                                                | `false`     |
| `round`    | 是否胶囊圆角 | `boolean`                                                                | `false`     |
| `bordered` | 是否显示边框 | `boolean`                                                                | `true`      |

### 事件

| 事件名  | 说明         | 参数              |
| ------- | ------------ | ----------------- |
| `click` | 点击标签     | `(e: MouseEvent)` |
| `close` | 点击关闭按钮 | `(e: MouseEvent)` |

### 插槽

| 名称      | 说明         |
| --------- | ------------ |
| `default` | 标签文本     |
| `icon`    | 标签前置图标 |

## 设计规范

- 高度来自 `--kk-tag-height-*`，圆角来自 `--kk-tag-radius`；
- `light` / `plain` 效果通过 `color-mix` 与语义色混合，保证 4 套主题下对比度稳定；
- 关闭按钮点击会 `stopPropagation`，不会误触标签的 `click`。
