<template>
  <div id="ShopCart">
   <nav-bar>
     <div slot="center">购物车</div>
   </nav-bar>
   <SwiperGoods></SwiperGoods>
 </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import SwiperGoods from "./children/SwiperGoods"
export default {
   name:'ShopCart',
   components:{NavBar,SwiperGoods}
}
</script>

<style scoped>

</style>