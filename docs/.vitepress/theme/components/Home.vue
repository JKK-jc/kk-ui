<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { KkButton, KkIcon } from 'kk-ui'
import HeroVisual from './HeroVisual.vue'

const features = [
  {
    icon: 'lucide:palette',
    title: '多主题系统',
    desc: '4 套内置主题，三层 CSS 变量架构，运行时动态切换，并支持注册自定义主题。',
  },
  {
    icon: 'lucide:code-2',
    title: '完整 TypeScript',
    desc: '全部使用 script setup 与 defineProps 泛型，Props、Events、Slots 类型完整导出。',
  },
  {
    icon: 'lucide:zap',
    title: '按需引入',
    desc: '每个组件独立目录、独立样式入口，构建产物同时提供 ES 与 CJS 格式。',
  },
  {
    icon: 'lucide:sparkles',
    title: '柔光几何设计',
    desc: '双层阴影、柔和焦点环、圆润圆角，让界面更有层次与呼吸感。',
  },
  {
    icon: 'lucide:shield-check',
    title: '无障碍支持',
    desc: '语义化标签、ARIA 属性、键盘可达与可见焦点环，交互状态可辨识。',
  },
  {
    icon: 'lucide:book-open',
    title: '配套文档与测试',
    desc: '每个组件都包含组件、类型、样式、测试、README，交付即完整。',
  },
]

const overview = [
  {
    name: '通用',
    desc: 'Button / Icon',
    count: '2 个组件 · 已完成',
    link: '/components/button',
  },
  {
    name: '布局',
    desc: 'Space / Divider / Card',
    count: '3 个组件 · 已完成',
    link: '/components/space',
  },
  {
    name: '数据展示',
    desc: 'Tag',
    count: '1 个组件 · 已完成',
    link: '/components/tag',
  },
  {
    name: '数据录入',
    desc: 'Input / Form / FormItem',
    count: '3 个组件 · 已完成',
    link: '/components/input',
  },
]

const INSTALL_CMD = 'pnpm add kk-ui'

function notify(message: string) {
  window.dispatchEvent(new CustomEvent('kk-toast', { detail: message }))
}

/**
 * 鼠标跟随：把指针位置写成 CSS 变量，交给样式层做背景光晕、网格视差和 3D 倾斜。
 * 只在 hero 上监听，并用 rAF 节流，避免每次 mousemove 都触发样式计算。
 */
const heroRef = ref<HTMLElement | null>(null)
let rafId = 0

function onPointerMove(event: PointerEvent) {
  if (rafId) return
  const { clientX, clientY } = event
  rafId = requestAnimationFrame(() => {
    rafId = 0
    const el = heroRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    // 归一化到 -0.5 ~ 0.5
    const ratioX = x / rect.width - 0.5
    const ratioY = y / rect.height - 0.5

    el.style.setProperty('--kk-pointer-x', `${x.toFixed(1)}px`)
    el.style.setProperty('--kk-pointer-y', `${y.toFixed(1)}px`)
    el.style.setProperty('--kk-parallax-x', `${(ratioX * -28).toFixed(1)}px`)
    el.style.setProperty('--kk-parallax-y', `${(ratioY * -28).toFixed(1)}px`)
    el.style.setProperty('--kk-tilt-x', `${(ratioX * 22).toFixed(2)}deg`)
    el.style.setProperty('--kk-tilt-y', `${(ratioY * -16).toFixed(2)}deg`)
  })
}

function onPointerLeave() {
  const el = heroRef.value
  if (!el) return
  el.style.setProperty('--kk-tilt-x', '0deg')
  el.style.setProperty('--kk-tilt-y', '0deg')
  el.style.setProperty('--kk-parallax-x', '0px')
  el.style.setProperty('--kk-parallax-y', '0px')
}

onMounted(() => {
  heroRef.value?.addEventListener('pointermove', onPointerMove, { passive: true })
  heroRef.value?.addEventListener('pointerleave', onPointerLeave)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  heroRef.value?.removeEventListener('pointermove', onPointerMove)
  heroRef.value?.removeEventListener('pointerleave', onPointerLeave)
})

async function copyInstall() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(INSTALL_CMD)
    } else {
      const area = document.createElement('textarea')
      area.value = INSTALL_CMD
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    notify('已复制到剪贴板')
  } catch {
    notify('复制失败，请手动复制')
  }
}
</script>

<template>
  <div class="kk-home">
    <section ref="heroRef" class="kk-hero">
      <div class="kk-hero__grid" aria-hidden="true" />
      <div class="kk-hero__spotlight" aria-hidden="true" />
      <div class="kk-hero__content">
        <div class="kk-hero__badge">
          <span>✨</span> 全新 <b>多主题</b> 系统 · 4 套内置主题
        </div>
        <h1 class="kk-hero__title">一套会<span>呼吸</span>的<br />Vue 3 组件库</h1>
        <p class="kk-hero__desc">
          KK UI 以「柔光几何」为设计语言，提供轻量、圆润、有呼吸感的组件体验。 完整
          TypeScript 支持，主题一键切换。
        </p>
        <div class="kk-hero__actions">
          <a :href="withBase('/guide/getting-started')">
            <KkButton type="primary" size="large">
              <template #icon>
                <KkIcon name="lucide:rocket" size="16" />
              </template>
              快速开始
            </KkButton>
          </a>
          <a :href="withBase('/components/')">
            <KkButton size="large">查看组件</KkButton>
          </a>
        </div>
        <div class="kk-install">
          <span><b>$</b> {{ INSTALL_CMD }}</span>
          <button class="kk-install__copy" type="button" @click="copyInstall">
            复制
          </button>
        </div>
      </div>
      <div class="kk-hero__visual">
        <HeroVisual />
      </div>
    </section>

    <section class="kk-section">
      <div class="kk-section__eyebrow">Features</div>
      <h2 class="kk-section__title">为什么选择 KK UI</h2>
      <p class="kk-section__desc">
        在严谨、实用与轻盈之间，KK 用三层 Token 与柔光几何找到了自己的位置。
      </p>
      <div class="kk-grid kk-grid--3">
        <div v-for="item in features" :key="item.title" class="kk-feature">
          <div class="kk-feature__icon">
            <KkIcon :name="item.icon" size="20" />
          </div>
          <div class="kk-feature__title">{{ item.title }}</div>
          <div class="kk-feature__desc">{{ item.desc }}</div>
        </div>
      </div>
    </section>

    <section class="kk-section">
      <div class="kk-section__eyebrow">Roadmap</div>
      <h2 class="kk-section__title">组件总览</h2>
      <p class="kk-section__desc">
        当前 v0.1.0 已完成基础组件层，覆盖通用、布局、数据展示与数据录入四类。
      </p>
      <div class="kk-grid kk-grid--4">
        <a
          v-for="item in overview"
          :key="item.name"
          class="kk-comp-card"
          :href="withBase(item.link)"
        >
          <div class="kk-comp-card__name">{{ item.name }}</div>
          <div class="kk-comp-card__desc">{{ item.desc }}</div>
          <div class="kk-comp-card__count">{{ item.count }}</div>
        </a>
      </div>
    </section>
  </div>
</template>
