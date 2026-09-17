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
        // 演示用假响应；真实场景此处返回后端给出的访问地址
        resolve({ url: `https://example.com/${options.file?.name ?? 'file'}` })
      }
    }, 100)
  })
}
</script>

<template>
  <KkUpload
    v-model="fileList"
    list-type="picture-card"
    :http-request="fakeRequest"
    accept="image/*"
    :limit="6"
    tip="卡片式图片上传，hover 出现预览 / 删除操作"
  />
</template>
