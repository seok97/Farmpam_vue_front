<template>
  <div class="insertgoods container">
    <div class="row">
      <h1>상품 추가하기</h1>
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

          <img
            v-if="goods.item_image != 'empty'"
            id="itemImage"
            :src="goods.item_image"
          />
          <img v-else id="itemImage" :src="goods.item_image" />
        </a>
        <form
          action="/item/insert.do"
          method="post"
          @submit.prevent="uploadItem()"
          ref="itmeinsertform"
        >
          <input type="hidden" name="item_image" value="empty" />
          <div>
            <label for="item_title" class="form-label">상품명</label>
            <input
              type="text"
              name="item_title"
              id="item_title"
              class="form-control"
              placeholder="상품명을 적어주세요!"
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
              <option selected value="0"
                >상품의 카테고리를 설정해 주세요</option
              >
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
          <button type="submit">상품 추가</button>
        </form>

        <form
          action="/item/private/ajax_image_upload.do"
          method="post"
          id="imageForm"
          enctype="multipart/form-data"
          ref="insertimageform"
        >
          <input
            type="file"
            name="image"
            id="image"
            accept=".jpg, .jpeg, .png, .JPG, .JPEG, .gif"
            @change="insertImage()"
            ref="insertimage"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MyGoodsInsert",
  computed: mapState(["logintoken"]),
  data() {
    return {
      category_top: 0,
      category_lows: [],
      goods: {
        item_image: "empty",
      },
    }
  },
  watch: {
    category_top: function(current) {
      this.category_top = current
      console.log(this.category_top)
      this.getCategory()
    },
  },
  created() {
    if (!this.logintoken.token) {
      this.$router.push("/shop/shoppage")
    }
  },
  methods: {
    insertImage() {
      const imageform = new FormData(this.$refs.insertimageform)
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
    clickImage() {
      this.$refs.insertimage.click()
    },
    uploadItem() {
      const formdata = new FormData(this.$refs.itmeinsertform)
      formdata.append("farmer_email", this.logintoken.email)
      this.$http
        .post("/item/private/insert.do", formdata)
        .then((res) => {
          console.log(res.data)
          if (res.data.insertItem) {
            alert("추가했습니다.")
            this.$router.push({
              name: "MyShop",
              params: {
                pagename: "shoppage",
                farmer_email: this.logintoken.email,
                farmer_name: this.logintoken.name,
              },
            })
          }
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
.insertgoods {
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
