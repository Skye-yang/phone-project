<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home'


export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [{acm: 1, image: '123.png', title: '女装', link: '234.com'}],
      recommends: [{acm: 1, image: '123.png', title: '女装', link: '234.com'}]
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      // 函数里的变量在函数执行完毕之后会进行回收，需要重新定义一个变量将函数中的变量保存下来。
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
