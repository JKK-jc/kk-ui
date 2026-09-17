<script setup lang="ts">
import { ref } from 'vue'
import { KkSelect } from 'kk-ui'
import type { SelectOption } from 'kk-ui'

/**
 * 远程搜索：`remote` + `remoteMethod` 组合。
 * 未输入关键字时不展示选项，避免一次拉全量数据。
 */
const REPOS: SelectOption[] = [
  { value: 'vuejs/core', label: 'vuejs/core' },
  { value: 'vuejs/vitepress', label: 'vuejs/vitepress' },
  { value: 'vitejs/vite', label: 'vitejs/vite' },
  { value: 'vueuse/vueuse', label: 'vueuse/vueuse' },
  { value: 'vitest-dev/vitest', label: 'vitest-dev/vitest' },
  { value: 'pnpm/pnpm', label: 'pnpm/pnpm' },
]

const value = ref<string | null>(null)
const loading = ref(false)
const options = ref<SelectOption[]>([])

async function remoteMethod(query: string): Promise<SelectOption[]> {
  if (!query) {
    options.value = []
    return []
  }

  loading.value = true
  try {
    // 用定时器模拟接口延迟，真实项目里换成 fetch
    const hit = await new Promise<SelectOption[]>((resolve) => {
      setTimeout(() => {
        resolve(REPOS.filter((item) => item.label?.includes(query)))
      }, 400)
    })
    options.value = hit
    return hit
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="select-remote">
    <KkSelect
      v-model="value"
      :options="options"
      :loading="loading"
      filterable
      remote
      clearable
      :remote-method="remoteMethod"
      placeholder="搜索仓库，如 vue"
    />

    <p class="select-remote__tip">
      输入 <code>v</code> 试试；当前值：<code>{{ value ?? '（空）' }}</code>
    </p>
  </div>
</template>

<style>
.select-remote {
  width: 300px;
}

.select-remote__tip {
  margin: 14px 0 0;
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.7;
}

.select-remote__tip code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
}
</style>
