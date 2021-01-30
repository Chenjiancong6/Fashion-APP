<template>
  <div>
   <van-tabbar class="border" v-model="active" @change="onChange">
  <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
  <van-tabbar-item to="/shopCart" :badge="cartNumber" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/profile" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "TabBar",
  components: {},
  data(){
      return{
        active:0,
      }
  },
  methods:{
      onChange(index){
          this.active=index
      },
    
  },
  computed:{
    ...mapGetters({
      cartNumber:"shopCart/cartNumber",  //获取加入购物车的商品数量
    })
  },
  created(){
  }
};
</script>

<style>
.border{
border-top: 1px solid rgb(226, 217, 217);
}
</style>