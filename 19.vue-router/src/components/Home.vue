<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log("created");
    //document.title = "首页"
  },
  destroyed() {
    console.log("destroyed");
  },
  // activated和deativated只有在<keep-alive>中才有效
  activated() {
    //跳转至离开之前的路径
    this.$router.push(this.path).catch((error) => error);
    console.log("activated");
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    //记录离开之前的路径
    this.path = this.$route.path;
    next();
  },
};
</script>

<style scoped>
</style>