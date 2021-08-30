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
  render: function (creatElement) {
    creatElement(cpn)
  }
})

// render:function(creatElement){
//   return creatElement()
// }

// 参数第一种(普通)：creatElement('h2',{class:'box'},['hello world']) //标签，类，内容 两种环境都可运行
//参数第二种：creatElement('h2',['hello world',creatElement("button",['按钮'])])  在两种环境下运行
//参数第三种：creatElement(cpn) //cpn为组件 在runtimecompiler环境下运行
//参数第四种:creatElement(App)  //App为导入组件 在runtimecompiler环境下运行
 
// runtime-compiler
//template -> ast (abstract syntax tree) -> render() -> v-dom  ->  UI 

//谁帮我们解析<template>?
//vue-loader用来加载.vue文件
//<template>是vue-template-complier解析成render()函数
// vue在运行时没有template,都被解析render函数


//runtime-only
//render() -> v-dom  ->  UI(性能更高，代码量更少，少6Kb)


// render(h)  ->  render(creatElement)

