<template>
  <div id="grid">
    <div class="grid-title">本周流行</div>
    <van-grid :border="false" :column-num="4" class="van_grid">
      <van-grid-item  v-for="(item,index) in Image" :key="index">
        <van-image :src="item.path" round fit="cover" width="4rem" height="4rem" />
        <span style="margin-top:10px">{{ImgText[index].name}} </span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "grid",
  components: {},
  data() {
    return {};
  },
  methods: {
   
    },
      
  computed: {
    //vuex缓存数据
    ...mapGetters({
      Image: "home/Image", //图片
      ImgText:"home/ImgText" //图片描述
    })
  },
  created() {
    this.$cloudApi.queryImage("week_popular","home/getImage"); //赋值指定文件获取图片
    this.$cloudApi.queryData("week_popular","home/getImageText")  //赋值指定数据表获取图片名称
  }
};
</script>

<style scoped>
.grid-title {
  text-align: center;
  vertical-align: middle;
  color: black;
  font-size: 18px;
  font-weight: bold;
}
.van_image {
  border-radius: 50%;
}
</style>