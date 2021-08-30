import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


//改变网址，而不刷新页面两种方案
// 1.url的hash(默认)
// location.hash = 'aaa'

//location.href = "bbb"  更换网址网页刷新

//2.html5的history.pushState({},'','home')
// history.pushState({},'','home')  相当于入栈

// history.back()   相当于出栈 //等价history.go(-1)
// history.forward()     //等价history.go(1)

//history.replaceState({},'',"home")  //替换，不能更换网页


