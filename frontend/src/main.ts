import { createApp } from 'vue'
import { Icon } from '@iconify/vue'

import App from './App.vue'
import router from './router'

import './style.css'

const app = createApp(App)
app.use(router)
app.component('VueIcon', Icon)
app.mount('#app')
