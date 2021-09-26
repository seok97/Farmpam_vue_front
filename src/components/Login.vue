<template>
  <div class="LoginForm">
    <section class="section section--login">
      <div class="inner">
        <div class="login-image">
          <img src="../assets/images/farm4.jpg" class="img-fluid" alt="" />
        </div>

        <div class="inner-border">
          <div class="inner-form">
            <img class="logo" src="../assets/images/logo.png" alt="" />
            <!--  -->

            <ul
              class="nav nav-tabs justify-content-center mb-4"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  일반회원
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  농부회원
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <form
                  ref="loginform"
                  method="POST"
                  @submit.prevent="onLogin(0)"
                  class="login--form row g-3"
                  action="/users/vue/login.do"
                >
                  <div class="col-12 input__text">
                    <input
                      type="text"
                      class="form-control"
                      id="users_email"
                      name="users_email"
                      placeholder="이메일"
                      v-model="email"
                    />
                  </div>

                  <div class="col-12 input__text">
                    <input
                      type="password"
                      class="form-control"
                      id="users_pwd"
                      name="users_pwd"
                      placeholder="비밀번호"
                      v-model="password"
                    />
                  </div>
                  <span v-show="isLogin" class="badge bg-primary"
                    >로그인 정보가 틀려요 !</span
                  >
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">
                      로그인
                    </button>
                  </div>

                  <div class="line">
                    <p class="or">또는</p>
                  </div>

                  <a class="google-login mb-3" href="#">구글 계정으로 로그인</a>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <form
                  ref="f_loginform"
                  method="post"
                  @submit.prevent="onLogin(1)"
                  class="login--form row g-3"
                  action="/farmer/vue/login.do"
                >
                  <div class="col-12 input__text">
                    <input
                      type="text"
                      class="form-control"
                      id="farmer_email"
                      name="farmer_email"
                      placeholder="이메일"
                      v-model="email"
                    />
                  </div>

                  <div class="col-12 input__text">
                    <input
                      type="password"
                      class="form-control"
                      id="farmer_pwd"
                      name="farmer_pwd"
                      placeholder="비밀번호"
                      v-model="password"
                    />
                  </div>
                  <span v-show="isLogin" class="badge bg-primary"
                    >로그인 정보가 틀려요 !</span
                  >
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary">
                      로그인
                    </button>
                  </div>
                  <div class="line">
                    <p class="or">또는</p>
                  </div>
                  <a class="google-login mb-3" href="#">구글 계정으로 로그인</a>
                </form>
              </div>
            </div>

            <!--  -->

            <div class="signup-link">
              <p class="mb-2">계정이 없으신가요?</p>
              <router-link to="/signup">가입하기</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      isLogin: false,
    }
  },
  methods: {
    onLogin(num) {
      let formdata = new FormData(this.$refs.loginform)
      if (num > 0) {
        formdata = new FormData(this.$refs.f_loginform)
      }
      this.$store
        .dispatch("loginAction", {
          form: formdata,
          num: num,
        })
        .then((result) => {
          console.log("로그인 요청 결과 : " + result)
          if (result) {
            alert("로그인 성공")
            this.$router.push({ path: "/" })
          } else {
            this.isLogin = true
          }
        })
    },
  },
}
</script>

<style scoped src="../assets/css/Login.css">
form div {
  margin: 10px;
}

.nav {
  border-bottom: 0.5px solid;
  border-color: #dee2e6 #dee2e6 #fff;
}
</style>
