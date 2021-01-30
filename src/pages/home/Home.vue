<template>
  <div id="home">
    <nav-bar class="nav_bar">
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
     <tab-bar class="tab-bar" @tabClick="tabClick" :titles="['流行', '新款', '精选']"></tab-bar>
     <!--商品列表-->
     <goods-list :good-type="goods" ></goods-list>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "@/components/NavBar";
import Grid from "./children/grid"
import tabBar from "./children/tabBar"
import goodsList from "@/components/GoodsList"
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    NavBar,Grid,tabBar,goodsList
  },
  data() {
    return {
      swiper:[],
      goodsType:"home_popular",  //切换标签栏
      goods:[],
    };
  },
  methods: {
     ...mapActions({
       getTables:'home/getTables'
     }),

   //切换tab标签
   tabClick(index){
       switch(index){
         case 0:
           this.goodsType="home_popular"   //流行
            this.getDoodsData(this.goodsType)
            this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用
           break; 
           case 1:
              this.goodsType="home_news"  //新款
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用
           break;
           case 2:
              this.goodsType="home_sell"   //精选
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
       }
   },
     //获取切换栏商品数据
     getDoodsData(goodsType){       
        this.getTables(goodsType)   //把数据表名存储到vuex里，实现全局调用    
        let query = new BaaS.Query()
        let Product = new BaaS.TableObject(goodsType)
        Product.setQuery(query).find().then(res => {
            this.goods=res.data.objects        
        })
     },

    //获取轮播数据
    carousel() {
      let MyFile = new BaaS.File();
      let query = new BaaS.Query();      
      query.compare("category_name", "=", "home_carousel");
      MyFile.setQuery(query).find().then(res=>{
        this.swiper=res.data.objects;
      })  
      
    }
  },
  created() {
    this.carousel(); //轮播函数
    //请求商品数据
   this.getDoodsData("home_popular")
   // this.getDoodsData("home_news")
   // this.getDoodsData("home_sell")
  },
  computed:{
   
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
.tab-bar{
  z-index: 999;
}
.nav_bar{
  position: static;
}
</style>