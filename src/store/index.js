import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

// 새로고침시 데이터 초기화 해결 모듈
import createPersistedState from "vuex-persistedstate"

// vue 에서 Vuex 를 사용하도록 설정
Vue.use(Vuex)

// vuex store 객체를 생성해서 export 해준다.
export default new Vuex.Store({
  state: {
    // 로그인 토큰
    logintoken: {
      token: false,
      /*
        email: String, name: String, chk: String (일반유저"chk_common") (판매자"chk_farmer"), token: boolean
      */
    },
  },
  mutations: {
    SET_USER(state, userData) {
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
      console.log("로그인서버요청")

      return axios.post(url, form).then((res) => {
        console.log(res.data)
        const data = res.data

        if (data.token) {
          commit("SET_USER", data)
          return true
        } else {
          return false
        }
      })
    },
  },
  getters: {
    getToken(state) {
      return state.logintoken.token
    },
    getChk(state) {
      return state.logintoken.chk
    },
  },
  plugins: [
    createPersistedState({
      // 여기에 작성된 모듈(state) 만 저장/복구 된다.
      paths: ["logintoken"],
    }),
  ],
})
