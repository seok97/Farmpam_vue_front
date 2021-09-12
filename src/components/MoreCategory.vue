<template>
  <div class="more_root container">
    <div class="row">
      <div class="col">정렬버튼</div>
    </div>
    <div class="list_goods row justify-content-center">
      <div class="row">
        <ul
          v-if="list.length == 0"
          class="list row row-cols-2 row-cols-sm-2 row-cols-md-3 justify-content-center mt-5 mb-5"
        >
          <span class="text-muted text-center">
            상품이 없어요 !
          </span>
        </ul>
        <ul v-else class="list row row-cols-2 row-cols-sm-2 row-cols-md-3">
          <li
            v-for="(item, index) in list"
            :key="index"
            class="list-group-item "
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
                <div v-if="logintoken.chk != 'chk_farmer'" class="group_btn">
                  <button @click="insertCart(item.item_idx)">
                    장바구니/좋아요
                  </button>
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
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "MoreCategory",
  data() {
    return {
      list: [],
      category: "",
    }
  },
  computed: mapState(["logintoken"]),
  watch: {
    "$route.params.category": function(current) {
      this.category = current
      console.log(this.category)
      this.getList()
    },
  },
  created() {
    this.category = this.$route.params.category
    this.getList()
  },
  methods: {
    getList() {
      this.$http
        .get("/vue/shopmain/list.do", {
          params: {
            category: this.category,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.list = res.data.list
        })
    },
  },
}
</script>

<style scoped>
.more_root {
  margin-top: 54px;
}

.list-group-item {
  border: none;
}

.itemLink {
  height: 100%;
}

.item {
  height: 100%;
  border: 1px black solid;
}

.thumb {
  position: relative;
  height: 80%;
}

.items_iamge {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.group_btn {
  position: absolute;
  z-index: 2;
  right: 15px;
  bottom: 15px;
  width: fit-content;
}
</style>
