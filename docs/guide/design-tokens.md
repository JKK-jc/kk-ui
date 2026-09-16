# 设计 token

KK UI 的 token 分三层，组件只能消费最上面的语义层。

## 三层结构

```
Primitive（原始值）      --kk-brand-500 / --kk-gray-200 / --kk-space-4
        ↓
Semantic（语义）         --kk-color-primary / --kk-text-secondary
        ↓
Component（组件级）      --kk-button-height-md / --kk-input-radius
```

- Primitive 只在 `theme/tokens.scss` 中定义，是唯一数值来源；
- Semantic 在 `theme/semantic.scss` 与 `theme/themes/*.scss` 中定义，主题切换覆盖这一层；
- Component 在语义层之上再收敛一层，方便组件样式保持短小。

## 命名规范

| 前缀                              | 用途   | 示例                      |
| --------------------------------- | ------ | ------------------------- |
| `--kk-color-*`                    | 语义色 | `--kk-color-primary`      |
| `--kk-text-*`                     | 文字色 | `--kk-text-secondary`     |
| `--kk-bg-*`                       | 背景色 | `--kk-bg-container`       |
| `--kk-border-*`                   | 边框色 | `--kk-border-color-hover` |
| `--kk-shadow-*`                   | 阴影   | `--kk-shadow-md`          |
| `--kk-radius-*`                   | 圆角   | `--kk-radius-md`          |
| `--kk-space-*`                    | 间距   | `--kk-space-4`            |
| `--kk-font-size-*`                | 字号   | `--kk-font-size-lg`       |
| `--kk-duration-*` / `--kk-ease-*` | 动效   | `--kk-duration-base`      |

## 使用示例

```scss
.kk-card {
  padding: var(--kk-space-5);
  border-radius: var(--kk-radius-lg);
  box-shadow: var(--kk-shadow-sm);
  color: var(--kk-text-primary);
  background: var(--kk-bg-container);
  transition: box-shadow var(--kk-duration-base) var(--kk-ease-out);
}
```

## 禁止事项

- 禁止在组件里写死颜色、圆角、间距、阴影数值；
- 禁止组件直接引用 `--kk-brand-*` / `--kk-gray-*` 这类原始值；
- 禁止在组件内修改 `--kk-color-primary` 等语义变量（自定义主题请用 `defineTheme`）。
