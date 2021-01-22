<!--
   ///详情页底部工具栏
-->
<template>
  <div id="buttonBar">
   <van-goods-action>
  <van-goods-action-icon icon="chat-o" color="#ee0a24" text="客服" dot />
  <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
  <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
  <van-goods-action-button type="warning" text="加入购物车" />
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>
  </div>
</template>

<script>
export default {
  name:"DetailButtonBar"
}
</script>

<style scoped>
/* #buttonBar{
    height: 58px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
} */
</style>