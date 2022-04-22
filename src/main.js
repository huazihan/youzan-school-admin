console.log(" __     __                                      \n" +
    " \\ \\   / /                                      \n" +
    "  \\ \\_/ /    ___    _   _   ____   __ _   _ __  \n" +
    "   \\   /    / _ \\  | | | | |_  /  / _` | | '_ \\ \n" +
    "    | |    | (_) | | |_| |  / /  | (_| | | | | |\n" +
    "    |_|     \\___/   \\__,_| /___|  \\__,_| |_| |_|\n" +
    "                                                \n" +
    "                                                ")
console.log("Youzan-admin - Create by Alan.")

import {createApp} from 'vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(Antd)

app.mount('#app')
