import { createApp } from 'vue'
import './styles/default.css'

import App from './App.vue'
import router from './router'
import pinia from './stores'

// 引入全局注册
import { globalRegister } from './global'

// 引入mockjs
import './mock'

const app = createApp(App)

app.use(pinia).use(router).use(globalRegister)

app.mount('#app')
