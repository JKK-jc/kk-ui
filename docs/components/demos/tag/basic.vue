<script setup lang="ts">
import { ref } from 'vue'
import { KkTag } from 'kk-ui'

const tags = ref(['设计', '开发', '测试'])
</script>

<template>
  <KkTag
    v-for="tag in tags"
    :key="tag"
    type="primary"
    closable
    @close="tags = tags.filter((t) => t !== tag)"
  >
    {{ tag }}
  </KkTag>
</template>
