/*
* 这个用来处理存储的
*
*
* */

// import {LOGIN,LOGOUT,USERNAME} from "./types"
// console.log(typeof LOGIN,typeof LOGOUT,typeof USERNAME);
import * as types from './types.js'
const mutations = {
    [types.LOGIN]: (state,data) => {//state包含了token     data是新的token
        //修改token
        state.token = data;
        window.sessionStorage.setItem("token",data);//存起来
    },
    [types.AVATAR]: (state,data) => {//state包含了token     data是新的token
        //修改avatar
        state.avatar = data;
        window.sessionStorage.setItem("avatar",data);//存头像起来
    },
    [types.LOGOUT] : (state) => {
        state.token = null;
        state.avatar = null;
        window.sessionStorage.removeItem("token");
        window.sessionStorage.removeItem("avatar");
    },
    [types.USERNAME] : (state,data) => {//存储用户名
        state.username = data;
        window.sessionStorage.setItem("username",data);
    },
    [types.COUNT] : (state,data) => {
        state.count += data;
    }
}



export default mutations;
