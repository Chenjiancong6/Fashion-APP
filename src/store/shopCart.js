/**
 * 购物车的数据
 */


const state = {
    cartNumber: '' //加入购物车商品数量
}

const getters = {
    cartNumber: state => state.cartNumber
}

const mutations = {
   getCartNumber:(state,data)=>{
       state.cartNumber=data
   }
}

const actions = {
  
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}