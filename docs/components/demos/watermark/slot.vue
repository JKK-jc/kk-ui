<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
</script>

<template>
  <KkWatermark :rotate="-15" :opacity="0.2">
    <div class="doc">
      <h3>保密文档</h3>
      <p>下方 #content 插槽的文本会取代 content 属性绘制到水印上。</p>
    </div>

    <template #content> 机密 · 仅限内部传阅 </template>
  </KkWatermark>
</template>

<style scoped>
.doc {
  padding: 20px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-container);
  border: 1px solid var(--kk-border-color);
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
