<template>
  <div>
    <h1>我是user</h1>
    <h2>哈哈哈</h2>
    <!--1. 计算属性通过$route.params获得参数值 -->
    <!-- <h2>{{useId}}</h2> -->
    <!-- 2. 直接t通过$route.params获得参数值 -->
    <h2>{{ $route.params.userId }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      message: "你好",
    };
  },
  computed: {
    useId() {
      //$route 为当前活跃的router对象
      return this.$route.params.userId;
    },
  },
  methods: {
    btnClick() {
      //所有的组件都继承自vue类的原型
      console.log(this.$router);
      console.log(this.$route);
      console.log(this);
    },
  },
  //创建组件时回调
  created() {
    console.log("created");
    //document.title = "用户"
  },
  destroyed() {
    console.log("destroyed");
  },
  //tempate挂载到整个DOM上回调的
  mouted() {
    console.log("mounted");
  },
  //整个界面刷新时回调
  updated() {
    console.log("updated");
  },
};
</script>

<style>
</style>