<script setup lang="ts">
import { KkButton, KkIcon } from 'kk-ui'
</script>

<template>
  <KkButton type="primary">
    <template #icon>
      <KkIcon name="lucide:search" size="16" />
    </template>
    搜索
  </KkButton>
  <KkButton type="default">
    <template #icon>
      <KkIcon name="lucide:download" size="16" />
    </template>
    下载
  </KkButton>
</template>
