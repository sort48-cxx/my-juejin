<template>
  <div class="children-b index-b">
    <HeadSearch type="2" title="我赞过的"></HeadSearch>
    <div>
      <van-tabs background="#027fff" color="#fff">
        <van-tab title="文章"></van-tab>
        <van-tab title="沸点"></van-tab>
      </van-tabs>

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

      <div>
        <van-panel class="mb-1">
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
                  <van-icon name="flower-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">赞</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="chat-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="cluster-o" size="1.4rem" color="#ccc"/>
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
                <van-icon name="ellipsis" size="1rem" color="#ccc" @click="show=true"/>
              </van-col>
            </van-row>
          </div>
        </van-panel>
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