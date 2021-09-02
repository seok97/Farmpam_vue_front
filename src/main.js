import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import store from "./store"

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:8888/farmpam"

new Vue({ store, router, render: (h) => h(App) }).$mount("#app")
