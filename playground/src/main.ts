import { createApp } from 'vue'
import App from './App.vue'
import KkUI, { initTheme } from 'kk-ui'
import 'kk-ui/style.css'

initTheme()
createApp(App).use(KkUI).mount('#app')
