import axios from "axios"
import store from "./store/index"
import router from "./router/index"

//设置全局axios默认值
axios.defaults.timeout = 5000;//超时验证
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";


//创建一个axios实例

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

axios.interceptors.request.use = instance.interceptors.request.use;////////////


//request拦截器

//instance.interceptors.request.use(a,b)    类似于(data,err)

instance.interceptors.request.use(
    config => {
        //每次发送数据之前检测都vuex存有token,那么都要放在请求头服务器
        if(store.state.token){
            config.headers.Authorization = `token ${store.state.token}`;//设置
        }
        return config;
    },
    err => {
        return Promise.reject(err);//返回err
    }
);

//respone拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if( err.response ){
            switch(err.response.status){
                case 401:
                    console.log("err");
                    store.dispatch("UserLogout");//有可能是token过期,清除她
                    router.replace({//跳转到登录页面
                        path: "login",
                        query: {
                            //将跳转的路由path作为参数，登录成功后跳转到该路由
                            redirect : router.currentRoute.fullPath
                        }
                    })
            }
        }
        return Promise.reject(err.response);
    }
)


export default {
    //用户注册
    userRegister(data){
        return instance.post("/user/res",data);
    },
    //用户登录
    userLogin(data){
        return instance.post("/user/login",data);
    },
    //获取用户
    getUser(){
        return instance.get("/user/user");
    },
    //删除用户
    delUser(data){
        return instance.post("/user/delUser",data);
    },
    //获取商品
    getProduct(){
        return instance.get("/user/product");
    },
    //获取详细信息
    getDetails(router){
        return instance.get(`/user/details/${router}`);
    },
    sendItem(data){
        return instance.post("/user/shopCar/",data);
    },//获取购物车
    getCar(){
        return instance.get("/user/getCar");
    },
    getCount(){
        return instance.get("/user/getCount");
    },
    shopCount(){
        return instance.get("/user/shopCount");
    },
    sendChange(data){
        return instance.post("/user/change",data);
    }
}





























