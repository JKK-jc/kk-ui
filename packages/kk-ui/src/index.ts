import type { App, Plugin } from 'vue'
import { KkButton } from './components/button'
import { KkIcon } from './components/icon'
import { KkSpace } from './components/space'
import { KkDivider } from './components/divider'
import { KkCard } from './components/card'
import { KkTag } from './components/tag'
import { KkInput } from './components/input'
import { KkForm } from './components/form'
import { KkFormItem } from './components/form-item'
import { KkModal } from './components/modal'
import { KkDrawer } from './components/drawer'
import { KkContainer } from './components/container'
import { KkSkeleton } from './components/skeleton'
import { KkTabs, KkTabPane } from './components/tabs'
import { KkSelect } from './components/select'
import { KkCascader } from './components/cascader'
import { KkUpload } from './components/upload'
import { KkPagination } from './components/pagination'
import { KkTable, KkTableColumn } from './components/table'
import { KkWatermark } from './components/watermark'
import {
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
  KkRow,
  KkCol,
} from './components/layout'

export * from './components/button'
export * from './components/icon'
export type { IconData } from './icons/registry'
export * from './components/space'
export * from './components/divider'
export * from './components/card'
export * from './components/tag'
export * from './components/input'
export * from './components/form'
export * from './components/form-item'
export * from './components/modal'
export * from './components/drawer'
export * from './components/container'
export * from './components/skeleton'
export * from './components/tabs'
export * from './components/select'
export * from './components/cascader'
export * from './components/upload'
export * from './components/pagination'
export * from './components/table'
export * from './components/watermark'
export * from './components/layout'
export * from './locale'
export * from './theme'
export * from './hooks'
export * from './utils'
export * from './icons'
export * from './types'

const components: Plugin[] = [
  KkButton,
  KkIcon,
  KkSpace,
  KkDivider,
  KkCard,
  KkTag,
  KkInput,
  KkForm,
  KkFormItem,
  KkModal,
  KkDrawer,
  KkContainer,
  KkSkeleton,
  KkTabs,
  KkTabPane,
  KkSelect,
  KkCascader,
  KkUpload,
  KkPagination,
  KkTable,
  KkTableColumn,
  KkWatermark,
  KkLayout,
  KkLayoutHeader,
  KkLayoutSider,
  KkLayoutContent,
  KkLayoutFooter,
  KkRow,
  KkCol,
]

const KkUI: Plugin = {
  install(app: App) {
    components.forEach((component) => app.use(component))
  },
}

export default KkUI
