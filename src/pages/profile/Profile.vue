<template>
  <div id="Profile">
   <!-- <nav-bar>
     <div slot="center">我的中心</div>
   </nav-bar> -->
   <HeadLogin class="headLogin"></HeadLogin>
   <GoodsOrder class="goodsOrder"></GoodsOrder>
 </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import HeadLogin from "./children/HeadLogin"  //头部登录信息
import GoodsOrder from "./children/GoodsOrder"  //商品订单信息
export default {
   name:'Profile',
   components:{NavBar,HeadLogin,GoodsOrder}
}
</script>

<style scoped>
#Profile{
  background-color: rgba(243, 243, 243, 0.945);
  height: 100vh;
}
.headLogin{
background-color: rgb(235, 70, 59);
 height: 200px;
}
.goodsOrder{
   background-color:white;
}
</style>