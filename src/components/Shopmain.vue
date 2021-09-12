<template>
  <div class="shopmain container-fluid d-flex flex-column">
    <div class="row">
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
            Colored with scrolling
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
    </div>

    <div class="section row reco d-flex justify-content-center">
      <div class="row">
        <router-link to="/shop/more/shoppage/new" class="nav-link">
          <h1>지금 가장 신선한 상품</h1>
        </router-link>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="list_goods row justify-content-center">
          <div class="row d-flex justify-content-center">
            <ul class="list row row-cols-1 row-cols-md-2 row-cols-xxl-4">
              <li
                v-for="(item, index) in itemList.newList"
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
                      <span class="cost mt-1 mb-1"
                        >{{ item.item_price }} 원</span
                      >
                      <span class="content"
                        >{{ item.item_content.substring(0, 60) }}...
                      </span>
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section row sale">
      <div class="row">
        <router-link to="/shop/more/shoppage/close" class="nav-link">
          <h1>품절 임박 상품</h1>
        </router-link>
      </div>
      <div class="row">
        <div class="list_goods row justify-content-center">
          <div class="row">
            <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-4">
              <li
                v-for="(item, index) in itemList.closeList"
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
    </div>

    <div class="section row hots">
      <div class="row">
        <router-link to="/shop/more/shoppage/vegan" class="nav-link">
          <h1>지구를 위해 채식 실천하기</h1>
        </router-link>
      </div>
      <div class="row">
        <div class="list_goods row justify-content-center">
          <div class="row">
            <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-4">
              <li
                v-for="(item, index) in itemList.veganList"
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
    </div>

    <div class="section row snss">
      <h1>인스타그램 후기</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "Shopmain",
  computed: mapState(["logintoken"]),
  data() {
    return {
      itemList: {},
    }
  },
  created() {
    this.getMainList()
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
    getMainList() {
      this.$http.get("/vue/shopmain.do").then((res) => {
        console.log(res.data)
        this.itemList = res.data
      })
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: grey;
}

.shopmain {
  margin-top: 54px;
}

.section {
  padding: 50px 80px;
}

.sale {
  background-color: rgb(247, 247, 247);
}

.list-group-item {
  border: none;
  height: fit-content;
}

.itemLink {
  height: 100%;
}

.item {
  height: 100%;
  border: 0.6px gainsboro solid;
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
