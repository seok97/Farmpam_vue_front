<template>
  <div class="home">
    <section class="content01">
      <div class="home_img">
        <img src="@/assets/images/philippe-gauthier-orangeTree.jpg" alt="" />
      </div>
      <div class="ctt01_imglab container">
        <div class="ctt01_wrapper01">Farmpam</div>
        <div class="ctt01_wrapper02 d-flex row justify-content-evenly">
          <div class="mainintro col-md-5">
            <p class="mb-3">농장 SNS 팜팜을 사용해 보세요!</p>
            <p>다양한 농장과 유기농 작물들을 살펴보세요!</p>
            <p>
              더보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-down-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                />
              </svg>
            </p>
          </div>
          <div class="toinst col-md-4"></div>
          <router-link
            to="/shop"
            class="
              intlink
              d-flex
              col-md-2
              justify-content-center
              align-items-center
            "
          >
            <span>농장 SNS 보러가기 -></span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="content02 container">
      <div class="row ctt02wrap">
        <div class="ctt02_imglab col-md-4">
          <h3 class="mb-3">
            팜팜은 농부와 고객님을 <br />
            연결시켜주는 플랫폼입니다.
          </h3>
          <p>
            농장 SNS를 통해 .... 주말농장과 같은 나만의 농장 찾기... your own
            plugin and interact with the others. You can add usefull,
            highly-demands front-end development tools and libraries as a plugin
            by using superplate CLI
          </p>
        </div>
        <div class="ctt02_img col-md-5">
          <div class="ctt02_img_wrapper">
            <img src="../assets/images/farmer.jpg" class="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="content03 container">
      <div class="row ctt02wrap">
        <div class="ctt02_img col-md-5">
          <div class="ctt02_img_wrapper">
            <img src="../assets/images/farmer.jpg" class="rounded" alt="" />
          </div>
        </div>
        <div class="ctt02_imglab col-md-4">
          <h3 class="mb-3">믿고 구매할 수 있어요!</h3>
          <p>
            농장 SNS를 통해 .... 주말농장과 같은 나만의 농장 찾기... your own
            plugin and interact with the others. You can add usefull,
            highly-demands front-end development tools and libraries as a plugin
            by using superplate CLI
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
</style>

<style scoped>
section {
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.home {
  z-index: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.content01,
.content02,
.content03 {
  height: 100vh;
  width: 100%;
}
.home_img {
  width: 100%;
  height: 100%;
}

.home_img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: brightness(60%);
}

.ctt01_imglab {
  height: 100%;
  width: 100%;
  position: absolute;
  color: aliceblue;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0px 50px 0px;
}

.ctt01_imglab button {
  width: 30%;
}

.ctt01_wrapper01 {
  font-size: 100px;
}

.toinst {
  height: 200px;
}

.carousel-indicators {
  left: 0px;
}

.carousel.slide {
  max-height: 100%;
}

.intlink {
  border: solid white 2px;
  border-radius: 5%;
  font-size: 18px;
  text-decoration: none;
  color: white;
}

.ctt01_wrapper02 {
  margin: 40px 0;
  flex-direction: row;
}

.ctt02wrap {
  height: 100%;
  justify-content: center;
  padding: 50px 0;
}

.ctt02_img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
</style>