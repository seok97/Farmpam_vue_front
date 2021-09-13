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
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span v-if="logintoken.token"
              ><strong>{{ logintoken.name }}</strong></span
            >
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </a>

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
              <router-link to="/shop/buylist/shoppage" class="dropdown-item"
                >주문목록</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item"
                >취소/반품 관리</router-link
              >
            </li>
            <li>
              <router-link to="/" class="dropdown-item">상점관리</router-link>
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

a {
  text-decoration: none;
  color: black;
}
</style>
