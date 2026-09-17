# KkUpload 上传

零依赖文件上传：点击 / 拖拽 / 粘贴选择文件，内置 XHR 可被 `http-request` 完全接管，支持文本列表与图片卡片两种展示形态。

## 何时使用

- 上传单个或多个文件（头像、附件、图片集）；
- 需要在上传前做类型 / 大小校验，或替换文件内容；
- 需要自定义上传通道（如对接自建 OSS 直传、带上额外鉴权头）。

## 设计要点

- 触发区复用 Button 的高度 token（`--kk-button-height-*`），拖拽区复用 Input 高度 token，与同行动态表单控件等高；
- 隐藏的 `<input type="file">` 透传 `accept` / `multiple` / `webkitdirectory`，点击触发区或键盘回车 / 空格打开选择框；
- 拖拽区用 dragenter / dragover / dragleave / drop 的进入计数避免子元素导致的闪烁（`is-dragover` 状态）；
- 内置 XHR 提供 `onProgress`（`xhr.upload`）、`onSuccess`、`onError`，组件卸载时 `abort()` 进行中的请求；
- `listType="picture" | "picture-card"` 用 `URL.createObjectURL` 生成缩略图（已用 `typeof URL.createObjectURL === 'function'` 守卫，jsdom 下安全跳过），移除 / 卸载时 `revokeObjectURL`；
- 文案全部走 `useLocale().t('upload.*')`，缺失键不会渲染空白而会回退到 `zh-CN`。

## 校验顺序

`accept` → `limit`（超出触发 `exceed` 并调用 `onExceed`）→ `maxSize` / `minSize`（失败走 `error` + 用 `upload.sizeExceed` / `upload.typeNotAllowed` 提示）。

## 扩展点

- `httpRequest`：返回 `Promise` 由组件接管成功 / 失败；返回 `undefined` 时由调用方自行通过 `options.onSuccess` / `options.onError` 驱动；
- `beforeUpload`：返回 `false` 拦截，返回 `File` / `Blob` 替换待上传文件；
- `beforeRemove`：返回 `false` 取消删除。

## 键盘与无障碍

- 触发区为 `role="button"` + `tabindex="0"`，回车 / 空格触发；
- 文件列表为 `role="list"`，操作按钮带 `aria-label`（预览 / 重试 / 删除）。

## 性能约定

- 缩略图 URL 统一登记，移除单文件、清空、卸载时回收，避免内存泄漏；
- 进行中的 XHR 按 `uid` 映射，`abort()` 可精确中断；
- `progress` / `success` / `error` 事件实时回写受控列表，父级 `v-model` 始终与组件状态一致。
