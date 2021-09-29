import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import store from "./store"
import Aos from "aos"
import "aos/dist/aos.css"

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = "http://localhost:8888/farmpam"
new Vue({ 
    created() {
        Aos.init();
    },
store, router, render: (h) => h(App)}).$mount("#app")

