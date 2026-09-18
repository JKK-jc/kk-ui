<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'

interface PanelItem {
  key: string
  label: string
  visitors: string
  online: string
}

const items: PanelItem[] = [
  { key: 'realtime', label: '实时概览', visitors: '12,480', online: '328' },
  { key: 'traffic', label: '流量分析', visitors: '86,932', online: '512' },
  { key: 'funnel', label: '转化漏斗', visitors: '4,210', online: '96' },
]

const active = ref('realtime')
const current = computed(
  () => items.find((item) => item.key === active.value) ?? items[0]
)
</script>

<template>
  <KkLayout
    style="
      height: 340px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>数据看板</strong>
      </template>
      <template #right>
        <span class="muted">2026-09-18</span>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider :width="160" bordered>
        <div class="nav">
          <button
            v-for="item in items"
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

      <KkLayoutContent class="main">
        <h3>{{ current.label }}</h3>
        <!-- 内容区内部再嵌套一个横向布局：主区 + 右侧辅助栏 -->
        <KkLayout style="height: 170px; gap: 12px; background: transparent">
          <KkLayoutContent class="pane">
            <span class="pane__label">今日访问</span>
            <strong class="pane__value">{{ current.visitors }}</strong>
          </KkLayoutContent>

          <KkLayoutSider position="right" :width="150" bordered>
            <div class="aside-pane">
              <span class="pane__label">实时在线</span>
              <strong class="pane__value">{{ current.online }}</strong>
            </div>
          </KkLayoutSider>
        </KkLayout>
      </KkLayoutContent>
    </KkLayout>

    <KkLayoutFooter bordered>
      <span class="muted">侧边栏也可置于右侧，适配主内容 + 辅助信息栏的版式</span>
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
  white-space: nowrap;
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
.main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h3 {
  margin: 0;
  color: var(--kk-text-primary);
}
.pane,
.aside-pane {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  box-sizing: border-box;
  height: 100%;
  background: var(--kk-bg-subtle);
}
.pane {
  padding: 16px;
  border-radius: var(--kk-radius-md);
}
.aside-pane {
  align-items: center;
}
.pane__label {
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-sm);
}
.pane__value {
  color: var(--kk-text-primary);
  font-size: 24px;
}
</style>
