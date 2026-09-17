<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
</script>

<template>
  <KkWatermark
    image="https://placehold.co/48x48/5b4fe9/ffffff?text=KK"
    :image-width="48"
    :image-height="48"
    :gap="[120, 120]"
    :opacity="0.25"
  >
    <div class="doc">
      <h3>对外发布稿</h3>
      <p>
        使用图片水印时，`image` 优先级高于 `content`；
        若图片加载失败则静默跳过，不会阻塞页面渲染。
      </p>
    </div>
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
