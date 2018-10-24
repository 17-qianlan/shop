<template>
    <div class="user">
        <ul class="res">
            <li class="users">
                <label for="users">用户名:</label>
                <input type="text" id="users" ref="users">
            </li>
            <li class="pass">
                <label for="password">密码:</label>
                <input type="password" id="password" ref="secretCode">
            </li>
            <li class="again">
                <!--aging 再一次输入-->
                <label for="again">确认密码:</label>
                <input type="password" id="again" ref="confirm">
            </li>
        </ul>
        <div class="btn" @click="send">注册</div>
    </div>
</template>

<script>
    import api from "../axios"
    export default {
        name: "registered",
        data(){
            return {
                users : '',
                secretCode : '',
                confirm : ''
            }
        },
        methods: {
            send(){
                this.users = this.$refs.users.value;
                this.secretCode = this.$refs.secretCode.value;
                this.confirm = this.$refs.confirm.value;
                let opt = {
                    username : this.users,
                    password : this.secretCode
                }
                if( this.confirm === this.secretCode ) {
                    api.userRegister(opt).then( ({data}) => {
                        if ( data.success ) {
                            alert("注册成功");
                            this.$router.push({path: '/'});
                        }else if ( data.info ) {
                            alert("用户名已存在");
                        } else {
                            alert("注册失败");
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
