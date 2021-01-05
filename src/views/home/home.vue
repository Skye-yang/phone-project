<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
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
      console.log(res);
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
