<script setup lang="ts">
import { ref } from 'vue'
import { KkUpload, type KkUploadFile, type KkUploadRequestOptions } from 'kk-ui'

const fileList = ref<KkUploadFile[]>([])

function fakeRequest(options: KkUploadRequestOptions): Promise<{ url: string }> {
  return new Promise((resolve) => {
    let percent = 0
    const timer = setInterval(() => {
      percent += 25
      options.onProgress({ percent })
      if (percent >= 100) {
        clearInterval(timer)
        resolve({ url: `https://example.com/${options.file?.name ?? 'file'}` })
      }
    }, 100)
  })
}
</script>

<template>
  <KkUpload
    v-model="fileList"
    drag
    multiple
    :http-request="fakeRequest"
    accept="image/*"
    tip="把文件拖到虚线区域即可上传，支持多文件"
  />
</template>
