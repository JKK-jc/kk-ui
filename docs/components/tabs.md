# KkTabs 标签页

在同一区域内通过页签切换内容，常与 `KkTabPane` 配合使用。提供下划线 / 卡片 / 胶囊三种风格，可放置于上 / 下 / 左 / 右四个方位，并内置标签栏横向滚动、关闭 / 新增、切换前校验等能力。

## 何时使用

- 把大量同类但平级的信息收进一个区域，避免页面过长；
- 表单或详情页需要「概览 / 成员 / 设置」等并列分组时；
- 需要可编辑的页签（动态增删）作为工作台的多文档容器。

## 代码演示

### 基础用法

`v-model` 绑定当前激活的 `name`；标签文案可用 `label` 属性，也可用 `#label` 插槽自定义（如带图标）。

<Demo src="./demos/tabs/basic.vue" title="基础标签页" />

### 卡片风格

`type="card"` 让每个标签成为带边框的标签页，激活项与内容区连成一体。

<Demo src="./demos/tabs/card.vue" title="卡片风格" />

### 可编辑（关闭 + 新增）

`editable` 等于同时开启 `addable` 与 `closable`。`tab-remove` 只抛出被关闭的 `name`，需自行移除对应面板并修正激活项；`tab-add` 同理。

<Demo src="./demos/tabs/editable.vue" title="可关闭与新增" />

### 左右方向

`position` 为 `left` / `right` 时整个标签栏纵向排列，激活指示条变为侧边竖线（`segment` 类型下为侧边滑块）。

<Demo src="./demos/tabs/position.vue" title="左右方向" />

## API

### KkTabs Props

| 属性          | 说明                               | 类型                                                                | 默认值     |
| ------------- | ---------------------------------- | ------------------------------------------------------------------- | ---------- |
| `modelValue`  | 当前激活的 tab `name`（`v-model`） | `string \| number`                                                  | `''`       |
| `type`        | 风格                               | `'line' \| 'card' \| 'segment'`                                     | `'line'`   |
| `size`        | 尺寸                               | `'small' \| 'medium' \| 'large'`                                    | `'medium'` |
| `closable`    | 所有标签可关闭                     | `boolean`                                                           | `false`    |
| `addable`     | 显示新增按钮                       | `boolean`                                                           | `false`    |
| `editable`    | 等同 `addable` + `closable`        | `boolean`                                                           | `false`    |
| `position`    | 标签栏方位                         | `'top' \| 'bottom' \| 'left' \| 'right'`                            | `'top'`    |
| `stretch`     | 标签均分填满整行 / 整列            | `boolean`                                                           | `false`    |
| `animated`    | 切换与滑块是否带过渡动画           | `boolean`                                                           | `true`     |
| `beforeLeave` | 切换前校验，返回 `false` 阻止切换  | `(name, oldName) => boolean \| Promise<boolean>`                    | —          |
| `justify`     | 标签栏对齐（非 `stretch` 时生效）  | `'start' \| 'center' \| 'end' \| 'space-between' \| 'space-around'` | `'start'`  |

### KkTabPane Props

| 属性          | 说明                                           | 类型               | 默认值  |
| ------------- | ---------------------------------------------- | ------------------ | ------- |
| `name`        | 激活标识，必填且唯一                           | `string \| number` | —       |
| `label`       | 标签文案（无 `#label` 插槽时展示）             | `string \| number` | `''`    |
| `disabled`    | 是否禁用该标签                                 | `boolean`          | `false` |
| `closable`    | 面板级是否可关闭（优先级高于容器 `closable`）  | `boolean`          | `false` |
| `lazy`        | 非激活时不渲染内容，激活才挂载                 | `boolean`          | `false` |
| `forceRender` | 强制渲染：即使 `lazy` 为 `true` 也始终渲染内容 | `boolean`          | `false` |

### KkTabs 事件

| 事件名              | 说明                                   | 参数                       |
| ------------------- | -------------------------------------- | -------------------------- |
| `update:modelValue` | 激活项变化                             | `(name: string \| number)` |
| `change`            | 激活项变化（点击或程序化切换都会触发） | `({ name, oldName })`      |
| `tab-change`        | 同 `change`，语义化的标签变化事件      | `({ name, oldName })`      |
| `tab-click`         | 点击标签（无论是否切换成功）           | `(name: string \| number)` |
| `tab-remove`        | 点击关闭按钮，需自行移除对应面板       | `(name: string \| number)` |
| `tab-add`           | 点击新增按钮                           | —                          |

### KkTabs 插槽

| 名称       | 说明                                   |
| ---------- | -------------------------------------- |
| `default`  | 放置 `KkTabPane`                       |
| `extra`    | 标签栏右侧额外内容（如「更多」按钮）   |
| `prefix`   | 标签栏前缀                             |
| `more`     | 自定义超出滚动时的「更多」弹层（可选） |
| `add-icon` | 新增按钮图标                           |
| `nav-prev` | 向前滚动箭头内容                       |
| `nav-next` | 向后滚动箭头内容                       |

### KkTabPane 插槽

| 名称      | 说明                                            |
| --------- | ----------------------------------------------- |
| `default` | 面板内容                                        |
| `label`   | 自定义标签栏内容，作用域 `{ active, disabled }` |

### KkTabs 实例方法

| 方法          | 说明                                 | 签名                                        |
| ------------- | ------------------------------------ | ------------------------------------------- |
| `setActive`   | 程序化切换激活项（走 `beforeLeave`） | `(name: string \| number) => Promise<void>` |
| `removeTab`   | 触发某个面板的关闭                   | `(name: string \| number) => void`          |
| `addTab`      | 触发新增                             | `() => void`                                |
| `currentName` | 当前激活的 `name`                    | `Ref<string \| number>`                     |

## 设计规范

- 三套风格（line / card / segment）通过根节点修饰类切换，结构与样式解耦；
- 尺寸复用按钮高度 token（`--kk-button-height-*`），与表单控件在同一行内对齐；
- 激活指示条跟随激活项的内联 `translate` 平移，不进入响应式更新，切换成本为常量；
- 标签栏溢出时两端出现 prev / next 箭头，点击滚动一屏，激活项自动滚入可视区；
- 所有颜色、圆角、间距、阴影均来自 `--kk-*` token，4 套主题下无需额外适配。
