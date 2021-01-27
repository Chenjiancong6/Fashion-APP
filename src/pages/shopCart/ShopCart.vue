<template>
  <div id="ShopCart">
   <nav-bar class="nav_bar">
     <div slot="center">购物车</div>
   </nav-bar>
   <div class="scorlls">
   <SwiperGoods></SwiperGoods> 
 <div>
   <van-submit-bar class="submit_bar" :price="3050" button-text="提交订单" @submit="onSubmit">
  <van-checkbox v-model="checked">全选</van-checkbox>
</van-submit-bar>
 </div>
 </div>
 </div>
</template>

<script>

import NavBar from "@/components/NavBar"
import SwiperGoods from "./children/SwiperGoods"
export default {
   name:'ShopCart',
   components:{NavBar,SwiperGoods},
   data(){
     return{
       checked: true,
     }
   },
   methods:{
     onSubmit(){
       console.log(11);  
     }
   }
}
</script>

<style scoped>
.submit_bar{
  margin-bottom: 51px;
}
.nav_bar{
  position: static;
}
.scorlls{
  height: calc(100vh - 144px);
  overflow: scroll;
}
</style>