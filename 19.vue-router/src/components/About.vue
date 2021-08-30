<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容</p>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log("created");
    // document.title = "关于"
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