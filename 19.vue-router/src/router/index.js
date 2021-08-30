//1.配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'



// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';


//路由懒加载
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import("../components/Profile");
//2.通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

//！！！必须为routes
const routes = [
  {
    path: "",
    redirect: "home", //重定向 重新定位方向
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
    children: [
      {
        //不要写/,因为这个重定向的路径和news,message是同一级目录
        path: "",
        redirect: "news",
      },
      {
        //子路由不需要加/
        path: 'news',
        component: HomeNews,
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于',
    },
  },
  {
    //注意 ：
    //路由传参方式第一种：
    // 1.配置如下动态路由格式
    // 3.在<router-link :to = "'/user/'+userId">需要进行字符拼接，在路径上显示
    // 2.在User.vue中通过$.route的方式获得传参内容
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta: {
      title: '用户',
    },
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '档案',
    },
  }
]

//创建VueRouter对象
const router = new VueRouter({
  routes,
  mode: 'history',  //hash模式强行转化为html5的history,hash会出现#，使用history5不会
  //默认情况下，路径的使用的URL的hash

  //修改被点击时默认生成的类router-link-active为你自定义的类名
  linkActiveClass: "active"
})


//前置钩子（守卫)
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.matched[0].meta.title,
  console.log('++++');
  next()
})
//后置钩子
router.afterEach((to, from) => {
 console.log('----');
})


//3.将router对象传入到vue实例中
export default router
