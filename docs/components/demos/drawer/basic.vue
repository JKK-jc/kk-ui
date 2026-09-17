<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer } from 'kk-ui'

const visible = ref(false)
</script>

<template>
  <KkButton type="primary" @click="visible = true"> 打开抽屉 </KkButton>

  <KkDrawer
    v-model="visible"
    title="发布配置"
    subtitle="右侧滑出，内容较长时主体区域内部滚动"
    size="420px"
    footer
  >
    <p class="drawer-basic-text">
      抽屉从屏幕右侧滑出，不打断当前页面上下文，适合承载表单、详情、设置这一类
      「需要来回对照主页面」的内容。
    </p>
    <p class="drawer-basic-text">
      宽度默认是视口宽度的 30%，也可以像这里一样写死 <code>420px</code>； 传入数字则按
      px 处理。
    </p>
    <p class="drawer-basic-text">
      底部操作区由 <code>footer</code> 打开：<strong>取消</strong>会关闭抽屉，
      <strong>确定</strong>只抛出 <code>confirm</code> 事件，方便接异步提交。
    </p>
  </KkDrawer>
</template>

<style>
.drawer-basic-text {
  margin: 0 0 14px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-basic-text:last-child {
  margin-bottom: 0;
}

.drawer-basic-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
