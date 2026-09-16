import { describe, it, expect, beforeEach } from 'vitest'
import {
  defineTheme,
  getTheme,
  initTheme,
  isBuiltInTheme,
  isDarkTheme,
  setTheme,
} from '../../theme'
import { useTheme } from '..'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-kk-theme')
  document.head.querySelectorAll('style[id^="kk-theme-"]').forEach((el) => el.remove())
})

describe('theme api', () => {
  it('setTheme 写入 data-kk-theme 与 localStorage', () => {
    setTheme('dark')
    expect(document.documentElement.getAttribute('data-kk-theme')).toBe('dark')
    expect(localStorage.getItem('kk-theme')).toBe('dark')
    expect(getTheme()).toBe('dark')
  })

  it('initTheme 优先读取本地存储', () => {
    setTheme('soft')
    expect(initTheme()).toBe('soft')
  })

  it('initTheme 无存储时回退 light', () => {
    expect(initTheme()).toBe('light')
    expect(getTheme()).toBe('light')
  })

  it('isBuiltInTheme 判断内置主题', () => {
    expect(isBuiltInTheme('cyber')).toBe(true)
    expect(isBuiltInTheme('unknown')).toBe(false)
  })

  it('isDarkTheme 识别深色类主题', () => {
    expect(isDarkTheme('dark')).toBe(true)
    expect(isDarkTheme('cyber')).toBe(true)
    expect(isDarkTheme('soft')).toBe(false)
  })

  it('defineTheme 注入自定义主题样式，重复注册会覆盖', () => {
    defineTheme('brand', { '--kk-color-primary': '#ff0000' })
    defineTheme('brand', { '--kk-color-primary': '#00ff00' })
    const styles = document.head.querySelectorAll('style[id="kk-theme-brand"]')
    expect(styles).toHaveLength(1)
    expect(styles[0].textContent).toContain('--kk-color-primary:#00ff00')
  })
})

describe('useTheme', () => {
  it('theme 响应式跟随 setTheme', () => {
    const { theme, isDark } = useTheme()
    setTheme('dark')
    expect(theme.value).toBe('dark')
    expect(isDark.value).toBe(true)
  })

  it('toggleTheme 在 light 与 dark 间切换', () => {
    const { toggleTheme, theme } = useTheme()
    setTheme('light')
    toggleTheme()
    expect(theme.value).toBe('dark')
    toggleTheme()
    expect(theme.value).toBe('light')
  })

  it('toggleTheme 支持自定义目标主题', () => {
    const { toggleTheme, theme } = useTheme()
    setTheme('light')
    toggleTheme('light', 'cyber')
    expect(theme.value).toBe('cyber')
  })

  it('暴露内置主题列表', () => {
    const { themes } = useTheme()
    expect(themes).toContain('light')
    expect(themes).toContain('cyber')
  })
})
