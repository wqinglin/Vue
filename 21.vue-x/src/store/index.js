import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types'

Vue.use(Vuex)


const modulesA = {
  state:{
    name:"Sam"
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
 
  getters:{
    fullname(state){
      return state.name+"真帅"
    },
    fullname2(state,getters){
      return getters.fullname +"啊"
    },
    //模块里的方法可以有第三个参数
    fullname3(state,getters,rootState){
      return getters.fullname2 + rootState.count 
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() =>{
        context.commit("updateName","wangwu")
      },1000)
    }
  },
}
const modulesB = {
  state:{},
  mutations:{},
  actions:{},
  getters:{}
}
export default new Vuex.Store({
  //存放状态相关信息
  state: {
    count: 10,
    stu: [
      { name: "kebe", age: 24 },
      { name: "james", age: 22 },
      { name: "luban", age: 21 },
      { name: "wql", age: 18 },
    ],
    info:{
      name:'wql',
      age:19,
      hobby:"basketball"
    }
  },
  //相当于计算属性
  getters: {
    powerCounter(state) {
      return state.count * state.count
    },
    age20more(state) {
      return state.stu.filter(stu => stu.age > 18);
    },
    //年龄大于20岁的个数
    //第二个参数表示getters
    age20moreLength(state, getters) {
      return getters.age20more.length
    },
    //不写死，过去年龄
    //  moreAgestu(state){
    //    return function (age){
    //     return state.stu.filter(stu => stu.age > age);
    //    }
    //  },
    moreAgestu(state) {
      return age => {return state.stu.filter(stu => stu.age > age);}
    }
  },
  // 同步必须通过mutations
  mutations: {
   [INCREMENT](state) {
      state.count++
    },
    sub(state) {
      state.count--
    },
    incrementCount(state,count){
      console.log(count);
      state.count += count
    },
    incrementCount1(state,payload){
      console.log(payload);
      state.count += payload.count
    },
    addStu(state,stu){
      state.stu.push(stu)
    },
    updateInfo(state){
      //支持响应式
      state.info.name = "buzheng"

      //单条数据不支持响应式
      // state.info['address'] = "tianjin"

      //无论是一条还是多条，都可以做到响应式
      // Vue.set(state.info,"adress","beijin")

      //单条数据不支持响应式
      // delete state.info.age

      //响应式
      // Vue.delete(state.info,"age")

      //异步操作，无法在devtools中监听 错误代码
      // setTimeout(() => {
      //   state.info.name = '小米'
      // },1000)

    } 
  },
  //异步操作必须通过actions
  actions: {
    // aupdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit("updateInfo"),
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }

    aupdateInfo(context,payload){  //context 暂时相当于store  上下文
      return new Promise((resolve,reject) => {
        context.commit("updateInfo"),
        console.log(payload);
        resolve(666)
      })
    }
  },
  //就是将里面的内容拿到state里面
  modules: {
    a:modulesA,
    B:modulesB,
  }
})
