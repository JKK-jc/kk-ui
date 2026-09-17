<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
const size = ref(10)
</script>

<template>
  <KkPagination
    v-model:current-page="current"
    v-model:page-size="size"
    :total="200"
    :page-sizes="[10, 20, 50, 100]"
    background
    layout="prev, pager, next, jumper, sizes, total"
  />
</template>
