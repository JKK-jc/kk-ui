import {
  computed,
  ref,
  toValue,
  type ComputedRef,
  type MaybeRefOrGetter,
  type Ref,
} from 'vue'
import { isPlainObject } from '../utils/is'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import type { LocaleMessages, LocaleName, LocaleParams } from './types'

export type { LocaleMessages, LocaleName, LocaleParams }

/** localStorage 键名，与主题的 `kk-theme` 保持同一命名风格 */
const STORAGE_KEY = 'kk-locale'
/** 回退语言：任何键缺失都先查它 */
const FALLBACK_LOCALE: LocaleName = 'zh-CN'
const BUILT_IN_LOCALES: LocaleName[] = ['zh-CN', 'en-US']

/**
 * 语言包注册表。
 *
 * 用模块级 Map 而不是 provide/inject，是因为语言是「全库唯一事实来源」，
 * 必须跨组件树、跨 Teleport（弹窗/抽屉）生效；与 theme 的实现思路一致。
 */
const registry = new Map<string, LocaleMessages>()

registry.set(zhCN.name, zhCN as LocaleMessages)
registry.set(enUS.name, enUS as LocaleMessages)

/** 已注册语言的有序列表，用 ref 承载以便 useLocale 能响应运行时新增 */
const localeNames = ref<LocaleName[]>([zhCN.name, enUS.name])

const localeState: Ref<LocaleName> = ref<LocaleName>(zhCN.name)

/** 当前语言的响应式引用，供 useLocale 订阅 */
export const localeRef = localeState

const hasDocument = (): boolean => typeof document !== 'undefined'

/* ---------- 注册与查询 ---------- */

/**
 * 注册（或扩展）语言包。
 *
 * - 默认与已注册的同名语言包做深合并，因此可以只补几个键
 * - 传入 `{ replace: true }` 时整体替换
 * - 单键缺失无需处理：`translate` 会自动回退到 zh-CN
 */
export function defineLocale(
  name: LocaleName,
  messages: LocaleMessages,
  options: { replace?: boolean } = {}
): LocaleMessages {
  const existing = registry.get(name)
  const merged =
    existing && !options.replace
      ? mergeMessages(existing, {
          ...messages,
          name,
          label: messages.label ?? existing.label,
        })
      : { ...messages, name }
  registry.set(name, merged)
  if (!localeNames.value.includes(name))
    localeNames.value = [...localeNames.value, name]
  return merged
}

/** 读取某个语言包的原始消息对象 */
export function getLocaleMessages(
  name: LocaleName = getLocale()
): LocaleMessages | undefined {
  return registry.get(name)
}

/** 全部已注册的语言（内置在前，自定义在后） */
export function getLocales(): LocaleName[] {
  return [...localeNames.value]
}

export const builtInLocales: readonly LocaleName[] = BUILT_IN_LOCALES

export function isBuiltInLocale(name: string): boolean {
  return BUILT_IN_LOCALES.includes(name)
}

/** 语言展示名，未注册时返回语言标识本身 */
export function localeLabel(name: LocaleName = getLocale()): string {
  const messages = registry.get(name)
  return typeof messages?.label === 'string' ? messages.label : String(name)
}

/** 语言紧凑名（导航栏等窄空间用） */
export function localeShort(name: LocaleName = getLocale()): string {
  const messages = registry.get(name)
  if (typeof messages?.short === 'string') return messages.short
  return localeLabel(name)
}

/* ---------- 读写当前语言 ---------- */

export function getLocale(): LocaleName {
  return localeState.value
}

export function setLocale(name: LocaleName): void {
  localeState.value = name
  if (hasDocument()) {
    // 同步 <html lang>，让浏览器断词、拼写检查、读屏软件跟着切换
    document.documentElement.setAttribute('lang', String(name))
  }
  try {
    localStorage.setItem(STORAGE_KEY, String(name))
  } catch {
    /* ignore */
  }
}

/**
 * 初始化语言：本地存储优先，其次跟随浏览器语言，最后回落 zh-CN。
 * 返回最终生效的语言。
 */
