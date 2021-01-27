<template>
  <div id="detail">
    <nav-bar class="nav_bar"></nav-bar>
    <div class="scorlls">
    <detail-goods-info ></detail-goods-info>
    <detail-express></detail-express>
   <DetailShopInfo></DetailShopInfo>
   <DetailButtonBar></DetailButtonBar>
   </div>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "./children/NavBar";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailExpress from "./children/DetailExpress";  //快递信息
import DetailShopInfo from "./children/DetailShopInfo"  //店铺信息
import DetailButtonBar from "./children/DetailButtonBar" //底部按钮
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "detail",
  components: {
    NavBar,
    DetailGoodsInfo,
    DetailExpress,
    DetailShopInfo,
    DetailButtonBar
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
.nav_bar{
  position: static;
}
.scorlls{
  height: calc(100vh - 96px);
overflow: scroll;
}

</style>