<script setup lang="ts">
import { KkContainer } from 'kk-ui'

const sizes = ['small', 'medium', 'large'] as const
</script>

<template>
  <div class="switch">
    <span>选择宽度档位：</span>
    <code v-for="s in sizes" :key="s">{{ s }}</code>
  </div>

  <KkContainer size="medium" padding="large" bordered style="margin-top: 12px">
    <h3>发布流程看板</h3>
    <p>
      把主内容限制在 960px 并居中，长文阅读时两侧留白更舒适， 也更易于在宽屏上聚焦。
    </p>
  </KkContainer>
</template>

<style scoped>
.switch {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--kk-text-secondary);
}
.switch code {
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
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
