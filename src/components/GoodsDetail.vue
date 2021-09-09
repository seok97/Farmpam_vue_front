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
          <router-link
            :to="{
              name: 'MyShop',
              params: {
                pagename: 'shoppage',
                farmername: goodsData.farmer_email,
              },
            }"
          >
            <div class="row goods_farmer">
              <div class="col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
                  />
                </svg>
              </div>
              <div class="col">{{ goodsData.farmer_email }}</div>
            </div>
          </router-link>
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
