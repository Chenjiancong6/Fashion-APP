import Vue from 'vue'
import VueRouter from "vue-router";
//使用路由
Vue.use(VueRouter);

//懒加载,定义路由映射,导入
const signIn = () => import("@/pages/account/signInPage") //登录
const home = () => import("@/pages/home/Home") //首页



const routes = [{
        path: '/',
        redirect: '/signInPage' //重定向， 默认显示
    },
    {
        name: "signIn",
        path: "/signInPage",
        component: signIn,
        meta: {
            title: "账号登录",
            auth: true
        }
    },
    {
        name: 'home',
        path: '/home',
        component: home,
        meta: {
            title: '首页',
        }
    }
]

//挂载router路由
const router = new VueRouter({
    mode: "hash", //当 URL 改变时，页面不会重新加载
    base: process.env.BASE_URL,
    routes,
});

//动态显示每个页面的标题（全局导航守卫）
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next();
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