<template>
  <div class="info_update">
    <h1>님의 정보</h1>
    
        <form 
        @submit.prevent="onSubmit"
        action="http://localhost:8888/farmpam/users/private/update.do"
        method="post"
        ref="updateForm">     
            <label for="users_name">이름</label>
            <input type="text" name="users_name" id="users_name" v-bind:value="info.users_name">
            <label for="users_addr">주소</label>
            <input type="text" name="users_addr" id="users_addr">
            <button @click.prevent="mapBtn()">검색하기</button>
            <label for="users_addr_detail">상세주소</label>
            <input type="text" name="users_addr_detail" id="users_addr_detail" v-bind:value="info.users_addr_detail">
            <label for="users_phone">핸드폰 번호</label>
            <input type="text" name="users_phone" id="users_phone" v-bind:value="info.users_phone"> 
            <button type="submit">수정 반영</button>
        </form>
        
        <form @submit.prevent="sendProfile" 
            action="/users/private/ajax_profile_upload.do" 
            method="post"
            ref="profileForm">
                <input type="text" name="title">
                <input type="file" name="image" accept=".jpg, .jpeg, .png, .JPG, .JPEG">
                <button type="submit">전송</button>
        </form>
    </div>
     
</template>

<script>

import axios from "axios";
import { mapState } from "vuex";
import route from "../router";

export default {
    name: 'Info_update',
    data() {
        return {
            users:{},
            info:{},
            imagePath: ""
        };
    },
    computed: mapState(["logintoken"]),
    created() {
        console.log("created");
        if(!this.logintoken.token) {
            alert("로그인 해주세요");
            this.$router.push({
                path: "/login"
            })   
        }
        this.InfoData();
    },
    methods: {
        InfoData() {

        const self = this;

        axios.get("http://localhost:8888/farmpam/users/private/info.do", {
                params: {
                    email: this.logintoken.email
                }
            })
            .then((res) => {
                console.log(res.data);
                self.info = res.data.getInfo;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        mapBtn() {
        //카카오 지도 발생
        new window.daum.Postcode({
            oncomplete: function (data) {
            //선택시 입력값 세팅
            // eslint-disable-next-line no-unused-vars
            let users_addr = (document.getElementById("users_addr").value =
                data.address); // 주소 넣기
                document.querySelector("input[name=users_addr_detail]").focus(); //상세입력 포커싱
                },
            }).open();
        },
    onSubmit() {
        const formData = new FormData(this.$refs.updateForm);
        console.log("흠");
        axios.post("http://localhost:8888/farmpam/users/private/update.do", formData, {
            params: {
                email: this.logintoken.email
            }
        })
        .then((res) => {
            console.log(res.data);
            alert("수정 성공!");
            route.push({ name: "Info" });
        })
        .catch((err) => {
            console.log(err);
        });
        }
    },
    sendProfile() {
        const data = new FormData(this.$refs.profileForm);
        console.log("흠");
        // new FormData( 전송할 폼의 참조값 ) 하면 전송할 데이터가 구성이 된다.
        axios.post("http://localhost:8888/farmpam/users/private/ajax_profile_upload.do", data, {
            headers: {
                 "Content-Type":'multipart/form-data'
            },
            params: {
                email: this.logintoken.email
            }
        })
        .then(res=>{
            console.log(res.data);
            //
            this.imagePath = "http://localhost:8888/farmpam"+res.data.imagePath;
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
   
</script>

<style scoped>

</style>