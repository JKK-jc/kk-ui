# 主题系统

KK UI 内置 4 套主题，全部通过 `<html data-kk-theme="...">` 切换。

::: tip 试试看
点击下方任意主题卡片，或使用右上角的色点切换器，整个页面（包括文档站本身）会实时变化。
:::

## 内置主题

<ThemeGallery />

| 名称    | 气质           | 主色             |
| ------- | -------------- | ---------------- |
| `light` | 干净的默认浅色 | 暮光紫 `#5B4FE9` |
| `dark`  | 深夜工作场景   | 亮紫 `#8B80FF`   |
| `soft`  | 柔和粉调       | `#E879A6`        |
| `cyber` | 赛博霓虹       | 青蓝 `#00E5FF`   |

## 切换主题

```ts
import { setTheme, initTheme, getTheme } from 'kk-ui'

setTheme('cyber') // 立即切换并写入 localStorage
initTheme() // 读取本地存储 / 系统偏好
getTheme() // 获取当前主题名
```

组合式用法：

```ts
import { useTheme } from 'kk-ui'

const { theme, isDark, setTheme, toggleTheme } = useTheme()

toggleTheme() // light <-> dark
toggleTheme('light', 'cyber') // 自定义切换目标
```

## 主题内容

每个主题覆盖的都是**语义层** token，包括：

- 主色三态与柔光色：`--kk-color-primary` / `-hover` / `-active` / `-soft`
- 功能色：`success` / `warning` / `danger` / `info`
- 文字与背景：`--kk-text-*`、`--kk-bg-*`
- 边框、阴影、聚焦外环：`--kk-border-*`、`--kk-shadow-*`、`--kk-focus-ring`
- 圆角（`soft` 更圆、`cyber` 更锐）

## 在页面内局部覆盖

```html
<div data-kk-theme="cyber">
  <KkButton type="primary">霓虹按钮</KkButton>
</div>
```

## 如何验证新组件

新增组件时必须确认 4 套主题下都正常：颜色对比、边框可见性、阴影强度、聚焦外环。
