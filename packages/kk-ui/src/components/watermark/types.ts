export interface WatermarkFont {
  /** 文字颜色，缺省时跟随主题 `--kk-text-tertiary` */
  color?: string
  /** 字号，默认 16 */
  size?: number
  /** 字体族 */
  family?: string
  /** 字重 */
  weight?: string | number
  /** 字形（normal / italic / oblique） */
  style?: string
}

export interface WatermarkProps {
  /** 水印文字，可为多行（数组） */
  content?: string | string[]
  /** 单个水印内容区宽度，默认 120 */
  width?: number
  /** 单个水印内容区高度，默认 120 */
  height?: number
  /** 旋转角度（度），默认 -22 */
  rotate?: number
  /** 水印之间的间距 [水平, 垂直]，默认 [100, 100] */
  gap?: [number, number]
  /** 整体偏移 [x, y] */
  offset?: [number, number]
  /** 字体配置 */
  font?: WatermarkFont
  /** 图片水印地址，优先级高于 `content` */
  image?: string
  /** 图片宽度（不传则用图片自然尺寸 / width） */
  imageWidth?: number
  /** 图片高度（不传则用图片自然尺寸 / height） */
  imageHeight?: number
  /** 整体不透明度，默认 0.15 */
  opacity?: number
  /** 层级，默认 9 */
  zIndex?: number
  /** 是否交叉（双向）铺排，默认 true */
  cross?: boolean
  /** 是否平铺重复，默认 true */
  repeat?: boolean
  /** 是否继承容器文字颜色（覆盖 font.color） */
  inheritColor?: boolean
  /**
   * 跟随鼠标移动：容器范围内仅展示单个水印并跟随光标定位，
   * 未悬停时隐藏。开启后 `repeat` / `offset` 不再生效。
   */
  moveable?: boolean
}

export interface WatermarkSlots {
  /** 被水印包裹的真实内容 */
  default?: () => unknown
  /** 自定义水印内容（DOM），其文本会取代 `content` 文案绘制到画布上 */
  content?: () => unknown
}

export interface WatermarkEmits {
  // 纯展示组件，无事件
}

export interface WatermarkInstance {
  /** 强制重绘（尺寸或内容变化后可手动调用） */
  redraw: () => void
}
