<template>
  <div class="shopmain container-fluid d-flex flex-column">
    <div class="row">
      <!-- 과일 | 채소 | 곡류 | 축산/계란 -->

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          전체 카테고리
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button class="dropdown-item" type="button">과일</button>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              Enable body scrolling
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">채소</button>
          </li>
          <li>
            <button class="dropdown-item" type="button">곡류</button>
          </li>
          <li>
            <button class="dropdown-item" type="button">축산/계란</button>
          </li>
        </ul>
      </div>

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
let list = [
  {
    item_idx: 0,
    item_title: "test01",
    item_price: 1000,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 1,
    item_title: "test02",
    item_price: 12312,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 2,
    item_title: "test03",
    item_price: 55555,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 3,
    item_title: "test04",
    item_price: 54335,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 4,
    item_title: "test05",
    item_price: 1232,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 5,
    item_title: "test06",
    item_price: 3233,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 6,
    item_title: "test07",
    item_price: 44444,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
  {
    item_idx: 7,
    item_title: "test08",
    item_price: 22222,
    item_image: require("../assets/images/apple.jpg"),
    item_content: "blablablablablablablabl 500g",
  },
];

export default {
  name: "Shopmain",

  data() {
    return {
      itemList: list,
    };
  },
};
</script>

