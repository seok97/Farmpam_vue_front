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
          <h1>{{ category }}</h1>
        </div>
        <div class="row category_lows">
          <ul
            class="list-group list-group-horizontal-sm flex-fill row row-cols-1 row-cols-sm-2 row-cols-md-5"
          >
            <li
              v-for="(cate, index) in category_lows"
              :key="index"
              class="list-group-item"
            >
              {{ cate }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">정렬버튼</div>
      </div>
      <div class="list_goods row">
        <div class="row">
          <ul class="list row row-cols-2 row-cols-sm-2 row-cols-md-3">
            <li
              v-for="(item, index) in list"
              :key="index"
              class="list-group-item "
            >
              <div class="item">
                <div class="row thumb">
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
                  <div class="group_btn">
                    <button>장바구니/좋아요</button>
                  </div>
                </div>
                <div class="row info">
                  <span class="title">{{ item.item_title }}</span>
                  <span class="cost">{{ item.item_price }} 원</span>
                  <span class="content">{{ item.item_content }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCategory",
  data() {
    return {
      categoryNum: this.$route.params.category,
      category: "",
      category_lows: [],
      pageNum: 1,
      keyword: "",
      condition: "",
      list: [],
    }
  },
  watch: {
    "$route.params.category": function(current) {
      this.categoryNum = current
      this.changeCate(current)
      this.getGoodsList()
    },
  },
  created() {
    this.changeCate(this.$route.params.category)
    this.getGoodsList()
  },
  methods: {
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
            pageNum: this.pageNum,
            category_ref: this.categoryNum,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.list = res.data.goodsList
          this.category_lows = res.data.category_low
        })
        .catch((e) => {
          console.log(e)
        })
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

.list-group-item {
  border: none;
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
