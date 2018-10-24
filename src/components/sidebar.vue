<template>
    <nav class="rg_nav">
        <div class="shop_car"  @mouseenter="enter" @mouseleave="leave">
            <a href="/shopDetails">
                <i class="iconfont icon-gouwuchekong"></i>
            </a>
            <span v-text="shopCount"></span>
            <div class="show_hover" v-show="show" >
                <h4>最近添加的宝贝:</h4>
                <ul class="material fix">
                    <li v-for="item in shopCar">
                        <div class="shop_img fl">
                            <a :href="'/details/'+item._id"><img :src="item.src" alt=""></a>
                        </div>
                        <div class="shop_cent fl">
                            <a :href="'/details/'+item._id" v-text="item.title" class="dis_b"></a>
                            <p v-text="item.slogan"></p>
                        </div>
                        <div class="shop_del fr">删除</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="top">
            <a href="#app">
                <i class="iconfont icon-top"></i>
            </a>
            <span>返回顶部</span>
        </div>
    </nav>
</template>

<script>
    import api from "../axios"
    export default {
        name: "sidebar", //接收来自App传过来的值
        data() {
            return {
                msg : "",
                show : false,
                count : ""
            }
        },
        computed: {//这里必须这样写,否则不可以动态改变
            /*count() {
                return this.$store.state.count;
            },*/
            shopCar(){
                let {values} = Object;
                api.getCar().then(({data}) => {
                    let arr = [];
                    for(let val of values(data)){
                        arr.push(val["src"]);
                    }
                    this.msg = arr;
                }).catch(err => {
                    console.log(err);
                })
                return this.msg;
            },
            shopCount(){
                api.getCount().then(({data}) => {
                    this.count = data[0].totalCount.toString();
                }).catch(err => {
                    console.log(err);
                })
                return this.count;
            }
        },
        methods: {
            leave(){
                this.show = false;
            },
            enter(){
                this.show = true;
            }
        },
        created(){

        }
    }
</script>

<style scoped>

</style>
