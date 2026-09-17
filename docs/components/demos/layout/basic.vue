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
          <div class="nav-item is-active">概览</div>
          <div class="nav-item">组件</div>
          <div class="nav-item">主题</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <h3>概览</h3>
        <p>这里是页面的主要内容区域，超出高度时内部滚动。</p>
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
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
  cursor: pointer;
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
}
</style>
