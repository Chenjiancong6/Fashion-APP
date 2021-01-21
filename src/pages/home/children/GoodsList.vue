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
    <van-divider
      dashed
      :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
    >我也是有底线的</van-divider>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "GoodsList",
  data() {
    return {};
  },
  props: {
    goodType: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions({
      getGoods: "detail/getGoods"
    }),
    //点击进入详情页
    enterDetail(index) {
      //获取点击对应数据表的iid
      const id = this.goodType[index].id;

      /**
       * 获取详情页数据
       */
      let tableName = this.tables;
      let recordID = id;
      let Product = new BaaS.TableObject(tableName);
      Product.get(recordID).then(res => {
         //把获取的值存储到vuex里
        this.getGoods(res.data);
      });

      //跳转到对应的详情页
      this.$router.push({
        path: "/detail",
        query: { id }
      });
    }
  },
  computed: {
    ...mapGetters({
      tables: "home/tables" //获取数据表名
    })
  }
};
</script>

<style>
.goods-list {
  margin-bottom: 51px;
}
</style>