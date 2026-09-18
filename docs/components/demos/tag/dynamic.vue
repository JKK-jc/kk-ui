<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { KkTag } from 'kk-ui'

const tags = ref(['设计', '开发', '测试'])
const editing = ref(false)
const draft = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

async function startAdd(): Promise<void> {
  editing.value = true
  await nextTick()
  inputRef.value?.focus()
}

function confirmAdd(): void {
  if (!editing.value) return
  const value = draft.value.trim()
  if (value && !tags.value.includes(value)) tags.value.push(value)
  draft.value = ''
  editing.value = false
}

function cancelAdd(): void {
  draft.value = ''
  editing.value = false
}

function remove(tag: string): void {
  tags.value = tags.value.filter((item) => item !== tag)
}
</script>

<template>
  <div class="tag-dynamic">
    <KkTag v-for="tag in tags" :key="tag" type="primary" closable @close="remove(tag)">
      {{ tag }}
    </KkTag>

    <input
      v-if="editing"
      ref="inputRef"
      v-model="draft"
      class="tag-dynamic__input"
      placeholder="回车确认"
      @keyup.enter="confirmAdd"
      @keyup.esc="cancelAdd"
      @blur="confirmAdd"
    />
    <button v-else type="button" class="tag-dynamic__add" @click="startAdd">
      <span class="tag-dynamic__plus">+</span> 新增标签
    </button>
  </div>
</template>

<style>
.tag-dynamic {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.tag-dynamic__input {
  box-sizing: border-box;
  width: 112px;
  height: 24px;
  padding: 0 8px;
  border: 1px solid var(--kk-color-primary);
  border-radius: var(--kk-radius-sm);
  background: var(--kk-bg-container);
  color: var(--kk-text-primary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  outline: none;
  box-shadow: var(--kk-focus-ring);
}

.tag-dynamic__add {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  height: 24px;
  padding: 0 10px;
  border: 1px dashed var(--kk-border-color-hover);
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  cursor: pointer;
  transition:
    border-color var(--kk-duration-fast) var(--kk-ease-out),
    color var(--kk-duration-fast) var(--kk-ease-out);
}

.tag-dynamic__add:hover {
  border-color: var(--kk-color-primary);
  color: var(--kk-color-primary);
}

.tag-dynamic__plus {
  font-size: 14px;
  line-height: 1;
}
</style>
