<template>
  <tab-bar>
      <!-- <tab-bar-item path="/home" activeColor="blue"> -->
      <tab-bar-item path="/home">
        <!-- <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div> -->
        <template v-slot:item-icon><img src="@/assets/img/tabbar/home.png" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/tabbar/home-active.png" alt=""></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon><img src="@/assets/img/tabbar/category.png" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/tabbar/category-active.png" alt=""></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon><img src="@/assets/img/tabbar/shopcart.png" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/tabbar/shopcart-active.png" alt=""></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon><img src="@/assets/img/tabbar/profile.png" alt=""></template>
        <template v-slot:item-icon-active><img src="@/assets/img/tabbar/profile-active.png" alt=""></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
