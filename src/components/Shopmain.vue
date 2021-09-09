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
          <h1>이 상품 어때요?</h1>
        </a>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-6"
          v-for="(item, index) in itemList"
          v-bind:key="index"
        >
          <router-link
            :to="{
              name: 'GoodsDetail',
              params: { pagename: 'shoppage', itemId: item.item_idx },
            }"
          >
            <div v-if="index < 4" class="card h-100">
              <img
                v-bind:src="item.item_image"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  {{ item.item_content }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="section row sale">
      <div class="row">
        <a href="">
          <h1>놓치면 후회할 가격</h1>
        </a>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-6"
          v-for="(item, index) in itemList"
          v-bind:key="index"
        >
          <div v-if="index < 4" class="card h-100">
            <img v-bind:src="item.item_image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                {{ item.item_content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section row hots">
      <div class="row">
        <a href="">
          <h1>지금 가장 핫한 상품</h1>
        </a>
      </div>
      <div class="row">
        <div
          class="col-md-3 col-6"
          v-for="(item, index) in itemList"
          v-bind:key="index"
        >
          <div v-if="index < 4" class="card h-100">
            <img v-bind:src="item.item_image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                {{ item.item_content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section row snss">
      <h1>인스타그램 후기</h1>
    </div>
  </div>
</template>

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
</style>

<script>
import { list } from "./test"

export default {
  name: "Shopmain",

  data() {
    return {
      itemList: list,
    }
  },
}
</script>
