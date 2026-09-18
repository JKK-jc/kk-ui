<script setup lang="ts">
import { ref } from 'vue'
import { KkContainer } from 'kk-ui'

type Size = 'small' | 'medium' | 'large' | 'full'
type Padding = 'none' | 'small' | 'medium' | 'large'

const sizes: { key: Size; label: string; hint: string }[] = [
  { key: 'small', label: 'Small', hint: '640' },
  { key: 'medium', label: 'Medium', hint: '960' },
  { key: 'large', label: 'Large', hint: '1200' },
  { key: 'full', label: 'Full', hint: '100%' },
]

const paddings: Padding[] = ['none', 'small', 'medium', 'large']

const size = ref<Size>('medium')
const padding = ref<Padding>('large')
const bordered = ref(true)
</script>

<template>
  <div class="bar">
    <span class="bar__label">宽度档位</span>
    <div class="bar__group">
      <button
        v-for="s in sizes"
        :key="s.key"
        type="button"
        class="bar__btn"
        :class="{ 'is-active': size === s.key }"
        @click="size = s.key"
      >
        {{ s.label }}
        <em>{{ s.hint }}</em>
      </button>
    </div>
  </div>

  <div class="bar">
    <span class="bar__label">内边距</span>
    <div class="bar__group">
      <button
        v-for="p in paddings"
        :key="p"
        type="button"
        class="bar__btn"
        :class="{ 'is-active': padding === p }"
        @click="padding = p"
      >
        {{ p }}
      </button>
    </div>
    <label class="bar__check">
      <input v-model="bordered" type="checkbox" />
      显示边框
    </label>
  </div>

  <KkContainer
    :size="size"
    :padding="padding"
    :bordered="bordered"
    style="margin-top: 12px"
  >
    <h3>发布流程看板</h3>
    <p>
      切换上方档位即可实时改变最大宽度与内边距。容器把主内容限制在预设宽度并居中，
      长文阅读时两侧留白更舒适，也更易于在宽屏上聚焦。
    </p>
  </KkContainer>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--kk-text-secondary);
}
.bar__label {
  font-size: var(--kk-font-size-sm);
  color: var(--kk-text-tertiary);
}
.bar__group {
  display: inline-flex;
  padding: 2px;
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-subtle);
  gap: 2px;
}
.bar__btn {
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: 3px 12px;
  border: none;
  border-radius: var(--kk-radius-full);
  background: transparent;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  cursor: pointer;
  transition:
    background var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}
.bar__btn em {
  font-style: normal;
  font-size: 11px;
  color: var(--kk-text-tertiary);
}
.bar__btn:hover {
  color: var(--kk-color-primary);
}
.bar__btn.is-active {
  background: var(--kk-bg-container);
  color: var(--kk-color-primary);
  box-shadow: var(--kk-shadow-sm);
}
.bar__check {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  font-size: var(--kk-font-size-sm);
  cursor: pointer;
}
h3 {
  margin: 0 0 8px;
  color: var(--kk-text-primary);
}
p {
  margin: 0;
  color: var(--kk-text-secondary);
  line-height: 1.7;
}
</style>
