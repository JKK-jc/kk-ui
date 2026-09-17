import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { computed, nextTick } from 'vue'
import {
  defineLocale,
  getLocale,
  getLocales,
  getLocaleMessages,
  initLocale,
  isBuiltInLocale,
  localeLabel,
  localeShort,
  setLocale,
  translate,
  useLocale,
} from '../index'

const ORIGINAL_LANG = document.documentElement.getAttribute('lang')

beforeEach(() => {
  setLocale('zh-CN')
})

afterEach(() => {
  setLocale('zh-CN')
  localStorage.clear()
  if (ORIGINAL_LANG === null) document.documentElement.removeAttribute('lang')
  else document.documentElement.setAttribute('lang', ORIGINAL_LANG)
})

describe('locale 基础能力', () => {
  it('默认语言为 zh-CN 且内置语言齐全', () => {
    expect(getLocale()).toBe('zh-CN')
    expect(getLocales()).toContain('zh-CN')
    expect(getLocales()).toContain('en-US')
    expect(isBuiltInLocale('zh-CN')).toBe(true)
    expect(isBuiltInLocale('ja-JP')).toBe(false)
  })

  it('按「组件.语义」路径取值并支持 {name} 插值', () => {
    expect(translate('common.confirm')).toBe('确定')
    expect(translate('pagination.total', { total: 42 })).toBe('共 42 条')
    expect(translate('upload.exceed', { limit: 3 })).toBe('最多只能上传 3 个文件')
  })

  it('支持位置形式插值 {0}', () => {
    defineLocale('xx-TEST', {
      name: 'xx-TEST',
      label: 'Test',
      demo: { pair: '{0} - {1}' },
    })
    expect(translate('demo.pair', ['a', 'b'], 'xx-TEST')).toBe('a - b')
  })

  it('未命中的键按当前语言 → zh-CN → 键名回退', () => {
    // 只补一个键的自定义语言，其余键应回退到 zh-CN
    defineLocale('fr-FR', {
      name: 'fr-FR',
      label: 'Français',
      onlyFr: { text: 'FR only' },
    })

    expect(translate('onlyFr.text', undefined, 'fr-FR')).toBe('FR only')
    expect(translate('common.cancel', undefined, 'fr-FR')).toBe('取消')
    expect(translate('not.exist')).toBe('not.exist')
  })

  it('setLocale 会写 localStorage 并同步 html lang', () => {
    setLocale('en-US')

    expect(getLocale()).toBe('en-US')
    expect(localStorage.getItem('kk-locale')).toBe('en-US')
    expect(document.documentElement.getAttribute('lang')).toBe('en-US')
    expect(translate('common.confirm')).toBe('OK')

    setLocale('zh-CN')
    expect(translate('common.confirm')).toBe('确定')
  })

  it('defineLocale 深合并，可只补少量键', () => {
    defineLocale('zh-CN', {
      name: 'zh-CN',
      label: '简体中文',
      demoOnly: { hello: '你好' },
    })

    expect(getLocaleMessages('zh-CN')?.demoOnly).toEqual({ hello: '你好' })
    // 原有键未被覆盖
    expect(translate('common.confirm')).toBe('确定')
  })

  it('localeLabel / localeShort 未注册时回退到语言标识', () => {
    expect(localeLabel('zh-CN')).toBe('简体中文')
    expect(localeShort('en-US')).toBe('EN')
    expect(localeLabel('ja-JP')).toBe('ja-JP')
  })

  it('initLocale 优先读取本地存储', () => {
    localStorage.setItem('kk-locale', 'en-US')
    expect(initLocale()).toBe('en-US')
    expect(getLocale()).toBe('en-US')
  })
})

describe('useLocale', () => {
  it('t 是响应式的：语言切换后重新求值', async () => {
    const { t, locale, label } = useLocale()
    const text = computed(() => t('common.confirm'))

    expect(text.value).toBe('确定')
    expect(locale.value).toBe('zh-CN')

    setLocale('en-US')
    await nextTick()

    expect(text.value).toBe('OK')
    expect(label.value).toBe('English')
  })

  it('toggleLocale 在内置中英文之间来回切换', () => {
    const { toggleLocale } = useLocale()

    toggleLocale()
    expect(getLocale()).toBe('en-US')

    toggleLocale()
    expect(getLocale()).toBe('zh-CN')
  })

  it('override 可让子树固定语言而不写回全局', () => {
    const { t, locale } = useLocale('en-US')

    expect(locale.value).toBe('en-US')
    expect(t('common.confirm')).toBe('OK')
    // 全局仍是中文
    expect(getLocale()).toBe('zh-CN')
  })

  it('locales 为响应式列表，注册新语言后可见', async () => {
    const { locales } = useLocale()

    defineLocale('ko-KR', { name: 'ko-KR', label: '한국어' })
    await nextTick()

    expect(locales.value).toContain('ko-KR')
  })
})
