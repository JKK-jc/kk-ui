# 自定义主题

通过 `defineTheme` 可以在运行时注册一套完全自定义的主题，无需改动样式文件。

## 基础用法

```ts
import { defineTheme, setTheme } from 'kk-ui'

defineTheme('brand', {
  '--kk-color-primary': '#FF7A45',
  '--kk-color-primary-hover': '#FF9769',
  '--kk-color-primary-active': '#E5662F',
  '--kk-color-primary-soft': '#FFF1EA',
  '--kk-color-primary-contrast': '#FFFFFF',
  '--kk-radius-md': '4px',
  '--kk-focus-ring': '0 0 0 3px rgba(255,122,69,.2)',
})

setTheme('brand')
```

`defineTheme` 会在 `<head>` 注入一个 `#kk-theme-brand` 的 `<style>`，
选择器为 `[data-kk-theme="brand"]`。重复注册同名主题会覆盖旧样式。

## 需要覆盖哪些变量

最小可用集合：

| 变量                          | 说明                           |
| ----------------------------- | ------------------------------ |
| `--kk-color-primary`          | 主色                           |
| `--kk-color-primary-hover`    | hover 主色                     |
| `--kk-color-primary-active`   | 按下主色                       |
| `--kk-color-primary-soft`     | 柔光底色（文字按钮、浅色标签） |
| `--kk-color-primary-contrast` | 主色上的文字色                 |
| `--kk-focus-ring`             | 聚焦外环                       |

完整定制时建议同时覆盖文字、背景、边框、阴影四组。

## 用 SCSS 定义主题

如果希望主题随样式一起打包，可直接新增 `theme/themes/{name}.scss`：

```scss
[data-kk-theme='brand'] {
  --kk-color-primary: #ff7a45;
  --kk-color-primary-hover: #ff9769;
  --kk-radius-md: 4px;
}
```

并在 `src/styles.ts` 中追加导入。

## 与系统主题联动的建议

```ts
import { setTheme, isBuiltInTheme } from 'kk-ui'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
prefersDark.addEventListener('change', (e) => {
  const saved = localStorage.getItem('kk-theme') ?? ''
  if (isBuiltInTheme(saved) && saved !== 'cyber') {
    setTheme(e.matches ? 'dark' : 'light')
  }
})
```
