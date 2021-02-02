<!--vue入口文件-->
<template>
  <div id="app">
  <!-- <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive> -->
    <router-view></router-view>
 <tab-bar></tab-bar>
  </div> 
 
</template>

<script>

import TabBar from "@/components/TabBar"  //底部标签栏
export default {
  name: 'App',
  components: {
     TabBar
  }, 
}
</script>

<style scoped>
@import "assets/css/base.css";
.actives{
  display: none;
}
</style>
