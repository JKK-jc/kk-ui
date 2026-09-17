# 组件总览

KK UI 当前提供以下组件，全部支持 4 套内置主题、全中文 / 英文语言包与 `--kk-*` 设计 token。

## 通用

| 组件                                | 说明             |
| ----------------------------------- | ---------------- |
| [KkButton 按钮](/components/button) | 触发即时操作     |
| [KkIcon 图标](/components/icon)     | Iconify 图标渲染 |

## 布局

| 组件                                      | 说明                           |
| ----------------------------------------- | ------------------------------ |
| [KkLayout 布局](/components/layout)       | 上中下 / 侧边栏骨架与 24 栅格  |
| [KkContainer 容器](/components/container) | 定宽居中容器，控制页面最大宽度 |
| [KkSpace 间距](/components/space)         | 统一子元素间距                 |
| [KkDivider 分割线](/components/divider)   | 区隔内容                       |
| [KkCard 卡片](/components/card)           | 内容容器                       |

## 导航

| 组件                              | 说明                                   |
| --------------------------------- | -------------------------------------- |
| [KkTabs 标签页](/components/tabs) | 同区域内切换内容，支持四个方位与可编辑 |

## 数据展示

| 组件                                          | 说明                               |
| --------------------------------------------- | ---------------------------------- |
| [KkTag 标签](/components/tag)                 | 标记与分类                         |
| [KkTable 表格](/components/table)             | 数据表格，支持多选 / 排序 / 固定列 |
| [KkPagination 分页器](/components/pagination) | 分页导航，`layout` 可自由编排      |
| [KkWatermark 水印](/components/watermark)     | canvas 水印，防遮挡                |

## 数据录入

| 组件                                        | 说明                                 |
| ------------------------------------------- | ------------------------------------ |
| [KkInput 输入框](/components/input)         | 单行文本录入                         |
| [KkSelect 选择器](/components/select)       | 单选 / 多选 / 过滤 / 远程搜索        |
| [KkCascader 级联选择](/components/cascader) | 多级联动选择，支持懒加载             |
| [KkUpload 上传](/components/upload)         | 点击 / 拖拽 / 粘贴上传，可自定义请求 |
| [KkForm 表单](/components/form)             | 表单容器与校验                       |
| [KkFormItem 表单项](/components/form-item)  | 字段容器                             |

## 反馈

| 组件                                      | 说明                     |
| ----------------------------------------- | ------------------------ |
| [KkModal 弹窗](/components/modal)         | 浮层容器，支持拖动       |
| [KkDrawer 抽屉](/components/drawer)       | 侧边浮层，可拖动调整尺寸 |
| [KkSkeleton 骨架屏](/components/skeleton) | 加载占位，减少布局跳动   |

## 国际化

所有内置文案（按钮、占位符、空态、分页等）都走语言包，默认简体中文，
可在导航栏一键切换英文，或用 API 自行控制：

```ts
import { setLocale, defineLocale, useLocale } from 'kk-ui'

setLocale('en-US') // 全局切换，写入 localStorage

defineLocale('ja-JP', {
  name: 'ja-JP',
  label: '日本語',
  common: { confirm: 'OK', cancel: 'キャンセル' },
  // 未提供的键自动回退到 zh-CN
})
```
