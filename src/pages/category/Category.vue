<template>
  <div id="Category"> 
      <nav-bar class="nav_bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="sideShow">
    <Sidebar :title="title" @tabClick="tabClick" class="side-bar"></Sidebar>
    <GoodsList :good-type="goods" class="goods-list"></GoodsList>
    </div>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "@/components/NavBar";
import Sidebar from "./children/Sidebar"; //侧边栏
import GoodsList from "@/components/GoodsList" //侧边栏右边的展示区域
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Category",
  components: { NavBar, Sidebar, GoodsList },
  data() {
    return {
      title: [
        "正在流行",
        "哈克超市",
        "男装",
        "数码",
        "手机",
        "潮鞋",
        "手办模型",
        "图书文娱",
        "运动户外",
         "美妆护肤",
      ],
      goods: [],
      goodsType:"categoty_popular",  //切换标签栏
    };
  },
  methods: {
     ...mapActions({
       getTables:'home/getTables'
     }),
    //子组件传递过来的事件
    tabClick(index) {
          switch(index){
         case 0:
           this.goodsType="category_popular"   
            this.getDoodsData(this.goodsType)
            this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用
           break; 
           case 1:
              this.goodsType="category_superMarket" 
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用
           break;
           case 2:
              this.goodsType="category_manWear"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 3:
              this.goodsType="category_digital"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 4:
              this.goodsType="category_phone"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 5:
              this.goodsType="category_shoes"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 6:
              this.goodsType="category_model"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 7:
              this.goodsType="category_books"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 8:
              this.goodsType="category_sports"   
              this.getDoodsData(this.goodsType)
               this.getTables(this.goodsType) //把数据表名存储到vuex里，实现全局调用 
             break;
              case 9:
              this.goodsType="category_skin"   
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
  },
  created(){
     //请求商品数据
   this.getDoodsData("category_popular")
  }
};
</script>

<style scoped>

.sideShow{
  display: flex;
  justify-content:flex-start;
  width: 100%; 
}
.side-bar{
  flex: 10%;
   width:20%;
}
.goods-list{
  width:78%;
}
.nav_bar{
  position: static;
}

</style>