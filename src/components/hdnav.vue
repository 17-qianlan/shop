<template>
    <header class="fix">
        <ul class="list_nav fl">
            <li class="fl"><a href="/">Home</a>
            </li>
            <li class="fl"><a href="">11</a>
            </li>
            <li class="fl"><a href="">22</a>
            </li>
            <li class="fl"><a href="">33</a>
            </li>
            <li class="fl"><a href="">44</a>
            </li>
            <li class="fl"><a href="">55</a>
            </li>
        </ul>
        <ul class="rg fr">
            <li class="res fl">
                <a href="/res">注册</a>
            </li>
            <li class="login fl" @mouseenter="enter" @mouseleave="leave" >
                <a href="/login" v-show="countBoo.login">登录</a>
                <a href="" v-show="!countBoo.login"><img :src=countBoo.avatar alt=""></a>
                <ol class="out" v-show="show">
                    <li>账号管理</li>
                    <li @click="out">退出登录</li>
                </ol>
            </li>
        </ul>
    </header>
</template>

<script>
    import api from "../axios"
    export default {
        name: "hdNav",
        data (){
            return {
                login : true,
                avatar : "",
                token : "",
                show: false
            }
        },
        computed :{
            countBoo(){
                if( this.$store.state.token ){
                    this.avatar = this.$store.state.avatar;
                    this.login = false;
                    this.token = this.$store.state.token;
                }
                return {
                    login : this.login,
                    avatar : this.avatar,
                    token : this.token
                }
            }
        },
        methods : {
            enter(){
                this.show = !this.login?true:false;
            },
            leave(){
                this.show = false;
            },
            out(){
                this.show = false;
                this.$store.dispatch('UserLogout');
                this.$router.go(0);//刷新当前页面
            }
        }
    }
</script>

<style scoped>

</style>
