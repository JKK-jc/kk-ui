<script setup lang="ts">
import { ref } from 'vue'
import { KkPagination } from 'kk-ui'

const current = ref(1)
</script>

<template>
  <KkPagination v-model:current-page="current" :total="200" :page-size="10" />
</template>
