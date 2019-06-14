<template>
  <div class="bg-f4">
    <HeadSearch></HeadSearch>
    <div class="pl-h bg-fff mb-1 pb-1 pt-1 pr-h">
      <van-row type="flex" align="center" class="mb-05">
        <van-col span="5">
          <img
            src="https://user-gold-cdn.xitu.io/2019/1/11/1683a78ae7d12c82?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
            class="logo"
          >
        </van-col>
        <van-col span="12" class="ml-h mb-05">
          <p class="mb-05 font-10 c-333">某某某</p>
          <p class="mb-05 font-8 c-666">前端</p>
        </van-col>
        <van-col span="6">
          <van-button plain type="primary" size="small" class="btn">
            <span class="font-6 v-m">编辑</span>
          </van-button>
        </van-col>
      </van-row>
      <div class="font-6 c-999 mb-05">
        日拱一卒，功不唐捐。
        <br>一起来分享下你今天听到的有意思的事情，或者学习的冷知识。
      </div>
      <van-row>
        <van-col>
          <p class="font-8 c-333">4278</p>
          <p class="font-6 c-999">关注</p>
        </van-col>
        <van-col class="ml-1">
          <p class="font-8 c-333">2496</p>
          <p class="font-6 c-999">关注者</p>
        </van-col>
        <van-col class="ml-1">
          <p class="font-8 c-333">2496</p>
          <p class="font-6 c-999">倔力值</p>
        </van-col>
      </van-row>
    </div>

    <div class="bg-fff">
      <van-tabs background="#fff" color="#027fff">
        <van-tab title="动态"></van-tab>
        <van-tab title="专栏"></van-tab>
        <van-tab title="沸点"></van-tab>
        <van-tab title="分享"></van-tab>
        <van-tab title="更多"></van-tab>
      </van-tabs>
      <!--动态 S -->
      <div class="mt-1">
        <van-row class="pb-1 b-b">
          <van-col class="pl-1">
            <img src="https://user-gold-cdn.xitu.io/2019/1/11/1683a78ae7d12c82?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
              class="logo-1">
          </van-col>
          <van-col class="ml-h">
            <p class="font-8 c-333 mb-02">
              某某某
              <span class="m-lr-03 c-666">关注了</span>TNFE
            </p>
            <p class="font-6 c-666">前端</p>
          </van-col>
        </van-row>
      </div>
      <!--动态 E -->

      <!--专栏 S -->
      <div class="layout bg-f4">
        <van-panel class="mb-1">
          <div class="p-lr-15">
            <div>
              <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
              <p
                class="font-6 c-666"
              >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
            </div>
            <div>
              <van-row type="flex" align="center" class="p-tb-05">
                <van-col span="6">
                  <van-icon name="flower-o" size="1.2rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">22</span>
                </van-col>
                <van-col span="6">
                  <van-icon name="chat-o" size="1.2rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <div slot="header" class="p-lr-15 pt-1 mb-05">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="15">
                <img class="art-logo-2 v-m">
                <span class="font-6 c-666 v-m ml-02">阿里云云栖社区</span>
              </van-col>
              <van-col span="9" class="t-r">
                <span class="font-6 c-999 v-m">javascript/前端</span>
              </van-col>
            </van-row>
          </div>
        </van-panel>
      </div>
      <!--专栏 E -->

      <!--更多 S-->
      <van-cell title="赞过的文章" icon="location-o" value="19篇"/>
      <van-cell title="关注的标签" icon="location-o" value="19篇"/>
      <van-cell title="收藏级" icon="location-o" value="19篇" class="mb-05"/>
      <van-cell title="weibo" icon="location-o"/>
      <!--更多 E-->
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
import { Tag } from "vant";
import { Panel, Cell, CellGroup } from "vant";
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
    [Tag.name]: Tag,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
.m-lr-03 {
  margin: 0 0.3rem;
}
.logo {
  width: 100%;
  height: auto;
  border-radius: 6px;
}
ul li {
  float: left;
}
.m-logo {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 0.2rem;
}
.layout {
  padding-bottom: 3rem;
}
.bg-f4 {
  background-color: #f4f4f4;
}
.p-lr-15 {
  padding-left: 15px;
  padding-right: 15px;
}
.p-tb-05 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.art-logo {
  width: 2rem;
  height: 2rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}
.btn {
  width: 70px;
}
.b-b {
  border-bottom: 1px solid #f4f4f4;
}
.logo-1 {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: block;
}
</style>