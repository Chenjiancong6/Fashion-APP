<template>
  <div class="goods-list">
    <van-card
    @click="enterDetail(index)"
    v-for="(item,index) in goodType"
    :key="index"
      currency="￥"
      :title="item.title"
      :price="item.price"
      :thumb="item.path"
      :num="item.totalSale"
      
    >
      <template #tags>
        <van-tag plain type="danger">{{item.shop}}</van-tag>
      </template>
    </van-card>
    <van-divider  dashed
    :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >我也是有底线的</van-divider>
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
    enterDetail(index){
      //console.log(this.goodType[index].iid)
      //获取点击对应数据表的iid
      const iid=this.goodType[index].iid
      //跳转到对应的详情页
      this.$router.push({
        path:'/detail',
        query:{iid}
      })
      
    }
  },
 
};
</script>

<style>
.goods-list{
  margin-bottom: 51px;
}
</style>