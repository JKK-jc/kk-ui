<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkModal } from 'kk-ui'

const visible = ref(false)
const okLoading = ref(false)

function notify(message: string) {
  window.dispatchEvent(new CustomEvent('kk-toast', { detail: message }))
}

function onConfirm() {
  okLoading.value = true
  notify('已确认，正在执行…')
  setTimeout(() => {
    okLoading.value = false
    visible.value = false
    notify('执行完成')
  }, 1200)
}
</script>

<template>
  <KkButton type="primary" @click="visible = true"> 二次确认 </KkButton>
  <KkModal
    v-model="visible"
    title="删除这条记录？"
    subtitle="删除后不可恢复"
    footer
    ok-text="删除"
    :ok-loading="okLoading"
    @confirm="onConfirm"
    @cancel="notify('已取消')"
  >
    <p class="demo-confirm">
      默认底部按钮只抛出 <code>confirm</code> / <code>cancel</code>
      事件，是否关闭弹窗由业务决定 —— 这样异步提交时可以一直保持打开状态。
    </p>
  </KkModal>
</template>

<style>
.demo-confirm {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.demo-confirm code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
