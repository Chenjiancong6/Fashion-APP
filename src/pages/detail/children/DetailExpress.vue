<!--
--快递信息
-->
<template>
  <div id="expresspage">
  <div class="express">
       <div><van-icon name="cash-back-record" color="#1989fa"  size="20"/> 退货补运费</div>
   <div><van-icon name="free-postage" color="#1989fa"  size="20"/> 全国包邮</div>
   <div><van-icon name="vip-card-o" color="#1989fa"  size="20"/> 7天无理由退货</div>
  </div>
  </div>
</template>

<script>
export default {
 name:'DetialExpress',
}
</script>

<style scoped>
#expresspage{
padding: 0 0 20px 0;
 border-bottom: 5px solid #f2f5f8;
}

.express{
    display: flex;
 justify-content: space-between;
  /* color: #409EFF; */
  margin:0 5px ;
}
</style>