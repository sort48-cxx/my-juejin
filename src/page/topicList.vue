<template>
  <div class="tag-b bg-f4 children-b">
    <HeadSearch type="2" title="话题广场"></HeadSearch>
    <!-- 标签 S-->
    <div class="bg-fff mb-05">
      <div class="head-title">
        <van-row>
          <van-col span="18">
            <span class="c-666 font-8">关注话题</span>
          </van-col>
          <van-col span="6">
            <router-link :to="{name:'TopicFocus'}">
              <span class="c-999 font-6">查看全部</span>
            </router-link>
          </van-col>
        </van-row>
      </div>
      <ul class="ul-2">
        <router-link :to="{name:'TopicIndex'}" tag="li">
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="20">
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
            <van-col span="4" class="ml-02">
              <van-tag round class="w-36" color="#EFEFEF" text-color="#42A6E4">3</van-tag>
            </van-col>
          </van-row>
        </router-link>
        <li>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="20">
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
            <van-col span="4" class="ml-02">
              <van-tag round class="w-36" color="#EFEFEF" text-color="#42A6E4">关注</van-tag>
            </van-col>
          </van-row>
        </li>
      </ul>
    </div>
    <!-- 标签 E-->

    <div class="bg-fff">
      <div class="head-title">
        <van-row>
          <van-col span="18">
            <span class="c-666 font-8">更多话题</span>
          </van-col>
        </van-row>
      </div>
      <ul class="ul-2">
        <li>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="20">
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
            <van-col span="4" class="ml-02">
              <van-tag round class="w-36" color="#EFEFEF" text-color="#42A6E4">3</van-tag>
            </van-col>
          </van-row>
        </li>
        <li>
          <van-row type="flex" justify="space-between" align="center">
            <van-col span="20">
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
            <van-col span="4" class="ml-02">
              <van-tag round class="w-36" color="#EFEFEF" text-color="#42A6E4">关注</van-tag>
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
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
import { Tag } from "vant";
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
    [Tag.name]: Tag
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
.w-36 {
  width: 36px;
  text-align: center;
}
.head-title {
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 1rem;
}
</style>