<template>
  <div id="detail">
    <nav-bar></nav-bar>
    <detail-goods-info></detail-goods-info>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "./children/NavBar";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "detail",
  components: {
    NavBar,
    DetailGoodsInfo
  },
  data() {
    return {
      id: null
    };
  },
  methods: {
  
  },
  created() {
    //获取传递过来对应的iid
    //this.id = this.$route.query.id;
  },
   computed:{
    ...mapGetters({
      tables:'home/tables',  //获取数据表名
    })
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