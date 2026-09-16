# KkFormItem 表单项

表单字段容器，负责标签渲染、必填标记、错误提示与字段级校验。

## 何时使用

- 与 `KkForm` 搭配，包裹单个表单控件；
- 需要字段级校验规则、标签宽度覆盖、自定义错误插槽时。

## 基础用法

```vue
<template>
  <KkFormItem prop="name" label="名称" required>
    <KkInput v-model="model.name" />
  </KkFormItem>
</template>
```

## Props

| 属性          | 说明                              | 类型                     | 默认值  |
| ------------- | --------------------------------- | ------------------------ | ------- |
| `prop`        | 对应 model 字段路径，支持 `a.b.c` | `string`                 | `''`    |
| `label`       | 标签文本                          | `string`                 | `''`    |
| `labelWidth`  | 覆盖表单级标签宽度                | `string \| number`       | —       |
| `required`    | 是否强制必填（叠加在规则之上）    | `boolean`                | `false` |
| `rules`       | 字段级规则，与表单级规则合并      | `FormRule \| FormRule[]` | `[]`    |
| `showMessage` | 是否展示错误提示                  | `boolean`                | `true`  |
| `error`       | 外部强制错误文案                  | `string`                 | `''`    |

## 插槽

- `default`：表单控件；
- `#label`：自定义标签内容；
- `#error`：自定义错误提示内容。

## 设计规范

- 错误提示紧贴控件下方，间距 `--kk-space-1`；
- 标签右侧对齐（`labelPosition="right"`）时与控件首行基线对齐（`padding-top: 8px`）；
- 必填星号使用 `--kk-color-danger`，不改变标签本身颜色。
