<template>
  <div class="goods-list">
    <van-card
    v-for="(item,index) in goodType"
    :key="index"
      currency="￥"
      :desc="item.title"
      :price="item.price"
      :thumb="item.path"
      :num="item.totalSale"
    >
      <template #tags>
        <van-tag plain type="danger">{{item.shop}}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
export default {
  name: "GoodsList",
  data(){
    return{
    
    }
  },
  props:{
    goodType:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    
  },
 
};
</script>

<style>
</style>