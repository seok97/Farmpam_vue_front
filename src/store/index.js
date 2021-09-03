import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

// vue 에서 Vuex 를 사용하도록 설정
Vue.use(Vuex)

// vuex store 객체를 생성해서 export 해준다.
export default new Vuex.Store({
  state: {
    logintoken: {
      email: "",
      auth: "",
      isLogin: false,
    },
  },
  mutations: {
    LOGIN_SUCCESS(state, value) {
      state.logintoken.email = value.email
      state.logintoken.auth = value.chk
      state.logintoken.isLogin = true
    },
    LOGIN_FAILURE(state, value) {},

    LOGOUT(state) {
      state.logintoken.email = ""
      state.logintoken.auth = ""
      state.logintoken.isLogin = false
    },
  },
  actions: {
    // 로그인 처리
    loginAction({ commit }, value) {
      axios({
        url: value.url,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: value.formdata,
      })
        .then((res) => {
          console.log(res.data)
          const data = res.data
          if ("failed" in data) {
            return false
          }
          commit("LOGIN_SUCCESS", data)
          return true
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
  getters: {
    getToken(state) {
      return state.logintoken
    },
  },
})
