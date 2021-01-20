<template>
  <div id="detail">
     <nav-bar></nav-bar>
  </div>
</template>

<script>
 import NavBar from "./children/NavBar"
export default {
    name:'detail',
  components: {
    NavBar
  },
  data(){
    return{
      iid:null
    }
  },
  methods:{},
  created(){
    //获取传递过来对应的iid
    this.iid=this.$route.query.iid
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  /* 覆盖掉底部导航栏 */
  background-color: #fff;
  height: 100vh;
}

</style>