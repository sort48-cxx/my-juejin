<template>
  <div class="children-b index-b">
    <HeadSearch></HeadSearch>

    <div class="b-b pb-1 pt-1">
      <van-row class="ml-1 mr-1">
        <van-col span="19">
          <p class="font-8 c-333 mb-02">我的奇葩面试经历分享：喊价25k，HR却给了30K。。。</p>
          <p class="font-6 c-999">
            64人赞
            <span class="m-lr-03">·</span>作者1
            <span class="m-lr-03">·</span>5小时前
          </p>
        </van-col>
        <van-col span="5">
          <div class="img"></div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
import { Panel } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Panel.name]: Panel
  }
};
</script>

<style scoped>
.m-lr-03 {
  margin: 0 0.3rem;
}
.logo {
  width: 2.5rem;
  height: 2.5rem;
  display: block;
  background-color: #ccc;
}
.ul-2 li {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f4f4f4;
}
.btn {
  width: 70px;
}
.b-b {
  border-bottom: 1px solid #f4f4f4;
}
.p-lr-15 {
  padding-left: 15px;
  padding-right: 15px;
}
</style>