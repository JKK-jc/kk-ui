<script setup lang="ts">
import { ref } from 'vue'
import { KkTabs, KkTabPane } from 'kk-ui'

const active = ref('order')
</script>

<template>
  <KkTabs v-model="active" type="card">
    <KkTabPane name="order" label="订单"> 订单列表 </KkTabPane>
    <KkTabPane name="refund" label="退款"> 退款记录 </KkTabPane>
    <KkTabPane name="review" label="评价"> 我的评价 </KkTabPane>
  </KkTabs>
</template>
