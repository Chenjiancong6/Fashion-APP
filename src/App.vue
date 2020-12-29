<!--vue入口文件-->
<template>
  <div id="app">
  <keep-alive exclude="">
      <router-view></router-view>
    </keep-alive>
    <tab-bar :class="{actives:isActive}"></tab-bar>
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
