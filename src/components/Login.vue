<template>
  <div class="Login">
    <section class="section section--login">
      <div class="inner">
        <div class="login-image">
          <img src="@/assets/images/orange.jpg" class="img-fluid" alt="" />
        </div>

        <div class="inner-border">
          <div class="inner-form">
            <img class="logo" src="@/assets/logo.png" alt="" />

            <form class="login--form row g-3" action="">
              <div class="col-12 input__text">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="이메일"
                />
              </div>

              <div class="col-12 input__text">
                <input
                  type="pwd"
                  class="form-control"
                  id="pwd"
                  placeholder="비밀번호"
                />
              </div>

              <div class="col-12">
                <button class="btn btn-primary">로그인</button>
              </div>
              <p>또는</p>
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
  name: "Login",
  components: {},
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
