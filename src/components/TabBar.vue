<template>
  <div>
   <van-tabbar v-model="active" @change="onChange">
  <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/category" icon="search">分类</van-tabbar-item>
  <van-tabbar-item to="/shopCart" badge="3" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="/profile" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
  data(){
      return{
        active:0
      }
  },
  methods:{
      onChange(index){
          //this.$router.push(to)
          this.active=index
      }
  }
};
</script>

<style>
</style>