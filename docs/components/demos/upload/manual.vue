<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])
const uploadRef = ref<InstanceType<typeof KkUpload> | null>(null)
const message = ref('')

// 不自动上传：选中后先停留在 ready，待点击「提交」再统一上传
async function beforeUpload(file: KkUploadFile): Promise<boolean> {
  if (!file.raw || !file.raw.type.startsWith('image/')) {
    message.value = `「${file.name}」不是图片，已拦截`
    return false
  }
  if (file.size > 2 * 1024 * 1024) {
    message.value = `「${file.name}」超过 2MB，已拦截`
    return false
  }
  message.value = ''
  return true
}

function onSubmit() {
  uploadRef.value?.submit()
}
</script>

<template>
  <div>
    <KkUpload
      ref="uploadRef"
      v-model="fileList"
      :auto-upload="false"
      :before-upload="beforeUpload"
      accept="image/*"
      tip="选好文件后点击「提交」才开始上传（仅允许图片，≤2MB）"
    />
    <p v-if="message" class="upload-tip">
      {{ message }}
    </p>
    <button class="upload-submit" type="button" @click="onSubmit">提交</button>
  </div>
</template>

<style>
.upload-tip {
  margin: 8px 0 0;
  color: var(--kk-color-danger);
  font-size: var(--kk-font-size-sm);
}

.upload-submit {
  margin-top: 12px;
  height: var(--kk-button-height-md);
  padding: 0 var(--kk-space-5);
  border: 1px solid var(--kk-color-primary);
  border-radius: var(--kk-radius-md);
  background: var(--kk-color-primary);
  color: var(--kk-color-primary-contrast);
  font-size: var(--kk-font-size-md);
  cursor: pointer;
}
</style>
