// runtime-only        代码中不可以有任何<template>  不能进行代码编译
// runtime-compiler     代码中可以有<template>  compiler可以用于解析<template>
import  Vue from "vue";
const app = new Vue({
    el:"#app",
    data:{
        message:"hello webpack"
    }
})