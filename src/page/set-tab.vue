<template>
  <div>
    <HeadSearch></HeadSearch>
    <div>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="前端" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="人工智能" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="后端" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="Android" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="iOS" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="开发工具" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="代码人生" size="1.2rem"/>
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked" title="阅读" size="1.2rem"/>
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