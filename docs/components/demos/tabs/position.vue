<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const left = ref('a')
const right = ref('a')
</script>

<template>
  <div class="demo-position">
    <KkTabs v-model="left" position="left" class="demo-position__col">
      <KkTabPane name="a" label="概览">左侧纵向 · 概览</KkTabPane>
      <KkTabPane name="b" label="成员">左侧纵向 · 成员</KkTabPane>
      <KkTabPane name="c" label="设置">左侧纵向 · 设置</KkTabPane>
    </KkTabs>

    <KkTabs v-model="right" position="right" type="segment" class="demo-position__col">
      <KkTabPane name="a" label="消息">右侧纵向 · 消息</KkTabPane>
      <KkTabPane name="b" label="收藏">右侧纵向 · 收藏</KkTabPane>
      <KkTabPane name="c" label="历史">右侧纵向 · 历史</KkTabPane>
    </KkTabs>
  </div>
</template>

<style>
.demo-position {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  width: 100%;
}

.demo-position__col {
  flex: 1;
  min-width: 260px;
  min-height: 180px;
  padding: 12px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-lg);
  background: var(--kk-bg-container);
}
</style>
