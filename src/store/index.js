//缓存 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from "@/components/storage"  //数据获取，存储，移除封装
Vue.use(Vuex)
const USER_KEY = "user"  //登录凭证
const NICKNAME_KEY="nickname"  //登录昵称
const AVATAR_KEY ="avatar"  //登录头像

export default new Vuex.Store({

  //全局的state
  state: {
    user: getItem(USER_KEY),  //登录token
    nickname: getItem(NICKNAME_KEY),  //登录昵称
    avatar: getItem(AVATAR_KEY)//登录头像
  },
  getters: {},
  actions: {},
  mutations: {
    //全局获取登录的token
    setUser(state, data) {
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
    }
  },
  namespaced: true,
  //模块化    
  modules: {},
})

  //导出
  //export default store;