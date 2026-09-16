# KkInput 输入框

基础表单控件，通过键盘输入内容。

## 何时使用

- 需要用户录入单行文本、密码、搜索词等；
- 需要前后缀图标、附加内容、一键清空等增强能力时。

## 基础用法

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <KkInput v-model="value" placeholder="请输入内容" clearable />
  <KkInput v-model="value" type="password" show-password />
  <KkInput v-model="value" invalid error-message="该字段必填" />
</template>
```

## 状态

- `disabled`：禁用，不可聚焦与输入；
- `readonly`：只读，可聚焦但不可编辑；
- `invalid` + `error-message`：错误态，边框变红并展示提示；
- `clearable`：有内容时展示清空按钮；
- `show-password`：切换明文/密文。

## 插槽

- `#prefix` / `#suffix`：输入框内部前后缀（图标、单位）；
- `#prepend` / `#append`：输入框外侧拼接块（协议、按钮）。

## 事件

`update:modelValue` / `input` / `change` / `clear` / `focus` / `blur` / `keydown` / `enter`。

## 暴露方法

通过模板 ref 可调用 `focus()` / `blur()` / `select()`。

## 设计规范

- 高度与内边距来自 `--kk-input-height-*` / `--kk-input-padding-*`，圆角来自 `--kk-input-radius`；
- 聚焦时使用 `--kk-focus-ring`，错误态使用 `--kk-color-danger` 生成的柔光外环；
- 原生 `input` 通过 mixin 重置，保证 4 套主题下字体、占位符颜色一致。
