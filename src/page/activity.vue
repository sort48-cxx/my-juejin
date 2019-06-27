<template>
  <div class="tag-b bg-f4 children-b">
    <HeadSearch type="2" title="线下活动"></HeadSearch>
    <div>
      <van-tabs background="#027fff" color="#fff">
        <van-tab title="全部"></van-tab>
        <van-tab title="广州"></van-tab>
        <van-tab title="深圳"></van-tab>
        <van-tab title="上海"></van-tab>
        <van-tab title="杭州"></van-tab>
      </van-tabs>
      <!-- 标签 S-->
      <div>
        <ul>
          <router-link :to="{name:'ActivityInfo'}" tag="li">
            <div>
              <img
                src="https://user-gold-cdn.xitu.io/1560135413951bd905f5a9872e4112ea3044148252ef1.jpg?imageView2/1/w/940/h/560/q/85/format/webp/interlace/1"
                class="img"
              >
            </div>
            <p class="ml-1 mt-1 mb-05">NSC 2019 中国网络安全大会</p>
            <p class="ml-1 mb-05">
              <van-icon name="calender-o" color="#999" size="1.4rem" class="v-m mr-0 mr-02"></van-icon>
              <span class="v-m mr-02">06-13</span>
              <span class="v-m">周四</span>
            </p>
            <van-row class="ml-1 mr-1" type="flex" align="center">
              <van-col span="15">
                <p>
                  <van-icon name="location-o" color="#999" size="1.4rem" class="v-m mr-0 mr-02"></van-icon>
                  <span class="v-m mr-02">北京</span>
                </p>
              </van-col>
              <van-col span="9">
                <van-button icon="star-o" round type="info" size="small" class="w-full">报名参加</van-button>
              </van-col>
            </van-row>
          </router-link>
          <li>
            <div>
              <img
                src="https://user-gold-cdn.xitu.io/1560135413951bd905f5a9872e4112ea3044148252ef1.jpg?imageView2/1/w/940/h/560/q/85/format/webp/interlace/1"
                class="img"
              >
            </div>
            <p class="ml-1 mt-1 mb-05">NSC 2019 中国网络安全大会</p>
            <p class="ml-1 mb-05">
              <van-icon name="calender-o" color="#999" size="1.4rem" class="v-m mr-0 mr-02"></van-icon>
              <span class="v-m mr-02">06-13</span>
              <span class="v-m">周四</span>
            </p>
            <van-row class="ml-1 mr-1" type="flex" align="center">
              <van-col span="15">
                <p>
                  <van-icon name="location-o" color="#999" size="1.4rem" class="v-m mr-0 mr-02"></van-icon>
                  <span class="v-m mr-02">北京</span>
                </p>
              </van-col>
              <van-col span="9">
                <van-button icon="star-o" round type="info" size="small" class="w-full">报名参加</van-button>
              </van-col>
            </van-row>
          </li>
        </ul>
      </div>
      <!-- 标签 E-->
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
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
    [Button.name]: Button
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: auto;
  display: block;
}
.w-full {
  width: 100%;
}
ul li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color:#fff;
}
</style>