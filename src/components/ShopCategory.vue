<template>
  <div class="shop_category container align-items-center">
    <div class="row">
      <img
        src="https://img-cf.kurly.com/category/banner/pc/c7d4c66b-d0da-4486-a67c-c56d3c3dc69a"
        alt=""
      />
    </div>
    <div class="row">
      <div class="col">
        <div class="row category_top">
          <button class="btn" @click="selCateLow(0)">
            <h1>{{ category }}</h1>
          </button>
        </div>
        <div class="row category_lows">
          <ul
            class="list-group list-group-horizontal-sm flex-fill row row-cols-1 row-cols-sm-2 row-cols-md-5"
          >
            <li class="list-group-item">
              <button
                type="button"
                class="btn"
                @click="selCateLow(0)"
                :class="{
                  active_category: category_top_idx == 0,
                }"
              >
                전체보기
              </button>
            </li>
            <li
              v-for="(cate, index) in category_lows"
              :key="index"
              class="list-group-item"
            >
              <button
                type="button"
                class="btn"
                @click="selCateLow(cate.item_category_top_idx)"
                :class="{
                  active_category:
                    cate.item_category_top_idx == category_top_idx,
                }"
              >
                {{ cate.item_category_low_name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">정렬버튼</div>
      </div>
      <div class="list_goods row justify-content-center">
        <div class="row">
          <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-3">
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
  name: "ShopCategory",
  data() {
    return {
      categoryNum: this.$route.params.category,
      category: "",
      category_lows: [],
      category_top_idx: 0,
      pagingData: {
        pageNum: 1,
        startPageNum: 1,
        endPageNum: 5,
        totalPageCount: 0,
      },
      keyword: "",
      condition: "",
      list: [],
    }
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
  watch: {
    "$route.params.category": function(current) {
      this.categoryNum = current
      this.category_top_idx = 0
      this.changeCate(current)
      this.getGoodsList()
    },
  },
  created() {
    this.changeCate(this.$route.params.category)
    this.getGoodsList()
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
    selCateLow(top_idx) {
      this.category_top_idx = top_idx
      this.getGoodsList()
    },
    changeCate(param) {
      if (param == 1) {
        this.category = "과일"
      } else if (param == 2) {
        this.category = "채소"
      } else if (param == 3) {
        this.category = "쌀/잡곡"
      } else if (param == 4) {
        this.category = "축산/계란"
      }
    },
    getGoodsList() {
      this.$http
        .get("vue/item/list.do", {
          params: {
            pageNum: this.pagingData.pageNum,
            category_ref: this.categoryNum,
            category_top_idx: this.category_top_idx,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.list = res.data.goodsList
          this.category_lows = res.data.category_low
          this.pagingData = res.data.pagingData
        })
        .catch((e) => {
          console.log(e)
        })
    },
    movePage(pageNum) {
      //현재 페이지를 수정하고
      this.pagingData.pageNum = pageNum
      this.getGoodsList()
    },
  },
}
</script>

<style scoped>
.shop_category {
  margin-top: 54px;
}

.category_lows {
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
}

.category_lows ul {
  margin: 0;
  padding: 0;
}

.active_category {
  color: #00d458;
  font-weight: bold;
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
