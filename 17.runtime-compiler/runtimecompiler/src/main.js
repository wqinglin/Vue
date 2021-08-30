// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


const cpn = {
  template:'<div>{{message}}</div>',
  data(){
    return{
      message:"我是组件"
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  render: function (creatElement) {
    // return creatElement('h2',{class:'box'},['hello world'])
    // return creatElement('h2',['hello world',creatElement("button",['按钮'])])
    // return creatElement(cpn)
    //  return creatElement(App)
  }
})


// runtime-compiler
//template -> ast (abstract syntax tree) -> render() -> v-dom  ->  UI 

//runtime-only
//render() -> v-dom  ->  UI(性能更高，代码量更少，少6Kb)