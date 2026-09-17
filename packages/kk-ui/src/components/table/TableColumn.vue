<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, useSlots } from 'vue'
import { useId } from '../../hooks/useId'
import {
  KK_TABLE_CONTEXT_KEY,
  type KkTableColumnMeta,
  type KkTableColumnProps,
} from './types'

defineOptions({ name: 'KkTableColumn', inheritAttrs: false })

const props = withDefaults(defineProps<KkTableColumnProps>(), {
  type: 'default',
  align: 'left',
  fixed: undefined,
  label: '',
  prop: undefined,
  width: undefined,
  minWidth: undefined,
  sortable: undefined,
  sortBy: undefined,
  sortOrders: undefined,
  resizable: false,
  selectable: undefined,
  indexMethod: undefined,
  formatter: undefined,
  className: undefined,
  labelClassName: undefined,
})

const slots = useSlots()
const table = inject(KK_TABLE_CONTEXT_KEY, null)
const id = useId('kk-table-col')

const meta: KkTableColumnMeta = {
  id,
  props,
  slots: {
    default: slots.default as KkTableColumnMeta['slots']['default'],
    header: slots.header as KkTableColumnMeta['slots']['header'],
  },
}

onMounted(() => table?.register(meta))
onBeforeUnmount(() => table?.unregister(id))
</script>

<template>
  <!--
    仅负责向 KkTable 注册列定义（provide / inject），单元格内容由 KkTable 渲染。
    这里保留一个 hidden 占位节点，只为满足 SFC「必须有根节点」的要求，不参与布局。
  -->
  <span hidden aria-hidden="true" />
</template>
