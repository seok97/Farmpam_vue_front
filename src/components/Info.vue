<template>
  <div class="info">
    <h1>님의 정보</h1>
    <button @click="logout()">로그아웃</button>
        <table>
            <thead>
                <tr>
                    <th>이미지</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>주소</th>
                    <th>상세주소</th>
                    <th>핸드폰 번호</th>
                    <th>가입일자</th>
                    <th>수정</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{info.users_profile}}</td>
                    <td>{{info.users_email}}</td>
                    <td><router-link to>수정하기</router-link></td>
                    <td>{{info.users_name}}</td>
                    <td>{{info.users_addr}}</td>
                    <td>{{info.users_addr_detail}}</td>
                    <td>{{info.users_phone}}</td>
                    <td>{{info.users_regdate}}</td>
                    <td><router-link to="/Info_update">수정</router-link></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>

import axios from "axios";
import { mapState } from "vuex";

export default {
    name: 'Info',
    data() {
        return {
            info:{}
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
    methods:{
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
        logout() {
            this.$store.commit("LOGOUT")
            // this.$router.go(this.$router.currentRoute);
        },
    }
}
</script>

<style scoped>

</style>