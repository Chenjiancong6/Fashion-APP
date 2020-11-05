import Vue from "vue";
import router from './config/router' //路由
import store from './store' //vuex
import App from './App'
import vant from "./vant"  //有赞组件
import cloudApi from './api/cloud/cloudApi' //全局挂载知晓云api


Vue.config.productionTip = false
 
Vue.prototype.$vant=vant

Vue.prototype.$cloudApi = cloudApi

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default app