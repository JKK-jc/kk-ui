<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  KkButton,
  KkCard,
  KkDivider,
  KkForm,
  KkFormItem,
  KkIcon,
  KkInput,
  KkSpace,
  KkTag,
  setTheme,
} from 'kk-ui'
import type { FormExpose, FormRules } from 'kk-ui'

const themes = ['light', 'dark', 'soft', 'cyber'] as const

const formRef = ref<FormExpose>()
const model = reactive({ name: '', email: '' })
const rules: FormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
  ],
}

const result = ref('')

async function submit() {
  const valid = await formRef.value?.validate()
  result.value = valid ? '校验通过，可以提交' : '校验未通过，请检查表单'
}

function reset() {
  formRef.value?.resetFields()
  result.value = ''
}
</script>

<template>
  <div class="page">
    <header class="page__header">
      <h1>KK UI Playground</h1>
      <KkSpace>
        <KkButton
          v-for="t in themes"
          :key="t"
          type="default"
          size="small"
          @click="setTheme(t)"
        >
          {{ t }}
        </KkButton>
      </KkSpace>
    </header>

    <KkCard title="按钮" subtitle="type / size / 状态">
      <KkSpace wrap>
        <KkButton type="primary"> Primary </KkButton>
        <KkButton>Default</KkButton>
        <KkButton type="success"> Success </KkButton>
        <KkButton type="warning"> Warning </KkButton>
        <KkButton type="danger"> Danger </KkButton>
        <KkButton type="text"> Text </KkButton>
      </KkSpace>
      <KkDivider />
      <KkSpace wrap>
        <KkButton type="primary" size="small"> Small </KkButton>
        <KkButton type="primary"> Medium </KkButton>
        <KkButton type="primary" size="large"> Large </KkButton>
      </KkSpace>
      <KkDivider />
      <KkSpace wrap>
        <KkButton type="primary" loading> Loading </KkButton>
        <KkButton type="primary" disabled> Disabled </KkButton>
        <KkButton type="primary">
          <template #icon>
            <KkIcon name="lucide:search" size="16" />
          </template>
          搜索
        </KkButton>
      </KkSpace>
      <KkDivider />
      <KkButton type="primary" block> Block </KkButton>
    </KkCard>

    <KkCard title="图标" subtitle="Iconify 图标集">
      <KkSpace size="large">
        <KkIcon name="lucide:home" />
        <KkIcon name="lucide:heart" size="24" color="#EF4444" />
        <KkIcon name="lucide:loader" spin />
        <KkIcon name="lucide:settings" size="large" />
      </KkSpace>
    </KkCard>

    <KkCard title="标签与分割线">
      <KkSpace wrap>
        <KkTag type="primary"> 主要 </KkTag>
        <KkTag type="success" effect="dark"> 已完成 </KkTag>
        <KkTag type="warning" effect="plain"> 待处理 </KkTag>
        <KkTag type="danger" closable> 可关闭 </KkTag>
        <KkTag round bordered> 胶囊 </KkTag>
      </KkSpace>
      <KkDivider>分组</KkDivider>
      <KkSpace split size="medium">
        <span>首页</span>
        <span>组件</span>
        <span>主题</span>
      </KkSpace>
    </KkCard>

    <KkCard title="输入框" subtitle="前后缀 / 清空 / 密码">
      <KkSpace direction="vertical" size="medium" fill>
        <KkInput v-model="model.name" placeholder="基础输入" clearable />
        <KkInput placeholder="带前缀">
          <template #prefix>
            <KkIcon name="lucide:search" size="16" />
          </template>
        </KkInput>
        <KkInput show-password placeholder="密码输入" />
        <KkInput invalid error-message="该字段必填" placeholder="错误态" />
      </KkSpace>
    </KkCard>

    <KkCard title="表单" subtitle="校验 / 提交 / 重置">
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
      <p v-if="result" class="page__result">
        {{ result }}
      </p>
    </KkCard>
  </div>
</template>

<style>
body {
  margin: 0;
  background: var(--kk-bg-page);
  color: var(--kk-text-primary);
  font-family: var(--kk-font-sans);
  transition: background var(--kk-duration-base) var(--kk-ease-out);
}

.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 880px;
  padding: 32px;
  margin: 0 auto;
}

.page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.page__header h1 {
  margin: 0;
  font-size: 28px;
}

.page__result {
  margin: 16px 0 0;
  color: var(--kk-text-secondary);
  font-size: 13px;
}
</style>
