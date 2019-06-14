<template>
  <div class="a-b">
    <HeadSearch></HeadSearch>
    <van-tabs background="#027fff" color="#fff">
      <van-tab title="前端"></van-tab>
      <van-tab title="Android"></van-tab>
      <van-tab title="iOS"></van-tab>
      <van-tab title="后端"></van-tab>
      <van-tab title="人工智能"></van-tab>
      <van-tab title="开发工具"></van-tab>
      <van-tab title="代码人生"></van-tab>
      <van-tab title="阅读"></van-tab>
    </van-tabs>

    <!-- 标签 S-->
    <div>
      <div class="layout-1 bb">
        <van-tag round class="mr-h activity-bg">3日内</van-tag>
        <van-tag round class="mr-h">7日内</van-tag>
        <van-tag round class="mr-h">30日内</van-tag>
        <van-tag round class="mr-h">全部</van-tag>
      </div>
    </div>
    <!-- 标签 E-->
    <!-- 推荐 S-->
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
    <!-- 推荐 E-->
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Icon } from "vant";
import { Row, Col } from "vant";
import { Tab, Tabs } from "vant";
import { Button } from "vant";
import { Tag } from "vant";
import { Panel } from "vant";

export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Button.name]: Button,
	[Tag.name]: Tag,
	[Panel.name]: Panel,
  }
};
</script>

<style scoped>
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
.layout {
  padding-bottom: 3rem;
}
.btn {
  width: 70px !important;
}
.layout-1 {
  padding: 0.5rem 1rem;
}
.activity-bg {
  background-color: #027fff !important;
}
.p-lr-15 {
  padding-left: 15px;
  padding-right: 15px;
}
.p-tb-05 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.bb{
	border-bottom:1px solid #f4f4f4;
}
</style>