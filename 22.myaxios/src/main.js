import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import { request } from './components/network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


// http://httpbin.org/
// http://123.207.32.32:8000/home/multidata
// http://123.207.32.32:8000/home/data?type=pop&page=1
// 1.基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   // method:'post' //默认或不写都为get请求
// }).then(res => console.log(res))

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })



//2.axios发送并发请求
// axios.all([
//   axios(
//     {
//       url: 'http://123.207.32.32:8000/home/multidata'
//     }
//   ),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: "pop",
//       page: 5
//     }
//   })])
//   .then(res => {
//     //内容未展开
//     console.log(res);
//     console.log(res[0]);
//     console.log(res[1]);
//   })


// axios.all([
//   axios(
//     {
//       url: 'http://123.207.32.32:8000/home/multidata'
//     }
//   ),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: "pop",
//       page: 5
//     }
//   })])
//   .then(
//     //通过spread方法将数据展开
//    axios.spread((res1,res2)=>{
//      console.log(res1);
//      console.log(res2);
//    })
//   )

//3.使用全局的axios和对应的配置进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000/home'
// axios.defaults.timeout = 5000
// axios.all([
//   axios(
//     {
//       url: '/multidata'
//     }
//   ),
//   axios({
//     url: '/data',
//     params: {
//       type: "pop",
//       page: 5
//     }
//   })])
//   .then(
//     //通过spread方法将数据展开
//    axios.spread((res1,res2)=>{
//      console.log(res1);
//      console.log(res2);
//    })
//   )
//method  => get => params:{id:12}
//method => post (request.body)=> data:{key:'aa'}


// 4.创建对应的axios实例 (常用)
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
// instance1({
//   url:'/home/multidata'
// }).then(res => console.log(res)
// )

// instance1({
//   url:'/home/data'
// }).then(res => console.log(res)
// )


// const instance2 =axios.create({

// })
// instance2({

// })


//封装request模块
//方法一

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// }
// )


//方法二
// request({
//   baseConfig:{
//     url: '/home/multidata'
//   },
//   success(res){
//     console.log(res);
//   },
//   failture(err){
//     console.log(err);
//   }
// })

// 方法三
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// 方法四
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})




