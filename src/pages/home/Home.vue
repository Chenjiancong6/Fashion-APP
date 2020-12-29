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
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "@/components/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      swiper:[]
    };
  },
  methods: {
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

}
.my-swipe img{
  width:100%;
  height:50%;
}
</style>