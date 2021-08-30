<template>
  <div>
    <ul>
      <li>我是Profile</li>
      <li>我是Profile</li>
      <h2>{{ $route.query }}</h2>
      <h2>{{ $route.query.name }}</h2>
      <h2>{{ $route.query.age }}</h2>
    </ul>
  </div>
</template>

<script>
export default {
  
//  created() {
//     console.log("created");
//     //document.title = "用户"
//   },
 
 
};
</script>

<style>
</style>