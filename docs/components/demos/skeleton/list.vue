<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)

const articles = [
  { title: '栅格系统的 8 点基准', desc: '以 8px 为节奏单位，让间距形成可预期的层级。' },
  { title: '圆角的语义', desc: '不同圆角半径对应不同亲密程度，而非随意取值。' },
  { title: '低饱和中性色', desc: '用灰阶建立纵深，让品牌色成为唯一焦点。' },
]
</script>

<template>
  <KkButton size="small" @click="loading = !loading">
    {{ loading ? '加载完成' : '重新加载' }}
  </KkButton>

  <div class="list" style="margin-top: 16px">
    <KkSkeleton v-if="loading" :rows="3" />

    <template v-else>
      <div v-for="item in articles" :key="item.title" class="card">
        <h4>{{ item.title }}</h4>
        <p>{{ item.desc }}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.card {
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
}
.card h4 {
  margin: 0 0 6px;
  color: var(--kk-text-primary);
}
.card p {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
