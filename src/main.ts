import { createApp } from 'vue'
import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'
import ElementIcons from './global/register-icons'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)
app.use(ElementIcons)
app.use(pinia)
app.use(router)

app.mount('#app')
