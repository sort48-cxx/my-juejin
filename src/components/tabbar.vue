<template>
  <div>
    <van-tabbar route fixed>
      <van-tabbar-item replace icon="home-o" to="/index"></van-tabbar-item>
      <van-tabbar-item replace icon="fire-o" to="/boil"></van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/search"></van-tabbar-item>
      <van-tabbar-item replace icon="records" to="/book"></van-tabbar-item>
      <van-tabbar-item replace icon="manager" to="/me"></van-tabbar-item>
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