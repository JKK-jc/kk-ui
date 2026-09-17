<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const active = ref('profile')
</script>

<template>
  <KkTabs v-model="active">
    <KkTabPane name="profile">
      <template #label>
        <span class="demo-tab-icon">
          <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
            <path
              d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5z"
              fill="currentColor"
            />
          </svg>
          用户
        </span>
      </template>
    </KkTabPane>
    <KkTabPane name="security" label="安全"> 安全设置内容 </KkTabPane>
    <KkTabPane name="notify" label="通知"> 通知偏好内容 </KkTabPane>
    <KkTabPane name="billing" label="账单"> 账单与发票内容 </KkTabPane>
  </KkTabs>
</template>

<style>
.demo-tab-icon {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>
