import Vue from "vue"
import Vuex from "vuex"

// vue 에서 Vuex 를 사용하도록 설정
Vue.use(Vuex)

// vuex store 객체를 생성해서 export 해준다.
export default new Vuex.Store({
  state: {
    logintoken: {},
  },
  mutations: {},
  actions: {},
  getters: {},
})
