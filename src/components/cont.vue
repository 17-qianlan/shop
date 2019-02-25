<template>
    <ul class="box fix">
        <li v-for="(item,index) in msg" :key='index'>
            <a :href="'/details/'+item._id">
                <div class='img'>
                    <i></i>
                    <img v-lazy="item.src" alt=''>
                </div>
                <p>{{item.title}}</p>
                <p>{{item.slogan}}</p>
                <span>{{item.price}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
    import api from "../axios"
    export default {
        name: "cont",
        data() {
            return {
                msg: '2222'
            }
        },
        created(){
            //this.msg = 222;
            api.getProduct().then( ({data}) => {
                this.msg = data;
            })
        }
    }
</script>

<style scoped>

</style>
