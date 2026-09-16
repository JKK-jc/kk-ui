# 介绍

**KK UI** 是一套基于 Vue 3 的组件库，视觉语言为「柔光几何」（Soft Geometry）：
用克制的圆角、柔和的阴影和一致的动效节奏，让界面看起来是会呼吸的。

## 核心特性

- **三层设计 Token**：Primitive（原始值）→ Semantic（语义）→ Component（组件级），组件只消费语义层，主题切换只需覆盖语义层。
- **4 套内置主题**：`light` / `dark` / `soft` / `cyber`，通过 `<html data-kk-theme>` 切换，纯 CSS 变量驱动，无运行时开销。
- **组件配套完整**：每个组件目录都包含 `Xxx.vue`、`types.ts`、`style.scss`、`__tests__`、`README.md`、`index.ts`。
- **零样式泄漏**：不使用 `<style scoped>` 与全局标签选择器，样式统一走 BEM + `.scss`。

## 组件总览

| 分类     | 组件                              |
| -------- | --------------------------------- |
| 通用     | `KkButton`、`KkIcon`              |
| 布局     | `KkSpace`、`KkDivider`、`KkCard`  |
| 数据展示 | `KkTag`                           |
| 数据录入 | `KkInput`、`KkForm`、`KkFormItem` |

## 设计理念

1. **Token 即契约**：任何颜色、圆角、间距、阴影、时长都必须来自 token，禁止硬编码。
2. **语义优先**：组件面向「主色 / 成功 / 警告 / 危险」这样的语义，而不是具体色值。
3. **可呼吸的动效**：统一使用 `--kk-duration-*` 与 `--kk-ease-out`，并在 `prefers-reduced-motion` 下自动收敛。

## 浏览器支持

现代浏览器（Chrome / Edge / Firefox / Safari 最新两个大版本），依赖 CSS 变量、`:has()` 与 `color-mix()`。
