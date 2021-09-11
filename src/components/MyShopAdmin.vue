<template>
  <div class="shopmgmt_root row d-flex justify-content-center">
    <div class="row mt-5 mb-2">
      <div class="col-2"></div>
      <div class="col-8 text-center">
        {{ logintoken.name }} 님 판매중인 상품
      </div>
      <div class="col-2">
        <button class="btn btn-primary">
          <router-link to="/shop/insertItem/shoppage">
            상품추가
          </router-link>
        </button>
      </div>
    </div>
    <div class="row divid mt-4 mb-5"></div>
    <div class="row">
      <div class="col">
        <div class="search d-flex justify-content-end">
          <input class="pikachu" type="text" />
          <div class="pikareset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              />
            </svg>
          </div>
          <div class="pikaBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <div
          v-for="(data, index) in goodsList"
          :key="index"
          class="d-flex text-muted pt-3 row"
        >
          <img
            v-if="data.item_image != 'empty'"
            :src="data.item_image"
            alt=""
            class="col-3"
          />
          <img v-else src="@/assets/images/xbox.png" alt="" class="col-3" />

          <p class="pb-3 mb-0 small lh-sm border-bottom col-5">
            <strong class="d-block text-gray-dark">{{
              data.item_title
            }}</strong>
            {{ data.item_content }}
          </p>
          <div class="col-3 d-flex justify-content-center align-items-center">
            <button class="btn btn-light">
              <router-link to="/shop/goodsupdate/shoppage" class="updatebtn">
                수정하기
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: "MyShopAdmin",
  computed: mapState(["logintoken"]),
  data() {
    return {
      goodsList: [],
    }
  },
  created() {
    if (this.logintoken.chk != "chk_farmer") {
      alert("판매자만 가능합니다.")
      this.$router.go(-1)
    }
    this.getMyGoods()
  },
  methods: {
    getMyGoods() {
      this.$http
        .get("/item/private/list_admin.do", {
          params: {
            email: this.logintoken.email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.goodsList = res.data.list
        })
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.updatebtn {
  color: black;
}

.shopmgmt_root {
  margin-top: 54px;
}

.divid {
  width: 70%;
  border: 0.5px solid black;
}

.search {
  position: relative;
}

.pikachu {
  width: 242px;
  height: 36px;
  padding: 0 60px 0 14px;
  border: 1px solid #f7f7f6;
  border-radius: 18px;
  background-color: #f7f7f7;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 12px;
  color: #666;
  line-height: 16px;
  outline: none;
}

.pikareset {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  right: 30px;
  top: 0px;
  width: 36px;
  height: 36px;
  border: 0 none;
  font-size: 0;
}

.pikaBtn {
  position: absolute;
  right: 5px;
  top: 3px;
  width: 30px;
  height: 30px;
}
</style>
