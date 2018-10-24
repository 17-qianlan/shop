import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index"
import HdNav from '@/components/hdnav'
import cont from '@/components/cont'
import res from '@/components/registered'
import logIn from '@/components/login'
import Item from "@/components/item"
import ShopDetails from "@/components/shop_car"

Vue.use(Router)

/*export default new Router({
    mode : "history",
    routes:
})*/

const router = new Router({
    mode : "history",
    routes : [
        {
            path: '/',
            name: 'cont',
            component: cont
        },{
            path: '/login',
            name: 'login',
            component: logIn
        },{
            path: '/res',
            name: 'res',
            component: res
        },{
            path : "/details/:id",
            name : "Item",
            component : Item
        },{
            path : "/shopDetails",
            name : "ShopDetails",
            component : ShopDetails
        }
    ]
})



//注册全局钩子用来拦截导航
router.beforeEach((to,from,next) => {
    //获取store里的token
    let token = store.state.token;
    //判断要去的路由有没有requiresAuth
    if(to.meta.requiresAuth){
        if(token){
            next();
        }else{
            next({
                path:"/login",
                query:{
                    redirect: to.fullPath
                }
            })
        }
    }else{
        next();//如果无需token,则只需下一步
    }
})

export default router;































