<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane, type TabName } from 'kk-ui'

interface TabItem {
  name: string
  label: string
  content: string
}

const tabs = ref<TabItem[]>([
  { name: 'tab1', label: '标签一', content: '内容一' },
  { name: 'tab2', label: '标签二', content: '内容二' },
  { name: 'tab3', label: '标签三', content: '内容三' },
])
const active = ref('tab1')
let seed = 3

function onAdd(): void {
  seed += 1
  const name = `tab${seed}`
  tabs.value.push({ name, label: `标签${seed}`, content: `内容${seed}` })
  active.value = name
}

function onRemove(name: TabName): void {
  const idx = tabs.value.findIndex((t) => t.name === name)
  if (idx === -1) return
  tabs.value.splice(idx, 1)
  if (active.value === name) {
    const next = tabs.value[idx] ?? tabs.value[idx - 1]
    active.value = next ? next.name : ''
  }
}
</script>

<template>
  <KkTabs v-model="active" editable @tab-add="onAdd" @tab-remove="onRemove">
    <KkTabPane v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label">
      {{ tab.content }}
    </KkTabPane>
  </KkTabs>
</template>
