<template>
  <div class="shop_category container align-items-center">
    <div class="row">
      <div class="col">
        <div class="list_goods row justify-content-center">
          <div class="row d-flex justify-content-center">
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
  </div> 
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
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
  created() {
    this.getGoodsList()
  },
  selCateLow(top_idx) {
      this.category_top_idx = top_idx
      this.getGoodsList()
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
a {
  text-decoration: none;
}

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
  color: #f6b22f;
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