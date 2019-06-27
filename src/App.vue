<template>
  <div id="app">
    <van-tabbar route fixed v-model="active">
      <van-tabbar-item replace icon="home-o" to="/index"></van-tabbar-item>
      <van-tabbar-item replace icon="fire-o" to="/boil"></van-tabbar-item>
      <van-tabbar-item replace icon="search" to="/search"></van-tabbar-item>
      <van-tabbar-item replace icon="records" to="/book"></van-tabbar-item>
      <van-tabbar-item replace icon="manager" to="/me"></van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
};
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/change.css";
</style>
