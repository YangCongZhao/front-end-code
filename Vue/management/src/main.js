import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import router from './router'
import InstallPina from './store'
import InstallIcons from '@/assets/icons'

const app = createApp(App)
InstallPina(app)
InstallIcons(app)
app.use(router).mount('#app')
