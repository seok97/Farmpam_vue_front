<template>
  <div class="contack_root">
    <h1>this is contack</h1>
    <h2>
      <a href="https://github.com/hs-keko/Phoenix_Farmpam"> github </a>
    </h2>
    <div id="map" style="width: 500px; height: 400px"></div>
  </div>
</template>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26ad37c5085865890cd42009cb01cd8d"></script>
<script>
export default {
  mounted() {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript();
  },
  methods: {
    addKakaoMapScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=26ad37c5085865890cd42009cb01cd8d";
      document.head.appendChild(script);
    },
    initMap() {
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.49895130987428, 127.03154537658446), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 마커가 표시될 위치입니다
      var markerPosition = new kakao.maps.LatLng(
        37.49895130987428,
        127.03154537658446
      );

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    },
  },
};
</script>

