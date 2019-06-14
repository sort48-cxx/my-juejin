<template>
  <div class="a-b">
    <HeadSearch></HeadSearch>
    <van-tabs background="#027fff" color="#fff">
      <van-tab title="推荐"></van-tab>
      <van-tab title="前端"></van-tab>
      <van-tab title="Android"></van-tab>
      <van-tab title="iOS"></van-tab>
      <van-tab title="后端"></van-tab>
      <van-tab title="人工智能"></van-tab>
    </van-tabs>

    <!-- 标签 S-->
    <div>
      <ul class="ul-2">
        <li>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="19">
              <van-row type="flex" align="center">
                <van-col span="5">
                  <img class="logo">
                </van-col>
                <van-col span="19">
                  <p class="font-8 c-333">CSS</p>
                  <p class="font-6 c-999">前阿里巴巴，现离职旅游中</p>
                  <p class="font-6 c-999">
                    获得2554赞
                    <span class="m-lr-03">·</span>67467阅读
                  </p>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="5" class="ml-02">
              <van-button square type="primary" size="small" class="btn">
                <van-icon name="success" size=".8rem" class="mr-02 v-m"/>
                <span class="font-6 v-m">已关注</span>
              </van-button>
            </van-col>
          </van-row>
        </li>
        <li>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="19">
              <van-row type="flex" align="center">
                <van-col span="5">
                  <img class="logo">
                </van-col>
                <van-col span="19">
                  <p class="font-8 c-333">CSS</p>
                  <p class="font-6 c-999">前阿里巴巴，现离职旅游中</p>
                  <p class="font-6 c-999">
                    获得2554赞
                    <span class="m-lr-03">·</span>67467阅读
                  </p>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="5" class="ml-02">
              <van-button plain type="primary" size="small" class="btn">
                <van-icon name="plus" size=".8rem" class="v-m mr-02"/>
                <span class="v-m font-6">关注</span>
              </van-button>
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
    <!-- 标签 E-->
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Icon } from "vant";
import { Row, Col } from "vant";
import { Tab, Tabs } from "vant";
import { Button } from "vant";
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
    [Button.name]: Button
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
.btn {
  width: 70px !important;
}
</style>