/**
 * 首页的状态管理 vuex
 */
const state={
  Image:'',  //本周流行图片
  ImgText:'', //本周流行图片名字
  tables:'', //获取每次切换栏的数据表名
}

const getters={
  Image:state=>state.Image,
  ImgText: state=>state.ImgText,
  tables:state=>state.tables
}

const mutations={
    //获取图片
    GET_IMAGE: (state, Image)=>{
        Object.assign(state, { Image})
    },
    //获取图片名字
    GET_IMAGE_TEXT:(state,ImgText)=>{
        Object.assign(state,{ImgText})
    },
    //获取数据表名
    GET_TABLES:(state,tables)=>{
        Object.assign(state,{tables})
    }
}

const actions={
    //获取图片
   getImage({commit},data){
        commit("GET_IMAGE",data)
   },
   //获取图片名字
   getImageText({commit},data){
       commit('GET_IMAGE_TEXT',data)
   },
   //获取数据表名
   getTables({commit},data){
       commit("GET_TABLES",data)
   }
}

export default{
    namespaced:true,
     state,
     getters,
     actions,
     mutations
}