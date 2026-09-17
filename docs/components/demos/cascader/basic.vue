<script setup lang="ts">
import { ref } from 'vue'
import { KkSpace } from 'kk-ui'
import { KkCascader, type CascaderOption } from 'kk-ui'

const options: CascaderOption[] = [
  {
    value: 'zhejiang',
    label: '浙江省',
    children: [
      {
        value: 'hangzhou',
        label: '杭州市',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'binjiang', label: '滨江区' },
        ],
      },
      { value: 'ningbo', label: '宁波市' },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏省',
    children: [
      {
        value: 'nanjing',
        label: '南京市',
        children: [{ value: 'jiangning', label: '江宁区' }],
      },
    ],
  },
  { value: 'guangdong', label: '广东省', disabled: true },
]

const value = ref<(string | number)[]>([])
</script>

<template>
  <KkSpace direction="vertical" size="medium" fill style="width: 100%">
    <KkCascader
      v-model="value"
      :options="options"
      :check-strictly="false"
      clearable
      placeholder="请选择省 / 市 / 区"
      style="width: 320px"
    />
    <div class="cascader-result">
      emitPath 默认开启，拿到的是完整路径：<code>{{ JSON.stringify(value) }}</code>
    </div>
  </KkSpace>
</template>

<style>
.cascader-result {
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-sm);
}

.cascader-result code {
  padding: 1px 6px;
  border-radius: 5px;
  background: var(--kk-color-primary-soft);
  color: var(--kk-color-primary);
  font-family: var(--kk-font-mono);
  font-size: 12px;
}
</style>
