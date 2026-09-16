# KkCard 卡片

承载信息与操作的容器，是页面中最常用的内容区块。

## 何时使用

- 需要把相关信息聚合成独立区块；
- 列表卡片、概览面板、设置分组；
- 需要在卡片内部组合封面、标题、操作与底部说明时。

## 代码演示

### 基础用法

<Demo src="./demos/card/basic.vue" title="基础卡片" />

### 阴影与加载

<Demo src="./demos/card/variant.vue" title="阴影策略与加载态" />

## API

### Props

| 属性        | 说明                         | 类型                                       | 默认值     |
| ----------- | ---------------------------- | ------------------------------------------ | ---------- |
| `title`     | 标题                         | `string`                                   | `''`       |
| `subtitle`  | 副标题                       | `string`                                   | `''`       |
| `shadow`    | 阴影策略                     | `'always' \| 'hover' \| 'never'`           | `'always'` |
| `padding`   | 内容内边距                   | `'small' \| 'medium' \| 'large' \| 'none'` | `'medium'` |
| `hoverable` | 是否可点击样式（hover 上浮） | `boolean`                                  | `false`    |
| `bordered`  | 是否显示边框                 | `boolean`                                  | `true`     |
| `loading`   | 是否加载中（内容区遮罩）     | `boolean`                                  | `false`    |

### 插槽

| 名称       | 说明                                        |
| ---------- | ------------------------------------------- |
| `default`  | 卡片正文                                    |
| `header`   | 自定义整个头部（优先级高于 title/subtitle） |
| `title`    | 自定义标题内容（优先于 `title` 属性）       |
| `subtitle` | 自定义副标题内容                            |
| `extra`    | 头部右侧操作区                              |
| `cover`    | 封面区域                                    |
| `footer`   | 底部区域                                    |

## 设计规范

- 圆角使用 `--kk-card-radius`，阴影使用 `--kk-card-shadow*`；
- 内容内边距通过局部变量 `--kk-card-body-padding` 控制，方便 `padding="none"` 时让内容自行贴边；
- `hoverable` 时上浮 2px 并切换主色边框；
- 尊重 `prefers-reduced-motion`，减少动效场景下关闭位移与过渡。
