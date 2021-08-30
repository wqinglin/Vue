<template>
  <div class="about">
    <h2>计步器：{{ $store.state.count }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.age20more }}</h2>
    <h2>{{ $store.getters.age20moreLength }}</h2>
    <h2>{{ $store.getters.moreAgestu(22) }}</h2>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>
