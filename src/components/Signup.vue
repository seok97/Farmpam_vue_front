<template>
  <div class="signup">
    <div class="section section--signup">
      <div class="inner">
        <div class="inner-border">
          <div class="inner--signup">
            <img class="logo" src="@/assets/images/logo.png" alt="" />
            <p class="signup__title">
              원하는 농장과 농작물들을 보려면 가입하세요
            </p>
            <a class="btn btn-primary mb-3" href="#">구글계정으로 로그인</a>
            <div class="line">
              <p class="or">또는</p>
            </div>

            <!--  -->
            <div class="container">
              <h1>회원 가입 폼 입니다.</h1>
              <form
                action="http://localhost:8888/farmpam/users/vue/signup.do"
                method="post"
                id="myForm"
                ref="signupForm"
                @submit.prevent="onSubmit"
                class="d-flex flex-column align-items-baseline"
              >
                <div>
                  <label for="users_email">이메일</label>
                  <input
                    type="text"
                    name="users_email"
                    id="users_email"
                    :class="{
                      'is-invalid': !isEmailValid,
                      'is-valid': isEmailValid,
                    }"
                    v-model="inputEmail"
                  />
                  <div class="invalid-feedback">
                    사용할 수 없는 닉네임입니다.
                  </div>
                </div>
                <div class="form-group">
                  <label for="users_pwd">비밀번호</label>
                  <input
                    type="password"
                    name="users_pwd"
                    id="users_pwd"
                    placeholder="password"
                    required
                    v-model="users_pwd"
                  />
                  <small class="form-text text-muted"
                    >5글자~10글자 이내로 입력하세요.</small
                  >
                  <div class="invalid-feedback">비밀번호를 확인 하세요.</div>
                </div>
                <div class="form-group">
                  <label for="users_pwd2">비밀번호 확인</label>
                  <input
                    type="password"
                    name="users_pwd2"
                    id="users_pwd2"
                    placeholder="Confirm Password"
                    required
                    v-model="users_pwd2"
                  />
                </div>
                <div>
                  <label for="users_name">이름</label>
                  <input
                    type="text"
                    name="users_name"
                    id="users_name"
                    required
                  />
                </div>
                <div>
                  <label for="users_addr">주소</label>
                  <input
                    type="text"
                    name="users_addr"
                    id="users_addr"
                    required
                    v-model="users_addr"
                  />
                  <button
                    id="addr_search"
                    class="btn btn-primary"
                    type="button"
                    @click="mapBtn"
                  >
                    검색하기
                  </button>
                </div>
                <div>
                  <label for="users_addr_detail">상세 주소</label>
                  <input
                    type="text"
                    name="users_addr_detail"
                    id="users_addr_detail"
                    required
                    ref="users_addr_detail"
                  />
                </div>
                <div>
                  <label for="users_phone">핸드폰 번호</label>
                  <input
                    type="text"
                    name="users_phone"
                    id="users_phone"
                    placeholder="핸드폰번호 입력"
                    maxlength="13"
                    required
                  />
                </div>
                <br />
                <button class="btn btn-primary" type="submit">가입</button>
              </form>
            </div>

            <!--  -->
          </div>
          <button class="btn btn-black">
            <router-link to="/farmersignup">
              농부로 가입하기
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      isEmailValid: false,
      inputEmail: "",
      users_pwd: "",
      users_pwd2: "",
      users_addr: "",
    }
  },
  computed: {},
  watch: {
    inputEmail: function(newEmail) {
      this.$http
        .get("/users/checkusersemail.do?inputUsersEmail=" + newEmail)
        .then((res) => {
          //data 는 {isExist:true} or {isExist:false} 형태의 object 이다.
          if (res.data.isExist) {
            //만일 존재한다면
            //사용할수 없는 아이디라는 피드백을 보이게 한다.
            this.isEmailValid = false
          } else {
            this.isEmailValid = true
          }
        })
    },
  },
  methods: {
    mapBtn() {
      //카카오 지도 발생
      new window.daum.Postcode({
        oncomplete: (data) => {
          //선택시 입력값 세팅
          this.users_addr = data.address
          this.$refs.users_addr_detail.focus() //상세입력 포커싱
        },
      }).open()
    },
    onSubmit() {
      let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/
      let check2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      //새 비밀번호와 비밀번호 확인이 일치하지 않으면 폼 전송을 막는다.
      if (this.users_pwd != this.users_pwd2) {
        alert("비밀번호가 일치하지 않습니다.")
        return false
      } else if (!check.test(this.users_pwd)) {
        alert(
          "비밀번호는 숫자, 영문, 특수문자를 포함하여 8글자 이상 16글자 이하로 작성해주세요."
        )
        return false
      } else if (!check2.test(this.inputEmail)) {
        alert("이메일 형식에 맞게 작성해주세요.")
        return false
      } else if (this.isEmailValid != true) {
        alert("존재하는 이메일입니다. 다시 확인해 주세요.")
      } else {
        const formData = new FormData(this.$refs.signupForm)
        this.$http.post("/users/vue/signup.do", formData).then((res) => {
          console.log(res)
          alert("회원가입 성공!")
          this.$router.push({ name: "Login" })
        })
      }
    },
  },
}
</script>

<style scoped>
.signup {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
}

.signup__title {
  margin-bottom: 20px;
}

.inner-border {
  width: 564px;
  height: 800px;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  background-color: #ffffff;
}

.inner--signup {
  margin: auto;
  text-align: center;
}

input {
  width: 250px;
}

.logo {
  width: 300px;
  height: 140px;
}

.btn {
  width: 250px;
}

.line--title {
  margin-bottom: 20px;
}

.line {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  margin: 20px 100px;
}

.line::before {
  content: "";
  flex-grow: 1;
  margin: 0px 16px;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}

.line::after {
  content: "";
  flex-grow: 1;
  margin: 0px 16px;
  background: rgba(0, 0, 0, 0.35);
  height: 1px;
  font-size: 0px;
  line-height: 0px;
}
</style>
