import { withInstall } from '../../utils/withInstall'
import Tabs from './Tabs.vue'
import TabPane from './TabPane.vue'

export const KkTabs = withInstall(Tabs, 'KkTabs')
export const KkTabPane = withInstall(TabPane, 'KkTabPane')

export default KkTabs

export * from './types'
