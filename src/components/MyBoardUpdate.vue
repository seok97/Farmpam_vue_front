<template>
  <div class="myboardupdate container">
    <div class="row">
      <h1>게시글 수정하기</h1>
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

          <img id="boardImage" :src="board.board_image" />
        </a>

        <form
          action="/board/update.do"
          method="post"
          @submit.prevent="updateContent()"
          ref="boardupdateform"
        >
          <input
            v-if="board.board_image != 'empty'"
            type="hidden"
            name="board_image"
            :value="board.board_image"
          />
          <input v-else type="hidden" name="board_image" value="empty" />

          <div>
            <label for="board_title" class="form-label">제목</label>
            <input
              type="text"
              name="board_title"
              id="board_title"
              class="form-control"
              placeholder="제목을 작성해주세요..."
              v-model="board.board_title"
            />
          </div>
          <div>
            <label for="board_content" class="form-label">설명</label>
            <input
              maxlength="30"
              type="text"
              name="board_content"
              id="board_content"
              class="form-control"
              placeholder="내용을 수정해주세요..."
              v-model="board.board_content"
            />
          </div>
          <button type="submit">게시글 수정</button>
        </form>
        이미지 넣기
        <form
          action="/board/ajax_image_upload.do"
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
  name: "MyBoardUpdate",
  computed: mapState(["logintoken"]),
  data() {
    return {
      board: {},
    }
  },
  watch: {
    board: function(current) {
      this.board = current
    },
  },
  created() {
    if (!this.logintoken.token) {
      this.$router.push("/shop/shoppage")
    }
    this.getBoard(this.$route.params.boardidx)
  },
  methods: {
    clickImage() {
      this.$refs.updateimage.click()
    },
    updateImage() {
      const imageform = new FormData(this.$refs.updateimageform)
      this.$http
        .post("/board/ajax_image_upload.do", imageform)
        .then((res) => {
          console.log(res.data)
          this.board.board_image =
            window.location.pathname.substring(
              0,
              window.location.pathname.indexOf("/", 2)
            ) + res.data.imagePath
        })
    },
    updateContent() {
        const formdata = new FormData(this.$refs.boardupdateform)
        console.log(this.board.board_idx)
        formdata.append("board_writer", this.logintoken.email)
        formdata.append("board_idx", this.board.board_idx)
        this.$http
          .post("/board/update.do", formdata)
          .then((res) => {
            console.log(res.data)
            if (res.data.updateBoard) {
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
    getBoard(idx) {
      this.$http
        .get("/vue/board/detail.do", {
          params: {
            board_idx: idx,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.board = res.data.boardData
        })
        .catch((e) => {
          console.log(e)
        })
    },
  }
</script>

<style scoped>
.myboardupdate {
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
