<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { KkButton, KkIcon, useLocale } from 'kk-ui'
import HeroVisual from './HeroVisual.vue'
import PointerField from './PointerField.vue'

const { t } = useLocale()

/** 图标 + 文案键，标题与描述从语言包按当前语言取，切换语言即时生效 */
const features = [
  { icon: 'lucide:palette', key: 'theme' },
  { icon: 'lucide:code-2', key: 'ts' },
  { icon: 'lucide:zap', key: 'tree' },
  { icon: 'lucide:sparkles', key: 'design' },
  { icon: 'lucide:shield-check', key: 'a11y' },
  { icon: 'lucide:book-open', key: 'doc' },
]

const overview = [
  { key: 'general', desc: 'Button / Icon', count: 2, link: '/components/button' },
  {
    key: 'layout',
    desc: 'Layout / Container / Space / Divider / Card',
    count: 5,
    link: '/components/layout',
  },
  { key: 'nav', desc: 'Tabs', count: 1, link: '/components/tabs' },
  {
    key: 'data',
    desc: 'Tag / Table / Pagination / Watermark',
    count: 4,
    link: '/components/table',
  },
  {
    key: 'input',
    desc: 'Input / Select / Cascader / Upload / Form',
    count: 6,
    link: '/components/input',
  },
  {
    key: 'feedback',
    desc: 'Modal / Drawer / Skeleton',
    count: 3,
    link: '/components/modal',
  },
].map((item) => item as { key: string; desc: string; count: number; link: string })

const installCmd = 'pnpm add kk-ui'

const badge = computed(() => t('docs.home.badge'))
const heroTitlePrefix = computed(() => t('docs.home.heroTitlePrefix'))
const heroTitleAccent = computed(() => t('docs.home.heroTitleAccent'))
const heroTitleSuffix = computed(() => t('docs.home.heroTitleSuffix'))

function notify(message: string) {
  window.dispatchEvent(new CustomEvent('kk-toast', { detail: message }))
}

/**
 * 全页面鼠标跟随：把指针位置写成 CSS 变量，样式层与 Canvas 层各自消费。
 *
 * - `--kk-pointer-x / y`：指针在「整页容器」坐标系下的位置（含滚动偏移），
 *   供 ::before 的径向遮罩定位，所以横向纵向都能覆盖整页；
 * - `--kk-pointer-rx / ry`：按视口归一化到 -0.5 ~ 0.5，让主视觉、粒子层
 *   各自乘不同振幅做视差，不必在 JS 里为每个元素算一遍。
 *
 * 每次 mousemove 只做一次赋值，且用 rAF 合并同一帧内的重复事件。
 */
const homeRef = ref<HTMLElement | null>(null)
let rafId = 0

function onPointerMove(event: PointerEvent) {
  if (rafId) return
  const { clientX, clientY } = event

  rafId = requestAnimationFrame(() => {
    rafId = 0
    const el = homeRef.value
    if (!el) return

    const rect = el.getBoundingClientRect()
    el.style.setProperty('--kk-pointer-x', `${(clientX - rect.left).toFixed(1)}px`)
    el.style.setProperty('--kk-pointer-y', `${(clientY - rect.top).toFixed(1)}px`)
    el.style.setProperty(
      '--kk-pointer-rx',
      (clientX / window.innerWidth - 0.5).toFixed(3)
    )
    el.style.setProperty(
      '--kk-pointer-ry',
      (clientY / window.innerHeight - 0.5).toFixed(3)
    )
  })
}

function onPointerLeave() {
  rafId = 0
  const el = homeRef.value
  if (!el) return
  el.style.setProperty('--kk-pointer-rx', '0')
  el.style.setProperty('--kk-pointer-ry', '0')
}

onMounted(() => {
  homeRef.value?.addEventListener('pointermove', onPointerMove, { passive: true })
  homeRef.value?.addEventListener('pointerleave', onPointerLeave)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  homeRef.value?.removeEventListener('pointermove', onPointerMove)
  homeRef.value?.removeEventListener('pointerleave', onPointerLeave)
})

async function copyInstall() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(installCmd)
    } else {
      const area = document.createElement('textarea')
      area.value = installCmd
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    notify(t('docs.home.copied'))
  } catch {
    notify(t('docs.home.copyFail'))
  }
}
</script>

<template>
  <div ref="homeRef" class="kk-home">
    <PointerField />

    <section class="kk-hero">
      <div class="kk-hero__content">
        <div class="kk-hero__badge"><span>✨</span> {{ badge }}</div>
        <h1 class="kk-hero__title">
          {{ heroTitlePrefix }}<span>{{ heroTitleAccent }}</span
          >{{ heroTitleSuffix }}
        </h1>
        <p class="kk-hero__desc">{{ t('docs.home.heroDesc') }}</p>
        <div class="kk-hero__actions">
          <a :href="withBase('/guide/getting-started')">
            <KkButton type="primary" size="large">
              <template #icon>
                <KkIcon name="lucide:rocket" size="16" />
              </template>
              {{ t('docs.home.start') }}
            </KkButton>
          </a>
          <a :href="withBase('/components/')">
            <KkButton size="large">{{ t('docs.home.browse') }}</KkButton>
          </a>
        </div>
        <div class="kk-install">
          <span><b>$</b> {{ installCmd }}</span>
          <button class="kk-install__copy" type="button" @click="copyInstall">
            {{ t('docs.home.copy') }}
          </button>
        </div>
      </div>
      <div class="kk-hero__visual">
        <HeroVisual />
      </div>
    </section>

    <section class="kk-section">
      <div class="kk-section__eyebrow">{{ t('docs.home.featuresEyebrow') }}</div>
      <h2 class="kk-section__title">{{ t('docs.home.featuresTitle') }}</h2>
      <p class="kk-section__desc">{{ t('docs.home.featuresDesc') }}</p>
      <div class="kk-grid kk-grid--3">
        <div v-for="item in features" :key="item.key" class="kk-feature">
          <div class="kk-feature__icon">
            <KkIcon :name="item.icon" size="20" />
          </div>
          <div class="kk-feature__title">
            {{ t(`docs.home.features.${item.key}.title`) }}
          </div>
          <div class="kk-feature__desc">
            {{ t(`docs.home.features.${item.key}.desc`) }}
          </div>
        </div>
      </div>
    </section>

    <section class="kk-section">
      <div class="kk-section__eyebrow">{{ t('docs.home.overviewEyebrow') }}</div>
      <h2 class="kk-section__title">{{ t('docs.home.overviewTitle') }}</h2>
      <p class="kk-section__desc">{{ t('docs.home.overviewDesc') }}</p>
      <div class="kk-grid kk-grid--auto">
        <a
          v-for="item in overview"
          :key="item.key"
          class="kk-comp-card"
          :href="withBase(item.link)"
        >
          <div class="kk-comp-card__name">{{ t(`docs.home.groups.${item.key}`) }}</div>
          <div class="kk-comp-card__desc">{{ item.desc }}</div>
          <div class="kk-comp-card__count">
            {{ t('docs.home.count', { count: item.count }) }}
          </div>
        </a>
      </div>
    </section>
  </div>
</template>
