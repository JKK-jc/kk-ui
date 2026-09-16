import { addIconSet, getIconNames, hasIcon, type IconifyJSON } from './registry'

let lucideSet: IconifyJSON | null = null
let lucideLoading: Promise<void> | null = null

function lucideRegistered(): boolean {
  return getIconNames().some((name) => name.startsWith('lucide:'))
}

/**
 * 按需加载 @iconify-json/lucide 图标集。
 *
 * 使用动态 import 保证未安装图标集时不影响组件库本体，
 * 加载失败时静默降级（图标不渲染），由调用方决定是否提示。
 * 若注册表被清空，会基于已缓存的图标集重新注册。
 */
export async function loadLucideIcons(): Promise<void> {
  if (lucideSet && lucideRegistered()) return
  if (lucideLoading) return lucideLoading

  lucideLoading = (async () => {
    try {
      if (lucideSet) {
        addIconSet(lucideSet)
        return
      }
      const mod = (await import('@iconify-json/lucide')) as unknown as {
        icons?: IconifyJSON
        default?: IconifyJSON
      }
      const set = mod.icons ?? mod.default
      if (set) {
        lucideSet = set
        addIconSet(set)
      }
    } catch {
      /* 未安装 @iconify-json/lucide 时静默降级 */
    } finally {
      lucideLoading = null
    }
  })()

  return lucideLoading
}

export function isLucideLoaded(): boolean {
  return lucideSet !== null
}

export function hasLucideIcon(name: string): boolean {
  return hasIcon(name.includes(':') ? name : `lucide:${name}`)
}
