<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(3)
const size = ref(10)
</script>

<template>
  <KkPagination
    v-model:current-page="current"
    v-model:page-size="size"
    :total="500"
    :page-sizes="[10, 20, 50]"
    layout="prev, pager, next, ->, sizes, jumper, total"
  />
</template>
