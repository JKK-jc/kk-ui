import { withInstall } from '../../utils/withInstall'
import Table from './Table.vue'
import TableColumn from './TableColumn.vue'

export const KkTable = withInstall(Table, 'KkTable')
export const KkTableColumn = withInstall(TableColumn, 'KkTableColumn')
export default KkTable
export * from './types'
