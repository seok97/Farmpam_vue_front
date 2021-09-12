<template>
  <div class="nav navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/shop/shoppage" class="navbar-brand"
        >Farmpam</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 orange">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              전체 카테고리</a
            >
            <ul class="dropdown-menu">
              <li>
                <router-link to="/shop/goods/shoppage/1" class="dropdown-item"
                  >과일</router-link
                >
              </li>
              <li>
                <router-link to="/shop/goods/shoppage/2" class="dropdown-item"
                  >채소</router-link
                >
              </li>
              <li>
                <router-link to="/shop/goods/shoppage/3" class="dropdown-item"
                  >쌀/잡곡</router-link
                >
              </li>
              <li>
                <router-link to="/shop/goods/shoppage/4" class="dropdown-item"
                  >축산/계란</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/shop/more/shoppage/new" class="nav-link">
              신선상품
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop/more/shoppage/vegan" class="nav-link"
              >비건식품</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shop/more/shoppage/close" class="nav-link"
              >품절임박!</router-link
            >
          </li>
        </ul>
        <div class="d-flex">
          <li class="nav-item">
            <div class="search">
              <input class="pikachu" type="text" />
              <div class="pikareset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                  />
                </svg>
              </div>
              <div class="pikaBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <!--  -->
            <a
              class="nav-link dropdown-toggle infoitem"
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
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link to="/sns" class="nav-link"
                  >Farmstargram</router-link
                >
              </li>
            </ul>

            <!-- 일반유저 로그인 메뉴 -->
            <ul
              v-else-if="logintoken.chk === 'chk_common'"
              class="dropdown-menu dropdown-menu-end"
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
                <router-link to="/" class="dropdown-item"
                  >취소/반품</router-link
                >
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
              class="dropdown-menu dropdown-menu-end"
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
            <!--  -->
          </li>

          <li
            class="nav-item cart d-flex justify-content-center align-items-center"
          >
            <router-link
              :to="{
                name: 'Cart',
                params: {
                  pagename: 'shoppage',
                },
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                />
              </svg>
            </router-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Shopnav",
  computed: mapState(["logintoken"]),
  methods: {
    logout() {
      this.$store.commit("LOGOUT")
      this.$router.go("/shop/shoppage")
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.infoitem,
.cart a {
  color: white;
}

.orange {
  color: #f6b22f;
}

.nav {
  box-sizing: border-box;
  height: 54px;
  width: 100%;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  position: absolute;
  background-color: #f6b22f;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-content: center;
}

.nav div {
  height: 100%;
}

.search {
  position: relative;
}

.pikachu {
  width: 242px;
  height: 36px;
  padding: 0 60px 0 14px;
  border: 1px solid #f7f7f6;
  border-radius: 18px;
  background-color: #f7f7f7;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  outline: none;
}

.pikareset {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  left: 170px;
  top: 0px;
  width: 36px;
  height: 36px;
  border: 0 none;
  font-size: 0;
}

.pikaBtn {
  position: absolute;
  right: 5px;
  top: 3px;
  width: 30px;
  height: 30px;
}
</style>
