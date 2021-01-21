/**
 * 详情页的vuex状态管理
 */

 const state={
     goods:'' //详情页数据
 }

 const getters={
     goods:state=>state.goods
 }

 const mutations={
     //保存详情页数据
     SET_GOODS:(state,goods)=>{
         Object.assign(state,{goods})
     }
 }

 const actions={
       //获取详情页数据
       getGoods({commit},data){
         commit("SET_GOODS",data)
       }
 }

 export default{
     namespaced:true,
     state,
     getters,
     mutations,
     actions
 }