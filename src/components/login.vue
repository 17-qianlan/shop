<template>
    <div class="user">
        <ul class="res">
            <li class="users">
                <label for="users">用户名:</label>
                <input type="text" id="users" ref="users">
            </li>
            <li class="pass">
                <label for="password">密码:</label>
                <input type="password" id="password" ref="password"><!--secretCode 密码-->
            </li>
        </ul>
        <div class="btn" @click="send">登录</div>
    </div>
</template>

<script>
    import api from "../axios"
    export default {
        name: "login",
        data () {
            return {
                username : '',
                password : ''
            }
        },
        methods: {
           send(){
               this.password = this.$refs.password.value;
               this.username = this.$refs.users.value;
               let opt = {
                   username : this.username,
                   password : this.password
               };
               api.userLogin(opt).then( ({data}) => {
                   if( data.info ){//
                        alert("用户名不存在");
                        return;
                   }
                   if( data.success ){
                       let token = data.token;
                       let username = data.username;
                       let avatar = data.avatar;
                       this.$store.dispatch('UserLogin', token);//更新state
                       this.$store.dispatch('UserName', username);
                       this.$store.dispatch('avatar', avatar);
                       //如果用户手动输入"/"那么会跳转到这里来，即this.$route.query.redirect有参数
                       let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
                       //跳转到指定的路由
                       this.$router.push({
                           path: redirectUrl
                       });
                   }else {
                       alert("密码错误");
                   }
               }).catch( err => {
                   console.log(err);
               });
           }
        }
    }
</script>

<style scoped>

</style>
