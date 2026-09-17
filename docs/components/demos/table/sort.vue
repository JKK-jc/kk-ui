<script setup lang="ts">
import { ref } from 'vue'
import { KkTable, KkTableColumn } from 'kk-ui'

interface Row {
  name: string
  age: number
  city: string
}

const data = ref<Row[]>([
  { name: '张三', age: 30, city: '北京' },
  { name: '李四', age: 20, city: '上海' },
  { name: '王五', age: 25, city: '广州' },
  { name: '赵六', age: 35, city: '深圳' },
])

function sortByCity(row: Row): string {
  return row.city
}
</script>

<template>
  <KkTable :data="data" row-key="name" border>
    <KkTableColumn prop="name" label="姓名" width="120" />
    <KkTableColumn prop="age" label="年龄" width="100" sortable />
    <KkTableColumn
      prop="city"
      label="城市"
      width="120"
      sortable
      :sort-by="sortByCity"
    />
    <KkTableColumn prop="city" label="备注" />
  </KkTable>
</template>
