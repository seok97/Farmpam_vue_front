<template>
  <div class="buylist container">
    <div class="row">
      <div class="section--buy">
        <div class="buy--info">
          <p class="buy--title">구매 상품</p>
        </div>
        <div class="buy--border">
          <div
            v-if="list.length == 0"
            class="d-flex justify-content-center align-items-center"
          >
            주문 상품이 없어요 !
          </div>
          <div
            v-else
            v-for="tmp in list"
            :key="tmp.item_idx"
            class="content--inner"
          >
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
                <p>{{ tmp.orders_price }} 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "BuyList",
  data() {
    return {
      list: [],
    }
  },
  computed: mapState(["logintoken"]),
  created() {
    if (!this.logintoken.token) {
      this.$router.push("/shop/shoppage")
    }
    this.getList()
  },
  methods: {
    getList() {
      this.$http
        .get("/item/private/usersOrderManage.do", {
          params: {
            email: this.logintoken.email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.list = res.data.usersOrdersList
        })
    },
  },
}
</script>

<style scoped>
.buylist {
  margin-top: 54px;
}
</style>
