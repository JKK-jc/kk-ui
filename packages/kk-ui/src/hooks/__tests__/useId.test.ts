import { describe, it, expect, afterEach } from 'vitest'
import { resetIdSeed, useId, useIds } from '..'

afterEach(() => {
  resetIdSeed()
})

describe('useId', () => {
  it('生成递增且不重复的 id', () => {
    const a = useId()
    const b = useId()
    expect(a).not.toBe(b)
    expect(a).toMatch(/^kk-id-\d+$/)
  })

  it('支持自定义前缀', () => {
    expect(useId('input')).toMatch(/^input-\d+$/)
  })

  it('useIds 批量生成指定数量', () => {
    const ids = useIds(3)
    expect(ids).toHaveLength(3)
    expect(new Set(ids).size).toBe(3)
  })

  it('useIds 数量为负时返回空数组', () => {
    expect(useIds(-2)).toEqual([])
  })
})
