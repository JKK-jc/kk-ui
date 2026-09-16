import type { IconData } from '../../icons/registry'

export type IconSize = 'small' | 'medium' | 'large' | number | string

export interface IconProps {
  /**
   * 图标名，支持 `lucide:search` 或已注册集合中的简写 `search`
   */
  name: string
  /**
   * 尺寸，数字按 px 处理；`small` / `medium` / `large` 映射到字号 token；
   * 也可直接传 `1.5em` 等 CSS 长度。默认 `var(--kk-font-size-lg)`
   */
  size?: IconSize
  /**
   * 颜色，默认继承 `currentColor`
   */
  color?: string
  /**
   * 是否旋转（loading 类图标常用）
   */
  spin?: boolean
}

export type { IconData }
