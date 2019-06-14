<template>
  <div>
    <HeadSearch></HeadSearch>
    <van-cell title="检查更新"/>
    <van-cell title="关于掘金"/>
    <van-cell title="去应用市场为我们评分"/>
    <van-cell title="分享掘金给好友"/>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";

import { Cell, CellGroup } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
</style>