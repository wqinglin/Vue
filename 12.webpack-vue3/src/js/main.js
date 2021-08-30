// runtime-only        代码中不可以有任何<template>  不能进行代码编译
// runtime-compiler     代码中可以有<template>  compiler可以用于解析<template>
import  Vue from "vue";


const App = {
    template:
    `
    <div>
        <h2>{{message}}</h2>
        <button @click = "btnClick">点击</button>
    </div>
    `,
    data(){
        return {
             message:"hello webpack"
        }
    },
    methods:{
        btnClick(){
            console.log("我输出了");
        }
    }
}

const app = new Vue({
    el:"#app",
    template:"<App/>",
    components:{
        App
    }
})