export type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export type TagSize = 'small' | 'medium' | 'large'

export type TagEffect = 'light' | 'dark' | 'plain'

export interface TagProps {
  type?: TagType
  size?: TagSize
  effect?: TagEffect
  closable?: boolean
  /**
   * 是否使用圆角胶囊样式
   */
  round?: boolean
  /**
   * 是否显示边框
   */
  bordered?: boolean
}

export interface TagSlots {
  default?: () => unknown
  icon?: () => unknown
}

export interface TagEmits {
  close: [e: MouseEvent]
  click: [e: MouseEvent]
}
