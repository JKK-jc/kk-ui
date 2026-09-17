<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
const position = ref({ x: 0, y: 0 })

function onDrag(value: { x: number; y: number }) {
  position.value = value
}
</script>

<template>
  <KkButton @click="visible = true"> 可拖动弹窗 </KkButton>
  <KkModal
    v-model="visible"
    title="拖动我"
    subtitle="按住标题栏拖动，至少保留 56px 在视口内"
    :draggable="true"
    @drag="onDrag"
  >
    <div class="demo-drag">
      <p>当前位移：x {{ position.x.toFixed(0) }}px / y {{ position.y.toFixed(0) }}px</p>
      <p>位移只写进 <code>transform</code>，拖动过程中不会触发组件重渲染。</p>
    </div>
  </KkModal>
</template>

<style>
.demo-drag p {
  margin: 0 0 8px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-drag code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
