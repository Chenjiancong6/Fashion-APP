<!--
   ///详情页底部工具栏
-->
<template>
  <div id="buttonBar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" color="#ee0a24" text="客服" dot />
      <van-goods-action-icon @click="enterShopCart" icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button @click="clickShopCart" type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <van-sku
      :show-add-cart-btn="confirm"
      buy-text="确认"
      v-model="show"
      preview-on-click-image
      show-header-image
      :sku="sku"
      :goods-id="goodsId"
      :goods="goodss"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "DetailButtonBar",
  data() {
    return {
      show: false,
      confirm: false, //关闭加入购物车按钮
      goodsId: '', //商品 id
      //商品 sku 数据
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "商品", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "", // skuValueName：规格值名称
                imgUrl: "" // 规格类目图片，只有第一个规格类目可以定义图片
              }
            ],
            largeImageMode: true //  是否展示大图模式
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [ 
          {
            // 商品留言
            multiple: "1", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "0", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      //商品信息
      goodss: {
        // 默认商品 sku 缩略图
        picture:
          "https://cloud-minapp-37413.cloud.ifanrusercontent.com/1l3DB3gp0OYNBDZg.jpg"
      }
    };
  },
  methods: {
    //加入购物车
    clickShopCart() {
      this.show = true;
      //给商品参数赋值
      this.sku.tree[0].v[0].imgUrl = this.goods.path;  //赋值商品图片路径
       this.sku.tree[0].v[0].name=this.goods.title;  //商品描述
      this.goodsId=this.goods.id;
      this.sku.list[0].price=parseInt((this.goods.price)*100);
      this.sku.list[0].stock_num=parseInt(this.goods.totalShop)  //总商品量(库存)
      this.sku.price=this.goods.price //默认价格
      this.sku.stock_num=parseInt(this.goods.totalShop) //默认数量
    },
    //确认按钮
    onBuyClicked(index) {
      //index: 获取已选商品参数
      console.log(index);
      this.$toast('加入购物车成功')
      this.show=false
    },

    //跳转购物车页面
    enterShopCart(){
      this.$router.push("/shopCart")
    }

  },
  computed: {
    ...mapGetters({
      goods: "detail/goods" //在vuex获取详情页数据
    })
  }
};
</script>

<style scoped>
</style>