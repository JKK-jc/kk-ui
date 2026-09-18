<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'

interface NavItem {
  key: string
  label: string
  title: string
  desc: string
}

const navItems: NavItem[] = [
  {
    key: 'overview',
    label: '概览',
    title: '概览',
    desc: '这里是页面的主要内容区域，超出高度时内部滚动。点击左侧导航可切换内容。',
  },
  {
    key: 'components',
    label: '组件',
    title: '组件',
    desc: 'Layout 由 Header / Sider / Content / Footer 四个区块组成，可自由组合与嵌套。',
  },
  {
    key: 'theme',
    label: '主题',
    title: '主题',
    desc: '所有区块的颜色都来自语义 token，四套主题下无需额外覆盖即可自适应。',
  },
]

const active = ref('overview')
const current = computed(
  () => navItems.find((item) => item.key === active.value) ?? navItems[0]
)
</script>

<template>
  <KkLayout
    style="
      height: 320px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>KK 控制台</strong>
      </template>
      <template #right>
        <span class="muted">v0.2.0</span>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider :width="180" bordered>
        <div class="nav">
          <button
            v-for="item in navItems"
            :key="item.key"
            type="button"
            class="nav-item"
            :class="{ 'is-active': active === item.key }"
            @click="active = item.key"
          >
            {{ item.label }}
          </button>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <h3>{{ current.title }}</h3>
        <p>{{ current.desc }}</p>
      </KkLayoutContent>
    </KkLayout>

    <KkLayoutFooter bordered>
      <span class="muted">柔光几何 · 设计系统</span>
    </KkLayoutFooter>
  </KkLayout>
</template>

<style scoped>
.muted {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-md);
  text-align: left;
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.nav-item:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-color-primary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
