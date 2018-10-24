<template>
    <div class="d">
        <h3 v-text="msg.title"></h3>
        <article class="content">
            <div class="img fl">
                <img :src="msg.src" alt="">
            </div>
            <div class="info fl">
                <p v-text="msg.slogan" class="slogan"></p>
                <p v-text="msg.price" class="price"></p>
                <div class="count fix">
                    <span class="fl">数量: </span>
                    <span class="fl less public" @click="less">-</span>
                    <span class="fl num public" v-text="n"></span>
                    <span class="fl add public" @click="add">+</span>
                </div>
                <div class="join" @click="join">加入购物车</div>
            </div>
        </article>
    </div>
</template>

<script>
    import api from "../axios"
    export default {
        name: "Item",
        data (){
            return {
                url : this.$route.path.split("/")[2],
                msg : '',
                n : 1
            }
        },
        methods :{
            add(){
                this.n++;
            },
            less(){
                this.n--;
                this.n = Math.max(1,this.n);
            },
            join(){
                //this.$store.commit("count",this.n);
                this.$store.dispatch("count",this.n);
                let opt = {
                    src : this.url,
                    title : this.url,
                    count : this.n
                }
                api.sendItem(opt).then().catch(err => {
                    console.log(err);
                    return;
                });
                this.$router.push({
                    path: "/"
                });
            }
        },
        created (){
            api.getDetails(this.url).then(({data}) => {
                this.msg = data;
            });
        }
    }
</script>

<style scoped>
    .d{
        width: 1200px;
        height: auto;
        margin: auto;
    }
    .d h3{
        width: 100%;
        height: 40px;
        margin-top: 100px;
        font-size: 24px;
        text-align: center;
        line-height: 40px;
    }
    .d article{
        width: 100%;
        height: 400px;
        margin-top: 50px;
    }
    .d article .img{
        width: 300px;
        height: 300px;
        margin-left: 300px;
    }
    .d article .img img{
        width: 100%;
        height: 100%;
    }
    .d article .info {
        width: 400px;
        height: 500px;
        font-size: 25px;
    }
    .d article .info p {
        width: 100%;
        height: 40px;
        text-indent : 60px;
        cursor: pointer;
    }
    .d article .info p.slogan{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .d article .info .price{
        margin: 30px 0;
    }
    .d article .count{
        width: 320px;
        height: 100px;
        margin-left: 60px;
    }
    .d article .count span{
        width: 50px;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        cursor: pointer;
    }
    .d article .count span:nth-child(1){
        width: 130px;
        color: #303ac1;
    }
    .d article .count .public{
        margin-left: 5px;
        border: 1px solid black;
        text-align: center;
    }
    .d article .info .join{
        width: 200px;
        height: 40px;
        background: #3871cf;
        border-radius: 5%;
        margin-left: 60px;
        color: #38c12a;
        font-size: 30px;
        text-align: center;
        line-height: 40px;
        cursor: pointer;
    }
</style>
