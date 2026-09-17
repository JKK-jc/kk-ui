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
]

const KkUI: Plugin = {
  install(app: App) {
    components.forEach((component) => app.use(component))
  },
}

export default KkUI
