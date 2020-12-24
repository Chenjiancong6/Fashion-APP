import Vue from 'vue'
import VueRouter from "vue-router";
import {
    Toast
} from 'vant'
//使用路由
Vue.use(VueRouter);

//懒加载,定义路由映射,导入
const signIn = () => import("@/pages/account/signInPage") //登录
const home = () => import("@/pages/home/Home") //首页
const category = () => import("@/pages/category/Category")
const shopCart = () => import("@/pages/shopCart/ShopCart")
const profile = () => import("@/pages/profile/Profile")



const routes = [{
        path: '/',
        redirect: '/home' //重定向， 默认显示
    },
    {
        name: "signIn",
        path: "/signIn",
        component: signIn,
        meta: {
            title: "账号登录",
        }
    },
    {
        name: 'home',
        path: '/home',
        component: home,
        meta: {
            title: '首页',
            //登录权限
            auth: true
        }
    },
     {
         name: 'category',
         path: '/category',
         component: category,
         meta: {
             title: '分类',
             //登录权限
             auth: true
         }
     },
      {
          name: 'shopCart',
          path: '/shopCart',
          component: shopCart,
          meta: {
              title: '购物车',
              //登录权限
              auth: true
          }
      },
       {
           name: 'profile',
           path: '/profile',
           component: profile,
           meta: {
               title: '我的',
               //登录权限
               auth: true
           }
       },
]

//挂载router路由
const router = new VueRouter({
    mode: "hash", //hash：当 URL 改变时，页面不会重新加载
    base: process.env.BASE_URL,
    routes,
});

//to跳转的页面
//from跳转前的页面
//next跳转页面的操作
router.beforeEach((to, from, next) => {
    //    let win = window.sessionStorage
    //    console.log(win.getItem("username"), "账号");
    const auth = to.meta && to.meta.auth //将要跳转的页面
    if (auth) {
        console.log(111111111111)
        //先判断是否有登录缓存
        let win = window.sessionStorage
        console.log(win.getItem("username"), "账号--");

        if (win.getItem("username") == 'admin' && win.getItem("password") == '123456') {
            //符合继续进行
            next(   )
           // next({path:'/'});  //不起作用？
            console.log(222222)
        } else {
            console.log(3333333)
            //不符合跳转登录界面
            Toast("请先登录")
            next({
                path: '/signIn'
            })
        }
    } else {
        //Toast("请先登录.")
        next();
        console.log(444444444)
    }
});

// 修改路由push方法,阻止重复点击报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

// 修改路由replace方法,阻止重复点击报错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


//导出路由
export default router