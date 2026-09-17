import type { LocaleMessages } from '../types'

/**
 * 简体中文语言包（默认语言）
 *
 * 约定：
 * - 键名用「组件名.语义名」，公共文案放 `common`
 * - 需要插值的片段统一写成 `{name}`，由 `translate` 的第二个参数填充
 * - 新增语言包时不必复制全部键：缺失的键会自动回退到 zh-CN
 */
export default {
  name: 'zh-CN',
  label: '简体中文',
  short: '中',

  common: {
    confirm: '确定',
    cancel: '取消',
    close: '关闭',
    clear: '清空',
    reset: '重置',
    loading: '加载中',
    empty: '暂无数据',
    search: '搜索',
    noMatch: '无匹配数据',
    selectAll: '全选',
    remove: '移除',
    retry: '重试',
    expand: '展开',
    collapse: '收起',
    copy: '复制',
    copied: '已复制',
    preview: '预览',
    download: '下载',
    back: '返回',
    next: '下一步',
    finish: '完成',
    yes: '是',
    no: '否',
    more: '更多',
    total: '共 {total} 条',
    selected: '已选 {count} 项',
  },

  modal: {
    close: '关闭弹窗',
  },

  drawer: {
    close: '关闭抽屉',
    resize: '拖动调整尺寸',
  },

  select: {
    placeholder: '请选择',
    multiplePlaceholder: '请选择（可多选）',
    noData: '无匹配数据',
    loading: '加载中',
    create: '创建「{label}」',
    clear: '清空',
    removeTag: '移除 {label}',
    selectAll: '全选',
    deselectAll: '取消全选',
    selectedCount: '已选 {count} 项',
  },

  cascader: {
    placeholder: '请选择',
    noData: '无匹配数据',
    loading: '加载中',
    clear: '清空',
  },

  upload: {
    selectFile: '选择文件',
    drop: '将文件拖到此处，或',
    clickUpload: '点击上传',
    uploading: '上传中',
    success: '上传成功',
    fail: '上传失败',
    retry: '重试',
    remove: '删除',
    preview: '预览',
    exceed: '最多只能上传 {limit} 个文件',
    sizeExceed: '「{name}」大小超过 {size}',
    typeNotAllowed: '「{name}」不在允许的文件类型内',
    empty: '暂无文件',
  },

  table: {
    empty: '暂无数据',
    loading: '加载中',
    selectAll: '全选本页',
    selectRow: '选择该行',
    expandRow: '展开行',
    collapseRow: '收起行',
    sortAsc: '点击升序',
    sortDesc: '点击降序',
    sortClear: '取消排序',
  },

  pagination: {
    prev: '上一页',
    next: '下一页',
    total: '共 {total} 条',
    sizes: '{size} 条/页',
    jumper: '前往',
    page: '页',
    goto: '跳至 {page} 页',
  },

  tabs: {
    add: '新增标签',
    close: '关闭「{label}」',
  },

  watermark: {
    text: 'KK UI',
  },

  skeleton: {
    loading: '内容加载中',
  },
} satisfies LocaleMessages
