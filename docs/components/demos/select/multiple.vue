<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<(string | number)[]>(['css', 'ts'])

const options: SelectOption[] = [
  { value: 'css', label: 'CSS' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'vue', label: 'Vue' },
  { value: 'vite', label: 'Vite' },
  { value: 'vitest', label: 'Vitest' },
  { value: 'scss', label: 'SCSS' },
]
</script>

<template>
  <div class="select-multiple">
    <KkSelect
      v-model="value"
      :options="options"
      multiple
      filterable
      clearable
      select-all
      collapse-tags
      :max-tag-count="3"
      :multiple-limit="5"
      placeholder="请选择技能（最多 5 项）"
    />

    <p class="select-multiple__result">
      已选 {{ value.length }} 项：<code>{{ value.join(', ') || '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-multiple {
  width: 340px;
}

.select-multiple__result {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.select-multiple__result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
