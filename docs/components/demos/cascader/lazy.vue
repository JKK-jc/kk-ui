<script setup lang="ts">
import { ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption, type CascaderPath } from 'kk-ui'

/** 模拟后端按层级返回子级，实际项目中换成接口请求即可 */
const regions: Record<string, CascaderOption[]> = {
  zhejiang: [
    { value: 'hangzhou', label: '杭州市' },
    { value: 'ningbo', label: '宁波市' },
  ],
  hangzhou: [
    { value: 'xihu', label: '西湖区' },
    { value: 'binjiang', label: '滨江区' },
  ],
  jiangsu: [{ value: 'nanjing', label: '南京市' }],
}

const options: CascaderOption[] = [
  { value: 'zhejiang', label: '浙江省' },
  { value: 'jiangsu', label: '江苏省' },
]

const value = ref<(string | number)[]>([])
const logs = ref<string[]>([])

function loadData(node: CascaderOption, path: CascaderPath): Promise<CascaderOption[]> {
  logs.value = [...logs.value, `加载 ${path.join(' / ')} 的子级`]
  return new Promise((resolve) => {
    setTimeout(() => resolve(regions[String(node.value)] ?? []), 600)
  })
}
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :load-data="loadData"
      :check-strictly="false"
      clearable
      placeholder="点开才会请求子级"
      style="width: 320px"
      @load="({ path }) => (logs = [...logs, `${path.join(' / ')} 加载完成`])"
    />
    <div v-if="logs.length" class="cascader-result">
      <div v-for="(log, index) in logs" :key="index">
        {{ log }}
      </div>
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
  line-height: 1.8;
}
</style>
