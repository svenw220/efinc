import "bootstrap/dist/css/bootstrap.min.css"
import './assets/css/fonts.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"