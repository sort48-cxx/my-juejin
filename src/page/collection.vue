<template>
  <div class="index-b children-b">
    <HeadSearch type="2" title="收藏集" isSearch="2"></HeadSearch>
    <van-tabs background="#027fff" color="#fff">
      <van-tab title="创建的"></van-tab>
      <van-tab title="关注的"></van-tab>
    </van-tabs>
	<!--有数据 S-->
    <van-cell is-link class="flex-align-center">
      <div slot="default">
        <van-row class="mb-1">
          <van-col>
            <img
              src="https://user-gold-cdn.xitu.io/2019/5/28/16afe0a2e8276190?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              class="img-1"
            >
          </van-col>
          <van-col class="ml-h">
            <p class="font-8 c-666">清单</p>
            <p class="font-6 c-999">
              1篇
              <span class="m-lr-03">·</span>0关注
              <span class="m-lr-03">·</span>作者某某
            </p>
          </van-col>
        </van-row>
      </div>
    </van-cell>
    <van-cell is-link class="flex-align-center">
      <div slot="default">
        <van-row class="mb-1">
          <van-col>
            <img
              src="https://user-gold-cdn.xitu.io/2019/5/28/16afe0a2e8276190?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              class="img-1"
            >
          </van-col>
          <van-col class="ml-h">
            <p class="font-8 c-666">清单</p>
            <p class="font-6 c-999">
              1篇
              <span class="m-lr-03">·</span>0关注
              <span class="m-lr-03">·</span>作者某某
            </p>
          </van-col>
        </van-row>
      </div>
    </van-cell>
	<!--有数据 E-->

	<!--无数据 S-->
	<div class="t-c">
		<van-icon name="records" size="4rem" color="#ccc"/>
		<p class="font-6 c-999">暂无关注的收藏集</p>
	</div>
	<!--无数据 E-->
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
import { Panel } from "vant";
import { Cell, CellGroup } from "vant";
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
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
.img-1 {
  width: 3.5rem;
  height: 3.5rem;
  display: block;
  background-color: #ccc;
}
.flex-align-center {
  align-items: center;
}
</style>