<template>
  <div class="bg-f4">
    <HeadSearch type="2" title="我"></HeadSearch>
    <van-cell title="单元格" is-link class="flex-align-center mb-05" @click="goURL('/me-index')">
      <div slot="title">
        <van-row type="flex" align="center">
          <van-col span="6">
            <img
              src="https://mirror-gold-cdn.xitu.io/168e084c45d22c417f5?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              class="logo"
            >
          </van-col>
          <van-col span="12">
            <p class="mb-02">某某某</p>
            <p>前端</p>
          </van-col>
        </van-row>
      </div>
    </van-cell>
    <div>
      <van-cell title="消息中心" icon="location-o" @click="goURL('/message')"/>
      <van-cell title="我赞过的" icon="location-o" value="19篇" @click="goURL('/me-like')"/>
      <van-cell title="收藏集" icon="location-o" value="19个" @click="goURL('/collection')"/>
      <van-cell title="已购小册" icon="location-o" value="0本" @click="goURL('/me-book')"/>
      <van-cell title="阅读过的文章" icon="location-o" value="414篇" @click="goURL('/me-read')"/>
      <van-cell title="标签管理" icon="location-o" value="68个" class="mb-05" @click="goURL('/tag')"/>
      <van-cell title="夜间模式" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="意见反馈" icon="location-o"/>
      <van-cell title="设置" icon="location-o" @click="goURL('/me-setting')"/>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Cell, CellGroup, Row, Col } from "vant";
import { Switch } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [Switch.name]: Switch
  },
  methods: {
    goURL(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.logo {
  width: 3rem;
  display: block;
  border-radius: 50%;
}
.flex-align-center {
  align-items: center;
}
</style>