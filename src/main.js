import Vue from "vue";
import router from './config/router' //路由
import store from './store' //vuex
import App from './App'
import * as Vant from "./vant"  //有赞组件,按需引用，封装在另外一个文件夹
import cloudApi from './api/cloud/cloudApi' //全局挂载知晓云api
import { Toast } from 'vant';


Vue.config.productionTip = false
 
Vue.prototype.$vant=Vant

Vue.prototype.$Toast = Toast

Vue.prototype.$cloudApi = cloudApi  //接口API

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

export default app