<template>
  <div id="Category"> 
      <nav-bar class="nav_bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="sideShow">
    <Sidebar :title="title" @tabClick="tabClick" class="side-bar"></Sidebar>
    <GoodsList :good-type="goods" class="goods-list"></GoodsList>
    </div>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import NavBar from "@/components/NavBar";
import Sidebar from "./children/Sidebar"; //侧边栏
import GoodsList from "@/components/GoodsList" //侧边栏右边的展示区域
export default {
  name: "Category",
  components: { NavBar, Sidebar, GoodsList },
  data() {
    return {
      title: [
        "正在流行",
        "哈克超市",
        "男装",
        "数码",
        "手机",
        "潮鞋",
        "手办模型",
        "图书文娱",
        "运动户外",
         "美妆护肤",
      ],
      goods: []
    };
  },
  methods: {
    //子组件传递过来的事件
    tabClick(index) {
      console.log(index, 345);
      let query = new BaaS.Query();
      let Product = new BaaS.TableObject("home_popular");
      Product.setQuery(query)
        .find()
        .then(res => {
          this.goods = res.data.objects;
        });
    }
  }
};
</script>

<style scoped>

.sideShow{
  display: flex;
  justify-content:flex-start;
  width: 100%; 
}
.side-bar{
  flex: 10%;
   width:20%;
}
.goods-list{
  width:78%;
}
.nav_bar{
  position: static;
}

</style>