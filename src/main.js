import { createApp } from 'vue'

import App from './App.vue'
const app = createApp(App)

//全局状态管理
import { createPinia } from 'pinia'
app.use(createPinia())

//路由
import router from './router'
app.use(router)

//element plus
import ElementPlus from 'element-plus'
app.use(ElementPlus)
import 'element-plus/dist/index.css'

//全局样式
import './common/style/index.css'


app.mount('#app')
