<script setup lang="ts">
import { reactive } from 'vue'
import { KkForm, KkFormItem, KkInput } from 'kk-ui'
import type { FormRules } from 'kk-ui'

const model = reactive({ username: '' })

const rules: FormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 12, message: '长度需为 3-12 个字符', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_]+$/,
      message: '仅支持字母、数字与下划线',
      trigger: 'blur',
    },
  ],
}
</script>

<template>
  <KkForm :model="model" :rules="rules" label-width="80px" style="width: 100%">
    <KkFormItem prop="username" label="用户名">
      <KkInput v-model="model.username" placeholder="3-12 位字母数字下划线" />
    </KkFormItem>
  </KkForm>
</template>
