import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:8888/farmpam"

new Vue({ router, render: (h) => h(App) }).$mount("#app")
