import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

// 새로고침시 데이터 초기화 해결 모듈
import createPersistedState from "vuex-persistedstate"

// vue 에서 Vuex 를 사용하도록 설정
Vue.use(Vuex)

axios.defaults.baseURL = "http://localhost:8888/farmpam"
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8"
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"

// vuex store 객체를 생성해서 export 해준다.
export default new Vuex.Store({
  state: {
    // 로그인 토큰
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
    loginAction({ commit }, { form, num }) {
      let url = "/users/vue/login.do"
      if (num == 1) {
        url = "/farmer/vue/login.do"
      }
      console.log(form)
      console.log(form.get("users_email"))
      console.log("로그인처리시작")

      axios
        .post(url, form)
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
          return false
        })
    },
  },
  getters: {
    getToken(state) {
      return state.logintoken
    },
  },
  plugins: [
    createPersistedState({
      // 여기에 작성된 모듈(state) 만 저장/복구 된다.
      paths: ["logintoken"],
    }),
  ],
})
