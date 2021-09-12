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
                <div
                  v-if="logintoken.chk != 'chk_farmer'"
                  class="group_btn"
                  @click="insertCart(item.item_idx)"
                ></div>
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
      buyInfo: {
        item_idx: 0,
        cart_amount: 0,
      },
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
            } else {
              alert("추가 실패!")
            }
          })
      }
    },
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
a {
  text-decoration: none;
}
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
  border-radius: 3%;
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

.title {
  overflow: hidden;
  max-height: 58px;
  font-weight: 400;
  font-size: 20px;
  color: #333;
  line-height: 29px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.cost {
  font-weight: 800;
  color: #333;
}

.content {
  display: block;
  padding-top: 11px;
  font-size: 13px;
  color: #999;
  line-height: 19px;
}

.group_btn {
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  right: 15px;
  bottom: 15px;
  width: fit-content;
  height: 45px;
  width: 45px;
  background: url(https://res.kurly.com/pc/ico/2010/ico_cart.svg) no-repeat 50%
    50%;
}

.group_btn:hover {
  cursor: pointer;
}
</style>
