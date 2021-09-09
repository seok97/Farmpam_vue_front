<template>
  <div class="myshop_main container">
    <div class="row mt-5">
      <div class="col-10">{{ farmer_name }}의 상점</div>
      <div class="col-2"><button>상점관리</button></div>
    </div>
    <div class="row divid"></div>
    <div class="row">
      <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-3">
        <li
          v-for="(item, index) in goodsList"
          :key="index"
          class="list-group-item"
        >
          <div class="item">
            <div class="row thumb">
              <router-link
                :to="{
                  name: 'GoodsDetail',
                  params: { pagename: 'shoppage', itemId: item.item_idx },
                }"
                class="itemLink"
              >
                <img
                  v-if="item.item_image != 'empty'"
                  class="items_iamge"
                  :src="item.item_image"
                  alt=""
                />
                <img
                  v-else
                  class="items_iamge"
                  src="@/assets/images/xbox.png"
                  alt=""
                />
              </router-link>
              <div class="group_btn">
                <button>장바구니/좋아요</button>
              </div>
            </div>
            <div class="row info">
              <router-link to="" class="row">
                <span class="title">{{ item.item_title }}</span>
                <span class="cost">{{ item.item_price }} 원</span>
                <span class="content">{{ item.item_content }}</span>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyShop",
  data() {
    return {
      goodsList: [],
      farmer_name: "",
      farmer_email: "",
    }
  },
  created() {
    this.getMyList()
  },
  methods: {
    getMyList() {
      console.log(this.$route.params.farmer_email)
      this.farmer_email = this.$route.params.farmer_email
      this.farmer_name = this.$route.params.farmer_name
      this.$http
        .get("/vue/myshop/list.do", {
          params: {
            farmer_email: this.farmer_email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.goodsList = res.data.goodsList
        })
    },
  },
}
</script>

<style scoped>
.myshop_main {
  margin-top: 54px;
}

.divid {
  border: 0.5px solid black;
}
</style>
