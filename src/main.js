import { createApp } from 'vue'
import App from './App.vue'
import './uitl/rem'
import router from "./router"
import store from "./store"
import 'vant/lib/index.css'
import vant from 'vant'

createApp(App)
    .use(router)
    .use(store)
    .use(vant)
    .mount('#app')