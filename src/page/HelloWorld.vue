<template>
  <div class="index-b">
    <div class="i-h-b">
      <van-row type="flex" align="center" class="bg-027fff">
        <van-col span="19">
          <van-search placeholder="请输入搜索关键词" background="#027fff"/>
        </van-col>
        <van-col span="5" class="ml-02">
          <van-icon name="setting" size="1rem" color="#fff"/>
          <span class="c-fff font-10 v-m ml-02">标签</span>
        </van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col span="21">
          <van-tabs background="#027fff" color="#fff">
            <van-tab title="关注"></van-tab>
            <van-tab title="推荐"></van-tab>
            <van-tab title="热榜"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="3" class="t-c">
          <van-icon name="arrow-down" size="1rem" color="#fff" @click="goSelect()"/>
        </van-col>
      </van-row>
    </div>
    <div class="layout bg-f4">
      <van-panel>
        <div class="p-lr-15">
          <div class="pb-1 bb">
            <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
            <p
              class="font-6 c-666"
            >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
          </div>
          <div>
            <van-row type="flex" align="center" class="p-tb-05">
              <van-col span="8" class="t-c">
                <van-icon name="flower-o" size="1.4rem" color="#ccc" @click="goSelect()"/>
                <span class="font-8 c-ccc ml-02">赞</span>
              </van-col>
              <van-col span="8" class="t-c">
                <van-icon name="chat-o" size="1.4rem" color="#ccc" @click="goSelect()"/>
                <span class="font-8 c-ccc ml-02">评论</span>
              </van-col>
              <van-col span="8" class="t-c">
                <van-icon name="cluster-o" size="1.4rem" color="#ccc" @click="goSelect()"/>
                <span class="font-8 c-ccc ml-02">分享</span>
              </van-col>
            </van-row>
          </div>
        </div>
        <div slot="header" class="p-lr-15 pt-1 mb-05">
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="22">
              <div class="clearfix">
                <div class="left">
                  <img class="art-logo">
                </div>
                <div class="left ml-h">
                  <p class="font-10 c-333 mb-02">阿里云云栖社区</p>
                  <p class="font-8 c-999">
                    <span class="mr-02">开发者</span>·
                    <span class="ml-02">47分钟前</span>
                  </p>
                </div>
              </div>
            </van-col>
            <van-col span="2">
              <van-icon name="ellipsis" size="1rem" color="#ccc" @click="goSelect()"/>
            </van-col>
          </van-row>
        </div>
      </van-panel>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { Search } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Tab, Tabs } from "vant";
import { Panel } from "vant";

import Tabbar from "../components/tabbar.vue";
export default {
  name: "HelloWorld",
  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Panel.name]: Panel,
    Tabbar
  },
  methods: {
    goSelect() {
      //   console.log("点击成功");
    }
  }
};
</script>


<style scoped>
.i-h-b {
  background-color: #027fff;
}
.bg-027fff {
  background-color: #027fff;
}
.van-search__content {
  background-color: #3699ff;
}
.van-cell {
  color: #fff;
}
.van-icon-search {
  font-size: 1.6rem !important;
}
.van-field__control {
  color: #fff !important;
}
.layout {
  padding: 1rem 0;
  /* margin: 1rem */
}
.bg-f4 {
  background-color: #f4f4f4;
}
.p-lr-15 {
  padding-left: 15px;
  padding-right: 15px;
}
.p-tb-1 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.art-logo {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}
.bb {
  border-bottom: 1px solid #f4f4f4;
}
.p-tb-05 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
