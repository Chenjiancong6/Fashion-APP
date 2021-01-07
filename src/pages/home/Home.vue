<template>
  <div id="home">
    <nav-bar>
      <div slot="center">潮流街APP</div>
    </nav-bar>
    <!-- 轮播组件 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#39a9ed">
      <van-swipe-item v-for="(item,index) in swiper" :key="index">
        <img :src="item.path" alt="无法显示" srcset />
      </van-swipe-item>
    </van-swipe>
    <!-- Grid宫格 -->
    <grid></grid>
    <!--tab标签 -->
     <tab-bar @tabClick="tabClick" :titles="['流行', '新款', '精选']"></tab-bar>
     <!--商品列表-->
     <goods-list></goods-list>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "@/components/NavBar";
import Grid from "./children/grid"
import tabBar from "./children/tabBar"
import goodsList from "./children/GoodsList"
export default {
  name: "Home",
  components: {
    NavBar,Grid,tabBar,goodsList
  },
  data() {
    return {
      swiper:[]
    };
  },
  methods: {
   //切换tab标签
   tabClick(index){
     console.log(index,"++");
       switch(index){
         case 0:
           break;
           case 1:
           break;
           case 2:
             break;
       }
   },

    //获取轮播数据
    carousel() {
      let MyFile = new BaaS.File();
      let query = new BaaS.Query();
      //查询某一文件分类下的所有文件
      query.compare("category_name", "=", "home_carousel");
      MyFile.setQuery(query).find().then(res=>{
        this.swiper=res.data.objects;
      })  
    }
  },
  created() {
    this.carousel(); //轮播函数
  }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: white;
  font-size: 20px;
  text-align: center;
  height: 20%;
}
.my-swipe img{
  width:100%;
  height:50%;
}
</style>