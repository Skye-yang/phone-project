<template>
  <div class="goods">
    <good-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"></good-list-item>
    {{goods}}
    
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  component: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>
