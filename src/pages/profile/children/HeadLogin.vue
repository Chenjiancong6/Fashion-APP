<!--
----头部登录头像等信息
--->
<template>
  <div id="HeadLogin">
    <div class="Login">
      <div class="avater">
        <span class="shops_avater">
          <van-image
            cover
            round
            width="3rem"
            height="3rem"
            :src="$store.state.avatar"
          />
        </span>
        <span class="avater_name">{{$store.state.nickname}}</span>
      </div>
      <div class="setting">
        <van-icon @click="onClickSetting" name="setting-o" size="25" />
      </div>
    </div>
    <!--收藏夹等信息-->
    <div class="avater_info">
      <div>
        <div class="Num">12</div>
        <div>收藏夹</div>
      </div>
      <div>
        <div class="Num">18</div>
        <div>关注店铺</div>
      </div>
      <div>
        <div class="Num">233</div>
        <div>浏览记录</div>
      </div>
      <div>
        <div class="Num">5</div>
        <div>红包卡券</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";  //引入vuex
export default {
  name: "HeadLogin",
  data() {
    return {

    };
  },
  methods: {
    //子组件向父组件传递点击事件
    onClickSetting() {
      // this.$emit();
    }
  }
};
</script>

<style scoped>
#HeadLogin {
  color: aliceblue;
   height: 200px;
}
.avater {
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center; /* 在交叉轴对齐 */
}
.avater_name {
  margin-left: 20px;
}
.Login {
  display: flex;
  justify-content: space-between;
}
.setting {
  margin-top: 20px;
  margin-right: 10px;
}
.avater_info {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.avater_info .Num {
  text-align: center;
}
</style>