<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"> </slot>
    </div>
    <div v-else>
      <slot name="item-icon_ictive"> </slot>
    </div>
    <!-- <div :class="{ active: isActive }"> -->
      <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div> 
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 4px;
}
 
</style>