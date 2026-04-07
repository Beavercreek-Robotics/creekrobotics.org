// Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
