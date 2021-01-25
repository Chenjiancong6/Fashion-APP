<!--
---分类页侧边栏
-->
<template>
  <div id="sideBar">
    <van-sidebar v-model="activeKey" @change="onChange" >
      <van-sidebar-item class="sidebar-item" :title="title"  v-for="(title,index) in title" :key="index" @click="onClick(title)"/>
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    title: {
      type: Array,
      default() {         
        return [];
      }
    }
  },
  data() {
    return {
      activeKey: 0
    };
  },
  methods:{
    //监听切换导航项时的事件
    onChange(index){
    console.log(index);
    //把当前导航项通过子组件传递给父组件
     this.$emit("tabClick",index)
    },
    //当前的导航项内容 
    onClick(index){
         console.log(index,22);
    }
  }
};
</script>

<style scoped>
#sideBar{
margin-bottom: 51px;
height: calc(100vh - 94px);
overflow: scroll;
}
.sidebar-item{
width: 100%; 
}
</style>