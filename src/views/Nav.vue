<template>
  <div class="nav navbar navbar-expand-lg navbar-light">
    <div class="container-fluid bg-white">
      <div class="logo">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/images/logo.png" class="nav_logo" />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav_list collapse navbar-collapse bg-white" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll bg-white"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link to="/sns" class="nav-link">Farmstargram</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop/shoppage" class="nav-link">SHOP</router-link>
          </li>
        </ul>
        <div class="d-flex dropdown bg-white">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <span v-if="logintoken.token"
              ><strong>{{ logintoken.name }}</strong></span
            >
          </button>

          <!-- MyMenu -->
          <!-- 비로그인시 -->
          <ul
            v-if="!logintoken.token"
            class="dropdown-menu dropdown-menu-lg-end"
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <router-link to="/login" class="dropdown-item"
                >로그인</router-link
              >
            </li>
            <li>
              <router-link to="/signup" class="dropdown-item"
                >회원가입</router-link
              >
            </li>
          </ul>

          <!-- 일반유저 로그인 메뉴 -->
          <ul
            v-if="logintoken.chk === 'chk_common'"
            class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <router-link to="/sns" class="dropdown-item"
                >팜스타그램</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item">주문목록</router-link>
            </li>
            <li>
              <router-link to="/" class="dropdown-item">취소/반품</router-link>
            </li>
            <li>
              <router-link to="/" class="dropdown-item">찜리스트</router-link>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button @click="logout" class="dropdown-item">로그아웃</button>
            </li>
          </ul>

          <!-- 농부유저 로그인 메뉴 -->
          <ul
            v-else-if="logintoken.chk === 'chk_farmer'"
            class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
            aria-labelledby="navbarScrollingDropdown"
          >
            <li>
              <router-link to="/sns" class="dropdown-item"
                >팜스타그램</router-link
              >
            </li>
            <li>
              <router-link
                class="dropdown-item"
                :to="{
                  name: 'MyShop',
                  params: {
                    pagename: 'shoppage',
                    farmer_email: logintoken.email,
                    farmer_name: logintoken.name,
                  },
                }"
                >내상점</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item">주문관리</router-link>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button @click="logout" class="dropdown-item">로그아웃</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Nav",
  computed: mapState(["logintoken"]),
  methods: {
    logout() {
      this.$store.commit("LOGOUT")
      // this.$router.go(this.$router.currentRoute);
    },
  },
}
</script>

<style scoped>
.nav {
  box-sizing: border-box;
  height: 54px;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  position: absolute;
  background-color: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nav div {
  height: 100%;
}

.nav_logo {
  height: 34px;
}
</style>
