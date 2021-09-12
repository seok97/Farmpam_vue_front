<template>
  <div class="myshop_main container">
    <div class="row mt-5 mb-5">
      <div class="col-10 farmerName">
        <span>{{ this.$route.params.farmer_name }}</span>
      </div>
      <div class="col-2" v-if="$store.getters.getChk == 'chk_farmer'">
        <router-link to="/shop/myshopmgmt/shoppage">
          <button>상점관리</button>
        </router-link>
      </div>
    </div>
    <div class="row sticky_top">
      <div class="col">
        <div class="row category_refs mt-5 mb-5">
          <ul class="nav category_ref justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  disabled: category_ref == 0,
                  active: category_ref != 0,
                }"
                aria-current="page"
                href="#"
                @click="changeCategory(0)"
                >전체보기</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  disabled: category_ref == 1,
                  active: category_ref != 1,
                }"
                href="#"
                @click="changeCategory(1)"
                >과일</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  disabled: category_ref == 2,
                  active: category_ref != 2,
                }"
                href="#"
                @click="changeCategory(2)"
                >채소</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  disabled: category_ref == 3,
                  active: category_ref != 3,
                }"
                href="#"
                @click="changeCategory(3)"
                >쌀/잡곡</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{
                  disabled: category_ref == 4,
                  active: category_ref != 4,
                }"
                href="#"
                tabindex="-1"
                @click="changeCategory(4)"
                >축산/계란</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row divid"></div>
    <div class="row d-flex justify-content-center">
      <ul
        v-if="goodsList.length == 0"
        class="list row row-cols-2 row-cols-sm-2 row-cols-md-3 justify-content-center mt-5 mb-5"
      >
        <span class="text-muted text-center">
          상품이 없어요 !
        </span>
      </ul>
      <ul v-else class="list row row-cols-2 row-cols-sm-2 row-cols-md-3">
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

    <div class="row">
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" v-if="pagingData.startPageNum != 1">
            <a
              v-on:click.prevent="movePage(pagingData.startPageNum - 1)"
              class="page-link"
              href=""
              >&laquo;</a
            >
          </li>
          <li class="page-item disabled" v-else>
            <a class="page-link" href="javascript:">&laquo;</a>
          </li>

          <li
            v-for="(i, index) in pageNums"
            class="page-item"
            v-bind:class="{ active: i == pagingData.pageNum }"
            :key="index"
          >
            <a v-on:click.prevent="movePage(i)" class="page-link" href="">
              {{ i }}</a
            >
          </li>
          <li
            class="page-item"
            v-if="pagingData.endPageNum < pagingData.totalPageCount"
          >
            <a
              v-on:click.prevent="movePage(pagingData.endPageNum + 1)"
              class="page-link"
              href=""
              >&raquo;</a
            >
          </li>
          <li class="page-item disabled" v-else>
            <a class="page-link" href="javascript:">&raquo;</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MyShop",
  data() {
    return {
      goodsList: [],
      farmer_name: "",
      farmer_email: "",
      pagingData: {
        pageNum: 1,
        startPageNum: 1,
        endPageNum: 0,
        totalPageCount: 0,
      },
      category: "",
      category_lows: [],
      category_top_idx: 0,
      category_ref: 0,
      buyInfo: {
        item_idx: 0,
        cart_amount: 0,
      },
    }
  },
  watch: {
    category_ref: function(current) {
      this.category_ref = current
      this.getMyList()
    },
  },
  computed: {
    pageNums() {
      // 페이지 번호 배열을 반환해주는 함수
      // startPagaNum 과 endPageNum 의 값이 변하면 자동으로 실행되어 업데이트 된다.
      const nums = []
      for (
        let i = this.pagingData.startPageNum;
        i <= this.pagingData.endPageNum;
        i++
      ) {
        nums.push(i)
      }
      return nums
    },
    ...mapState(["logintoken"]),
  },
  created() {
    this.getMyList()
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
    changeCategory(ref) {
      this.category_ref = ref
    },
    movePage(pageNum) {
      //현재 페이지를 수정하고
      this.pagingData.pageNum = pageNum
      this.getMyList()
    },
    getMyList() {
      console.log(this.$route.params.farmer_email)
      this.farmer_email = this.$route.params.farmer_email
      this.$http
        .get("/vue/myshop/list.do", {
          params: {
            farmer_email: this.farmer_email,
            pageNum: this.pagingData.pageNum,
            category_ref: this.category_ref,
          },
        })
        .then((res) => {
          console.log(res.data.goodsList)
          this.goodsList = res.data.goodsList
          this.pagingData = res.data.pagingData
          this.category_lows = res.data.category_low
        })
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.myshop_main {
  position: relative;
  margin-top: 54px;
}

.farmerName {
  font-size: 30px;
  font-weight: bold;
}

.divid {
  border: 0.5px solid black;
  margin-bottom: 30px;
}

.active {
  color: #f6b22f;
}

.sticky_top {
  position: sticky;
  top: 5px;
  z-index: 99;
}

.nav-item {
  background-color: white;
}

.list-group-item {
  border: none;
}

.thumb {
  height: 100%;
  position: relative;
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

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  border-radius: 3%;
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
