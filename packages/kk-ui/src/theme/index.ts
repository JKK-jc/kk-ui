import { ref, type Ref } from 'vue'

/**
 * 主题名：4 套内置主题 + 任意自定义主题名。
 * `string & Record<never, never>` 用于避免 TS 把联合类型折叠成裸 `string`，
 * 从而保留 `'light' | 'dark' | ...` 的字面量自动补全。
 * 这里不用更常见的 `string & {}`，因为 `{}` 会被 @typescript-eslint/ban-types 拦下。
 */
export type ThemeName =
  'light' | 'dark' | 'soft' | 'cyber' | (string & Record<never, never>)

const THEME_ATTR = 'data-kk-theme'
const STORAGE_KEY = 'kk-theme'
const BUILT_IN: ThemeName[] = ['light', 'dark', 'soft', 'cyber']

const themeState: Ref<ThemeName> = ref('light')

/**
 * 当前主题的响应式引用，供 useTheme 等组合式函数订阅
 */
export const themeRef = themeState

const hasDocument = (): boolean => typeof document !== 'undefined'

export function getTheme(): ThemeName {
  return themeState.value
}

export function setTheme(name: ThemeName): void {
  themeState.value = name
  if (hasDocument()) {
    document.documentElement.setAttribute(THEME_ATTR, name)
  }
  try {
    localStorage.setItem(STORAGE_KEY, name)
  } catch {
    /* ignore */
  }
}

export function initTheme(): ThemeName {
  let saved: ThemeName | null = null
  try {
    saved = localStorage.getItem(STORAGE_KEY) as ThemeName | null
  } catch {
    /* ignore */
  }
  if (saved) {
    setTheme(saved)
    return saved
  }
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  const fallback: ThemeName = prefersDark ? 'dark' : 'light'
  setTheme(fallback)
  return fallback
}

export function isBuiltInTheme(name: string): boolean {
  return BUILT_IN.includes(name)
}

export function isDarkTheme(name: ThemeName = getTheme()): boolean {
  return name === 'dark' || name === 'cyber'
}

/**
 * 注册自定义主题，运行时注入 CSS 变量
 */
export function defineTheme(name: string, vars: Record<string, string>): void {
  if (!hasDocument()) return

  const styleId = `kk-theme-${name}`
  const existing = document.getElementById(styleId)
  if (existing) existing.remove()

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = `[${THEME_ATTR}="${name}"]{${Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')}}`
  document.head.appendChild(style)
}

export const builtInThemes: readonly ThemeName[] = BUILT_IN
