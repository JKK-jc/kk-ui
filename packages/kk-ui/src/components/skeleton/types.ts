import type { InjectionKey, Ref } from 'vue'

/** 骨架占位形态 */
export type SkeletonVariant =
  'text' | 'title' | 'paragraph' | 'avatar' | 'image' | 'button'

export interface SkeletonProps {
  /**
   * 是否为加载态：true 渲染骨架，false 渲染默认插槽的真实内容。
   * 作为组合骨架（内层不带 loading）的子节点时，会继承外层传入的 loading。
   */
  loading?: boolean
  /** 是否显示流光动画 */
  animated?: boolean
  /** 占位形态，决定默认尺寸与外观 */
  variant?: SkeletonVariant
  /** 单块骨架宽度，数字按 px 处理 */
  width?: string | number
  /** 单块骨架高度，数字按 px 处理 */
  height?: string | number
  /** paragraph 形态的行数，为 0 时回落为 3 行 */
  rows?: number
  /** 逐行宽度覆盖，索引对应行号 */
  rowWidths?: string[]
  /** 是否圆角（avatar/image 默认圆角） */
  round?: boolean
  /** 重复渲染的骨架数量 */
  count?: number
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 占位块粗细档位，`large` 让文字行 / 头像等更饱满，参考 Element Plus */
  thickness?: 'default' | 'large'
}

export interface SkeletonSlots {
  /** 加载完成时展示的真实内容 */
  default?: () => unknown
  /** 自定义骨架外观，完全取代内置形态 */
  template?: () => unknown
}

export interface SkeletonEmits {
  // 纯展示组件，无事件
}

export interface SkeletonInstance {
  // 纯展示组件，无实例方法
}

/** 组合骨架共享的 loading 状态，供内层子骨架继承 */
export interface SkeletonContext {
  loading: Ref<boolean>
}

export const SKELETON_CONTEXT_KEY: InjectionKey<SkeletonContext> = Symbol('kk-skeleton')
