<script setup lang="ts">
import { KkDivider } from 'kk-ui'
</script>

<template>
  <div style="width: 100%">
    <p>第一段内容</p>
    <KkDivider />
    <p>第二段内容</p>
    <KkDivider>分组标题</KkDivider>
    <p>第三段内容</p>
    <KkDivider content-position="left" border-style="dashed"> 左侧标题 </KkDivider>
    <p>第四段内容</p>
  </div>
</template>
