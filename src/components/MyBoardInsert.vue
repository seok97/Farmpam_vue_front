<template>
  <div class="insertboard container">
    <div class="row">
      <h1>새 글 등록하기</h1>
    </div>
    <div class="row">
      <div class="container">
      <a id="imageLink" href="javascript:" @click="clickImage()">
          <svg
            id="boardImage"
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
            v-if="board.board_image != 'empty'"
            id="boardImage"
            :src="board.board_image"
          />
          <img v-else id="boardImage" :src="board.board_image" />
        </a>
        <form
          action="/board/insert.do"
          method="post"
          @submit.prevent="uploadBoard()"
          ref="boardinsertform"
        >
        <input type="hidden" name="board_image" value="empty" />
          <div>
            <label for="board_title" class="form-label">제목</label>
              <input
                type="text"
                name="board_title"
                id="board_title"
                class="form-control"
                placeholder="제목을 작성해주세요!"
              />
          </div>
          <div>
            <label for="board_content" class="form-label">내용</label>
            <input
              maxlength="30"
              type="text"
              name="item_content"
              id="item_content"
              class="form-control"
              placeholder="내용을 작성해주세요..."
            />
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
  name: "MyBoardInsert",
  computed: mapState(["logintoken"]),
  data() {
    return {
      board: {
        board_image: "empty",
      },
    }
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
        .post("/board/private/ajax_image_upload.do", imageform)
        .then((res) => {
          console.log(res.data)
          this.board.board_image =
            window.location.pathname.substring(
              0,
              window.location.pathname.indexOf("/", 2)
            ) + res.data.imagePath
        })
    },
    clickImage() {
      this.$refs.insertimage.click()
    },
    uploadBoard() {
      const formdata = new FormData(this.$refs.boardinsertform)
      formdata.append("farmer_email", this.logintoken.email)
      this.$http
        .post("/board/private/insert.do", formdata)
        .then((res) => {
          console.log(res.data)
          if (res.data.boardinsertItem) {
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
  },
}
</script>