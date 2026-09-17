<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkInput } from 'kk-ui'

const visible = ref(false)
const name = ref('')
const remark = ref('')
const submitting = ref(false)

async function submit(): Promise<void> {
  submitting.value = true
  // 真实项目里这里换成接口请求；抽屉在提交期间保持打开并显示 loading
  await new Promise((resolve) => setTimeout(resolve, 600))
  submitting.value = false
  visible.value = false
  name.value = ''
  remark.value = ''
}

function cancel(): void {
  // 默认 footer 会自己关闭；这里用 #footer 接管，需要手动关闭
  visible.value = false
}
</script>

<template>
  <KkButton type="primary" @click="visible = true"> 填写发布信息 </KkButton>

  <KkDrawer v-model="visible" title="发布信息" size="420px" footer>
    <div class="drawer-footer-demo">
      <KkInput v-model="name" block placeholder="版本号，如 0.3.0" />
      <KkInput v-model="remark" block placeholder="发布说明（可留空）" />
    </div>

    <!-- 自定义底部：可控 loading、可做二次确认 -->
    <template #footer>
      <KkButton :disabled="submitting" @click="cancel"> 取消 </KkButton>
      <KkButton type="primary" :loading="submitting" @click="submit"> 提交 </KkButton>
    </template>
  </KkDrawer>
</template>

<style>
.drawer-footer-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
