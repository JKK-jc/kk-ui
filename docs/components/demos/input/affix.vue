<script setup lang="ts">
import { ref } from 'vue'
import { KkIcon, KkInput, KkSpace } from 'kk-ui'

const value = ref('')
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkInput v-model="value" placeholder="搜索内容">
      <template #prefix>
        <KkIcon name="lucide:search" size="16" />
      </template>
    </KkInput>
    <KkInput placeholder="金额">
      <template #suffix> 元 </template>
    </KkInput>
    <KkInput placeholder="站点">
      <template #prepend> https:// </template>
    </KkInput>
    <KkInput v-model="value" type="password" show-password placeholder="密码" />
  </KkSpace>
</template>
