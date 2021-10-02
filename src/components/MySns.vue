<template>
  <div class="mysns container align-items-center">
    <div class="myinfo row">
      <div class="col myprofile">
        {{ info.farmer_profile }}
        <img
          v-if="info.farmer_profile != null"
          :src="info.farmer_profile"
          class="myprofileimg"
          alt=""
        />
        <img
          v-else
          src="../assets/images/xbox.png"
          alt=""
          class="myprofileimg"
        />
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            {{ info.farmer_email }}
          </div>
          <div class="col">
            <button
              v-if="!followBtn"
              class="btn btn-primary"
              @click="following()"
            >
              팔로우
            </button>
            <button v-else class="btn btn-danger" @click="unFollow()">
              언팔로우
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">게시물 0</div>
          <div class="col">팔로워 {{ info.farmer_follow }}</div>
        </div>
        <div class="row">{{ info.farmer_intro }}</div>
        <div class="row">Contack : {{ info.farmer_phone }}</div>
      </div>
    </div>
    <div class="rcmmap row">
      <div class="col">
        <div class="row">
          <span class="col">인기 상품</span
          ><button class="btn btn-primary col">상점가기</button>
        </div>

        <div class="item row">
          <div class="thumb row">
            <img src="../assets/images/xbox.png" alt="" class="item_thumb" />
          </div>
          <div class="item_info row">
            상품제목 상품설명
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <span class="col">찾아오시는 길</span>
        </div>
        <div class="row">
          <div id="map" style="width:500px;height:400px;" ref="kmap"></div>
        </div>
      </div>
    </div>
    <div class="boardlist row justify-content-center">
      <div class="row dropdown-divider"></div>
      <div class="row justify-content-center">
        <div class="row">
          <div
            v-for="(tmp, idx) in list"
            :key="idx"
            class="cards col-lg-4 col-sm-6 d-flex justify-content-center align-items-center flex-column"
          >
            <div class="listWrapper row img-thumbnail m-3 p-0">
              <!-- <img
          v-if="tmp.board_image != null"
          :src="tmp.board_image"
          class="boardimage"
          alt=""
        /> -->
              <img src="../assets/images/xbox.png" alt="" class="boardimage" />
              <div
                class="card_info d-flex justify-content-center align-items-center"
              >
                <div class="infos row">
                  <div class="d-flex justify-content-end col">
                    {{ tmp.board_title }}
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center col"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                    <span class="ms-2">{{ tmp.board_likes }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

/* 
	window.scrollY => 위쪽으로 스크롤된 높이 
	window.innerHeight => 웹브라우저의 창의 높이
	document.body.offsetHeight => bocy 의 높이 ( 문서객체가 차지하는 높이 )
*/
window.addEventListener("scroll", () => {
  const isBottom =
    window.scrollY + window.innerHeight >= document.body.offsetHeight
  if (isBottom) {
    console.log("this is scroll end")
  }
})

export default {
  computed: mapState(["logintoken"]),

  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap()
    } else {
      const script = document.createElement("script")
      script.onload = () => kakao.maps.load(this.initMap)
      //  appkey 일단 빼놓음.
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=&libraries=services"
      document.head.appendChild(script)
    }
  },
  data() {
    return {
      info: {},
      list: [],
      pagenum: 0,
      followBtn: false,
    }
  },

  created() {
    this.getInfo()
    this.getList()
    if (this.logintoken.token) {
      this.followingCheck()
    }
  },
  methods: {
    followingCheck() {
      this.$http
        .get("/follow/followcheck.do", {
          params: {
            email: this.logintoken.email,
            farmer_email: this.$route.params.farmeremail,
          },
        })
        .then((res) => {
          console.log(res.data)
          if (res.data.val) {
            // 이미 팔로우한 상태이면 true
            this.followBtn = true
          }
        })
    },
    unFollow() {
      this.$http
        .get("/follow/unfollow.do", {
          params: {
            email: this.logintoken.email,
            farmer_email: this.$route.params.farmeremail,
          },
        })
        .then(() => {
          this.followBtn = false
          this.getInfo()
        })
    },
    async following() {
      if (!this.logintoken.token) {
        alert("로그인해야 합니다!")
        return
      }
      await this.$http
        .get("/follow/follow.do", {
          params: {
            email: this.logintoken.email,
            farmer_email: this.$route.params.farmeremail,
          },
        })
        .then(() => {
          this.followBtn = true
          this.getInfo()
        })
    },

    initMap() {
      const container = document.querySelector("#map")
      const options = {
        center: new kakao.maps.LatLng(35.19656853772262, 129.0807270648317),
        level: 3,
      }

      let map = new kakao.maps.Map(container, options)

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder()

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(this.info.farmer_addr, function(result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x)

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          })

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
          })
          infowindow.open(map, marker)

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords)
        }
      })
    },

    getInfo() {
      this.$http
        .get("/farmer/private/info_farmer.do", {
          params: {
            email: this.$route.params.farmeremail,
          },
        })
        .then((res) => {
          this.info = res.data.dto
        })
    },
    getList() {
      this.$http
        .get("/board/mylist.do", {
          params: {
            email: this.$route.params.farmeremail,
            pagenum: this.pagenum,
          },
        })
        .then((res) => {
          this.list = res.data.list
          this.pagenum++
        })
    },
  },
}
</script>

<style scoped>
.mysns {
  margin-top: 54px;
  width: 100%;
}

.myinfo {
  height: 274px;
}

.myprofile {
  height: 100%;
}

.myprofileimg {
  height: 100%;
}

.item_thumb {
  height: 300px;
}

#map {
  border: 1px solid black;
}

.listWrapper {
  height: 400px;
  width: 400px;
  position: relative;
  overflow: hidden;
}

.boardimage {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}

.card_info {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.listWrapper:hover .card_info {
  z-index: 1;
}

.infos {
  width: 100%;
}
</style>
