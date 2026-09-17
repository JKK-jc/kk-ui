<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const left = ref('a')
const right = ref('a')
</script>

<template>
  <div class="demo-position">
    <KkTabs v-model="left" position="left" class="demo-position__col">
      <KkTabPane name="a" label="概览"> 左侧 · 概览 </KkTabPane>
      <KkTabPane name="b" label="成员"> 左侧 · 成员 </KkTabPane>
      <KkTabPane name="c" label="设置"> 左侧 · 设置 </KkTabPane>
    </KkTabs>

    <KkTabs v-model="right" position="right" type="segment" class="demo-position__col">
      <KkTabPane name="a" label="消息"> 右侧 · 消息 </KkTabPane>
      <KkTabPane name="b" label="收藏"> 右侧 · 收藏 </KkTabPane>
      <KkTabPane name="c" label="历史"> 右侧 · 历史 </KkTabPane>
    </KkTabs>
  </div>
</template>

<style>
.demo-position {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.demo-position__col {
  min-height: 160px;
  flex: 1;
  min-width: 240px;
}
</style>
