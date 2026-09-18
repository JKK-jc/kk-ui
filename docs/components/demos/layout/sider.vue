<script setup lang="ts">
import { ref } from 'vue'
import { KkLayout, KkLayoutHeader, KkLayoutSider, KkLayoutContent } from 'kk-ui'
import { KkButton } from 'kk-ui'

const collapsed = ref(false)
const navItems = ['指南', '组件', '主题']
const active = ref('指南')
</script>

<template>
  <KkLayout
    style="
      height: 300px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>文档站</strong>
      </template>
      <template #right>
        <KkButton size="small" @click="collapsed = !collapsed">
          {{ collapsed ? '展开侧栏' : '收起侧栏' }}
        </KkButton>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider
        v-model:collapsed="collapsed"
        :width="200"
        :collapsed-width="56"
        collapsible
        bordered
      >
        <template #logo>
          <span class="logo">{{ collapsed ? 'K' : 'KK UI' }}</span>
        </template>
        <div class="nav">
          <button
            v-for="item in navItems"
            :key="item"
            type="button"
            class="nav-item"
            :class="{ 'is-active': active === item }"
            :title="item"
            @click="active = item"
          >
            <span class="nav-dot" />
            <span v-show="!collapsed" class="nav-text">{{ item }}</span>
          </button>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <p>
          当前选中：<strong>{{ active }}</strong> 。侧边栏收起后宽度收窄为
          {{ collapsed ? 56 : 200 }}px，点击导航可切换内容。
        </p>
      </KkLayoutContent>
    </KkLayout>
  </KkLayout>
</template>

<style scoped>
.logo {
  font-weight: 700;
  color: var(--kk-color-primary);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 8px;
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
.nav-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}
.nav-text {
  overflow: hidden;
  white-space: nowrap;
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
