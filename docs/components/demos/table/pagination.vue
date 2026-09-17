<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  id: number
  name: string
  dept: string
}

const data = ref<Row[]>(
  Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    name: `员工 ${i + 1}`,
    dept: ['研发', '设计', '产品', '运营'][i % 4],
  }))
)
</script>

<template>
  <KkTable
    :data="data"
    row-key="id"
    border
    :pagination="{
      pageSize: 10,
      pageSizes: [10, 20, 50],
      layout: 'prev, pager, next, jumper, sizes, total',
    }"
  >
    <KkTableColumn prop="id" label="ID" width="80" />
    <KkTableColumn prop="name" label="姓名" width="140" />
    <KkTableColumn prop="dept" label="部门" />
  </KkTable>
</template>
