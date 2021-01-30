<template>
  <div id="ShopCart">
    <nav-bar class="nav_bar">
      <div slot="center">{{username}} 的购物车</div>
    </nav-bar>
    <div class="scorlls">
      <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
        <SwiperGoods :goods="goods" @delteCart="delteItemCart"></SwiperGoods>
      </van-pull-refresh>
      <div>
        <van-submit-bar class="submit_bar" :price="3050" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import { mapGetters, mapActions, mapMutations } from "vuex";
import { setItem, getItem } from "@/components/storage"; //封装缓存的方法
import NavBar from "@/components/NavBar";
import SwiperGoods from "./children/SwiperGoods";
export default {
  name: "ShopCart",
  components: { NavBar, SwiperGoods },
  data() {
    return {
      goods:[],
      username: getItem("user"),
      checked: true,
      isLoading: false //下拉刷新
    };
  },
  methods: {
 ...mapMutations({
      getCartNumber:'shopCart/getCartNumber'
   }),
  /**
     * queryTable() 根据当前用户信息 条件查询购物车数据
     */
    queryTable() {  
      let numbers=[]   //作为容器
      let key = getItem("userId").toString(); //当前登录用户的Id号
      let query = new BaaS.Query();
      //条件查询
      query.contains("userId", key); // 查询 userId字段包含 getItem("userId") 当前登录用户的Id号 的记录
      let Product = new BaaS.TableObject("shop_cart");
      Product.setQuery(query).find().then(res => {
          this.goods = res.data.objects;
        
         //为了获取加入购物车商品的数量总和
         let arr=res.data.objects
         arr.forEach(item=>{
          numbers.push(item.selectedNum)      //push进数组     
         }) 

          //对数组中所有的值求和       
         let sum = numbers.reduce((x, y) => x + y);   
          this.getCartNumber(sum)   //加入购物车的商品数量，存储到vuex
        });
    },
    
    /**
     * 删除选中的购物车数据  
     * 从子组件传递过来的事件
     */
    delteItemCart(index){
   // console.log(this.goods[index].id,4444);
      let Product = new BaaS.TableObject("shop_cart");
      Product.delete(this.goods[index].id).then(res => {
         //删除后，重新发送请求获取数据
          this.queryTable(); 
      });
    
    },

    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
         this.queryTable()
      }, 1000);
    },   
    
    
    onSubmit() {
      console.log(11);
    },
  },
  
  computed:{
  },

  created(){
    //条件查询购物车数据
    this.queryTable()
  }
};
</script>

<style scoped>
.submit_bar {
  margin-bottom: 51px;
}
.nav_bar {
  position: static;
}
.scorlls {
  height: calc(100vh - 144px);
  overflow: scroll;
}
</style>