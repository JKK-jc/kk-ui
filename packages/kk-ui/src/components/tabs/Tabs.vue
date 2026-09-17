<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type CSSProperties,
} from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { useId } from '../../hooks/useId'
import { useLocale } from '../../locale'
import {
  TABS_CONTEXT_KEY,
  type TabName,
  type TabPaneDescriptor,
  type TabsChangePayload,
  type TabsContext,
  type TabsEmits,
  type TabsInstance,
  type TabsProps,
} from './types'

defineOptions({ name: 'KkTabs', inheritAttrs: false })

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: '',
  type: 'line',
  size: 'medium',
  closable: false,
  addable: false,
  editable: false,
  position: 'top',
  stretch: false,
  animated: true,
  justify: 'start',
  beforeLeave: undefined,
})

const emit = defineEmits<TabsEmits>()

const ns = useNamespace('tabs')
const { t } = useLocale()
const baseId = useId('kk-tabs')

/* ---------- 面板登记 ---------- */
const panes = ref<TabPaneDescriptor[]>([])

const isVertical = computed(
  () => props.position === 'left' || props.position === 'right'
)

const paneNames = computed(() => panes.value.map((p) => p.name))

/**
 * 当前激活项：优先用 modelValue（命中面板时），否则回退到第一个面板。
 * 这样父级不传 v-model 时也能自动选中首个标签。
 */
const currentName = computed<TabName>(() => {
  const v = props.modelValue
  const isSet = v !== '' && v !== undefined
  if (isSet && paneNames.value.includes(v)) return v
  return panes.value.length > 0 ? panes.value[0].name : (v as TabName)
})

const isAddable = computed(() => props.addable || props.editable)
const isClosable = computed(() => props.closable || props.editable)

/* ---------- 上下文 ---------- */
const context: TabsContext = {
  currentName,
  registerPane(pane) {
    panes.value = [...panes.value, pane]
  },
  unregisterPane(uid) {
    panes.value = panes.value.filter((p) => p.uid !== uid)
  },
}
provide(TABS_CONTEXT_KEY, context)

/* ---------- 切换 ---------- */
function paneByName(name: TabName): TabPaneDescriptor | undefined {
  return panes.value.find((p) => p.name === name)
}

function isPaneClosable(pane: TabPaneDescriptor): boolean {
  return isClosable.value || pane.closable
}

async function setActive(name: TabName): Promise<void> {
  const pane = paneByName(name)
  if (!pane || pane.disabled) return
  const oldName = currentName.value
  if (name === oldName) return

  if (props.beforeLeave) {
    const allowed = await props.beforeLeave(name, oldName)
    if (allowed === false) return
  }

  emit('update:modelValue', name)
  const payload: TabsChangePayload = { name, oldName }
  emit('change', payload)
  emit('tab-change', payload)

  await nextTick()
  scrollActiveIntoView()
}

function onTabClick(pane: TabPaneDescriptor): void {
  if (pane.disabled) return
  emit('tab-click', pane.name)
  void setActive(pane.name)
}

function removeTab(name: TabName): void {
  const pane = paneByName(name)
  if (!pane || !isPaneClosable(pane) || pane.disabled) return
  emit('tab-remove', name)
}

function addTab(): void {
  if (!isAddable.value) return
  emit('tab-add')
}

/* ---------- 滚动 / 溢出 ---------- */
const navScrollRef = ref<HTMLElement | null>(null)
const navRef = ref<HTMLElement | null>(null)
const navItemRefs = new Map<TabName, HTMLElement>()
const navOffset = ref(0)
const isPrevShown = ref(false)
const isNextShown = ref(false)

const barLength = ref(0)
const barCross = ref(0)
const barOffset = ref(0)

function setNavItemRef(name: TabName, el: unknown): void {
  if (el) navItemRefs.set(name, el as HTMLElement)
  else navItemRefs.delete(name)
}

function scrollActiveIntoView(): void {
  const el = navItemRefs.get(currentName.value)
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }
}

function updateActiveBar(): void {
  const el = navItemRefs.get(currentName.value)
  if (!el) return
  if (isVertical.value) {
    barLength.value = el.offsetHeight
    barCross.value = el.offsetWidth
    barOffset.value = el.offsetTop
  } else {
    barLength.value = el.offsetWidth
    barCross.value = el.offsetHeight
    barOffset.value = el.offsetLeft
  }
}

function checkOverflow(): void {
  const scroll = navScrollRef.value
  if (!scroll) return
  const maxOffset = Math.max(0, scroll.scrollWidth - scroll.clientWidth)
  if (navOffset.value > maxOffset) navOffset.value = maxOffset
  isPrevShown.value = navOffset.value > 0
  isNextShown.value = navOffset.value < maxOffset
}

function scrollPrev(): void {
  const scroll = navScrollRef.value
  const step = scroll?.clientWidth || 200
  navOffset.value = Math.max(0, navOffset.value - step)
  checkOverflow()
}

