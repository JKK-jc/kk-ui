<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkSpace } from 'kk-ui'

const visible = ref(false)
const width = ref(0)
const drawerRef = ref<InstanceType<typeof KkDrawer> | null>(null)

function onResize(size: number): void {
  width.value = size
}
</script>

<template>
  <KkSpace>
    <KkButton type="primary" @click="visible = true"> 打开可调整尺寸的抽屉 </KkButton>
    <span class="drawer-resizable-hint">
      当前宽度：{{ width > 0 ? `${width}px` : '未调整' }}
    </span>
  </KkSpace>

  <KkDrawer
    ref="drawerRef"
    v-model="visible"
    title="拖动内侧边缘调整宽度"
    size="360px"
    resizable
    :min-size="280"
    :max-size="640"
    footer
    @resize="onResize"
  >
    <p class="drawer-resizable-text">
      打开 <code>resizable</code> 后，抽屉内侧会出现一条 6px 宽的拖动手柄 （hover
      时高亮）。拖动过程直接写内联宽度，不触发组件重渲染， 松手才抛出
      <code>resize</code> 事件。
    </p>
    <p class="drawer-resizable-text">
      尺寸被限制在 <code>minSize</code> 与 <code>maxSize</code> 之间； 调用实例方法
      <code>reset()</code> 可恢复成 <code>size</code> 推导值。
    </p>
    <template #footer>
      <KkButton @click="drawerRef?.reset()"> 恢复默认宽度 </KkButton>
      <KkButton type="primary" @click="visible = false"> 完成 </KkButton>
    </template>
  </KkDrawer>
</template>

<style>
.drawer-resizable-text {
  margin: 0 0 14px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-resizable-text:last-child {
  margin-bottom: 0;
}

.drawer-resizable-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}

.drawer-resizable-hint {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
