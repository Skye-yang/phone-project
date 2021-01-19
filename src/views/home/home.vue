<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" 
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>

    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
      <li>商品列表6</li>
      <li>商品列表7</li>
      <li>商品列表8</li>
      <li>商品列表9</li>
      <li>商品列表10</li>
      <li>商品列表11</li>
      <li>商品列表12</li>
      <li>商品列表13</li>
      <li>商品列表14</li>
      <li>商品列表15</li>
      <li>商品列表16</li>
      <li>商品列表17</li>
      <li>商品列表18</li>
      <li>商品列表19</li>
      <li>商品列表20</li>
      <li>商品列表21</li>
      <li>商品列表22</li>
      <li>商品列表23</li>
      <li>商品列表24</li>
      <li>商品列表25</li>
      <li>商品列表26</li>
      <li>商品列表27</li>
      <li>商品列表28</li>
      <li>商品列表29</li>
      <li>商品列表30</li>
      <li>商品列表31</li>
      <li>商品列表32</li>
      <li>商品列表33</li>
      <li>商品列表34</li>
      <li>商品列表35</li>
      <li>商品列表36</li>
      <li>商品列表37</li>
      <li>商品列表38</li>
      <li>商品列表39</li>
      <li>商品列表40</li>
      <li>商品列表41</li>
      <li>商品列表42</li>
      <li>商品列表43</li>
      <li>商品列表44</li>
      <li>商品列表45</li>
      <li>商品列表46</li>
      <li>商品列表47</li>
      <li>商品列表48</li>
      <li>商品列表49</li>
      <li>商品列表50</li>
      <li>商品列表51</li>
      <li>商品列表52</li>
      <li>商品列表53</li>
      <li>商品列表54</li>
      <li>商品列表55</li>
      <li>商品列表56</li>
      <li>商品列表57</li>
      <li>商品列表58</li>
      <li>商品列表59</li>
      <li>商品列表60</li>
      <li>商品列表61</li>
      <li>商品列表62</li>
      <li>商品列表63</li>
      <li>商品列表64</li>
      <li>商品列表65</li>
      <li>商品列表66</li>
      <li>商品列表67</li>
      <li>商品列表68</li>
      <li>商品列表69</li>
      <li>商品列表70</li>
      <li>商品列表71</li>
      <li>商品列表72</li>
      <li>商品列表73</li>
      <li>商品列表74</li>
      <li>商品列表75</li>
      <li>商品列表76</li>
      <li>商品列表77</li>
      <li>商品列表78</li>
      <li>商品列表79</li>
      <li>商品列表80</li>
      <li>商品列表81</li>
      <li>商品列表82</li>
      <li>商品列表83</li>
      <li>商品列表84</li>
      <li>商品列表85</li>
      <li>商品列表86</li>
      <li>商品列表87</li>
      <li>商品列表88</li>
      <li>商品列表89</li>
      <li>商品列表90</li>
      <li>商品列表91</li>
      <li>商品列表92</li>
      <li>商品列表93</li>
      <li>商品列表94</li>
      <li>商品列表95</li>
      <li>商品列表96</li>
      <li>商品列表97</li>
      <li>商品列表98</li>
      <li>商品列表99</li>
      <li>商品列表100</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
  name: "home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [{
        acm: 1, 
        image: '123.png', 
        title: '女装', 
        link: '234.com'
      }],
      recommends: [{
        acm: 1, 
        image: '123.png', 
        title: '女装', 
        link: '234.com'
      }],
      goods: {
        'pop': {
          page: 0, 
          list: [{
            price: '129.00', 
            show: {img: '111.png'}, 
            title: 'aaa', 
            cfav: '222'
          }]
        },
        'new': {
          page: 0, 
          list: [{
            price: '129.00', 
            show: {img: '111.png'}, 
            title: 'aaa', 
            cfav: '222'
          }]
        },
        'sell': {
          page: 0, 
          list: [{
            price: '129.00', 
            show: {img: '111.png'}, 
            title: 'aaa', 
            cfav: '222'
          }]
        },
      },
      currentType: 'pop',
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata();

    // 2. 请求商品数据（接口改了，没有数据了！！！）
    this.getHomeGoods('pop');
    // this.getHomeGoods('new');
    // this.getHomeGoods('sell');
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      // console.log(index);
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },

    /**
     * 网络请求相关方法
     */
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
    z-index: 9;
  }
</style>
