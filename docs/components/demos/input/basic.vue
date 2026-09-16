<script setup lang="ts">
import { ref } from 'vue'
import { KkInput, KkSpace } from 'kk-ui'

const value = ref('')
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput v-model="value" placeholder="基础输入框" clearable />
    <KkInput placeholder="禁用状态" disabled />
    <KkInput model-value="只读内容" readonly />
  </KkSpace>
</template>
