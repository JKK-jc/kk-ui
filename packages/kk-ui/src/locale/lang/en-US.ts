import type { LocaleMessages } from '../types'

/**
 * English locale
 *
 * 与 zh-CN 键名一一对应；若某个键缺失，运行时会按
 * `当前语言 → zh-CN → 键名本身` 的顺序回退。
 */
export default {
  name: 'en-US',
  label: 'English',
  short: 'EN',

  common: {
    confirm: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    clear: 'Clear',
    reset: 'Reset',
    loading: 'Loading',
    empty: 'No data',
    search: 'Search',
    noMatch: 'No matching data',
    selectAll: 'Select all',
    remove: 'Remove',
    retry: 'Retry',
    expand: 'Expand',
    collapse: 'Collapse',
    copy: 'Copy',
    copied: 'Copied',
    preview: 'Preview',
    download: 'Download',
    back: 'Back',
    next: 'Next',
    finish: 'Finish',
    yes: 'Yes',
    no: 'No',
    more: 'More',
    total: '{total} items in total',
    selected: '{count} selected',
  },

  modal: {
    close: 'Close dialog',
  },

  drawer: {
    close: 'Close drawer',
    resize: 'Drag to resize',
  },

  select: {
    placeholder: 'Please select',
    multiplePlaceholder: 'Please select (multiple)',
    noData: 'No matching data',
    loading: 'Loading',
    create: 'Create "{label}"',
    clear: 'Clear',
    removeTag: 'Remove {label}',
    selectAll: 'Select all',
    deselectAll: 'Unselect all',
    selectedCount: '{count} selected',
  },

  cascader: {
    placeholder: 'Please select',
    noData: 'No matching data',
    loading: 'Loading',
    clear: 'Clear',
  },

  upload: {
    selectFile: 'Select file',
    drop: 'Drop file here, or',
    clickUpload: 'click to upload',
    uploading: 'Uploading',
    success: 'Upload succeeded',
    fail: 'Upload failed',
    retry: 'Retry',
    remove: 'Remove',
    preview: 'Preview',
    exceed: 'You can upload at most {limit} file(s)',
    sizeExceed: '"{name}" exceeds the size limit of {size}',
    typeNotAllowed: '"{name}" is not an allowed file type',
    empty: 'No files',
  },

  table: {
    empty: 'No data',
    loading: 'Loading',
    selectAll: 'Select all rows on this page',
    selectRow: 'Select this row',
    expandRow: 'Expand row',
    collapseRow: 'Collapse row',
    sortAsc: 'Click to sort ascending',
    sortDesc: 'Click to sort descending',
    sortClear: 'Clear sort',
  },

  pagination: {
    prev: 'Previous',
    next: 'Next',
    total: '{total} items in total',
    sizes: '{size} / page',
    jumper: 'Go to',
    page: 'page',
    goto: 'Go to page {page}',
  },

  tabs: {
    add: 'Add tab',
    close: 'Close "{label}"',
  },

  watermark: {
    text: 'KK UI',
  },

  skeleton: {
    loading: 'Content is loading',
  },
} satisfies LocaleMessages
