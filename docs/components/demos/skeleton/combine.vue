<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)
</script>

<template>
  <KkButton size="small" @click="loading = !loading"> 切换状态 </KkButton>

  <KkSkeleton :loading="loading" style="margin-top: 16px">
    <div class="profile">
      <div class="avatar">A</div>
      <div class="meta">
        <strong>安琪 · 产品经理</strong>
        <span>负责设计系统演进与组件规范落地</span>
      </div>
    </div>

    <template #template>
      <!-- 内层骨架不带 loading，自动继承外层状态 -->
      <KkSkeleton variant="avatar" />
      <KkSkeleton variant="title" />
      <KkSkeleton :rows="2" />
    </template>
  </KkSkeleton>
</template>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  display: grid;
  place-items: center;
  font-weight: 600;
}
.meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.meta span {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
