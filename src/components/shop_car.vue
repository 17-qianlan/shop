<template>
    <ul class="shop_details">
        <li v-for="(item,index) in shopDetails" class="fix" :key="index" ref="list">
            <section class="on"><!--上-->
                <div class="fl radio" dis="bbb">
                    <i class="iconfont icon-yk_fangkuai" @click="toggle(index)"></i>
                    <i class="iconfont icon-check check" @click="toggle(index)"></i>
                </div>
                <div class="shop_img fl">
                    <a :href="'/details/'+item['src']._id"><img :src="item['src'].src" alt=""></a>
                </div>
                <div class="shop_cent fl">
                    <a :href="'/details/'+item['src']._id" v-text="item['src'].title" class="dis_b"></a>
                    <p v-text="item['src'].slogan"></p>
                </div>
                <div class="count fl">
                    <button @click="less(index)">-</button>
                    <input type="text" v-model="count[index]" ref="val">
                    <button @click="add(index,$event)" dib="ddd">+</button>
                </div>
                <div class="price fl" v-text="item['src'].price"></div>
                <div class="shop_del fl">删除</div>
            </section>
            <section class="below"><!--下-->
                <span class="after_sale dis_ib">售后服务</span>
                <span class="maintain dis_ib">全国联保</span>
                <span class="total dis_ib" v-text="">￥666</span>
            </section>
        </li>
    </ul>
</template>

<script>
    import api from "../axios"

    export default {
        name: "shop_car",
        data() {
            return {
                msg: "",
                count: [],
                boo : true,
                activeIndex : "",
                ID : [],
                timer : ""
            }
        },
        created() {
            let {values} = Object;
            api.shopCount().then(({data}) => {
                for (let val of values(data)) {
                    this.count.push(val["count"]);
                    this.ID.push(val["_id"]);
                }
            }).catch(err => {
                console.log(err);
            })
        },
        computed: {
            shopDetails() {
                api.getCar().then(({data}) => {
                    this.msg = data;
                }).catch(err => {
                    console.log(err);
                })
                return this.msg;
            }
        },
        methods: {
            toggle(i) {
                let aI = this.$refs.list[i].children[0].children[0];
                let aISecond = aI.children[1];
                if (aI.getAttribute("dis")) {
                    aISecond.style.display = "block";
                    aI.removeAttribute("dis");
                } else {
                    aISecond.style.display = "none";
                    aI.setAttribute("dis", "bbb");
                }
            },
            add(i,event) {
                clearTimeout(this.timer);
                this.count[i]++;
                this.tiemr = setTimeout(() => {
                    let val = this.count[i],
                        _id = this.ID[i];
                    api.sendChange({_id,val});
                },1500);
            },
            less(i) {
                clearTimeout(this.timer);
                this.count[i]--;
                this.count[i] = Math.max(1, this.count[i]);
                this.timer = setTimeout(() => {
                    let val = this.count[i],
                        _id = this.ID[i];
                    api.sendChange({_id,val});
                },1500);
            },
            send(){
                this.boo = true;
                this.activeIndex = "";
                let sendData = [];
                for(let i in this.ID){
                    sendData.push({"_id":this.ID[i],"count":this.count[i]});
                }
                api.sendChange(sendData);
            }
        }
    }
</script>

<style scoped>

</style>
