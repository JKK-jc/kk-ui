export type ContainerSize = 'small' | 'medium' | 'large' | 'full'

export type ContainerPadding = 'none' | 'small' | 'medium' | 'large'

export type ContainerDirection = 'row' | 'column'

export type ContainerAlign = 'start' | 'center' | 'end' | 'stretch'

export type ContainerJustify =
  'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'

export interface ContainerProps {
  /** 预设最大宽度档位，small 640 / medium 960 / large 1200 / full 100% */
  size?: ContainerSize
  /** 自定义最大宽度，优先级高于 `size` */
  maxWidth?: string | number
  /** 最小高度，数字按 px 处理 */
  minHeight?: string | number
  /**
   * 内边距：档位 `none/small/medium/large` 或具体尺寸（如 `'32px'` / `40`）
   */
  padding?: ContainerPadding | string | number
  /** 是否水平居中（两侧留白自动均分） */
  centered?: boolean
  /** flex 子元素间距 */
  gap?: string | number
  /** 主轴方向 */
  direction?: ContainerDirection
  /** 交叉轴对齐方式 */
  align?: ContainerAlign
  /** 主轴对齐方式 */
  justify?: ContainerJustify
  /** 是否允许换行 */
  wrap?: boolean
  /** 是否显示边框 */
  bordered?: boolean
  /** 渲染的标签，默认 `div` */
  tag?: string
  /** 流式：忽略 `size` 限制，宽度撑满父容器且不居中 */
  fluid?: boolean
}

export interface ContainerSlots {
  default?: () => unknown
  /** 顶部区域 */
  header?: () => unknown
  /** 底部区域 */
  footer?: () => unknown
}

export interface ContainerEmits {
  // 纯布局组件，无事件
}

export interface ContainerInstance {
  // 纯布局组件，无实例方法
}
