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

    <div class="section row reco">
      <div class="row">
        <a href="">
          <h1>지금 가장 신선한 상품</h1>
        </a>
      </div>
      <div class="row">
        <div class="list_goods row justify-content-center">
          <div class="row">
            <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-4">
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
                    >
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
    </div>

    <div class="section row sale">
      <div class="row">
        <a href="">
          <h1>품절 임박 상품</h1>
        </a>
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
                    >
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
    </div>

    <div class="section row hots">
      <div class="row">
        <a href="">
          <h1>지구를 위해 채식 실천하기</h1>
        </a>
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
                    >
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
