<template>
  <div class="mygoodsupdate container">
    <div class="row">
      <h1>상품 수정하기</h1>
    </div>
    <div class="row">
      <div class="container">
        <a id="imageLink" href="javascript:" @click="clickImage()">
          <svg
            id="itemImage"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>

          <img id="itemImage" :src="goods.item_image" />
        </a>

        <form
          action="/item/update.do"
          method="post"
          @submit.prevent="updateItem()"
          ref="itemupdateform"
        >
          <input
            v-if="goods.item_image != 'empty'"
            type="hidden"
            name="item_image"
            :value="goods.item_image"
          />
          <input v-else type="hidden" name="item_image" value="empty" />

          <div>
            <label for="item_title" class="form-label">상품명</label>
            <input
              type="text"
              name="item_title"
              id="item_title"
              class="form-control"
              placeholder="상품명을 적어주세요!"
              v-model="goods.item_title"
            />
          </div>
          <div>
            <label for="item_content" class="form-label">설명</label>
            <input
              maxlength="30"
              type="text"
              name="item_content"
              id="item_content"
              class="form-control"
              placeholder="간단한 설명을 적어주세요!"
              v-model="goods.item_content"
            />
          </div>
          <div>
            <label for="item_price" class="form-label">가격</label>
            <input
              type="number"
              name="item_price"
              id="item_price"
              class="form-control"
              placeholder="상품의 가격"
              v-model="goods.item_price"
            />
          </div>
          <div>
            <label for="item_stock" class="form-label">재고</label>
            <input
              type="number"
              name="item_stock"
              id="item_stock"
              class="form-control"
              placeholder="상품의 재고"
              v-model="goods.item_stock"
            />
          </div>
          <div>
            <label for="item_category_top_ref" class="form-label"
              >카테고리 선택</label
            >
            <select
              class="form-select"
              aria-label="Default select example"
              id="item_category_top_ref"
              name="item_category_top_ref"
              v-model="category_top"
            >
              <option value="0">상품의 카테고리를 설정해 주세요</option>
              <option value="1">과일</option>
              <option value="2">채소</option>
              <option value="3">쌀/잡곡</option>
              <option value="4">축산/계란</option>
            </select>
          </div>
          <div v-if="this.category_top != 0">
            <label for="item_category_top_idx" class="form-label"
              >세부 카테고리 선택</label
            >
            <select
              class="form-select"
              aria-label="Default select example"
              id="item_category_top_idx"
              name="item_category_top_idx"
            >
              <option selected>세부 카테고리를 설정해 주세요</option>
              <option
                v-for="(low, index) in category_lows"
                :key="index"
                :value="low.item_category_top_idx"
                >{{ low.item_category_low_name }}</option
              >
            </select>
          </div>
          <button type="submit">상품 수정</button>
        </form>
        이미지 넣기
        <form
          action="/item/private/ajax_image_upload.do"
          method="post"
          id="imageForm"
          enctype="multipart/form-data"
          ref="updateimageform"
        >
          <input
            type="file"
            name="image"
            id="image"
            accept=".jpg, .jpeg, .png, .JPG, .JPEG, .gif"
            ref="updateimage"
            @change="updateImage()"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MygoodsUpdate",
  computed: mapState(["logintoken"]),
  data() {
    return {
      goods: {},
      category_top: 0,
      category_top_idx: 0,
      category_lows: [],
    }
  },
  watch: {
    goods: function(current) {
      this.goods = current
      this.category_top = current.item_category_top_ref
      this.category_top_idx = current.item_category_top_idx
    },
    category_top: function(current) {
      this.category_top = current
      this.getCategory()
    },
  },
  created() {
    if (!this.logintoken.token) {
      this.$router.push("/shop/shoppage")
    }
    this.getItem(this.$route.params.itemidx)
  },
  methods: {
    clickImage() {
      this.$refs.updateimage.click()
    },
    updateImage() {
      const imageform = new FormData(this.$refs.updateimageform)
      this.$http
        .post("/item/private/ajax_image_upload.do", imageform)
        .then((res) => {
          console.log(res.data)
          this.goods.item_image =
            window.location.pathname.substring(
              0,
              window.location.pathname.indexOf("/", 2)
            ) + res.data.imagePath
        })
    },
    updateItem() {
      if (this.category_top <= 0) {
        alert("카테고리를 선택해 주세요")
      } else {
        const formdata = new FormData(this.$refs.itemupdateform)
        console.log(this.goods.item_idx)
        formdata.append("email", this.logintoken.email)
        formdata.append("item_idx", this.goods.item_idx)
        this.$http
          .post("/item/private/update.do", formdata)
          .then((res) => {
            console.log(res.data)
            if (res.data.updateItem) {
              alert("수정했습니다.")
              this.$router.push({
                name: "MyShop",
                params: {
                  pagename: "shoppage",
                  farmer_email: this.logintoken.email,
                  farmer_name: this.logintoken.name,
                },
              })
            } else {
              alert("수정 실패")
            }
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
    getItem(idx) {
      this.$http
        .get("/vue/item/detail.do", {
          params: {
            item_idx: idx,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.goods = res.data.goodsData
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getCategory() {
      this.$http
        .get("/vue/categorylow.do", {
          params: {
            category_ref: this.category_top,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.category_lows = res.data.category_low
        })
    },
  },
}
</script>

<style scoped>
.mygoodsupdate {
  margin-top: 54px;
}

.form-label {
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
</style>
