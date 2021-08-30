<template>
  <tab-bar>
    <template v-slot:tab-bar>
      <tab-bar-item path="/home" activeColor="purple">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </template>
        <template v-slot:item-icon_ictive>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template v-slot:item-text>首页</template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="purple">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="" />
        </template>
        <template v-slot:item-icon_ictive>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text>分类</template>
      </tab-bar-item>
      <tab-bar-item path="/cartshop" activeColor="purple">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="" />
        </template>
        <template v-slot:item-icon_ictive>
          <img src="~assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <template v-slot:item-text>购物车</template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="purple">
        <template v-slot:item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="" />
        </template>
        <template v-slot:item-icon_ictive>
          <img src="~assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <template v-slot:item-text>我的</template>
      </tab-bar-item>
    </template>
  </tab-bar>
</template>

<script>
import TabBar from "./components/common/tab-bar/TabBar.vue";
import TabBarItem from "./components/common/tab-bar/TabBarItem.vue";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>