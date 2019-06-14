<template>
  <div class="boli-b tag-b">
    <div class="bg-027fff">
      <van-row type="flex" align="center">
        <van-col span="21">
          <van-tabs background="#027fff" color="#fff">
            <van-tab title="关注"></van-tab>
            <van-tab title="推荐"></van-tab>
            <van-tab title="热门"></van-tab>
            <van-tab title="开源推荐"></van-tab>
            <van-tab title="内推招聘"></van-tab>
            <van-tab title="掘金相亲"></van-tab>
            <van-tab title="上班摸鱼"></van-tab>
            <van-tab title="应用安利"></van-tab>
            <van-tab title="开发工具"></van-tab>
            <van-tab title="New资讯"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="3" class="t-c">
          <van-icon name="arrow-down" size="1rem" color="#fff" @click="goURL('/set-boil')"/>
        </van-col>
      </van-row>
    </div>
    <!-- 关注 S-->
    <div class="layout bg-f4">
      <van-panel class="mb-1" @click="goURL('/article-info')">
        <div class="p-lr-15">
          <div class="pb-1 bb">
            <p class="font-8 c-333 mb-05">深度解读Helm3:</p>
            <p
              class="font-6 c-666"
            >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
          </div>
          <div>
            <van-row type="flex" align="center" class="p-tb-05">
              <van-col span="8" class="t-c">
                <van-icon name="flower-o" size="1.1rem" color="#ccc"/>
                <span class="font-8 c-ccc ml-02">66</span>
              </van-col>
              <van-col span="8" class="t-c">
                <van-icon name="chat-o" size="1.1rem" color="#ccc"/>
                <span class="font-8 c-ccc ml-02">4</span>
              </van-col>
              <van-col span="8" class="t-c">
                <van-icon name="cluster-o" size="1.1rem" color="#ccc"/>
                <span class="font-8 c-ccc ml-02">分享</span>
              </van-col>
            </van-row>
          </div>
        </div>
        <div slot="header" class="p-lr-15 pt-1 mb-05">
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="16">
              <div class="clearfix">
                <div class="left">
                  <img class="art-logo">
                </div>
                <div class="left ml-h">
                  <p class="font-8 c-333 mb-02">阿里云云栖社区</p>
                  <p class="font-6 c-999">
                    <span class="mr-02">开发者</span>·
                    <span class="ml-02">47分钟前</span>
                  </p>
                </div>
              </div>
            </van-col>
            <van-col span="8">
              <van-button plain type="primary" size="small" class="btn mr-h">
                <van-icon name="plus" size=".8rem" class="v-m mr-02"/>
                <span class="v-m font-6">关注</span>
              </van-button>
              <van-icon name="ellipsis" size="1rem" color="#ccc" @click="show=true"/>
            </van-col>
          </van-row>
        </div>
      </van-panel>
    </div>
    <!-- 关注 E-->

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/tabbar.vue";
import { Row, Col } from "vant";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";
import { Panel } from "vant";
import { Button } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    Tabbar,
    [Row.name]: Row,
    [Col.name]: Col,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [Panel.name]: Panel,
    [Button.name]: Button
  }
};
</script>

<style scoped>
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
</style>