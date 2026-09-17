<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
</script>

<template>
  <KkButton type="primary" @click="visible = true"> 打开弹窗 </KkButton>
  <KkModal v-model="visible" title="发布新版本" subtitle="v0.2.0 · 预计影响 1 个包">
    <div class="demo-text">
      <p>
        确认后将构建产物并推送到 npm，当前分支为
        <code>main</code>。发布过程不可中断，完成后会同步生成 CHANGELOG。
      </p>
    </div>
  </KkModal>
</template>

<style>
.demo-text p {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.7;
}

.demo-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
