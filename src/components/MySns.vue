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
          {{ info.farmer_email }}
        </div>
        <div class="row">게시물 32 팔로워4백만 팔로우 0</div>
        <div class="row">{{ info.farmer_intro }}</div>
        <div class="row">Contack : {{ info.farmer_phone }}</div>
      </div>
    </div>
    <div class="rcmmap row">
      <div class="col">
        <div class="row">
          <span class="col">인기 상품</span
          ><button class="btn col">상점가기</button>
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
            class="col-4 d-flex justify-content-center"
          >
            <div class="listWrapper img-thumbnail m-3 p-0">
              <!-- <img
          v-if="tmp.board_image != null"
          :src="tmp.board_image"
          class="boardimage"
          alt=""
        /> -->
              <img src="../assets/images/xbox.png" alt="" class="boardimage" />
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
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=&libraries=services"
      document.head.appendChild(script)
    }
  },
  data() {
    return {
      info: {},
      list: [],
    }
  },
  created() {
    this.getInfo()
    this.getList()
  },
  methods: {
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
            email: this.logintoken.email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.info = res.data.dto
        })
    },
    getList() {
      this.$http
        .get("/board/mylist.do", {
          params: {
            email: this.logintoken.email,
          },
        })
        .then((res) => {
          console.log(res.data)
          this.list = res.data.list
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
}

.boardimage {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  transform: translate(-50%, -50%);
}
</style>
