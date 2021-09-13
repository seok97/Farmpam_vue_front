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
            <p>다양한 농장과 유기농 작물들을 <br />살펴보세요!</p>
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
            "팜팜은 직접 키운 작물들만 <br />
            고객님들께 제공합니다"
          </h3>
          <br />
          <p>
            내 가족이 먹는다는 생각으로 정직하게 판매하고 인정받는 마켓들만이
            입점하도록 하고 있습니다. 건강하고 튼튼한 작물들을 판매하고 싶은
            정직한 농장주들과 우리 가족 건강을 챙기고 싶어하는 고객들이
            만들어가는 SNS형 쇼핑몰 입니다.
          </p>
        </div>
        <div class="ctt02_img col-md-5">
          <div class="ctt02_img_wrapper">
            <img src="../assets/images/hpodo.jpg" class="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="content03 container">
      <div class="row ctt02wrap">
        <div class="ctt02_img col-md-5">
          <div class="ctt02_img_wrapper">
            <img src="../assets/images/himg.jpg" class="rounded" alt="" />
          </div>
        </div>
        <div class="ctt02_imglab col-md-4">
          <h3 class="mb-3">
            "팜팜은 신선함을 유지하게끔 <br />당일 또는 익일배송만을 취급합니다"
          </h3>
          <br />
          <p>
            아무리 좋은 품질의 음식이라 한들 시간이 지나면 품질이 떨어질 수밖에
            없습니다. 팜팜은 그런 점을 고려하여 모든 마켓이 당일배송 또는
            익일배송 하도록 규정하고 있습니다. 어제 먹고 싶었던 음식을 신선하게,
            오늘 받아보세요!
          </p>
        </div>
      </div>
    </section>

    <section class="content02 container">
      <div class="row ctt02wrap">
        <div class="ctt02_imglab col-md-4">
          <h3 class="mb-3">
            "대화하고, 묻고, 보고, <br />
            그리고 구매하세요!"
          </h3>
          <br />
          <p>
            딱딱한 텍스트 몇 자만 보고 구매하는 것이 정말 만족스러운 구매일까요?
            저희 팜팜에서는 농장주와 직접 소통하고, 구매할 농작물들이 자라나는
            과정을 모두 확인할 수 있습니다. 신선하고 좋은 음식들로 배를 채우고,
            즐겁고 따뜻한 소통으로 마음을 채우세요!
          </p>
        </div>
        <div class="ctt02_img col-md-5">
          <div class="ctt02_img_wrapper">
            <img src="../assets/images/himg2.jpg" class="rounded" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
}
</script>

<style></style>

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

.content01 {
  height: 100vh;
  width: 100%;
}

.content03 {
  height: 80vh;
  width: 100%;
}

.content02 {
  height: 70vh;
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
