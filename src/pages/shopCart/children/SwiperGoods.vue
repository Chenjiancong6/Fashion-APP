<!--
--购物车商品栏
-->
<template>
  <div id="swiper-goods">
    <van-swipe-cell v-for="(item,index) in goods" :key="index">
      <van-card
        currency="￥"
        :title="item.title"
        :price="item.price"
        :thumb="item.path"
        :num="item.selectedNum"
      >
        <template #tags>
          <van-tag plain type="danger">{{item.shop}}</van-tag>
        </template>
      </van-card>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          @click="delteItemCart(index)"
          class="delete-button"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import { setItem, getItem } from "@/components/storage"; //封装缓存的方法
export default {
  name: "SwiperGoods",
  props:{
    goods:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  data() {
    return {

    };
  },
  methods: {
  
    //删除选中的购物车数据
     delteItemCart(index) {
      //把事件传递给父组件
     this.$emit("delteCart",index)  
     }
  },

  created() { }
};
</script>

<style scoped>
#swiper-goods {
  height: calc(100vh - 94px);
  overflow: scroll;
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
</style>