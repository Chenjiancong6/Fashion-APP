//缓存 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from "@/components/storage"  //数据获取，存储，移除封装
Vue.use(Vuex)
const USER_KEY = "user"  //登录用户名
const NICKNAME_KEY="nickname"  //登录昵称
const AVATAR_KEY ="avatar"  //登录头像
const USER_ID="userId" //用户Id号


import home from "./home"  //首页
import detail from "./detail"
import shopCart from "./shopCart"

export default new Vuex.Store({

  //全局的state
  state: {
    userId:'',  //用户Id号
    username:'',  //用户名
    user: getItem(USER_KEY),  //登录用户名
    nickname: getItem(NICKNAME_KEY),  //登录昵称
    avatar: getItem(AVATAR_KEY)//登录头像
  },
  getters: {},
  actions: {},
  mutations: {
    //全局获取登录的用户名
    setUser:(state, data)=> {
      state.user = data;
      //为防止数据丢失，做本地持久化存储
      setItem(USER_KEY, state.user)
    },


    //获取昵称
    setNickName(state,data){
      state.nickname=data
      setItem(NICKNAME_KEY,state.nickname)
    },

    //获取登录头像
    setAvatar(state,data){
      state.avatar=data
      setItem(AVATAR_KEY,state.avatar)
    },

    //获取当前用户Id号
    setUserId(state,data){
      state.userId=data
      setItem(USER_ID, state.userId)
    }
  },
  namespaced: true,
  //模块化,引入其他模块    
  modules: {
    home,
    detail,
    shopCart
  },
})

  //导出
  //export default store;