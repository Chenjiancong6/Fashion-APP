<!--
--购物车商品栏
-->
<template>
  <div id="swiper-goods">
<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
<van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
  </div>
</template>

<script>
export default {
   name:'SwiperGoods',
}
</script>

<style scoped>
#swiper-goods{
margin-bottom: 51px;
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