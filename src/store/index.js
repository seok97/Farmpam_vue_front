import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

// vue 에서 Vuex 를 사용하도록 설정
Vue.use(Vuex)

// vuex store 객체를 생성해서 export 해준다.
export default new Vuex.Store({
  state: {
    logintoken: {
      /*
        email: String, name: String, chk: String (일반유저"chk_common") (판매자"chk_farmer"), token: boolean
      */
    },
  },
  mutations: {
    LOGIN_SUCCESS(state, userData) {
      state.logintoken = userData
      localStorage.setItem("user", JSON.stringify(userData))
    },

    LOGOUT(state) {
      state.logintoken = {}
      localStorage.removeItem("user")
    },
  },
  actions: {
    // 로그인 처리
    loginAction({ commit }, formdata) {
      const url = "/users/vue/login.do"
      axios
        .post(url, formdata)
        .then((res) => {
          console.log(res.data)
          const data = res.data

          if (data.token) {
            commit("LOGIN_SUCCESS", data)
            return true
          } else {
            return false
          }
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
