<template>
  <div class="about d-flex flex-row">
    <div class="half-img"></div>
    <div class="row flex-column align-items-center about-content">
      <div class="col">
        <h1>
          <span class="str">불사조</span>는
          <span class="str">최고</span>입니다.<br />
          아.시.겠.어.요?
        </h1>
      </div>

      <div class="col d-flex">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/images/kdy.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  통찰력 있는 선지자, 예언자형 <br />"김다연"
                </h5>
                <p class="card-text">
                  인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구하는
                  개발자로, 팀원들에게 다양한 주제로 소통하며 사기를 복돋움
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/images/ghs1.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  재기발랄한 활동가, 스파크형 <br />"고현석"
                </h5>
                <p class="card-text">
                  따뜻하고 정열적이고 활기가 넘치며 재능이 많고 상상력이 풍부한
                  개발자로, 오류 발생시 창의적이고 다양한 방법으로 오류를 해결함
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/images/wh.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  객관적인 분석가, 아이디어 뱅크형 <br />"석우현"
                </h5>
                <p class="card-text">
                  조용하고 과묵하며 논리와 분석으로 문제를 해결하기 좋아하는
                  개발자로, 대부분의 모든 문제를 해결하였으며 풀스택이라는
                  전지전능한 능력을 발휘함
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/images/ldy.jpg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  호기심 많은 예술가, 성인군자형 <br />"이다영"
                </h5>
                <p class="card-text">
                  다정하고 온화하며 사람들에게 친절한 개발자로, 팀원들과 꾸준히
                  소통하고 자신이 맡은 파트를 끝마치자마자 다른 개발자의 남은
                  파트도 책임감 있게 도맡음
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/images/cg.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  청렴결백 논리주의자, 세상의 소금형 <br />"이충근"
                </h5>
                <p class="card-text">
                  실제 사실에 대하여 정확하고 체계적으로 기억하며 신중하고
                  책임감이 강한 개발자로, 많은 파트를 맡았음에도 불구하고
                  체계적이고 정확하게 모든 일을 처리함
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  /*background-image: url("../assets/images/pngegg.png");*/
  background-size: cover;
}

.str {
  color: #f6b22f;
  font: 2em sans-serif;
}
.row {
  width: 100%;
}

.half-img {
  background-image: url("../assets/images/dd.jpg");
  width: 100%;
  height: 180vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.about-content {
  margin-top: 60px;
}

.about-content .col {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.card {
  border: none;
}
</style>
