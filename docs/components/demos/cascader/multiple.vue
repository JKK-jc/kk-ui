<script setup lang="ts">
import { computed, ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption } from 'kk-ui'

const options: CascaderOption[] = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      { value: 'vue', label: 'Vue' },
      { value: 'react', label: 'React' },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      { value: 'node', label: 'Node.js' },
      { value: 'go', label: 'Go' },
    ],
  },
  {
    value: 'design',
    label: '设计',
    children: [{ value: 'ui', label: '界面设计' }],
  },
]

const value = ref<(string | number)[][]>([
  ['frontend', 'vue'],
  ['design', 'ui'],
])
const showAllLevels = ref(true)
const separator = computed(() => ' / ')
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :show-all-levels="showAllLevels"
      :separator="separator"
      multiple
      clearable
      placeholder="请选择技术栈（可多选）"
      style="width: 420px"
    />
    <div class="cascader-result">
      已选 {{ value.length }} 项，勾选后浮层保持展开，标签可单独删除。
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
