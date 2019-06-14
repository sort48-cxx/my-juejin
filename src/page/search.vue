<template>
  <div class="s-b">
    <Tabbar1></Tabbar1>
    <div class="bg-027fff">
      <van-search placeholder="搜索文章、用户、标签" background="#027fff"/>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div style="height:150px;background-color:#ccc">11111</div>
      </van-swipe-item>
    </van-swipe>
    <div class="bg-f4 mb-05 pb-h">
      <div class="row-2 mt-h bg-fff pb-h">
        <van-tabbar :fixed="false">
          <van-tabbar-item icon="column">文章榜</van-tabbar-item>
          <van-tabbar-item icon="award">作者榜</van-tabbar-item>
          <van-tabbar-item icon="browsing-history">看一看</van-tabbar-item>
          <van-tabbar-item icon="chat">话题广场</van-tabbar-item>
          <van-tabbar-item icon="hot">活动</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
    <div class="row-3">
      <div class="r-3-head mb-1">
        <van-row type="flex" align="center">
          <van-col span="17" class="ml-1">
            <van-icon name="fire"/>
            <span class="c-333 font-8 v-m ml-02">热门文章</span>
          </van-col>
          <van-col span="7">
            <van-icon name="setting-o"/>
            <span class="c-999 font-6 v-m ml-02">定制热门</span>
          </van-col>
        </van-row>
      </div>
      <div class="bb pb-1">
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
    </div>
  </div>
</template>

<script>
import Tabbar1 from "../components/tabbar.vue";
import { Search } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Tabbar, TabbarItem } from "vant";
import { Icon } from "vant";
import { Row, Col } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    Tabbar1,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style scoped>
.van-cell {
  color: #fff;
}
.van-search__content {
  background-color: #349aff;
}
.r-3-head {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f4f4f4;
}
.img {
  width: 4rem;
  height: 4rem;
  display: block;
  background-image: url("https://user-gold-cdn.xitu.io/2019/6/11/16b46f0abb51b828?imageView2/1/w/1304/h/734/q/85/format/webp/interlace/1");
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.bb {
  border-bottom: 1px solid #f4f4f4;
}
</style>