<script setup lang="ts">
import { KkInput, KkSpace } from 'kk-ui'
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput size="small" placeholder="small" />
    <KkInput placeholder="medium" />
    <KkInput size="large" placeholder="large" />
    <KkInput invalid error-message="该字段必填" placeholder="错误态" />
    <KkInput block placeholder="块级宽度" />
  </KkSpace>
</template>
