<template>
  <div id="NavBar">
    <van-nav-bar  left-text="返回" left-arrow @click-left="onClickLeft">
  <template #right>
    <van-icon @click="onClickCart" name="cart-o" size="25" style="margin-right:20px" />
      <van-icon @click="onClickSetting" name="setting-o" size="25" />
  </template>
   
</van-nav-bar>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data(){
      return{}
  },
  methods:{
      //返回上一层
      onClickLeft(){
           this.$router.back();        
      },
      //返回购物车
      onClickCart(){
      this.$router.push("/shopCart")
      },
      //返回个人中心
     onClickSetting(){
       this.$router.push('/profile')
     }
  },
  created(){}
}
</script>

<style>

</style>