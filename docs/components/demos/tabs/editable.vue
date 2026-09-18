<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane, type TabName } from 'kk-ui'

interface TabItem {
  name: string
  label: string
  content: string
}

const tabs = ref<TabItem[]>([
  { name: 'tab1', label: '标签 1', content: '内容 1' },
  { name: 'tab2', label: '标签 2', content: '内容 2' },
  { name: 'tab3', label: '标签 3', content: '内容 3' },
])
const active = ref('tab1')

/** 新标签序号取「现有最大序号 + 1」，因此删空后再新增会重新从 1 开始 */
function nextIndex(): number {
  return (
    tabs.value.reduce((max, tab) => {
      const n = Number(tab.name.replace(/^tab/, ''))
      return Number.isFinite(n) && n > max ? n : max
    }, 0) + 1
  )
}

function onAdd(): void {
  const n = nextIndex()
  const name = `tab${n}`
  tabs.value.push({ name, label: `标签 ${n}`, content: `内容 ${n}` })
  active.value = name
}

/**
 * 关闭只需把面板从列表里移除。
 * 若关的是当前激活项，`KkTabs` 会在内部把激活态切到相邻标签并同步 `v-model`，
 * 使用方不必再自己算「下一个是谁」。
 */
function onRemove(name: TabName): void {
  const idx = tabs.value.findIndex((tab) => tab.name === name)
  if (idx !== -1) tabs.value.splice(idx, 1)
}
</script>

<template>
  <KkTabs v-model="active" editable @tab-add="onAdd" @tab-remove="onRemove">
    <KkTabPane v-for="tab in tabs" :key="tab.name" :name="tab.name" :label="tab.label">
      {{ tab.content }}
    </KkTabPane>
  </KkTabs>
</template>
