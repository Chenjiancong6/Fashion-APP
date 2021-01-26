<!---
-----商品订单信息
-->
<template>
  <div id="GoodsOrder">
   <div class="MyOrder">
       <div class="my">我的订单</div>
       <div>查看全部订单<van-icon name="arrow" /></div>
   </div>
   <van-divider />
   <!-- 订单状态信息 -->
   <div id="OrderInfo">
   <div>
       <div class="Order_icon"><van-icon size="25" name="wechat" color="#1989fa"/></div>
       <div>待付款</div>
   </div>
   <div>
       <div class="Order_icon"><van-icon size="25" name="todo-list" color="#1989fa"/></div>
       <div>待发货</div>
   </div>
   <div>
       <div class="Order_icon"><van-icon size="25" name="cart-circle" color="#1989fa"/></div>
       <div>待收货</div>
   </div>
   <div>
       <div class="Order_icon"><van-icon size="25" name="comment" color="#1989fa"/></div>
       <div>评价</div>
   </div>
   <div>
       <div class="Order_icon"><van-icon size="25" name="refund-o" color="#1989fa"/></div>
       <div>退款/售后</div>
   </div>
   </div>
  </div>
</template>

<script>
export default {
   name:"GoodsOrder"
}
</script>

<style scoped>
#GoodsOrder{
   margin-left: 10px;
   margin-right: 10px;
   border-radius: 9px;
   height: 130px;
   margin-top: -30px;
}
.MyOrder{
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
}
.MyOrder .my{
 margin-left: 10px;
}
#OrderInfo{
    display: flex;
    justify-content: space-around;
}
#OrderInfo .Order_icon{
    text-align: center;
}

</style>