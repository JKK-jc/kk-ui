<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile, type KkUploadRequestOptions } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])

// 文档站离线演示：用假 Promise 模拟上传，不发起真实网络请求
function fakeRequest(options: KkUploadRequestOptions): Promise<{ url: string }> {
  return new Promise((resolve) => {
    let percent = 0
    const timer = setInterval(() => {
      percent += 20
      options.onProgress({ percent })
      if (percent >= 100) {
        clearInterval(timer)
        resolve({ url: `https://example.com/${options.file?.name ?? 'file'}` })
      }
    }, 120)
  })
}
</script>

<template>
  <KkUpload
    v-model="fileList"
    :http-request="fakeRequest"
    :limit="3"
    accept=".png,.jpg,.jpeg,.pdf"
    tip="支持任意文件，最多 3 个；点击触发选择框"
  />
</template>
