/**
 * 语言包相关类型
 *
 * `LocaleName` 与 `ThemeName` 的写法保持一致：用
 * `string & Record<never, never>` 兜底，既保留内置语言的字面量自动补全，
 * 又允许使用方注册任意自定义语言。
 */
export type LocaleName = 'zh-CN' | 'en-US' | (string & Record<never, never>)

/**
 * 语言包结构：顶层必须提供 `name` / `label`，
 * 其余键按「组件名.语义名」自由分组（见 lang/zh-CN.ts）。
 */
export interface LocaleMessages {
  /** 语言标识，如 `zh-CN` */
  name: string
  /** 展示名，如 `简体中文` */
  label: string
  /** 紧凑展示名，用于导航栏等窄空间 */
  short?: string
  [key: string]: unknown
}

/** 插值参数：支持 `{ name }` 形式与 `{ 0 }` 位置形式 */
export type LocaleParams = Record<string, string | number> | (string | number)[]
