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

            <form
              ref="loginform"
              method="post"
              @submit.prevent="onLogin"
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
                <button type="submit" class="btn btn-primary">로그인</button>
              </div>
              <div class="line">
                <p class="or">또는</p>
              </div>
              <a class="google-login mb-3" href="#">구글 계정으로 로그인</a>
            </form>
            <div class="signup-link">
              <p class="mb-2">계정이 없으신가요?</p>
              <a href="#">가입하기</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FarmerLogin",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      isLogin: false,
    };
  },
  methods: {
    onLogin(e) {
      const formdata = new FormData(this.$refs.loginform);

      const isRight = this.$store.dispatch("loginAction", {
        form: formdata,
        num: 1,
      });
      // isRight 가 true 면 로그인 성공.
      // isRight 가 false 일때 isLogin 을 true 로 변경하여 로그인실패를 띄운다.
      if (!isRight) {
        // isLogin 이 true면 로그인 실패를 띄운다.
        this.isLogin = true;
      } else {
        // 로그인이 성공하면 홈으로 이동.
        alert("로그인 성공");
        this.$router.push({ path: "/" });
      }
    },
  },
};
</script>

<style scoped>
.Login {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
}

h1 {
  font-size: 32px;
}

.login-image {
  width: 564px;
  height: 800px;
  overflow: hidden;
}

.login-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inner-border {
  width: 564px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  background-color: #ffffff;
}

.line {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  padding: 20px;
}

.line::before {
  content: "";
  flex-grow: 1;
  margin: 0px 20px 0px 100px;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}

.line::after {
  content: "";
  flex-grow: 1;
  margin: 0px 100px 0px 20px;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}

.inner-form {
  margin: auto;
  text-align: center;
}

.inner-form h1 {
  padding: 32px;
  text-align: center;
}
w .login--form {
  text-align: center;
}

.login--form a {
  text-decoration: none;
}

.input__text {
  padding: 0px 100px 0px 100px;
}

.signup-link {
  text-align: center;
  border: 1px solid #cecece;
  margin: 0 50px;
  padding: 20px;
}

.signup-link a {
  color: limegreen;
  text-decoration: none;
}

.logo {
  width: 300px;
  height: 140px;
}
</style>
