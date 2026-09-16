<script setup lang="ts">
import { reactive, ref } from 'vue'
import { KkButton, KkForm, KkFormItem, KkInput, KkSpace } from 'kk-ui'
import type { FormExpose, FormRules } from 'kk-ui'

const formRef = ref<FormExpose>()
const model = reactive({ name: '', email: '' })
const result = ref('')

const rules: FormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
  ],
}

async function submit() {
  const valid = await formRef.value?.validate()
  result.value = valid ? '校验通过' : '校验未通过'
}

function reset() {
  formRef.value?.resetFields()
  result.value = ''
}
</script>

<template>
  <div style="width: 100%">
    <KkForm ref="formRef" :model="model" :rules="rules" label-width="72px">
      <KkFormItem prop="name" label="名称">
        <KkInput v-model="model.name" placeholder="请输入名称" clearable />
      </KkFormItem>
      <KkFormItem prop="email" label="邮箱">
        <KkInput v-model="model.email" placeholder="请输入邮箱" />
      </KkFormItem>
      <KkFormItem>
        <KkSpace>
          <KkButton type="primary" native-type="submit" @click="submit">
            提交
          </KkButton>
          <KkButton @click="reset"> 重置 </KkButton>
        </KkSpace>
      </KkFormItem>
    </KkForm>
    <p v-if="result" style="color: var(--kk-text-secondary); font-size: 13px">
      {{ result }}
    </p>
  </div>
</template>
