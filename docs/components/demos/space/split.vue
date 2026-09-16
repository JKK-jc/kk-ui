<script setup lang="ts">
import { KkDivider, KkSpace } from 'kk-ui'
</script>

<template>
  <KkSpace split size="medium">
    <span>首页</span>
    <span>组件</span>
    <span>主题</span>
    <template #split>
      <KkDivider direction="vertical" />
    </template>
  </KkSpace>
</template>
