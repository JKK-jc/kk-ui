<script setup lang="ts">
import { KkRow, KkCol } from 'kk-ui'
</script>

<template>
  <KkRow :gutter="16">
    <KkCol :span="12" :md="{ span: 8 }">
      <div class="cell">span 12 / md 8</div>
    </KkCol>
    <KkCol :span="12" :md="{ span: 8 }">
      <div class="cell">span 12 / md 8</div>
    </KkCol>
    <KkCol :span="24" :md="{ span: 8 }">
      <div class="cell">span 24 / md 8</div>
    </KkCol>
  </KkRow>

  <KkRow :gutter="[16, 24]" style="margin-top: 24px">
    <KkCol :span="6">
      <div class="cell cell--alt">6</div>
    </KkCol>
    <KkCol :span="6" :offset="6">
      <div class="cell cell--alt">offset 6</div>
    </KkCol>
    <KkCol :span="6">
      <div class="cell cell--alt">6</div>
    </KkCol>
  </KkRow>
</template>

<style scoped>
.cell {
  padding: 16px;
  border-radius: var(--kk-radius-md);
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  text-align: center;
  font-size: var(--kk-font-size-sm);
}
.cell--alt {
  background: var(--kk-bg-hover);
  color: var(--kk-text-secondary);
}
</style>
