// runtime-only        代码中不可以有任何<template>  不能进行代码编译
// runtime-compiler     代码中可以有<template>  compiler可以用于解析<template>
import  Vue from "vue";
const app = new Vue({

    //el和template的区别：
    //vue内部会自动将 template模板会替换#app所指向的内容
    el:"#app",
    template:
    `
    <div>
        <h2>{{message}}</h2>
        <button @click = "btnClick">点击</button>
    </div>
    `,
    data:{
        message:"hello webpack"
    },
    methods:{
        btnClick(){
            console.log("我输出了");
        }
    }
})