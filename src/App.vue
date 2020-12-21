<template>
  <main-tab-bar></main-tab-bar>
  <router-view></router-view>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  component: {
    MainTabBar
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>