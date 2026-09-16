<script setup lang="ts">
import { reactive } from 'vue'
import { KkForm, KkFormItem, KkInput } from 'kk-ui'

const model = reactive({ name: '' })
</script>

<template>
  <KkForm :model="model" label-position="top" style="width: 100%">
    <KkFormItem prop="name" label="名称" required>
      <KkInput v-model="model.name" placeholder="标签在顶部" />
    </KkFormItem>
  </KkForm>
</template>
