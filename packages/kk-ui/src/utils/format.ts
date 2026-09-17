/**
 * 格式化工具：组件内的展示型转换，不含业务逻辑
 */

const SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

/**
 * 字节数转可读体积：`1536` → `1.5 KB`
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return `0 ${SIZE_UNITS[0]}`

  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    SIZE_UNITS.length - 1
  )
  const value = bytes / 1024 ** index
  // 整数不带小数点，视觉更干净
  const fixed = Number.isInteger(value) ? String(value) : value.toFixed(decimals)

  return `${fixed} ${SIZE_UNITS[index]}`
}

/**
 * 数字补零：`padZero(7, 2)` → `07`
 */
export function padZero(value: number, length = 2): string {
  return String(value).padStart(length, '0')
}

/**
 * 把数字区间展开为数组，页码计算用
 * `range(1, 5)` → `[1,2,3,4,5]`
 */
export function range(start: number, end: number, step = 1): number[] {
  if (step === 0) return []
  const result: number[] = []
  if (step > 0) {
    for (let i = start; i <= end; i += step) result.push(i)
  } else {
    for (let i = start; i >= end; i += step) result.push(i)
  }
  return result
}

/**
 * 数值钳制，`clamp(12, 0, 10)` → `10`
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
