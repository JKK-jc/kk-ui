<script setup lang="ts">
import { ref } from 'vue'
import { KkLayout, KkLayoutHeader, KkLayoutSider, KkLayoutContent } from 'kk-ui'
import { KkButton } from 'kk-ui'

const collapsed = ref(false)
</script>

<template>
  <KkLayout
    style="
      height: 300px;
      border: 1px solid var(--kk-border-color);
      border-radius: var(--kk-radius-lg);
      overflow: hidden;
    "
  >
    <KkLayoutHeader bordered>
      <template #left>
        <strong>文档站</strong>
      </template>
      <template #right>
        <KkButton size="small" @click="collapsed = !collapsed">
          {{ collapsed ? '展开侧栏' : '收起侧栏' }}
        </KkButton>
      </template>
    </KkLayoutHeader>

    <KkLayout>
      <KkLayoutSider
        v-model:collapsed="collapsed"
        :width="200"
        :collapsed-width="56"
        collapsible
        bordered
      >
        <template #logo>
          <span class="logo">{{ collapsed ? 'K' : 'KK UI' }}</span>
        </template>
        <div class="nav">
          <div class="nav-item is-active">指南</div>
          <div class="nav-item">组件</div>
          <div class="nav-item">主题</div>
        </div>
      </KkLayoutSider>

      <KkLayoutContent>
        <p>侧边栏收起后宽度收窄为 {{ collapsed ? 56 : 200 }}px，触发器位于底部。</p>
      </KkLayoutContent>
    </KkLayout>
  </KkLayout>
</template>

<style scoped>
.logo {
  font-weight: 700;
  color: var(--kk-color-primary);
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  padding: 8px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
}
.nav-item.is-active {
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
}
</style>
