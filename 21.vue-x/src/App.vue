<template>
  <div id="app">
    <div id="nav">
      <div>{{$store.state.count}}</div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

</style>
