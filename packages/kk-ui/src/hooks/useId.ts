let seed = 0

/**
 * 生成 SSR 安全的唯一 id
 * @param prefix id 前缀，默认 `kk-id`
 */
export function useId(prefix = 'kk-id'): string {
  seed += 1
  return `${prefix}-${seed}`
}

/**
 * 批量生成唯一 id，常用于表单、单选组等多元素场景
 */
export function useIds(count: number, prefix = 'kk-id'): string[] {
  return Array.from({ length: Math.max(0, count) }, () => useId(prefix))
}

export function resetIdSeed(): void {
  seed = 0
}
