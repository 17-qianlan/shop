// import {LOGIN,LOGOUT,USERNAME} from "./types"
import * as types from './types.js'


export default {
    UserLogin({commit},data){
        commit(types.LOGIN,data);
    },
    UserLogout({commit},data){
        commit(types.LOGOUT,data);
    },
    UserName({commit},data){
        commit(types.USERNAME,data);
    },
    avatar({commit},data){
        commit(types.AVATAR,data);
    },
    count({commit},data = 0){
        commit(types.COUNT,data);
    }
}
