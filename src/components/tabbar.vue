<template>
  <div>
    <van-tabbar route fixed>
      <van-tabbar-item icon="home-o" to="/home"></van-tabbar-item>
      <van-tabbar-item icon="fire-o"></van-tabbar-item>
      <van-tabbar-item icon="search"></van-tabbar-item>
      <van-tabbar-item icon="records"></van-tabbar-item>
      <van-tabbar-item icon="manager"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>

<style scoped>
</style>