export function initLocale(): LocaleName {
  let saved: string | null = null
  try {
    saved = localStorage.getItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }

  if (saved && registry.has(saved)) {
    setLocale(saved)
    return saved
  }

  const navigatorLang = typeof navigator !== 'undefined' ? navigator.language || '' : ''
  const fallback: LocaleName = navigatorLang.toLowerCase().startsWith('zh')
    ? 'zh-CN'
    : navigatorLang
      ? 'en-US'
      : FALLBACK_LOCALE

  setLocale(fallback)
  return fallback
}

/* ---------- 翻译 ---------- */

const INTERPOLATE_RE = /\{(\w+)\}/g

function mergeMessages(base: LocaleMessages, patch: LocaleMessages): LocaleMessages {
  const output: LocaleMessages = { ...base }
  for (const [key, value] of Object.entries(patch)) {
    const previous = output[key]
    output[key] =
      isPlainObject(value) && isPlainObject(previous)
        ? mergeMessages(previous as LocaleMessages, value as LocaleMessages)
        : value
  }
  return output
}

function resolveMessage(messages: LocaleMessages, path: string): string | undefined {
  let current: unknown = messages
  for (const segment of path.split('.')) {
    if (!isPlainObject(current)) return undefined
    current = (current as Record<string, unknown>)[segment]
  }
  return typeof current === 'string' ? current : undefined
}

function interpolate(template: string, params?: LocaleParams): string {
  if (!params) return template
  const list = Array.isArray(params) ? params : undefined

  return template.replace(INTERPOLATE_RE, (raw, key: string) => {
    const value = list
      ? list[Number(key)]
      : (params as Record<string, string | number>)[key]
    return value === undefined || value === null ? raw : String(value)
  })
}

/**
 * 翻译一个键。
 *
 * 查找顺序：指定语言（默认当前语言）→ zh-CN → en-US → 键名本身。
 * 返回键名本身是为了让漏翻一眼可见，而不是渲染成空白。
 */
export function translate(
  path: string,
  params?: LocaleParams,
  locale?: LocaleName
): string {
  const candidates = new Set<LocaleName>([
    locale ?? localeState.value,
    FALLBACK_LOCALE,
    'en-US',
  ])

  for (const name of candidates) {
    const messages = registry.get(name)
    if (!messages) continue
    const hit = resolveMessage(messages, path)
    if (hit !== undefined) return interpolate(hit, params)
  }

  return path
}

/* ---------- 组合式 API ---------- */

export interface UseLocaleReturn {
  /** 当前生效语言（受 override 影响，响应式） */
  locale: ComputedRef<LocaleName>
  /** 全部已注册语言（响应式，运行时可追加） */
  locales: ComputedRef<LocaleName[]>
  /** 当前语言展示名 */
  label: ComputedRef<string>
  /** 当前语言紧凑名 */
  short: ComputedRef<string>
  /** 切换语言（全局生效并持久化） */
  setLocale: (name: LocaleName) => void
  /** 在 zh-CN / en-US 之间来回切换 */
  toggleLocale: () => void
  /** 翻译函数，在 computed / 模板中使用可自动响应语言切换 */
  t: (path: string, params?: LocaleParams) => string
}

/**
 * 语言相关的响应式封装。
 *
 * 传 `override` 可让某个子树固定在指定语言（不写回全局），
 * 传 `undefined` 时跟随全局语言。
 */
export function useLocale(
  override?: MaybeRefOrGetter<LocaleName | undefined>
): UseLocaleReturn {
  // locales 是注册表的快照，注册新语言包后重新读取即可
  const locales = computed(() => getLocales())

  const activeLocale = computed<LocaleName>(
    () => toValue(override) ?? localeState.value
  )

  const label = computed(() => localeLabel(activeLocale.value))
  const short = computed(() => localeShort(activeLocale.value))

  function t(path: string, params?: LocaleParams): string {
    return translate(path, params, activeLocale.value)
  }

  function toggleLocale(): void {
    const current = String(activeLocale.value)
    const next: LocaleName = current.startsWith('zh') ? 'en-US' : 'zh-CN'
    setLocale(next)
  }

  return {
    locale: activeLocale,
    locales,
    label,
    short,
    setLocale,
    toggleLocale,
    t,
  }
}
