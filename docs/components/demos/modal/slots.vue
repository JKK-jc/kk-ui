<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkIcon, KkModal, KkTag } from 'kk-ui'

const visible = ref(false)
</script>

<template>
  <KkButton @click="visible = true"> 完全自定义 </KkButton>
  <KkModal v-model="visible" :show-close="false" bordered>
    <template #header>
      <div class="demo-head">
        <KkIcon name="lucide:wand-sparkles" size="18" />
        <span>自定义头部</span>
        <KkTag type="primary" size="small"> Beta </KkTag>
      </div>
    </template>

    <p class="demo-slot-body">
      头部、底部、关闭按钮都开放了插槽，默认样式只负责留白与分割线，
      布局完全可以自己接。
    </p>

    <template #footer>
      <div class="demo-foot">
        <KkButton size="small" @click="visible = false"> 稍后再说 </KkButton>
        <KkButton size="small" type="primary" @click="visible = false"> 好的 </KkButton>
      </div>
    </template>
  </KkModal>
</template>

<style>
.demo-head {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--kk-text-primary);
  font-weight: 600;
}

.demo-slot-body {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-foot {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}
</style>