function scrollNext(): void {
  const scroll = navScrollRef.value
  if (!scroll) return
  const maxOffset = Math.max(0, scroll.scrollWidth - scroll.clientWidth)
  const step = scroll.clientWidth || 200
  navOffset.value = Math.min(maxOffset, navOffset.value + step)
  checkOverflow()
}

function onResize(): void {
  checkOverflow()
  updateActiveBar()
}

/* ---------- 样式推导 ---------- */
const justifyValue = computed(() => {
  switch (props.justify) {
    case 'center':
      return 'center'
    case 'end':
      return 'flex-end'
    case 'space-between':
      return 'space-between'
    case 'space-around':
      return 'space-around'
    default:
      return 'flex-start'
  }
})

const rootStyle = computed<CSSProperties>(() => ({
  ['--kk-tabs-justify' as string]: justifyValue.value,
}))

const navStyle = computed<CSSProperties>(() => ({
  ['--kk-tabs-nav-offset' as string]: `${navOffset.value}px`,
}))

const activeBarStyle = computed<CSSProperties>(() => {
  const isSeg = props.type === 'segment'
  const cross = isSeg ? barCross.value : 2
  if (isVertical.value) {
    return {
      transform: `translateY(${barOffset.value}px)`,
      height: `${barLength.value}px`,
      width: `${cross}px`,
    }
  }
  return {
    transform: `translateX(${barOffset.value}px)`,
    width: `${barLength.value}px`,
    height: `${cross}px`,
  }
})

function itemClasses(pane: TabPaneDescriptor): (string | boolean)[] {
  return [
    ns.e('item'),
    ns.is('active', pane.name === currentName.value),
    ns.is('disabled', pane.disabled),
    ns.is('closable', isPaneClosable(pane)),
  ]
}

const rootClasses = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.m(props.size),
  ns.m(props.position),
  ns.is('stretch', props.stretch),
  ns.is('animated', props.animated),
  ns.is('vertical', isVertical.value),
])

const navListClasses = computed(() => [
  ns.e('nav'),
  ns.is('vertical', isVertical.value),
])

watch(currentName, async () => {
  await nextTick()
  updateActiveBar()
  scrollActiveIntoView()
})

watch(
  panes,
  async () => {
    await nextTick()
    updateActiveBar()
    checkOverflow()
  },
  { deep: false }
)

onMounted(async () => {
  await nextTick()
  updateActiveBar()
  checkOverflow()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

defineExpose<TabsInstance>({
  setActive,
  removeTab,
  addTab,
  currentName,
})
</script>

<template>
  <div :class="rootClasses" :style="rootStyle" v-bind="$attrs">
    <div :class="[ns.e('header'), ns.is('vertical', isVertical)]">
      <div v-if="$slots.prefix" :class="ns.e('prefix')">
        <slot name="prefix" />
      </div>

      <div ref="navScrollRef" :class="ns.e('nav-scroll')">
        <button
          v-if="isPrevShown"
          type="button"
          :class="ns.e('nav-prev')"
          :aria-label="t('pagination.prev')"
          @click="scrollPrev"
        >
          <slot name="nav-prev">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </slot>
        </button>

        <div ref="navRef" :class="navListClasses" role="tablist" :style="navStyle">
          <div
            v-if="props.type !== 'card'"
            :class="ns.e('active-bar')"
            :style="activeBarStyle"
          />
          <div
            v-for="pane in panes"
            :key="pane.uid"
            :ref="(el) => setNavItemRef(pane.name, el)"
            :class="itemClasses(pane)"
            role="tab"
            :aria-selected="pane.name === currentName"
            :aria-disabled="pane.disabled || undefined"
            :aria-controls="`${baseId}-${pane.name}`"
            :tabindex="pane.disabled ? -1 : 0"
            @click="onTabClick(pane)"
          >
            <span :class="ns.e('item-label')">
              <component :is="pane.renderLabel" v-if="pane.hasLabelSlot" />
              <template v-else>{{ pane.label }}</template>
            </span>
            <button
              v-if="isPaneClosable(pane)"
              type="button"
              :class="ns.e('item-close')"
              :aria-label="t('tabs.close', { label: String(pane.label) })"
              @click.stop="removeTab(pane.name)"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                <path
                  d="M5 5L19 19M19 5L5 19"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.4"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <button
          v-if="isNextShown"
          type="button"
          :class="ns.e('nav-next')"
          :aria-label="t('pagination.next')"
          @click="scrollNext"
        >
          <slot name="nav-next">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </slot>
        </button>
      </div>

      <div :class="ns.e('extra')">
        <slot name="extra" />
        <slot name="more" />
        <button
          v-if="isAddable"
          type="button"
          :class="ns.e('add')"
          :aria-label="t('tabs.add')"
          @click="addTab"
        >
          <slot name="add-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </slot>
        </button>
      </div>
    </div>

    <div :class="[ns.e('content'), ns.is('animated', props.animated)]">
      <slot />
    </div>
  </div>
</template>
