<template>
  <div id="DetailGoodsInfo">
    <van-image class="imgage" @click="clickImage" :src="goods.path" alt="图片资源加载失败" />
    <div class="title">{{goods.title}}</div>
    <div class="info-price">
      <span class="price">￥{{goods.price}}</span>
      <span class="info-badge"><van-icon name="new-arrival-o" color="#1989fa"  size="30"/></span>
    </div>
    <div class="shopInfo">
      <div class="one">月销量{{goods.sale}}</div>
      <div class="two">收藏{{goods.collection}}人</div>
      <div class="three">24小时内发货</div>
    </div>
    <van-divider/>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "DetailGoodsInfo",
  components: {},
  props:{
    // goods:{
    //   type:Object,
    //   default(){
    //     return {}
    //   }
    // }
  },
  data() {
    return {};
  },
  methods: { 
    //图片预览
    clickImage() {
      ImagePreview({
        images: [this.goods.path],
        closeable: true
      });
    }
  },
  created(){},
   computed:{
    ...mapGetters({
      goods:'detail/goods',  //在vuex获取详情页数据
    })
  }
};
</script>

<style scoped>
.shopInfo{
  display: flex;
  justify-content: space-between;
  color: #409EFF;
  margin: 0 5px;
}
.title, .info-price, .shopInfo{
  margin-top: 1rem;
}
.title{
  margin-left: 10px;
  color:#409EFF;
}
.info-price{
   margin-left: 10px;
}
.info-price .price{
  font-size: 26px;
  color: rgb(231, 15, 15);
  font-weight: bold;
}

.info-badge{
  /* background-color: #409EFF;
  color:#fff;
  border-radius:15%; */
 margin-left: 2rem;
}
</style>