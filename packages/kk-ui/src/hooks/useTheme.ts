import { computed, type ComputedRef } from 'vue'
import {
  builtInThemes,
  getTheme,
  isBuiltInTheme,
  isDarkTheme,
  setTheme,
  themeRef,
  type ThemeName,
} from '../theme'

export interface UseThemeReturn {
  theme: ComputedRef<ThemeName>
  themes: readonly ThemeName[]
  isDark: ComputedRef<boolean>
  setTheme: (name: ThemeName) => void
  toggleTheme: (from?: ThemeName, to?: ThemeName) => void
  isBuiltInTheme: (name: string) => boolean
}

/**
 * 主题相关的响应式封装，组件与业务侧统一通过它读写主题
 */
export function useTheme(): UseThemeReturn {
  const theme = computed(() => themeRef.value)
  const isDark = computed(() => isDarkTheme(themeRef.value))

  function toggleTheme(from?: ThemeName, to?: ThemeName): void {
    const next =
      themeRef.value === (from ?? 'light') ? (to ?? 'dark') : (from ?? 'light')
    setTheme(next)
  }

  return {
    theme,
    themes: builtInThemes,
    isDark,
    setTheme,
    toggleTheme,
    isBuiltInTheme,
  }
}

export { getTheme, setTheme, isBuiltInTheme, isDarkTheme }
export type { ThemeName }
