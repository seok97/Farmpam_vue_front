<template>
  <div class="myshop_main container">
    <div class="row mt-5 mb-5">
      <div class="col-10">{{ this.$route.params.farmer_name }}의 상점</div>
      <div class="col-2">
        <button v-if="$store.getters.getToken">상점관리</button>
      </div>
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
        endPageNum: 5,
        totalPageCount: 0,
      },
      category: "",
      category_lows: [],
      category_top_idx: 0,
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
  },
  created() {
    this.getMyList()
  },
  methods: {
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
          },
        })
        .then((res) => {
          console.log(res.data)
          this.goodsList = res.data.goodsList
          this.pagingData = res.data.pagingData
          this.category_lows = res.data.category_low
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

.thumb {
  height: 100%;
  position: relative;
}

.items_iamge {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.group_btn {
  position: absolute;
  z-index: 2;
  right: 15px;
  bottom: 15px;
  width: fit-content;
}
</style>
