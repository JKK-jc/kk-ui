/**
 * 图标数据采用 Iconify 的 JSON 结构，因此任何 `@iconify-json/*` 图标集
 * 都可以通过 `addIconSet` 直接注册，无需额外转换。
 */
export interface IconData {
  body: string
  width?: number
  height?: number
  left?: number
  top?: number
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

export interface IconifyAlias {
  parent: string
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

export interface IconifyJSON {
  prefix: string
  icons: Record<string, IconData>
  aliases?: Record<string, IconifyAlias>
  width?: number
  height?: number
  info?: unknown
}

const registry = new Map<string, IconData>()
const setOrder: string[] = []

/**
 * 注册单个图标，`name` 建议使用 `prefix:icon` 形式
 */
export function addIcon(name: string, data: IconData): void {
  registry.set(name, data)
}

/**
 * 注册整个图标集，返回注册的图标数量
 */
export function addIconSet(set: IconifyJSON): number {
  const defaultSize = { width: set.width ?? 24, height: set.height ?? 24 }
  let count = 0

  for (const [name, data] of Object.entries(set.icons)) {
    registry.set(`${set.prefix}:${name}`, { ...defaultSize, ...data })
    count += 1
  }

  if (set.aliases) {
    for (const [name, alias] of Object.entries(set.aliases)) {
      const parent = set.icons[alias.parent]
      if (!parent) continue
      registry.set(`${set.prefix}:${name}`, {
        ...defaultSize,
        ...parent,
        rotate: alias.rotate ?? parent.rotate,
        hFlip: alias.hFlip ?? parent.hFlip,
        vFlip: alias.vFlip ?? parent.vFlip,
      })
      count += 1
    }
  }

  if (!setOrder.includes(set.prefix)) {
    setOrder.push(set.prefix)
  }

  return count
}

/**
 * 解析图标名，支持三种写法：
 * - `lucide:search` 完整名
 * - `search` 按注册顺序在已注册图标集中查找
 * - `search`（已注册过无前缀重名图标时直接命中）
 */
export function resolveIcon(name: string): IconData | undefined {
  if (!name) return undefined

  const direct = registry.get(name)
  if (direct) return direct

  if (!name.includes(':')) {
    for (const prefix of setOrder) {
      const hit = registry.get(`${prefix}:${name}`)
      if (hit) return hit
    }
  }

  return undefined
}

export function hasIcon(name: string): boolean {
  return resolveIcon(name) !== undefined
}

export function getIconNames(): string[] {
  return Array.from(registry.keys())
}

export function clearIcons(): void {
  registry.clear()
  setOrder.length = 0
}

export function toViewBox(data: IconData): string {
  const left = data.left ?? 0
  const top = data.top ?? 0
  const width = data.width ?? 24
  const height = data.height ?? 24
  return `${left} ${top} ${width} ${height}`
}

/**
 * 计算 svg 的 transform，处理 rotate / hFlip / vFlip
 */
export function toTransform(data: IconData): string {
  const transform: string[] = []
  const width = data.width ?? 24
  const height = data.height ?? 24

  if (data.hFlip) {
    transform.push(`translate(${width} 0) scale(-1 1)`)
  }
  if (data.vFlip) {
    transform.push(`translate(0 ${height}) scale(1 -1)`)
  }
  if (data.rotate) {
    transform.push(`rotate(${data.rotate} ${width / 2} ${height / 2})`)
  }

  return transform.join(' ')
}
