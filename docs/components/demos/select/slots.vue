<script setup lang="ts">
import { ref } from 'vue'
import { KkButton, KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

const value = ref<(string | number)[]>(['fe'])
const options = ref<SelectOption[]>([
  { value: 'fe', label: '前端' },
  { value: 'be', label: '后端' },
])

function addOption(): void {
  const index = options.value.length + 1
  options.value = [
    ...options.value,
    { value: `role-${index}`, label: `自定义角色 ${index}` },
  ]
}
</script>

<template>
  <div class="select-slots">
    <KkSelect
      v-model="value"
      :options="options"
      multiple
      clearable
      block
      placeholder="自定义每一项与空态"
    >
      <!-- 自定义标签：前面加一个小圆点（value 改名为 tagValue，避免遮蔽外层 ref） -->
      <template #tag="{ label, value: tagValue, remove }">
        <span class="select-slots__tag" @click.stop="remove(tagValue)">
          <i class="select-slots__dot" />
          {{ label }}
        </span>
      </template>

      <!-- 面板底部：放一个「新增」入口，把自由度留给业务 -->
      <template #footer>
        <KkButton size="small" type="primary" @click="addOption">
          新增一个角色
        </KkButton>
      </template>

      <template #empty>
        <span class="select-slots__empty">没有匹配的角色</span>
      </template>
    </KkSelect>
  </div>
</template>

<style>
.select-slots {
  width: 100%;
  max-width: 420px;
}

.select-slots__tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.select-slots__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.select-slots__empty {
  display: block;
  padding: 10px 0;
  color: var(--kk-text-tertiary);
  font-size: var(--kk-font-size-sm);
  text-align: center;
}
</style>
