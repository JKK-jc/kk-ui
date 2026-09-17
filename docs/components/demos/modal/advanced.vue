<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'
import type { ModalInstance } from 'kk-ui'

const visible = ref(false)
const loading = ref(false)
const modalRef = ref<ModalInstance | null>(null)

const paragraphs = [
  '弹窗的 max-height 取「组件 token」与「视口推导值」的较小者，长内容交给主体区域内部滚动，不会把弹窗顶出屏幕。',
  '主体区域带 overscroll-behavior: contain，滚到底时不会把滚动继续传给背后的页面。',
  '首次打开后 DOM 会保留，仅切换可见性，二次打开不重新挂载，省下组件初始化与节点创建的开销。',
  '需要彻底销毁时打开 destroyOnClose，关闭动画结束后节点会被移除。',
  'loading 期间主体区域显示遮罩并屏蔽指针事件，避免在加载中误操作。',
  '通过 ref 可以拿到 open / close / reset，适合在事件回调里程序化控制。',
]

function openWithLoading() {
  loading.value = true
  visible.value = true
  setTimeout(() => (loading.value = false), 1400)
}
</script>

<template>
  <div class="demo-actions">
    <KkButton @click="openWithLoading"> 长内容 + 加载态 </KkButton>
    <KkButton @click="modalRef?.open()"> 用 ref 打开 </KkButton>
  </div>

  <KkModal
    ref="modalRef"
    v-model="visible"
    title="组件说明"
    subtitle="主体区域内部滚动"
    :loading="loading"
    max-height="60vh"
    footer
    @confirm="visible = false"
  >
    <p v-for="(text, index) in paragraphs" :key="index" class="demo-para">
      {{ text }}
    </p>
  </KkModal>
</template>

<style>
.demo-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.demo-para {
  margin: 0 0 12px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.8;
}

.demo-para:last-child {
  margin-bottom: 0;
}
</style>
