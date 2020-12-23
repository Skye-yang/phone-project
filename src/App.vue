<template>
  <div>
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar'

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