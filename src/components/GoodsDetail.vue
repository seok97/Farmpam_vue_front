<template>
  <div class="goods_detail container">
    <div class="row goodsInfo">
      <div class="col-12 col-md-6 justify-content-center">
        <div class="image_wrapper">
          <img
            v-if="goodsData.item_image != 'empty'"
            :src="goodsData.item_image"
            alt=""
          />
          <img
            v-else
            class="item_iamge"
            src="@/assets/images/xbox.png"
            alt="fail"
          />
        </div>
      </div>
      <div
        class="col-12 col-md-6 d-flex justify-content-between flex-column mt-5"
      >
        <div class="row">
          <div class="row goods_farmer mb-3 pb-2">
            <router-link
              class="myshopanc col-12 col-md-3 d-flex"
              :to="{
                name: 'MyShop',
                params: {
                  pagename: 'shoppage',
                  farmer_email: goodsData.farmer_email,
                  farmer_name: goodsData.farmer_name,
                },
              }"
            >
              <span>
                {{ goodsData.farmer_name }}
              </span>
            </router-link>
          </div>
          <div class="row goods_title">
            {{ goodsData.item_title }}
          </div>
          <div class="row text-muted">{{ goodsData.item_content }}</div>
        </div>
        <div class="row goods_price">
          <span>{{ goodsData.item_price }} <span class="won">원</span></span>
        </div>
        <div class="row">
          <ul class="col">
            <li class="row mt-4 bt_divider">아이템 판매단위</li>
            <li class="row mt-4 bt_divider">중량</li>
            <li class="row mt-4 bt_divider">배송구분</li>
            <li class="row mt-4 bt_divider">원산지</li>
            <li class="row mt-4 bt_divider">
              <div class="col">개수 선택</div>
              <div class="col">
                <span class="count"
                  ><button
                    @click="amountminus()"
                    type="button"
                    class="btn down on"
                  >
                    -
                  </button>
                  <input v-model="buyInfo.cart_amount" type="number" />
                  <button @click="amountplus()" type="button" class="btn up on">
                    +
                  </button></span
                >
              </div>
            </li>
            <li class="row mt-4 total_price">
              <div class="col">상품 총 가격</div>
              <div class="col">
                {{ buyInfo.cart_amount * goodsData.item_price }} 원
              </div>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <button
              @click="insertCart(goodsData.item_idx)"
              class="btn btn-secondary"
            >
              장바구니 담기
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button class="btn btn-secondary" @click="buynow()">
              바로구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row recommend"><h1>상품 추천 카로셀</h1></div>
    <div class="row explain"><h1>상품 설명</h1></div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "GoodsDetail",
  computed: mapState(["logintoken"]),
  watch: {
    cart_amount(current) {
      this.cart_amount = current
      this.buyInfo.cart_price = current * this.goodsData.item_price
    },
  },
  data() {
    return {
      goodsData: {},
      buyInfo: {
        item_idx: 0,
        cart_amount: 0,
      },
    }
  },

  created() {
    this.getGoods()
  },
  methods: {
    amountplus() {
      this.buyInfo.cart_amount++
    },
    amountminus() {
      if (this.buyInfo.cart_amount > 0) {
        this.buyInfo.cart_amount--
      }
    },
    buynow() {
      if (!this.logintoken.token) {
        alert("로그인해야 장바구니에 담을 수 있어요")
      } else if (this.buyInfo.cart_amount <= 0) {
        alert("상품개수를 선택해 주세요 !")
      } else {
        this.$http
          .get("/item/private/addcart.do", {
            params: {
              item_idx: this.goodsData.item_idx,
              email: this.logintoken.email,
              cart_amount: this.buyInfo.cart_amount,
            },
          })
          .then((res) => {
            console.log(res.data)
            if (res.data.isSuccess) {
              this.$router.push({ path: "/shop/buy/shoppage" })
            } else if (res.data.exists) {
              alert("이미 장바구니에 있는 상품입니다.")
              this.$router.push({
                name: "Cart",
                params: {
                  pagename: "shoppage",
                },
              })
            } else {
              alert("추가 실패!")
            }
          })
      }
    },
    insertCart(idx) {
      console.log(idx)
      console.log(this.logintoken.email)
      if (!this.logintoken.token) {
        alert("로그인해야 장바구니에 담을 수 있어요")
      } else {
        this.$http
          .get("/item/private/addcart.do", {
            params: {
              item_idx: idx,
              email: this.logintoken.email,
              cart_amount: this.buyInfo.cart_amount,
            },
          })
          .then((res) => {
            console.log(res.data)
            if (res.data.isSuccess) {
              alert("장바구니 추가완료!")
            } else if (res.data.exists) {
              alert("이미 장바구니에 있는 상품입니다.")
              this.$router.push({
                name: "Cart",
                params: {
                  pagename: "shoppage",
                },
              })
            } else {
              alert("추가 실패!")
            }
          })
      }
    },
    getGoods() {
      const idx = this.$route.params.itemId
      this.$http
        .get("/vue/item/detail.do", {
          params: {
            item_idx: idx,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.goodsData = res.data.goodsData
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped>
.goods_detail {
  margin-top: 54px;
}

.myshopanc {
  text-decoration: none;
  color: rgb(78, 78, 78);
  font-size: 20px;
}

.item_iamge {
  width: 100%;
}

.bt_divider {
  border-bottom: 1px solid #f4f4f4;
}

.goods_farmer {
  border-bottom: 1px solid black;
}

.goods_title {
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  word-break: break-all;
}

.goods_price,
.total_price {
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0;
  word-break: break-all;
}

.won {
  vertical-align: 2px;
  padding: 0 7px 0 2px;
  font-size: 18px;
}
</style>
