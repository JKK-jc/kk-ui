<script setup lang="ts">
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
} from 'kk-ui'
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
          <div class="nav-item is-active">实时概览</div>
          <div class="nav-item">流量分析</div>
          <div class="nav-item">转化漏斗</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent class="main">
        <h3>实时概览</h3>
        <!-- 内容区内部再嵌套一个横向布局：主区 + 右侧辅助栏 -->
        <KkLayout style="height: auto; gap: 12px; background: transparent">
          <KkLayoutContent class="pane">
            <span class="pane__label">今日访问</span>
            <strong class="pane__value">12,480</strong>
          </KkLayoutContent>

          <KkLayoutSider position="right" :width="150" bordered>
            <div class="aside-pane">
              <span class="pane__label">实时在线</span>
              <strong class="pane__value">328</strong>
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
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
  cursor: pointer;
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
.pane {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-subtle);
}
.aside-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  min-height: 120px;
  background: var(--kk-bg-subtle);
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
