<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<string | number | null>(null)

const options: SelectOption[] = [
  { value: 'vue', label: 'Vue 3' },
  { value: 'react', label: 'React 18' },
  { value: 'svelte', label: 'Svelte 5' },
  { value: 'solid', label: 'Solid', disabled: true, tip: '暂不支持' },
]

function onSearch(query: string): void {
  // 真实项目里在这里发请求；此处仅演示 search 事件可用
  console.log('search:', query)
}
</script>

<template>
  <div class="select-basic">
    <KkSelect
      v-model="value"
      :options="options"
      filterable
      clearable
      placeholder="请选择技术栈"
      @search="onSearch"
    >
      <!-- 自定义选项渲染：可以拿到原始业务字段 -->
      <template #default="{ option }">
        <span class="select-basic__option">
          <span>{{ option.label }}</span>
          <em v-if="option.tip" class="select-basic__tip">{{ String(option.tip) }}</em>
        </span>
      </template>
    </KkSelect>

    <p class="select-basic__result">
      当前值：<code>{{ value ?? '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-basic {
  width: 280px;
}

.select-basic__option {
  display: flex;
  align-items: center;
  gap: 8px;
}

.select-basic__tip {
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-xs);
  font-style: normal;
}

.select-basic__result {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}

.select-basic__result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
