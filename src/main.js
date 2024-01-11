import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

//全局状态管理
import { createPinia } from 'pinia'
app.use(createPinia())










app.mount('#app')
