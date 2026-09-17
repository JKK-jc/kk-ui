import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { mount } from '@vue/test-utils'
import KkTable from '../Table.vue'
import KkTableColumn from '../TableColumn.vue'

interface Row {
  id: number
  name: string
  age: number
}

const data: Row[] = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 20 },
  { id: 3, name: 'Carol', age: 25 },
]

const bigData: Row[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `User${i + 1}`,
  age: 20 + (i % 10),
}))

function col(props: Record<string, unknown>, slots?: Record<string, unknown>) {
  return h(KkTableColumn, props as never, slots as never)
}

async function mountTable(
  props: Record<string, unknown>,
  cols: ReturnType<typeof h>[],
  slots: Record<string, unknown> = {}
) {
  const wrapper = mount(KkTable, {
    props: props as never,
    slots: { default: () => cols, ...slots },
  })
  await wrapper.vm.$nextTick()
  await wrapper.vm.$nextTick()
  return wrapper
}

describe('KkTable', () => {
  it('渲染：行列与文本内容', async () => {
    const wrapper = await mountTable({ data }, [
      col({ prop: 'name', label: 'Name' }),
      col({ prop: 'age', label: 'Age' }),
    ])
    expect(wrapper.findAll('tbody tr').length).toBe(3)
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('30')
  })

  it('自定义列插槽：#default 渲染单元格', async () => {
    const wrapper = await mountTable({ data }, [
      col(
        { prop: 'name', label: 'Name' },
        {
          default: (scope: { row: Row }) =>
            h('span', { class: 'cell-name' }, scope.row.name),
        }
      ),
    ])
    expect(wrapper.find('.cell-name').exists()).toBe(true)
    expect(wrapper.find('.cell-name').text()).toBe('Alice')
  })

  it('多选：表头全选 emits selection-change（全部行）', async () => {
    const wrapper = await mountTable({ data, rowKey: 'id' }, [
      col({ type: 'selection' }),
      col({ prop: 'name', label: 'Name' }),
    ])
    await wrapper.find('thead .kk-table__checkbox').setValue(true)
    const payload = wrapper.emitted('selection-change')?.[0]?.[0] as Row[]
    expect(payload.length).toBe(3)
  })

  it('多选：单选切换', async () => {
    const wrapper = await mountTable({ data, rowKey: 'id' }, [
      col({ type: 'selection' }),
      col({ prop: 'name', label: 'Name' }),
    ])
    await wrapper.findAll('tbody .kk-table__checkbox')[0].setValue(true)
    const payload = wrapper.emitted('selection-change')?.[0]?.[0] as Row[]
    expect(payload.length).toBe(1)
    expect(payload[0].name).toBe('Alice')
  })

  it('排序：本地排序点击升序', async () => {
    const wrapper = await mountTable({ data }, [
      col({ prop: 'name', label: 'Name' }),
      col({ prop: 'age', label: 'Age', sortable: true }),
    ])
    await wrapper.findAll('th')[1].find('.kk-table__sort').trigger('click')
    const firstRowCells = wrapper.findAll('tbody tr')[0].findAll('td')
    expect(firstRowCells[0].text()).toBe('Bob')
    expect((wrapper.emitted('sort-change')?.[0]?.[0] as { order: string }).order).toBe(
      'ascending'
    )
  })

  it('展开行：点击展开按钮渲染扩展行', async () => {
    const wrapper = await mountTable({ data }, [
      col({ type: 'expand' }),
      col({ prop: 'name', label: 'Name' }),
    ])
    expect(wrapper.find('.kk-table__expanded-row').exists()).toBe(false)
    await wrapper.find('tbody .kk-table__expand-btn').trigger('click')
    expect(wrapper.find('.kk-table__expanded-row').exists()).toBe(true)
  })

  it('空态：#empty 插槽优先', async () => {
    const wrapper = await mountTable(
      { data: [] },
      [col({ prop: 'name', label: 'Name' })],
      { empty: () => h('span', { class: 'my-empty' }, 'EMPTY') }
    )
    expect(wrapper.find('.my-empty').exists()).toBe(true)
    expect(wrapper.find('.my-empty').text()).toBe('EMPTY')
  })

  it('加载态：loading 遮罩', async () => {
    const wrapper = await mountTable({ data, loading: true }, [
      col({ prop: 'name', label: 'Name' }),
    ])
    expect(wrapper.find('.kk-table__loading').exists()).toBe(true)
    expect(wrapper.text()).toContain('加载中')
  })

  it('内置分页器：按页切片并 emit page-change', async () => {
    const wrapper = await mountTable(
      { data: bigData, rowKey: 'id', pagination: { pageSize: 10 } },
      [col({ prop: 'name', label: 'Name' })]
    )
    expect(wrapper.findAll('tbody tr').length).toBe(10)
    await wrapper.find('.kk-pagination__next').trigger('click')
    const payload = wrapper.emitted('page-change')?.[0]?.[0] as {
      currentPage: number
      pageSize: number
    }
    expect(payload).toEqual({ currentPage: 2, pageSize: 10 })
  })

  it('行点击：emit row-click', async () => {
    const wrapper = await mountTable({ data }, [col({ prop: 'name', label: 'Name' })])
    await wrapper.findAll('tbody tr')[0].trigger('click')
    const payload = wrapper.emitted('row-click')?.[0]
    expect((payload?.[0] as Row).name).toBe('Alice')
  })

  it('固定列：单元格带 is-fixed-left', async () => {
    const wrapper = await mountTable({ data }, [
      col({ prop: 'name', label: 'Name', fixed: 'left' }),
      col({ prop: 'age', label: 'Age' }),
    ])
    const firstCell = wrapper.findAll('tbody tr')[0].findAll('td')[0]
    expect(firstCell.classes()).toContain('is-fixed-left')
  })

  it('序号列：type=index 渲染序号', async () => {
    const wrapper = await mountTable({ data }, [
      col({ type: 'index' }),
      col({ prop: 'name', label: 'Name' }),
    ])
    expect(wrapper.findAll('tbody tr')[0].find('td').text()).toBe('1')
  })

  it('跨页选择：rowKey 维持选中集合', async () => {
    const wrapper = await mountTable(
      { data: bigData, rowKey: 'id', pagination: { pageSize: 10 } },
      [col({ type: 'selection' }), col({ prop: 'name', label: 'Name' })]
    )
    await wrapper.findAll('tbody .kk-table__checkbox')[0].setValue(true)
    await wrapper.find('.kk-pagination__next').trigger('click')
    const selected = wrapper.vm.getSelectionRows() as unknown as Row[]
    expect(selected.length).toBe(1)
    expect(selected[0].id).toBe(1)
  })

  it('数据列：columns prop 渲染（无子组件）', async () => {
    const wrapper = mount(KkTable, {
      props: {
        data,
        columns: [
          { prop: 'name', label: 'Name' },
          { prop: 'age', label: 'Age' },
        ],
      } as never,
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('tbody tr').length).toBe(3)
    expect(wrapper.text()).toContain('Alice')
  })

  it('排序：custom 仅 emit sort-change 不重排', async () => {
    const wrapper = await mountTable({ data }, [
      col({ prop: 'name', label: 'Name' }),
      col({ prop: 'age', label: 'Age', sortable: 'custom' }),
    ])
    await wrapper.findAll('th')[1].find('.kk-table__sort').trigger('click')
    expect(wrapper.emitted('sort-change')).toBeTruthy()
    // 数据未重排，首行仍是 Alice
    expect(wrapper.findAll('tbody tr')[0].findAll('td')[0].text()).toBe('Alice')
  })
})
