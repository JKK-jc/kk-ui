<script setup lang="ts">
import { computed, ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  id: number
  name: string
  score: number
}

const data = ref<Row[]>(
  Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    name: `用户 ${i + 1}`,
    score: 60 + ((i * 7) % 40),
  }))
)

const selected = ref<Row[]>([])
const selectedCount = computed(() => selected.value.length)
</script>

<template>
  <div class="demo-selection">
    <p class="demo-tip">已选 {{ selectedCount }} 项（跨页保留，依赖 rowKey）</p>
    <KkTable
      :data="data"
      row-key="id"
      :selection="selected"
      border
      :pagination="{ pageSize: 10, pageSizes: [10, 20] }"
    >
      <KkTableColumn type="selection" width="60" />
      <KkTableColumn prop="id" label="ID" width="80" />
      <KkTableColumn prop="name" label="姓名" />
      <KkTableColumn prop="score" label="分数" width="100" />
    </KkTable>
  </div>
</template>

<style scoped>
.demo-tip {
  margin: 0 0 12px;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}
</style>
