import { withInstall } from '../../utils/withInstall'
import Layout from './Layout.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
import LayoutFooter from './LayoutFooter.vue'
import Row from './Row.vue'
import Col from './Col.vue'

export const KkLayout = withInstall(Layout, 'KkLayout')
export const KkLayoutHeader = withInstall(LayoutHeader, 'KkLayoutHeader')
export const KkLayoutSider = withInstall(LayoutSider, 'KkLayoutSider')
export const KkLayoutContent = withInstall(LayoutContent, 'KkLayoutContent')
export const KkLayoutFooter = withInstall(LayoutFooter, 'KkLayoutFooter')
export const KkRow = withInstall(Row, 'KkRow')
export const KkCol = withInstall(Col, 'KkCol')

export default KkLayout

export * from './types'
