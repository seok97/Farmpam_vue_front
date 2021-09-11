<template>
  <div id="item_buy">
    <div class="section">
      <!-- 구매 상품 section -->

      <div class="section--buy">
        <div class="buy--info">
          <p class="buy--title">구매 상품</p>
        </div>
        <div class="buy--border">
          <div v-for="tmp in list" :key="tmp.item_idx" class="content--inner">
            <div class="content--img">
              <img v-bind:src="tmp.item_image" />
            </div>
            <div class="content--info">
              <div class="content--info--text">
                <div class="content--info--title">
                  <p>{{ tmp.item_title }}</p>
                </div>
                <div class="content--info--buynum">
                  <p>구매 수량 : {{ tmp.item_num }}개</p>
                </div>
              </div>
            </div>
            <div class="content--price--text">
              <div class="content--price">
                <p>{{ tmp.item_price }} 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 배송지 정보 section -->

      <div class="section--destination">
        <div class="destination--title">
          <p>배송지 정보</p>
        </div>
        <div class="destination--inner">
          <div class="destination--content">
            <div class="destination--check">
              <input
                type="checkbox"
                name="customer_check"
                id="customer_check"
              />
              <label for="customer_check" @click="getList"
                >구매자 정보가 맞습니다.</label
              >
            </div>
            <div class="destination--customer">
              <div class="customer--info">
                <form action="">
                  <div class="row g-2 input__group1">
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          value=""
                        />
                        <label for="name">받는 분 성함</label>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          name="phone"
                          id="phone"
                        />
                        <label for="phone">받는 분 전화번호</label>
                      </div>
                    </div>
                  </div>
                  <div class="row g-2 input__group2">
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          name="addr"
                          id="addr"
                        />
                        <label for="addr">받는 분 주소</label>
                      </div>
                    </div>
                    <div class="col-md addr--btn">
                      <button class="btn btn-primary">주소검색</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          name="addr_detail"
                          id="addr_detail"
                        />
                        <label for="addr_detail">받는 분 상세주소</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="destination--blank"></div>
        </div>
      </div>

      <!-- 결제수단 section -->

      <div class="section--pay">
        <div class="pay--border">
          <div class="pay--inner">
            <div class="pay--title">
              <p>결제 수단</p>
            </div>
            <div class="pay--content">
              <div class="pay--method">
                <div class="pay--naver">
                  <input type="radio" id="pay_naver" name="pay_naver" />
                  <label for="pay_naver">네이버 페이</label>
                </div>
                <div class="pay--kakao">
                  <input type="radio" id="pay_kakao" name="pay_kakao" />
                  <label for="pay_kakao">카카오 페이</label>
                </div>
              </div>
            </div>
          </div>
          <div class="totalPay--inner">
            <div class="totalPay--content">
              <p class="total--title">총 결제금액</p>
              <p class="total--pay">50,000원</p>
            </div>
          </div>
        </div>
      </div>

      <div class="section--Payment text-center">
        <button class="btn btn-primary">결제하기</button>
      </div>
    </div>
  </div>
</template>

<script>
let list = [
  {
    item_idx: 0,
    item_title: "귤 1kg",
    item_price: 1000,
    item_image: require("../assets/images/xbox.png"),
    item_num: "5",
  },
  {
    item_idx: 1,
    item_title: "밤 1kg",
    item_price: 12312,
    item_image: require("../assets/images/xbox.png"),
    item_num: "10",
  },
  {
    item_idx: 2,
    item_title: "감 1kg",
    item_price: 55555,
    item_image: require("../assets/images/xbox.png"),
    item_num: "12",
  },
]

export default {
  name: "Item_buy",
  data() {
    return {
      list,

      userList: [
        {
          users_name: "이충근",
          users_number: "0100000000",
          users_addr: "경기도 하남시 아리수로 565",
          users_addr_detail: "하이하이",
        },
      ],
    }
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

.section {
  position: relative;
  padding: 75px 0;
}

.inner {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
}

/* section css  */

.section {
  border: 1px solid #cecece;
  margin: 0px 150px;
  border-style: none;
  min-width: 800px;
}

.section--buy {
  margin: 0 75px;
  padding-top: 75px;
}

.section--destination {
  margin: 0 75px;
  padding-top: 30px;
}

.section--pay {
  margin: 0 75px;
  margin-bottom: 20px;
}

/* 구매 상품 css */

.buy--title {
  font-size: 30px;
  font-weight: 1000;
  padding-bottom: 30px;
  padding-left: 20px;
}

.buy--border {
  border: 2px #cecece;
  border-style: solid none none none;
}

.content--inner {
  padding: 50px 0px;
  border: 2px #cecece;
  border-style: none none solid none;
  display: flex;
}

.content--img {
  margin-left: 20px;
}

.content--img img {
  width: 250px;
  height: 200px;
}

.content--info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 5;
  padding-left: 20px;
}

@media screen and (max-width: 900px) {
  .content--info--text {
    display: none;
  }
}

.content--info--title {
  font-size: 30px;
  margin-bottom: 30px;
  font-weight: 900;
}

.content--info--buynum {
  font-size: 15px;
}

.content--price--text {
  font-weight: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  font-size: 30px;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .content--price {
    display: none;
  }
}

/* 배송지 정보 css */

.destination--inner {
  display: flex;
}

.destination--title {
  font-size: 30px;
  font-weight: 1000;
  padding-bottom: 50px;
  padding-left: 20px;
}

.destination--content {
  padding-bottom: 50px;
  flex-grow: 3;
}

.destination--check {
  padding-left: 30px;
}

.destination--customer {
  padding-top: 30px;
}

.customer--info {
  margin-left: 20px;
}

.destination--customer .input__group1 {
  margin-bottom: 30px;
}

.destination--customer .input__group2 {
  margin-bottom: 30px;
}

.addr--btn {
  display: flex;
}

.destination--blank {
  flex-grow: 2;
}

/* 결제 수단 css */

.pay--border {
  border: 2px #cecece;
  border-style: solid none none none;
  display: flex;
  padding-bottom: 50px;
}

.pay--inner {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
}

.pay--title {
  font-size: 30px;
  font-weight: 1000;
  padding-top: 30px;
  padding-left: 20px;
  padding-bottom: 50px;
}

.pay--content {
  flex-grow: 1;
}

.pay--method {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  font-size: 15px;
}

.pay--method .pay--naver {
  margin-bottom: 20px;
}

.totalPay--inner {
  border: 2px solid #cecece;
  border-style: none none none solid;
  display: flex;
  text-align: center;
  flex-grow: 1;
}

.totalPay--inner .totalPay--content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

.totalPay--content .total--title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 30px;
}

.totalPay--content .total--pay {
  font-size: 18px;
}
</style>
