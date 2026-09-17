<script setup lang="ts">
import { ref } from 'vue'
import { KkButton } from 'kk-ui'
import { KkSkeleton } from 'kk-ui'

const loading = ref(true)
</script>

<template>
  <KkButton @click="loading = !loading">
    {{ loading ? '加载完成' : '重新加载' }}
  </KkButton>

  <KkSkeleton :loading="loading" style="margin-top: 16px">
    <article class="doc">
      <h3>柔光几何设计语言</h3>
      <p>
        以暮光紫为主色，配合柔和圆角与低饱和中性色，营造会呼吸的界面节奏，
        让信息层级在安静中自然浮现。
      </p>
    </article>

    <template #template>
      <KkSkeleton variant="avatar" />
      <KkSkeleton variant="title" />
      <KkSkeleton :rows="3" />
    </template>
  </KkSkeleton>
</template>

<style scoped>
.doc h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
  font-size: var(--kk-font-size-lg);
}
.doc p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
