<script setup lang="ts">
import { KkWatermark } from 'kk-ui'
</script>

<template>
  <KkWatermark content="KK UI 内部资料" moveable :rotate="-22" :opacity="0.35">
    <div class="doc">
      <h3>跟随鼠标的水印</h3>
      <p>
        开启 <code>moveable</code> 后，容器范围内只展示单个水印并跟随光标移动，
        未悬停时自动隐藏，适合重点区域（如详情、合同预览）的低干扰标识。
      </p>
      <p>在该区域内移动鼠标即可看到水印跟随效果。</p>
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
