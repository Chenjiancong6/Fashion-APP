/** 
****设置，包括退出登录
*/

<template>
  <div id="setting">
    <div class="settings">
      <van-nav-bar left-text="设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
      <!--  -->
      <div class="Login" @click="clickLogin">
        <div class="avater">
          <span class="shops_avater">
            <van-image cover round width="3rem" height="3rem" :src="$store.state.avatar" />
          </span>
          <span class="avater_name">{{$store.state.user}}</span>
        </div>
        <van-icon name="arrow" class="van_icon" />
      </div>
      <!--  -->

      <!-- 收货地址 -->
      <div class="address">
        <div class="Divider"></div>
        <settingButton :titles="address" @ItemClick="clickAddress"></settingButton>
      </div>
      <!--  -->
      <div style="margin-top:10px">
        <settingButton :titles="Account" @ItemClick="clickAccount"></settingButton>
        <div class="Divider"></div>
        <settingButton :titles="Pay" @ItemClick="clickPay"></settingButton>
      </div>
      <!--  -->
      <div style="margin-top:10px">
        <settingButton :titles="Message" @ItemClick="clickMessage"></settingButton>
        <div class="Divider"></div>
        <settingButton :titles="Private" @ItemClick="clickPrivate"></settingButton>
        <div class="Divider"></div>
        <settingButton :titles="Public" @ItemClick="clickPublic"></settingButton>
      </div>
      <!--  -->
      <div style="margin-top:10px">
        <settingButton :titles="Help" @ItemClick="clickHelp"></settingButton>
        <div class="Divider"></div>
        <settingButton :titles="About" @ItemClick="clickAbout"></settingButton>
      </div>
      <!-- 退出登录 -->
      <div class="logout" @click="clickLogout">
        <span>退出登录</span>
      </div>
      <!-- 切换账号 -->
      <div class="switchAccount" @click="clickSwitchAccount">
        <span>切换账号</span>
      </div>
    </div>
  </div>
</template>

<script>
import BaaS from "@/api/cloud/init";
import { setItem, getItem,removeItem } from "@/components/storage"  //数据获取，存储，移除封装
import store from "@/store/index"; //引入vuex
import settingButton from "./children/settingButton"; //展示组件
export default {
  name: "setting",
  components: { settingButton },
  data() {
    return {
      address: "我的收货地址",
      Account: "账户与安全",
      Pay: "支付",
      Message: "消息",
      Private: "隐私",
      Public: "通用",
      Help: "帮助与反馈",
      About: "关于潮流街APP"
    };
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.back();
    },
    //切换账号
    clickSwitchAccount() {
       // 登出 BaaS
      BaaS.auth.logout().then(res => {
          // success
            console.log(res);
            removeItem("userId")
            removeItem("user")
             removeItem("nickname")
            removeItem("avatar") 
            this.$router.push({path:'/login'})
        },err => { });
    },
    //退出登录
    clickLogout() {
      // 登出 BaaS
      BaaS.auth.logout().then(res => {
          // success
            console.log(res);
            removeItem("userId")
            removeItem("user")
             removeItem("nickname")
            removeItem("avatar") 
            this.$router.push({path:'/login'})
        },err => { });
    },
    clickLogin() {
      console.log("clickLogin");
    },
    clickAddress() {
      console.log("clickAddress");
    },
    clickAccount() {
      console.log("clickAccount");
    },
    clickPay() {
      console.log("clickPay");
    },
    clickMessage() {
      console.log("clickMessage");
    },
    clickPrivate() {
      console.log("clickPrivate");
    },
    clickPublic() {
      console.log("clickPublic");
    },
    clickHelp() {
      console.log("clickHelp");
    },
    clickAbout() {
      console.log("clickAbout");
    }
  }
};
</script>

<style scoped>
#setting {
  position: relative;
  z-index: 9;
  /* 覆盖掉底部导航栏 */
  background-color: #fff;
  height: 100vh;
}
.settings {
  background-color: rgba(243, 243, 243, 0.945);
  height: 100vh;
}
.switchAccount,
.logout {
  margin-top: 20px;
  background-color: white;
  padding: 10px 0;
  text-align: center;
}

.Divider {
  border: 1px solid rgb(240, 238, 238);
}
.address {
  background-color: white;
  text-align: center;
  vertical-align: middle;
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
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.van_icon {
  margin-top: 30px;
  margin-right: 10px;
}
.van-divider {
  background-color: white;
}
</style>