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
import { useLocale } from '../../locale'
import { addUnit, clamp } from '../../utils'
import { KkButton } from '../button'
// 层级分配与 body 滚动锁是浮层通用能力，直接复用 Modal 的实现，避免两套引用计数打架
import { lockScroll, nextZIndex } from '../modal/manager'
import type {
  DrawerCloseReason,
  DrawerEmits,
  DrawerPlacement,
  DrawerProps,
} from './types'

defineOptions({ name: 'KkDrawer', inheritAttrs: false })

const props = withDefaults(defineProps<DrawerProps>(), {
  modelValue: false,
  title: '',
  subtitle: '',
  placement: 'right',
  size: '30%',
  resizable: false,
  minSize: 200,
  maxSize: 0,
  mask: true,
  maskClosable: true,
  closeOnEsc: true,
  showClose: true,
  destroyOnClose: false,
  lockScroll: true,
  appendTo: 'body',
  footer: false,
  okText: '',
  cancelText: '',
  okLoading: false,
  bordered: true,
  disabled: false,
  loading: false,
  ariaLabel: '',
})

const emit = defineEmits<DrawerEmits>()

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

const DESTROY_FALLBACK_MS = 400

const slots = useSlots()
const ns = useNamespace('drawer')
const titleId = useId('kk-drawer-title')
const { t } = useLocale()

const okText = computed(() => props.okText || t('common.confirm'))
const cancelText = computed(() => props.cancelText || t('common.cancel'))

const drawerRef = ref<HTMLElement | null>(null)

const mounted = ref(false)
const visible = ref(false)
const innerZIndex = ref(0)

/** 拖动调整后的尺寸（px）；为 0 表示尚未调整，走 `size` 推导值 */
const resizedSize = ref(0)
const resizing = ref(false)

let releaseScroll: (() => void) | null = null
let lastActiveElement: HTMLElement | null = null
let destroyTimer: ReturnType<typeof setTimeout> | undefined
let resizeStart = 0
let resizeStartClient = 0

const isVertical = computed(
  () => props.placement === 'top' || props.placement === 'bottom'
)
const isReverse = computed(
  () => props.placement === 'left' || props.placement === 'top'
)

const hasTitle = computed(() => Boolean(slots.title) || Boolean(props.title))
const hasHeader = computed(
  () =>
    Boolean(slots.header) ||
    hasTitle.value ||
    Boolean(props.subtitle) ||
    props.showClose
)
const hasFooter = computed(() => Boolean(slots.footer) || props.footer)
const mergedZIndex = computed(() => props.zIndex ?? innerZIndex.value)

const drawerClasses = computed(() => [
  ns.b(),
  ns.m(props.placement),
  ns.is('resizable', props.resizable),
  ns.is('resizing', resizing.value),
  ns.is('disabled', props.disabled),
  ns.is('loading', props.loading),
  ns.is('bordered', props.bordered),
])

const drawerStyle = computed(() => {
  const style: CSSProperties = { zIndex: mergedZIndex.value }
  // 拖动过就以 px 为准，否则回到 size / width / height 推导
  const explicit = isVertical.value ? props.height : props.width
  const size =
    resizedSize.value > 0
      ? `${resizedSize.value}px`
      : (addUnit(explicit) ?? addUnit(props.size))
  if (size) {
    if (isVertical.value) style.height = size
    else style.width = size
  }
  return style
})

/* ---------- 开关 ---------- */

function enter(): void {
  clearDestroyTimer()
  lastActiveElement = document.activeElement as HTMLElement | null
  visible.value = true

  if (props.lockScroll) releaseScroll = lockScroll()
  document.addEventListener('keydown', onKeydown, true)
  emit('open')
  nextTick(() => drawerRef.value?.focus())
}

