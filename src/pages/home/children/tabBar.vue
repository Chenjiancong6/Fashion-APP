<!--tab标签页-->
<template>
  <div class="tab-bar">
    <van-tabs v-model="active" sticky animated swipeable>
      <van-tab v-for="(title,index) in titles" 
       @click="itemClick(index)" :key="index" 
       :title="title">fgdsg</van-tab>  
    </van-tabs>
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
       itemClick(index) {
      this.active = index; //点击时修改index的值
      this.$emit("tabClick", index); //点击切换页面，并传递出index的值
    }
  }
};
</script>

<style>
</style>