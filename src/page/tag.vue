<template>
  <div class="tag-b">
    <HeadSearch></HeadSearch>
    <div>
      <van-tabs background="#027fff" color="#fff">
        <van-tab title="已关注标签"></van-tab>
        <van-tab title="所有标签"></van-tab>
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
                    <p class="font-6 c-999">
                      19568521人关注
                      <span class="m-lr-03">·</span>6027篇文章
                    </p>
                  </van-col>
                </van-row>
              </van-col>
              <van-col span="5" class="ml-02">
                <van-button square type="primary" size="small">
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
                    <p class="font-6 c-999">
                      19568521人关注
                      <span class="m-lr-03">·</span>6027篇文章
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
</style>