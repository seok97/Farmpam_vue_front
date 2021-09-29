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
      <div class="footer-container">
        <div>
          <div class="footer-title">Developers</div>
          <div class="d-flex flex-column">
            <div class="d-flex flex-row mg-bo">
              <div class="footer-contents">
                <a href="https://github.com/hs-keko">
                  고현석 | github.com/hs-keko
                </a>
              </div>
              <div class="footer-contents">
                <a href="https://github.com/dy0712">
                  김다연 | github.com/dy0712</a
                >
              </div>
              <div class="footer-contents">
                <a href="https://github.com/seok97">
                  석우현 | github.com/seok97</a
                >
              </div>
            </div>
            <div class="d-flex flex-row">
              <div class="footer-contents">
                <a href="https://github.com/dayoung1227">
                  이다영 | github.com/dayoung1227
                </a>
              </div>
              <div class="footer-contents">
                <a href="https://github.com/LCG1997">
                  이충근 | github.com/LCG1997
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="logos">
          <div class="footer-logo">
            <router-link to="/"
              ><img src="./assets/images/logo.png"
            /></router-link>
          </div>
          <div class="about-logo">
            <router-link to="/about">
              <img src="./assets/images/about.jpg"
            /></router-link>
          </div>
        </div>
      </div>
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
  background: linear-gradient(#f6b22f, #3dff4d75);
  border-radius: 5px;
}

.about-link {
  text-decoration: none;
  color: #ffffff;
  margin-left: 150px;
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
  background-color: #f6b22f;
  height: 110px;
  display: flex;
  color: #ffffff;
  bottom: 0;
  width: 100%;
  padding: 15px;
}

footer a {
  text-decoration: none;
  color: #ffffff;
}

.footer-container {
  display: flex;
  font-size: 14px;
  justify-content: space-around;
}

.footer-title {
  margin-bottom: 10px;
  font-size: 20px;
}

.footer-contents {
  margin-right: 50px;
  color: #ffffff;
}
.logos {
  position: abolute;
  right: 10px;
  display: flex;
}

.footer-logo img {
  width: 200px;
  margin-top: 25px;
  margin-right: 20px;
}

.about-logo img {
  width: 130px;
}
.mg-bo {
  margin-bottom: 10px;
}
</style>
