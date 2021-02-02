<template>
  <div id="setting_btn" @click="clickItem">
        <div  style="margin-left:10px;"><span class="title">{{titles}}</span></div>
        <div> <van-icon name="arrow" style="margin-right:10px"/></div>
  </div>
</template>

<script>
export default {
  name:'settingButton',
  props:{
      titles:{
          type:String,
         default(){
             return ""
         }
      }
  },
  methods:{
 //子组件向父组件传递点击事件
      clickItem(){
          this.$emit("ItemClick")
      }
  }
}
</script>

<style scoped>
#setting_btn{
   display: flex;
    background-color: white;
    justify-content: space-between;
    padding: 10px 0;
}
.title{
    text-align: center;
    vertical-align: middle;
}
</style>