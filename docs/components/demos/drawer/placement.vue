<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkDrawer, KkSpace } from 'kk-ui'
import type { DrawerPlacement } from 'kk-ui'

const visible = ref(false)
const placement = ref<DrawerPlacement>('right')

const PLACEMENTS: { value: DrawerPlacement; label: string }[] = [
  { value: 'right', label: '右侧' },
  { value: 'left', label: '左侧' },
  { value: 'top', label: '顶部' },
  { value: 'bottom', label: '底部' },
]

function openAt(value: DrawerPlacement): void {
  placement.value = value
  visible.value = true
}
</script>

<template>
  <KkSpace>
    <KkButton v-for="item in PLACEMENTS" :key="item.value" @click="openAt(item.value)">
      {{ item.label }}
    </KkButton>
  </KkSpace>

  <KkDrawer
    v-model="visible"
    :placement="placement"
    :title="`从${placement === 'top' || placement === 'bottom' ? '上下' : '左右'}滑出`"
    :size="placement === 'top' || placement === 'bottom' ? '240px' : '360px'"
  >
    <p class="drawer-placement-text">
      <code>placement</code> 决定出现方向：左右方向时 <code>size</code>
      表示宽度，上下方向时表示高度。切换方向后尺寸会自动回到推导值，
      避免上一次拖动调整出的 px 值把抽屉撑出屏幕。
    </p>
  </KkDrawer>
</template>

<style>
.drawer-placement-text {
  margin: 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-md);
  line-height: 1.8;
}

.drawer-placement-text code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
