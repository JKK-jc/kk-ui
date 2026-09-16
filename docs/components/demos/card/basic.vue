<script setup lang="ts">
import { KkButton, KkCard } from 'kk-ui'
</script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <KkCard title="基础卡片" style="flex: 1; min-width: 240px"> 卡片正文内容 </KkCard>
    <KkCard title="带操作" subtitle="最近 7 天" style="flex: 1; min-width: 240px">
      <template #extra>
        <KkButton type="text"> 更多 </KkButton>
      </template>
      卡片正文内容
      <template #footer> 更新时间：刚刚 </template>
    </KkCard>
  </div>
</template>
