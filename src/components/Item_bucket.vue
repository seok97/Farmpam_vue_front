<template>
  <div id="item_bucket container">
    <div class="section">
      <!-- 장바구니 상품 section -->
      <div class="section--bucket">
        <div class="buy--info">
          <p class="buy--title">장바구니</p>
        </div>
        <div class="buy--border">
          <div v-for="(tmp, idx) in items" :key="idx" class="content--inner">
            <div class="item--check">
              <input
                type="checkbox"
                class="form-check-input item--checkBox"
                v-model="checkItems"
                :value="tmp"
              />
            </div>
            <div class="content--img">
              <img v-bind:src="tmp.item_image" />
            </div>
            <div class="content--info">
              <div class="content--info--text">
                <div class="content--info--title">
                  <p>{{ tmp.item_title }}</p>
                </div>
                <div class="content--info--buynum">
                  <p>구매 수량 : {{ tmp.cart_amount }}개</p>
                </div>
              </div>
            </div>
            <div class="content--price--text">
              <div class="content--price">
                <p>{{ tmp.cart_price }} 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 총 결제금액 section -->
      <div class="section--payment">
        <div class="payment--content">
          <p class="total--title">총 결제금액</p>
          <p class="total--pay">{{ items.cart_price }}</p>
        </div>
      </div>

      <div class="section--payBtn">
        <div class="payment--btn">
          <router-link
            :to="{
              name: 'Buy',
              params: {
                pagename: 'shoppage',
                list: this.checkItems,
              },
            }"
          >
            <button class="btn btn-primary">
              결제하기
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Item_bucket",
  watch: {
    checkItemidx(current) {
      this.checkItemidx = current
      console.log(current)
    },
  },
  data() {
    return {
      items: {},
      checkItems: [],
    }
  },
  computed: mapState(["logintoken"]),
  created() {
    console.log("created")
    if (!this.logintoken.token) {
      alert("로그인 해주세요")
      this.$router.push({
        path: "/login",
      })
    }
    this.updateCart()
  },
  methods: {
    updateCart() {
      this.$http
        .get("item/private/cart.do", {
          params: {
            email: this.logintoken.email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.items = res.data.cartList
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
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

.section--bucket {
  margin: 0 75px;
  padding-top: 75px;
}

.section--payment {
  margin: 0 75px;
  padding-top: 30px;
  padding-bottom: 20px;
  float: right;
  clear: both;
}

.section--payBtn {
  margin: 0 75px;
  padding-top: 30px;
  clear: both;
  text-align: center;
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

.item--check {
  margin: auto;
  padding: 10px;
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

/* 결제금액 css */

.payment--content {
}

.payment--content .total--title {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
}

.payment--content .total--pay {
  font-size: 18px;
}
</style>
