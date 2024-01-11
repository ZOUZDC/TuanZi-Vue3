import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

//全局状态管理
import { createPinia } from 'pinia'
app.use(createPinia())

//路由
import router from './router'
app.use(router)


app.mount('#app')
