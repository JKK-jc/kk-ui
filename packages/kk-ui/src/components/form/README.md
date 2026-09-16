# KkForm 表单

表单容器，负责数据收集、规则校验与提交控制，配合 `KkFormItem` 使用。

## 何时使用

- 需要成组录入数据并统一校验、提交、重置；
- 需要统一控制表单项的尺寸、禁用态、标签布局。

## 基础用法

```vue
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules } from 'kk-ui'

const formRef = ref()
const model = reactive({ name: '', email: '' })

const rules: FormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
  ],
}

async function submit() {
  const valid = await formRef.value.validate()
  if (valid) {
    // 提交逻辑
  }
}
</script>

<template>
  <KkForm ref="formRef" :model="model" :rules="rules" @submit="submit">
    <KkFormItem prop="name" label="名称">
      <KkInput v-model="model.name" placeholder="请输入名称" />
    </KkFormItem>
    <KkFormItem prop="email" label="邮箱">
      <KkInput v-model="model.email" placeholder="请输入邮箱" />
    </KkFormItem>
    <KkFormItem>
      <KkButton type="primary" native-type="submit">提交</KkButton>
      <KkButton native-type="reset">重置</KkButton>
    </KkFormItem>
  </KkForm>
</template>
```

## 校验规则

```ts
interface FormRule {
  required?: boolean
  message?: string
  type?: 'string' | 'number' | 'boolean' | 'array' | 'email' | 'url'
  min?: number
  max?: number
  len?: number
  pattern?: RegExp
  trigger?: 'blur' | 'change' | Array<'blur' | 'change'>
  validator?: (
    value: unknown,
    rule: FormRule
  ) => boolean | string | Promise<boolean | string>
}
```

校验器为组件库内置实现，不依赖任何第三方校验库。

## 标签布局

- `labelPosition`：`top` / `left` / `right`（默认）；
- `labelWidth`：统一标签宽度，支持数字（px）与 CSS 长度；
- `inline`：行内表单模式。

## 暴露方法

| 方法                    | 说明                                  |
| ----------------------- | ------------------------------------- |
| `validate(cb?)`         | 校验全部字段，返回 `Promise<boolean>` |
| `validateField(prop)`   | 校验指定字段（支持数组）              |
| `resetFields(props?)`   | 重置字段并清除校验                    |
| `clearValidate(props?)` | 只清除校验提示                        |
| `scrollToField(prop)`   | 滚动到指定字段                        |

## 事件

`validate(prop, valid, message)` / `submit` / `reset`。

## 设计规范

- 表单项间距使用 `--kk-space-4`，错误提示使用 `--kk-font-size-xs` + `--kk-color-danger`；
- 必填星号由 `.is-required` 状态的伪元素生成，不额外插入 DOM；
- 表单尺寸与禁用态通过 provide/inject 下发给 `KkInput` 等控件，避免逐层透传。
