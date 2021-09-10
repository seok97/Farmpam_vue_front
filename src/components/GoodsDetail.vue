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
                  ><button type="button" class="btn down on">-</button>
                  <input type="number" readonly="readonly" />
                  <button type="button" class="btn up on">
                    +
                  </button></span
                >
              </div>
            </li>
            <li class="row mt-4 total_price">
              <div class="col">상품 총 가격</div>
              <div class="col">xxxxx 원</div>
            </li>
          </ul>
        </div>
        <div class="row">
          <button>장바구니</button>
        </div>
      </div>
    </div>
    <div class="row recommend"><h1>상품 추천 카로셀</h1></div>
    <div class="row explain"><h1>상품 설명</h1></div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  data() {
    return {
      goodsData: {},
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
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
