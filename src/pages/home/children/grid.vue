<template>
  <div id="grid">
      <div class="grid-title">本周流行</div>
  <van-grid :border="false" :column-num="4" class="van_grid">
  <van-grid-item >
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    <span style="margin-top:10px">文字</span>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
  <van-grid-item >
    <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
    <span style="margin-top:10px">文字</span>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
   <van-grid-item>
    <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
export default {
   name:"grid"
}
</script>

<style>
.grid-title{
    text-align: center;
    vertical-align:middle;
    color: black;
    font-size: 18px;
    font-weight:bold
}


</style>