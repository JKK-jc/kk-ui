<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  ref,
  useSlots,
  watch,
  type CSSProperties,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useId } from '../../hooks/useId'
import { KkButton } from '../button'
import { lockScroll, nextZIndex } from './manager'
import { useModalDrag } from './useDrag'
import type { ModalCloseReason, ModalEmits, ModalProps, ModalSize } from './types'

defineOptions({ name: 'KkModal', inheritAttrs: false })

const props = withDefaults(defineProps<ModalProps>(), {
  modelValue: false,
  title: '',
  subtitle: '',
  size: 'medium',
  center: false,
  draggable: false,
  dragHandle: 'header',
  dragBounds: 'viewport',
  resetOnClose: true,
  mask: true,
  maskClosable: true,
  closeOnEsc: true,
  showClose: true,
  destroyOnClose: false,
  lockScroll: true,
  appendTo: 'body',
  footer: false,
  okText: '确定',
  cancelText: '取消',
  okLoading: false,
  bordered: true,
  disabled: false,
  loading: false,
  ariaLabel: '',
})

const emit = defineEmits<ModalEmits>()

const SIZE_WIDTH: Record<ModalSize, string> = {
  small: '420px',
  medium: '560px',
  large: '760px',
  full: '92vw',
}

/** 焦点陷阱里可聚焦的元素 */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

const slots = useSlots()
const ns = useNamespace('modal')
const titleId = useId('kk-modal-title')

const dialogRef = ref<HTMLElement | null>(null)

/**
 * `mounted` 控制是否渲染，`visible` 控制是否显示：
 * 首次打开后保留 DOM 仅切换 `v-show`，二次打开不重新挂载、不重跑组件初始化，
 * 对内容较重的弹窗能省下明显的构建成本；需要彻底销毁时用 `destroyOnClose`。
 */
const mounted = ref(false)
const visible = ref(false)
/** 未显式传 zIndex 时按打开顺序分配，保证多弹窗叠加次序正确 */
const innerZIndex = ref(0)

let releaseScroll: (() => void) | null = null
let lastActiveElement: HTMLElement | null = null
let destroyTimer: ReturnType<typeof setTimeout> | undefined

/**
 * `destroyOnClose` 的兜底销毁延时。
 *
 * 正常路径是出场动画播完后（after-leave）销毁；但在「浏览器把标签页切到后台」
 * 或测试环境（jsdom 不派发 transitionend）里过渡钩子不一定回调，
 * 因此加一道定时兜底，保证 `destroyOnClose` 的语义始终成立。
 */
const DESTROY_FALLBACK_MS = 400

const drag = useModalDrag({
  target: dialogRef,
  enabled: () => props.draggable && !props.disabled,
  bounds: () => props.dragBounds,
  onStart: () => emit('drag-start', { ...drag.position.value }),
  onMove: (position) => emit('drag', { ...position }),
  onEnd: (position) => emit('drag-end', { ...position }),
})

const hasHeader = computed(
  () =>
    Boolean(slots.header) ||
    Boolean(slots.title) ||
    Boolean(props.title) ||
    Boolean(props.subtitle) ||
    props.showClose
)
const hasFooter = computed(() => Boolean(slots.footer) || props.footer)
const hasTitle = computed(() => Boolean(slots.title) || Boolean(props.title))

const mergedZIndex = computed(() => props.zIndex ?? innerZIndex.value)

const overlayClasses = computed(() => [ns.is('center', props.center)])
const overlayStyle = computed(() => {
  const style: CSSProperties = { zIndex: mergedZIndex.value }
  const top = toSize(props.top)
  // 顶部留白做成局部变量，弹窗 max-height 的推导能复用它
  if (top) (style as Record<string, string>)['--kk-modal-top'] = top
  return style
})

const dialogClasses = computed(() => [
  ns.b(),
  ns.is('draggable', props.draggable),
  ns.is('drag-modal', props.draggable && props.dragHandle === 'modal'),
  ns.is('dragging', drag.dragging.value),
  ns.is('disabled', props.disabled),
  ns.is('loading', props.loading),
  ns.is('bordered', props.bordered),
])

const dialogStyle = computed(() => {
  const style: CSSProperties = {}
  style.width = toSize(props.width) ?? SIZE_WIDTH[props.size]
  const height = toSize(props.height)
  if (height) style.height = height
  const maxHeight = toSize(props.maxHeight)
  if (maxHeight) (style as Record<string, string>)['--kk-modal-max-height'] = maxHeight
  return style
})

function toSize(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined
  return typeof value === 'number' ? `${value}px` : value
}

/* ---------- 开关 ---------- */

function enter(): void {
  clearDestroyTimer()
  // 位移归零放在「显示之前」：此刻节点仍是 display:none，
  // 归零不会看到回弹；也因此不必依赖出场动画的钩子
  if (props.resetOnClose) drag.reset()

  lastActiveElement = document.activeElement as HTMLElement | null
  visible.value = true

  if (props.lockScroll) releaseScroll = lockScroll()
  document.addEventListener('keydown', onKeydown, true)
  emit('open')
  nextTick(() => dialogRef.value?.focus())
}

