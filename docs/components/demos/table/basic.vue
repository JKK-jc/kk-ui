<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  date: string
  name: string
  address: string
}

const data = ref<Row[]>([
  { date: '2024-01-01', name: '张三', address: '北京市海淀区' },
  { date: '2024-01-02', name: '李四', address: '上海市浦东新区' },
  { date: '2024-01-03', name: '王五', address: '广州市天河区' },
])
</script>

<template>
  <KkTable :data="data" row-key="name" border>
    <KkTableColumn prop="date" label="日期" width="140" />
    <KkTableColumn prop="name" label="姓名" width="120">
      <template #default="{ row }">
        <strong>{{ row.name }}</strong>
      </template>
    </KkTableColumn>
    <KkTableColumn prop="address" label="地址" />
  </KkTable>
</template>
