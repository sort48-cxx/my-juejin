<template>
  <div class="hs-b">
    <van-tabs background="#027fff" color="#fff">
      <van-tab title="全部"></van-tab>
      <van-tab title="已购"></van-tab>
    </van-tabs>
    <div class="layout">
      <van-row type="flex" align="center" class="mb-1">
        <van-col span="6">
          <img
            src="https://user-gold-cdn.xitu.io/2019/6/3/16b1977c2f3a0ed0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
            class="logo"
          >
        </van-col>
        <van-col span="14" class="ml-02">
          <p class="font-10 c-333 mb-05">[视频]Flutter实战详解:企业级移动电商开发</p>
          <p class="font-6 c-666 mb-02">技术胖</p>
          <p class="font-6 c-999">
            70小节
            <span class="m-lr-03">·</span>113人已购买
          </p>
        </van-col>
        <van-col span="3">
          <van-tag color="#F0F7FF" text-color="#2487E1">&yen;19.9</van-tag>
        </van-col>
      </van-row>
      <van-row type="flex" align="center" class="mb-1">
        <van-col span="6">
          <img
            src="https://user-gold-cdn.xitu.io/2019/6/3/16b1977c2f3a0ed0?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1"
            class="logo"
          >
        </van-col>
        <van-col span="14" class="ml-02">
          <p class="font-10 c-333 mb-05">[视频]Flutter实战详解:企业级移动电商开发</p>
          <p class="font-6 c-666 mb-02">技术胖</p>
          <p class="font-6 c-999">
            70小节
            <span class="m-lr-03">·</span>113人已购买
          </p>
        </van-col>
        <van-col span="3">
          <van-tag color="#F0F7FF" text-color="#2487E1">&yen;19.9</van-tag>
        </van-col>
      </van-row>
    </div>
    <div class="t-c">
      <van-icon name="column" color="#ccc" size="4rem"></van-icon>
      <p class="mt-h font-6 c-999">暂无已购小册</p>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Row, Col } from "vant";
import { Tag, Icon } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tag.name]: Tag,
    [Icon.name]: Icon
  }
};
</script>

<style scoped>
.logo {
  width: 100%;
  display: block;
}
.layout {
  margin: 0.5rem;
}
</style>