function onBeforeOpen(): void {
  if (props.zIndex === undefined) innerZIndex.value = nextZIndex()

  const alreadyMounted = mounted.value
  mounted.value = true

  if (alreadyMounted) {
    enter()
    return
  }

  // 首次打开：先让节点以 display:none 进 DOM，下一帧再显示，
  // 否则 <Transition> 判定为初次渲染，不会播放入场动画
  nextTick(enter)
}

function onBeforeClose(): void {
  if (!mounted.value) return

  visible.value = false
  document.removeEventListener('keydown', onKeydown, true)
  releaseScroll?.()
  releaseScroll = null
  restoreFocus()

  if (props.destroyOnClose) scheduleDestroy()
}

function clearDestroyTimer(): void {
  if (destroyTimer) clearTimeout(destroyTimer)
  destroyTimer = undefined
}

function scheduleDestroy(): void {
  clearDestroyTimer()
  destroyTimer = setTimeout(() => {
    destroyTimer = undefined
    mounted.value = false
  }, DESTROY_FALLBACK_MS)
}

/** 主动打开，同样会触发 `update:modelValue` */
function open(): void {
  emit('update:modelValue', true)
}

/** 主动关闭，可指定关闭来源 */
function close(reason: ModalCloseReason = 'close'): void {
  emit('close', reason)
  emit('update:modelValue', false)
}

/** 用户操作触发的关闭：disabled 时一律拦下 */
function requestClose(reason: ModalCloseReason): void {
  if (props.disabled) return
  close(reason)
}

function onAfterLeave(): void {
  emit('closed')
  if (props.destroyOnClose) {
    clearDestroyTimer()
    mounted.value = false
  }
}

/* ---------- 交互 ---------- */

function onMaskClick(): void {
  if (!props.maskClosable) return
  requestClose('mask')
}

function onHeaderPointerDown(event: PointerEvent): void {
  if (props.dragHandle !== 'header') return
  drag.onPointerDown(event)
}

function onDialogPointerDown(event: PointerEvent): void {
  if (props.dragHandle !== 'modal') return
  drag.onPointerDown(event)
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && props.closeOnEsc) {
    event.stopPropagation()
    requestClose('esc')
    return
  }
  if (event.key === 'Tab') trapFocus(event)
}

/** 焦点陷阱：Tab 在弹窗内循环，不让焦点跑回背后的页面 */
function trapFocus(event: KeyboardEvent): void {
  const el = dialogRef.value
  if (!el) return

  const items = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
  const active = document.activeElement

  if (items.length === 0) {
    event.preventDefault()
    el.focus()
    return
  }

  const first = items[0]
  const last = items[items.length - 1]

  if (event.shiftKey && (active === first || active === el)) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

function restoreFocus(): void {
  const el = lastActiveElement
  lastActiveElement = null
  if (el && document.contains(el)) el.focus?.()
}

watch(
  () => props.modelValue,
  (value) => {
    if (value) onBeforeOpen()
    else onBeforeClose()
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown, true)
  releaseScroll?.()
  releaseScroll = null
  clearDestroyTimer()
})

defineExpose({ open, close, reset: drag.reset })
</script>

<template>
  <Teleport v-if="mounted" :to="appendTo">
    <Transition
      name="kk-modal"
      @after-enter="emit('opened')"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="visible"
        :class="[ns.e('overlay'), overlayClasses]"
        :style="overlayStyle"
        @click.self="onMaskClick"
      >
        <div
          ref="dialogRef"
          v-bind="$attrs"
          :class="dialogClasses"
          :style="dialogStyle"
          role="dialog"
          aria-modal="true"
          :aria-label="ariaLabel || undefined"
          :aria-labelledby="hasTitle ? titleId : undefined"
          tabindex="-1"
          @pointerdown="onDialogPointerDown"
        >
          <header
            v-if="hasHeader"
            :class="ns.e('header')"
            @pointerdown="onHeaderPointerDown"
          >
            <div :class="ns.e('titles')">
              <slot name="header">
                <div v-if="hasTitle" :id="titleId" :class="ns.e('title')">
                  <slot name="title">
                    {{ title }}
                  </slot>
                </div>
                <div v-if="subtitle" :class="ns.e('subtitle')">
                  {{ subtitle }}
                </div>
              </slot>
            </div>

            <button
              v-if="showClose"
              :class="ns.e('close')"
              type="button"
              aria-label="关闭"
              @click="requestClose('close')"
            >
              <slot name="close">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path
                    d="M5 5L19 19M19 5L5 19"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  />
                </svg>
              </slot>
            </button>
          </header>

          <div :class="ns.e('body')">
            <slot />
            <div v-if="loading" :class="ns.e('loading')" aria-hidden="true">
              <span :class="ns.e('spinner')" />
            </div>
          </div>

          <footer v-if="hasFooter" :class="ns.e('footer')">
            <slot name="footer">
              <KkButton :disabled="disabled" @click="emit('cancel')">
                {{ cancelText }}
              </KkButton>
              <KkButton
                type="primary"
                :loading="okLoading"
                :disabled="disabled"
                @click="emit('confirm')"
              >
                {{ okText }}
              </KkButton>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
