<template>
  <div class="children-b bg-f4">
    <HeadSearch type="1" title="文章详情页"></HeadSearch>
    <div class="layout bg-fff mb-1">
      <router-link to="/me-index">
        <van-row type="flex" align="center">
          <van-col span="4">
            <img class="logo">
          </van-col>
          <van-col span="16">
            <p class="font-10 c-333">张鑫虚</p>
            <p class="font-6 c-999">
              前端
              <span class="m-lr-03">@</span>腾讯
            </p>
          </van-col>
          <van-col span="4" class="mr-1">
            <van-button plain type="primary" size="small" class="btn">
              <van-icon name="plus" size=".8rem" class="v-m mr-02"/>
              <span class="v-m font-6">关注</span>
            </van-button>
          </van-col>
        </van-row>
      </router-link>
      <div>内容。。。。</div>
    </div>
    <div class="bg-fff mb-1">
      <p class="row-name bb">相关文章</p>
      <ul class="ul-1">
        <router-link :to="{name:'Article',params:{id:'2222'}}" tag="li">
          <p class="font-8 c-333">【进阶6-4期】深入浅出防抖函数</p>
          <p class="font-6 c-999">
            59人赞
            <span class="m-lr-03">·</span>作者1
            <span class="m-lr-03">·</span>
          </p>
        </router-link>
        <router-link :to="{name:'Article',params:{id:'2222'}}" tag="li">
          <p class="font-8 c-333">【进阶6-4期】深入浅出防抖函数</p>
          <p class="font-6 c-999">
            59人赞
            <span class="m-lr-03">·</span>作者1
            <span class="m-lr-03">·</span>
          </p>
        </router-link>
        <router-link :to="{name:'Article',params:{id:'2222'}}" tag="li">
          <p class="font-8 c-333">【进阶6-4期】深入浅出防抖函数</p>
          <p class="font-6 c-999">
            59人赞
            <span class="m-lr-03">·</span>作者1
            <span class="m-lr-03">·</span>
          </p>
        </router-link>
      </ul>
    </div>
    <div class="bg-fff mb-1 layout">
      <div>
        <router-link to="/me-index">
          <van-row type="flex" align="center">
            <van-col span="18">
              <van-row type="flex" align="center">
                <van-col span="4">
                  <img class="logo">
                </van-col>
                <van-col span="20">
                  <p class="font-10 c-333">张鑫虚</p>
                  <p class="font-6 c-999">4分钟前</p>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="6">
              <van-icon name="thumb-circle-o" color="#333" size="1.4rem" class="v-m"/>
              <van-icon name="comment-circle-o" color="#333" size="1.4rem" class="v-m ml-1"/>
            </van-col>
          </van-row>
        </router-link>
        <div
          class="font-8 c-333 mt-h ml-2"
        >评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论·····</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  methods: {
    goURL(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.layout {
  padding: 1rem;
}
.logo {
  width: 2rem;
  height: 2rem;
  background-color: #ccc;
  border-radius: 50%;
  display: block;
}
.m-lr-03 {
  margin: 0 0.3rem;
}
.row-name {
  padding: 1rem;
}
.bb {
  border-bottom: 1px solid #f4f4f4;
}
.ul-1 li {
  margin: 0.5rem 1rem 0 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f4f4f4;
}
.ml-2 {
  margin-left: 2rem;
}
.btn {
  width: 70px !important;
}
</style>