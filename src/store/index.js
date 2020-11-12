  //缓存 Vuex
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  export default new Vuex.Store({
      namespaced: true,
      //模块化    
      modules: {},
      //全局的state
      state: {},
      getters: {},
      actions: {},
      mutations: {},
  })

  //导出
  //export default store;