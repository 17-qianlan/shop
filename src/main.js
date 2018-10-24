// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LazyLoad from "vue-lazyload"
import router from './router/index.js'
import jquery from "jquery"
import HdNav from "@/components/hdnav"
import Sidebar from "@/components/sidebar"
import "../static/css/base.css"
import "../static/icon/iconfont.css"
import "./components/css/nav.css"
import "./components/css/user.css"
import "./components/css/index.css"
import "./components/css/shop_car.css"
import store from "./store/index.js"
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.prototype.$ = jquery;

Vue.component("hdNav", HdNav);
Vue.component("sidebar", Sidebar);
//图片懒加载
Vue.use(LazyLoad,{
    preLoad: 2,//预加载高度比例  表示加载10张图片
    loading: '../static/global/commodity/1.png',//预加载图片
    attempt: 5,//尝试加载图片数量
    listenEvents: [ 'scroll', 'mousewheel' ]//想要监听的vue事件
})



new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
