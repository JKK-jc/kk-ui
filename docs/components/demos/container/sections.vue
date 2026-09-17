<script setup lang="ts">
import { KkContainer } from 'kk-ui'
</script>

<template>
  <KkContainer direction="column" padding="medium" bordered>
    <template #header>
      <div class="bar">
        <strong>周报 · 第 38 期</strong>
        <span class="tag">已归档</span>
      </div>
    </template>

    <div class="body">
      <p>
        本周完成设计 token 重构，新增 4 套主题下统一的圆角与间距变量，
        组件层不再出现硬编码尺寸。
      </p>
    </div>

    <template #footer>
      <div class="bar bar--footer">
        <span>共 12 条改动</span>
        <span>2026-09-17</span>
      </div>
    </template>
  </KkContainer>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--kk-text-primary);
}
.bar--footer {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
.tag {
  padding: 2px 8px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-hover);
  color: var(--kk-text-secondary);
  font-size: 12px;
}
.body p {
  margin: 12px 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
