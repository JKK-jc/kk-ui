<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
</script>

<template>
  <KkWatermark content="KK UI 内部资料" :rotate="-22">
    <div class="doc">
      <h3>年度设计复盘</h3>
      <p>
        本季度我们完成了组件库从 0 到 1 的搭建，统一了 4 套主题下的视觉语言。
        下一步将聚焦无障碍与性能预算。
      </p>
      <p>
        水印以 0.15 不透明度覆盖在内容上，且 `pointer-events: none`，
        不影响正文的选择与复制。
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
  margin: 0 0 10px;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
