<!--
   店铺信息
-->
<template>
  <div id="shopInfo">
    <div class="shops">
      <div class="avater">
        <span class="shops_avater">
          <van-image
            cover
            round
            width="3rem"
            height="3rem"
            :src="goods.path"
          />
        </span>
        <span class="avater_info">{{goods.shop}}</span>
      </div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{goods.totalSale}}万</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{goods.totalShop}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr>
            <td>描述相符</td>
            <td class="score">4.66</td>
            <td class="better">
              <span>高</span>
            </td>
          </tr>
          <tr>
            <td>质量满意</td>
            <td class="scores">4.46</td>
            <td class="betters">
              <span>低</span>
            </td>
          </tr>
          <tr>
            <td>价格合理</td>
            <td class="score">4.96</td>
            <td class="better">
              <span>高</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "DetialShopInfo",
  computed: {
    ...mapGetters({
      goods: "detail/goods" //在vuex获取详情页数据
    })
  }
};
</script>

<style scoped>
#shopInfo{
  margin-bottom: 101px; 
}
.avater_info {
  margin-left: 10px;
}
.avater {
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  /* 在交叉轴对齐 */
  align-items: center;
}

.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.shop-middle-item {
  flex: 1;
}

.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.sells-count,
.goods-count {
  font-size: 18px;
}

.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-right .score {
  color: #5ea732;
}

.shop-middle-right .betters,
.scores {
  color: #f13e3a;
}

.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shop-middle-right .better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>