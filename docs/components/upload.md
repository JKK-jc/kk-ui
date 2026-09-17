# KkUpload 上传

文件上传：点击 / 拖拽 / 粘贴选择文件，内置 XHR 可被 `http-request` 完全接管，支持文本列表与图片卡片两种展示形态。

## 何时使用

- 上传单个或多个文件（头像、附件、图片集）；
- 需要在上传前做类型 / 大小校验，或替换文件内容；
- 需要自定义上传通道（如对接自建 OSS 直传、带上额外鉴权头）。

## 代码演示

### 基础用法（点击上传）

点击触发区打开文件选择框，选中后自动上传。`http-request` 为文档站离线演示用，替换为真实地址即可。

<Demo src="./demos/upload/basic.vue" title="点击上传" />

### 拖拽上传

开启 `drag` 后整块区域可拖入文件；进入计数避免子元素导致的 `is-dragover` 闪烁。

<Demo src="./demos/upload/drag.vue" title="拖拽上传" />

### 图片卡片

`list-type="picture-card"` 以方形卡片展示缩略图，hover / focus 浮现预览与删除操作区。

<Demo src="./demos/upload/picture-card.vue" title="卡片式图片上传" />

### 手动提交

`auto-upload=false` 时文件仅进入列表，由 `before-upload` 校验后调用 `submit()` 统一上传。

<Demo src="./demos/upload/manual.vue" title="beforeUpload 校验 + 手动提交" />

## API

### Props

| 属性              | 说明                                            | 类型                                                | 默认值     |
| ----------------- | ----------------------------------------------- | --------------------------------------------------- | ---------- |
| `modelValue`      | 受控文件列表                                    | `KkUploadFile[]`                                    | `[]`       |
| `action`          | 上传地址（`http-request` 存在时可省略）         | `string`                                            | `''`       |
| `method`          | 请求方法                                        | `string`                                            | `'POST'`   |
| `headers`         | 请求头                                          | `Record<string, string>`                            | `{}`       |
| `data`            | 额外表单字段                                    | `Record<string, unknown>`                           | `{}`       |
| `name`            | 文件字段名                                      | `string`                                            | `'file'`   |
| `withCredentials` | 是否携带凭证                                    | `boolean`                                           | `false`    |
| `multiple`        | 多选                                            | `boolean`                                           | `false`    |
| `accept`          | 接受的文件类型（透传 input[accept]）            | `string`                                            | `''`       |
| `directory`       | 目录选择（webkitdirectory）                     | `boolean`                                           | `false`    |
| `limit`           | 最大文件数，0 表示不限制                        | `number`                                            | `0`        |
| `maxSize`         | 单文件最大字节数                                | `number`                                            | `0`        |
| `minSize`         | 单文件最小字节数                                | `number`                                            | `0`        |
| `drag`            | 整块拖拽区                                      | `boolean`                                           | `false`    |
| `listType`        | 列表形态：`text` / `picture` / `picture-card`   | `'text' \| 'picture' \| 'picture-card'`             | `'text'`   |
| `showFileList`    | 是否展示文件列表                                | `boolean`                                           | `true`     |
| `disabled`        | 禁用                                            | `boolean`                                           | `false`    |
| `autoUpload`      | 选中后自动上传，为 `false` 时由 `submit()` 触发 | `boolean`                                           | `true`     |
| `httpRequest`     | 自定义上传方法，优先于内置 XHR                  | `(options) => Promise<unknown> \| undefined`        | —          |
| `beforeUpload`    | 上传前钩子：false 拦截，File / Blob 替换        | `(file) => boolean \| File \| Blob \| Promise<...>` | —          |
| `beforeRemove`    | 移除前钩子：false 取消删除                      | `(file) => boolean \| Promise<boolean>`             | —          |
| `onExceed`        | 超出 `limit` 回调                               | `(files) => void`                                   | —          |
| `onError`         | 失败提示覆盖钩子，返回 false 抑制默认提示       | `(ctx) => boolean \| void`                          | —          |
| `paste`           | 开启粘贴上传                                    | `boolean`                                           | `false`    |
| `tip`             | 辅助提示文案                                    | `string`                                            | `''`       |
| `size`            | 尺寸，未传时继承 Form 上下文                    | `'small' \| 'medium' \| 'large'`                    | `'medium'` |

### 事件

| 事件名              | 说明               | 参数                      |
| ------------------- | ------------------ | ------------------------- |
| `update:modelValue` | 列表变化（含进度） | `(files: KkUploadFile[])` |
| `change`            | 列表结构或状态变化 | `(files: KkUploadFile[])` |
| `progress`          | 进度变化           | `({ file, percent })`     |
| `success`           | 上传成功           | `({ file, response })`    |
| `error`             | 上传 / 校验失败    | `({ file, error })`       |
| `remove`            | 移除文件           | `(file)`                  |
| `exceed`            | 超出数量限制       | `(files)`                 |
| `preview`           | 点击预览           | `(file)`                  |

### 插槽

| 名称      | 说明                                                               |
| --------- | ------------------------------------------------------------------ |
| `default` | 触发区内容，默认渲染按钮；含 `disabled` / `openFileDialog`         |
| `tip`     | 辅助提示                                                           |
| `file`    | 自定义文件项；含 `file` / `index` / `remove` / `retry` / `preview` |
| `icon`    | picture-card 触发卡片图标                                          |
| `empty`   | 空列表占位                                                         |

### 实例方法

| 方法             | 说明                               | 签名              |
| ---------------- | ---------------------------------- | ----------------- |
| `submit`         | 上传所有 ready 文件                | `() => void`      |
| `abort`          | 中断上传，不传 uid 中断全部        | `(uid?) => void`  |
| `clear`          | 清空列表                           | `() => void`      |
| `upload`         | 上传指定文件；不传则上传所有 ready | `(file?) => void` |
| `openFileDialog` | 打开文件选择框                     | `() => void`      |

## 设计规范

- 触发按钮复用 Button 高度 token，拖拽区复用 Input 高度 token，与同行表单控件等高；
- 颜色全部走语义 token，4 套主题下无需单独适配；
- 校验顺序：`accept` → `limit`（触发 `exceed`）→ `maxSize` / `minSize`（走 `error` + `upload.sizeExceed` / `upload.typeNotAllowed`）；
- 缩略图用 `URL.createObjectURL` 生成并统一登记，移除 / 卸载时回收；jsdom 无该 API 时已守卫跳过；
- 文案全部走 `useLocale().t('upload.*')`，缺失键回退 `zh-CN`，不渲染空白。
