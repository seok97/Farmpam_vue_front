<template>
  <div class="container overflow-hidden">
    <div class="background-img"></div>
    <div class="backgrounds overlay">
			<div class="background" data-aos="fade-in" data-aos-duration="1500" data-aos-anchor=".section--hero" style="background-image: url(../assets/images/jimmy.jpg);"></div>
		</div>

		<header class="hero">
			<div class="hero-center ">
				<h1 class="hero__logo" data-aos="zoom-in">AOS</h1>
				<h2 class="hero__text" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Animate On Scroll <span>Library</span></h2>
			</div>
			<span class="hero__scroll" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1000">
				
				<i class="chevron bottom"></i>
			</span>
			<a href="http://github.com/michalsnik/aos" target="_blank" class="octocat" data-aos="zoom-out" data-aos-delay="1500">
				<img src="img/github_octocat.png" alt="">
			</a>
		</header>

    <div class="inner d-flex justify-content-item align-items-center flex-column">
      <!-- card 1 -->
      <div data-aos="fade-down" class="d-flex justify-content-start about-left" data-aos-easing="ease-in-out" data-aos-delay="300">
        <div class="col d-flex cardwrapper">
          <div class="card mb-3">
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
                    "김다연" <br/>
                    통찰력 있는 선지자, 예언자형 
                  </h5>
                  <p class="card-text">
                    Phone: 010-8994-3693 <br/>
                    Email: d__y7@naver.com <br/>
                    Github: https://github.com/dy0712
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- card 2 -->
      <div data-aos="fade-down" class="float-end about-right" data-aos-easing="ease-in-out" data-aos-delay="500">
        <div class="col d-flex cardwrapper">
          <div class="card mb-3">
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
                    "고현석" <br />
                    재기발랄한 활동가, 스파크형 
                  </h5>
                  <p class="card-text">
                    Phone: 010-9075-7728 <br/>
                    Email: manic9075@gmail.com <br/>
                    Github: https://github.com/hs-keko
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- card  3-->
      <div data-aos="fade-down" class="float-start about-left" data-aos-easing="ease-in-out" data-aos-delay="500">
        <div class="col d-flex cardwrapper">
          <div class="card mb-3">
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
                    "석우현" <br/>
                    객관적인 분석가, 아이디어 뱅크형 
                  </h5>
                  <p class="card-text">
                    Phone: 010-3349-5584 <br/>
                    Email: slgo123@naver.com <br/>
                    Github: https://github.com/seok97
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- card 4 -->
      <div data-aos="fade-down" class="float-end about-right" data-aos-easing="ease-in-out" data-aos-delay="500">
        <div class="col d-flex cardwrapper">
          <div class="card mb-3">
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
                    "이다영" <br/>
                    호기심 많은 예술가, 성인군자형 
                  </h5>
                  <p class="card-text">
                    Phone: 010-2730-5994 <br/>
                    Email: dayoung5263@gmail.com <br/>
                    Github: https://github.com/dayoung1227
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- card 5 -->
      <div data-aos="fade-down" class="float-start about-left mb-5" data-aos-easing="ease-in-out" data-aos-delay="500">
        <div class="col d-flex cardwrapper">
          <div class="card mb-3">
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
                    "이충근" <br/>
                    청렴결백 논리주의자, 세상의 소금형 
                  </h5>
                  <p class="card-text">
                    Phone : 010-6734-6400 <br/>
                    Email: cndrms46@naver.com <br/>
                    Github: https://github.com/LCG1997
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  export default{
    name: "About",
    data(){
      return{
        msg:'안녕하세요'
      } 
    }      
  }
</script>

<style scoped>

.background-img {
  background-image: url("../assets/images/about1.jpg");
  width: 100%;
  height: 180vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;

}

.card {
  border: none;
  width: 150%;
}
.card-title {
  font-style: bold;
}

.hero{
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;
}

.hero-center {
  top:50%;
  width: 100%;
  position: absolute;
  left: 0;
}

.about-left {
  margin-top:100px;
  width: 50%;
}

.about-right {
  margin-top:100px;
  width: 50%;
}


.cardwrapper {
  width:fit-content;
}

.img-fluid {
  width: 150%;
  
}

</style>
