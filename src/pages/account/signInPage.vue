<template>
  <div id="sign">
    <van-row>
      <van-col id="fashion" span="24">潮流街APP</van-col>
    </van-row>
    <div style="margin-top:60px"></div>
    <div class="switch">
      <van-button v-if="switchRegister" type="info" size="mini" @click="SwitchRegister">登录</van-button>
    </div>
    <div class="switch">
      <van-button v-if="switchLogin" type="info" size="mini" @click="SwitchLogin">注册</van-button>
    </div>
    <van-cell-group v-if="switchLogin">
      <van-field
        v-model="username"
        left-icon="user-o"
        label="用户名"
        placeholder="请输入用户名"
        clearable
        :border="false"
      />
      <van-field
        v-model="password"
        left-icon="closed-eye"
        type="password"
        label="密码"
        placeholder="请输入密码"
        clearable
        :border="false"
        :error-message="sign_error"
      />
      <van-cell>
        <van-button type="info" size="large" @click="handlerSignInClick">登录</van-button>
      </van-cell>
    </van-cell-group>
    <!-- 注册 -->
    <van-cell-group v-if="switchRegister">
      <van-field
        v-model="username"
        left-icon="user-o"
        clearable
        label="用户名"
        placeholder="请输入注册用户名"
        :border="false"
      />
      <!-- <van-field
        v-model="phone"
        left-icon="phone-o"
        label="账号"
        placeholder="请输入注册手机号"
        clearable
        :border="false"
      />-->
      <van-field
        v-model="password"
        left-icon="closed-eye"
        type="password"
        label="密码"
        placeholder="请输入密码"
        clearable
        :border="false"
      />
      <van-cell>
        <van-button type="info" size="large" @click="handlerRegisterClick">注册</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "signInPage",
  data() {
    return {
      // phone: "",
      password: "",
      username: "",
      sign_error: "",
      switchLogin: true,
      switchRegister: false
    };
  },
  methods: {
    //登录
    handlerSignInClick() {
      if (!this.username || !this.password) {
        Toast.fail("请输入用户名和密码");
        return;
      }
      this.$cloudApi
        .login({ username: this.username, password: this.password })
        .then(res => {
          console.log(res,555);       
        })
        .catch(err => { console.log(res,444);});
         //获取账号和密码放在本地缓存
      sessionStorage.setItem("username", this.username);
      sessionStorage.setItem("password", this.password);
       this.$router.push("/home");
      //清空输入框
      this.username = "";
      this.password = "";
    },
    //注册
    handlerRegisterClick() {
      if (!this.username || !this.password) {
        Toast.fail("请填写正确的格式");
        return;
      }
      //知晓云Api注册接口
      this.$cloudApi
        .register({
          username: this.username,
          //phone: this.phone,
          password: this.password
        })
        .then(res => {
        })
        .catch(err => {});
     
      //清空输入框
      this.username = "";
      this.password = "";
    },
    //切换注册
    SwitchLogin() {
      this.switchRegister = true;
      this.switchLogin = false;
    },
    //切换登录
    SwitchRegister() {
      this.switchRegister = false;
      this.switchLogin = true;
    }
  }
};
</script>

<style lang="less">
#sign {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .switch {
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
  #fashion {
    text-align: center;
    font-size: 21px;
    color: rgb(19, 130, 233);
  }
}
</style>