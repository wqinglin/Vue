<template>
  <div id="app">
    <!-- 默认被渲染成a标签 -->
    <!-- tag 将标签不渲染成a标签，渲染成自己需要的 -->
    <!--replace 只有点击 router-link中内容的能发生跳转 ,浏览器上一页,下一页不支持此操作-->
    <!--router-link-active(默认自带)被点击按钮将会添加此类,可以为通过此类设置点击样式 -->

    <!-- 页面实现跳转方式一 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/' + userId">用户</router-link>
    <!-- url -->
    <!-- 协议：//主机：端口/路径？查询 -->
    <router-link
      :to="{
        path: '/profile',
        query: { name: 'wql', age: 18, hobby: 'baseball' },
      }"
      >档案</router-link
    >
    <p>我是首页</p>
    <p>我是关于</p>

    <!-- 页面实现跳转方式二 可以在页面跳转同时添加相应的javascript代码 -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!-- 占位 -->
    <!-- 不要随机加空格 -->
    <!-- exclude中传name的值 -->
    <keep-alive exclude="User">
      <!-- 但我们离开一个组件的时候，不要让一个组件频繁的销毁创建，而是保持活跃的状态 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { userId: "lisi" };
  },
  methods: {
    homeClick() {
      //浏览器上一页，下一页无效
      // this.$router.replace("/home")
      //所有组件都有router属性
      //$router为router = new VueRouter 的实例对象
      this.$router.push("/home").catch((err) => err);
    },
    aboutClick() {
      this.$router.push("/about").catch((err) => err);
    },
    userClick() {
      this.$router.push("/user/" + this.userId).catch((err) => err);
    },
    profileClick() {
      this.$router
        .push({
          path: "/profile",
          query: {
            name: "kobe",
            age: 19,
            height: 1.9,
          },
        })
        .catch((err) => err);
    },
  },
};
</script>

<style>
.router-link-active {
  color: aqua;
}
.active {
  color: red;
}
</style>