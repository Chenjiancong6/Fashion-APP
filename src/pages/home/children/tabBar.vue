<!--tab标签页-->
<template>
  <div class="tab-bar">
    <van-sticky :offset-top="0">
    <van-tabs v-model="active"  @click="itemClick(active)"   sticky animated swipeable>
      <van-tab v-for="(title,index) in titles" :key="index" 
       :title="title" :name="index"></van-tab>  
    </van-tabs>
    </van-sticky>
  </div>
</template>

<script>
//import goodsList from "./GoodsList"
export default {
  name: "TabBar",
 // components:{goodsList},
  data() {
    return {
      active: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
       itemClick(active) {
      this.active = active; //点击时修改index的值

      this.$emit("tabClick", active); //点击切换页面，并传递出index的值
    }
  }
};
</script>

<style scoped>
/* .tab-bar{
position: sticky;
} */

</style>