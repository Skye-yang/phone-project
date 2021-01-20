<template>
  <div class="phone">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
  @import './assets/css/base.css';

  .phone{
    height: 49px;
  }
</style>