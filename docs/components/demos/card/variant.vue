<script setup lang="ts">
import { KkCard } from 'kk-ui'
</script>

<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; width: 100%">
    <KkCard title="always" shadow="always" style="flex: 1; min-width: 200px">
      始终显示阴影
    </KkCard>
    <KkCard title="hover" shadow="hover" hoverable style="flex: 1; min-width: 200px">
      悬停显示阴影
    </KkCard>
    <KkCard title="never" shadow="never" style="flex: 1; min-width: 200px">
      不显示阴影
    </KkCard>
    <KkCard title="loading" loading style="flex: 1; min-width: 200px"> 加载中 </KkCard>
  </div>
</template>
