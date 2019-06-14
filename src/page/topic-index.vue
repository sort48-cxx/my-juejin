<template>
  <div class="bg-f4">
    <HeadSearch></HeadSearch>
    <div class="pl-1 bg-fff mb-1 pb-1">
      <van-row type="flex" align="center">
        <van-col span="5">
          <img
            src="https://user-gold-cdn.xitu.io/2019/1/11/1683a78ae7d12c82?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
            class="logo"
          >
        </van-col>
        <van-col span="12" class="ml-h mb-05">
          <p class="mb-05 font-10 c-333">今天学到了</p>
          <p class="mb-05">
            <van-row>
              <van-col>
                <p class="font-8 c-333">4278</p>
                <p class="font-6 c-999">关注者</p>
              </van-col>
              <van-col class="ml-h">
                <p class="font-8 c-333">2496</p>
                <p class="font-6 c-999">沸点</p>
              </van-col>
            </van-row>
          </p>
        </van-col>
        <van-col span="6">
          <van-button square type="primary" size="small" class="btn">
            <van-icon name="success" size=".8rem" class="mr-02 v-m"/>
            <span class="font-6 v-m">已关注</span>
          </van-button>
        </van-col>
      </van-row>
      <div class="font-6 c-999 mb-05">
        日拱一卒，功不唐捐。
        <br>一起来分享下你今天听到的有意思的事情，或者学习的冷知识。
      </div>
      <div>
        <ul class="clearfix">
          <li>
            <img class="m-logo">
          </li>
          <li>
            <img class="m-logo">
          </li>
          <li>
            <img class="m-logo">
          </li>
          <li>
            <img class="m-logo">
          </li>
          <li>
            <img class="m-logo">
          </li>
          <li>
            <img class="m-logo">
          </li>
          <li class="font-6 c-999">
            已有
            <span class="m-lr-03">3.6k</span>人参加
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-fff">
      <van-tabs background="#fff" color="#027fff">
        <van-tab title="热门"></van-tab>
        <van-tab title="最新"></van-tab>
      </van-tabs>
      <div>
        <!-- 关注 S-->
        <div class="layout bg-f4">
          <van-panel class="mb-1" @click="goURL('/article-info')">
            <div class="p-lr-15">
              <div class="pb-1 b-b">
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
            <div slot="header" class="pt-1 mb-05">
              <div class="p-lr-15">
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
            </div>
          </van-panel>
        </div>
        <!-- 关注 E-->
      </div>
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
	[Tag.name]: Tag,
	[Panel.name]: Panel,
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
</style>