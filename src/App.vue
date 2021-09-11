<template>
  <div id="root">
    <header>
      <nav>
        <Shopnav v-if="this.$route.params.pagename == 'shoppage'" />
        <Nav v-else />
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <h3>footer</h3>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">ABOUT</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contack" class="nav-link">CONTACK</router-link>
      </li>
    </footer>
  </div>
</template>

<script>
import Nav from "./views/Nav.vue"
import Shopnav from "./views/Shopnav.vue"

export default {
  components: {
    Nav,
    Shopnav,
  },
  // created() {
  //   this.$router.push("/")
  // },
}
// 새로고침시 스크롤바 맨위로
history.scrollRestoration = "manual"

// 네비게이션바 숨기기
window.addEventListener(
  "wheel",
  function(e) {
    let header = document.querySelector("header")
    // 위로 스크롤
    if (e.wheelDelta >= 120) {
      header.style.top = "0"
    }
    // 아래로 스크롤
    if (e.wheelDelta <= -120) {
      header.style.top = "-54px"
    }
  },
  { passive: false }
)

// // 새로고침 처리
// function LockF5() {
//   if (event.keyCode == 116) {
//     event.keyCode = 0;
//     this.$router.push("/");
//     return false;
//   }
// }
// document.onkeydown = LockF5;
</script>

<style>
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#98d656b4, #5eeef375);
  border-radius: 5px;
}

html,
body {
  margin: 0;
}

header {
  z-index: 100;
  position: sticky;
  top: 0;
  transition: all 0.3s ease-out;
}

main {
  display: flex;
  flex-direction: column;
}

footer {
  background-color: gray;
  height: 200px;
}
</style>