function onBeforeOpen(): void {
  if (props.zIndex === undefined) innerZIndex.value = nextZIndex()

  const alreadyMounted = mounted.value
  mounted.value = true

  if (alreadyMounted) {
    enter()
    return
  }
  // 首帧挂载时先保持隐藏，下一帧再显示，Transition 才会播入场动画
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

function open(): void {
  emit('update:modelValue', true)
}

function close(reason: DrawerCloseReason = 'close'): void {
  emit('close', reason)
  emit('update:modelValue', false)
}

function requestClose(reason: DrawerCloseReason): void {
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

/**
 * 默认底部「取消」：先抛 `cancel` 再关闭抽屉。
 * 与 KkModal 保持一致——默认按钮只抛事件会让用户点了没反应。
 * 需要「只抛事件不关闭」时用 `#footer` 插槽自行渲染按钮。
 */
function onCancel(): void {
  emit('cancel')
  requestClose('cancel')
}

/* ---------- 交互 ---------- */

function onMaskClick(): void {
  if (!props.maskClosable) return
  requestClose('mask')
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && props.closeOnEsc) {
    event.stopPropagation()
    requestClose('esc')
    return
  }
  if (event.key === 'Tab') trapFocus(event)
}

function trapFocus(event: KeyboardEvent): void {
  const el = drawerRef.value
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

/* ---------- 拖动调整尺寸 ---------- */

/** 拖动方向：左侧抽屉向内拖是「变小」，因此反向系数为 -1 */
const RESIZE_DIRECTION: Record<DrawerPlacement, number> = {
  right: -1,
  left: 1,
  bottom: -1,
  top: 1,
}

function onResizeStart(event: PointerEvent): void {
  if (!props.resizable || props.disabled) return
  const el = drawerRef.value
  if (!el) return

  event.preventDefault()
  resizing.value = true
  resizeStart = el.getBoundingClientRect()[isVertical.value ? 'height' : 'width']
  resizeStartClient = isVertical.value ? event.clientY : event.clientX

  const handle = event.currentTarget as HTMLElement
  // jsdom 未实现指针捕获，捕获失败不影响拖动逻辑（事件仍会冒泡到 handle）
  try {
    handle.setPointerCapture?.(event.pointerId)
  } catch {
    /* ignore */
  }
  handle.addEventListener('pointermove', onResizeMove)
  handle.addEventListener('pointerup', onResizeEnd)
  handle.addEventListener('pointercancel', onResizeEnd)
}

function onResizeMove(event: PointerEvent): void {
  if (!resizing.value) return

  const delta = (isVertical.value ? event.clientY : event.clientX) - resizeStartClient
  const next = resizeStart + delta * RESIZE_DIRECTION[props.placement]

  const viewport = window.innerHeight || window.innerWidth || 0
  const max = props.maxSize > 0 ? props.maxSize : viewport
  const min = Math.min(props.minSize, max)

  resizedSize.value = clamp(Math.round(next), min, max)
}

function onResizeEnd(event: PointerEvent): void {
  if (!resizing.value) return
  resizing.value = false

  const handle = event.currentTarget as HTMLElement
  try {
    handle.releasePointerCapture?.(event.pointerId)
  } catch {
    /* ignore */
  }
  handle.removeEventListener('pointermove', onResizeMove)
  handle.removeEventListener('pointerup', onResizeEnd)
  handle.removeEventListener('pointercancel', onResizeEnd)

  emit('resize', resizedSize.value)
}

/** 恢复为 `size` 推导值 */
function reset(): void {
  resizedSize.value = 0
}

watch(
  () => props.modelValue,
  (value) => {
    if (value) onBeforeOpen()
    else onBeforeClose()
  },
  { immediate: true }
)

// 方向变化后原先的 px 尺寸可能超出视口，回到推导值更安全
watch(
  () => props.placement,
  () => {
    resizedSize.value = 0
  }
)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown, true)
  releaseScroll?.()
  releaseScroll = null
  clearDestroyTimer()
})

defineExpose({ open, close, reset })
</script>

<template>
  <Teleport v-if="mounted" :to="appendTo">
    <Transition
      name="kk-drawer"
      @after-enter="emit('opened')"
      @after-leave="onAfterLeave"
    >
      <div
        v-show="visible"
        :class="ns.e('overlay')"
        :style="{ zIndex: mergedZIndex }"
        @click.self="onMaskClick"
      >
        <div
          ref="drawerRef"
          v-bind="$attrs"
          :class="drawerClasses"
          :style="drawerStyle"
          role="dialog"
          aria-modal="true"
          :aria-label="ariaLabel || undefined"
          :aria-labelledby="hasTitle ? titleId : undefined"
          tabindex="-1"
        >
          <header v-if="hasHeader" :class="ns.e('header')">
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
              :aria-label="t('drawer.close')"
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
              <KkButton :disabled="disabled" @click="onCancel">
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

          <span
            v-if="resizable"
            :class="[
              ns.e('resizer'),
              ns.is('vertical', isVertical),
              ns.is('reverse', isReverse),
            ]"
            role="separator"
            aria-orientation="vertical"
            :aria-label="t('drawer.resize')"
            @pointerdown="onResizeStart"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
