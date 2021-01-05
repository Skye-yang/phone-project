<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data() {
    return {
      banners: [{acm: 1, image: '123.png', title: '女装', link: '234.com'}],
      recommends: [{acm: 1, image: '123.png', title: '女装', link: '234.com'}],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      }
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      console.log(res);
      // 函数里的变量在函数执行完毕之后会进行回收，需要重新定义一个变量将函数中的变量保存下来。
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }


  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
