<template>
  <div>
    <HeadSearch type="2" title="话题特别展示"></HeadSearch>
    <div>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="开源推荐" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="内推招聘" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="掘金相亲" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="上班摸鱼" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="应用安利" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="开发工具" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="New资讯" size="1.2rem"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Icon } from "vant";
import { SwitchCell } from "vant";
import { Row, Col } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Icon.name]: Icon,
    [SwitchCell.name]: SwitchCell,
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style scoped>
.van-cell{
	padding:15px
}
</style>