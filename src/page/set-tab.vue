<template>
  <div class="bg-fff children-b">
    <HeadSearch type="2" title="首页特别展示"></HeadSearch>
    <div>
      <van-cell-group>
        <van-switch-cell v-model="isFront" title="前端" size="1.2rem" @change="select"/>
        <van-switch-cell v-model="isAI" title="人工智能" size="1.2rem"/>
        <van-switch-cell v-model="isBack" title="后端" size="1.2rem"/>
        <van-switch-cell v-model="isAndroid" title="Android" size="1.2rem"/>
        <van-switch-cell v-model="isIos" title="iOS" size="1.2rem"/>
        <van-switch-cell v-model="isTool" title="开发工具" size="1.2rem"/>
        <van-switch-cell v-model="isCode" title="代码人生" size="1.2rem"/>
        <van-switch-cell v-model="isRead" title="阅读" size="1.2rem"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Icon } from "vant";
import { SwitchCell, CellGroup } from "vant";
import { Row, Col } from "vant";
export default {
  data() {
    return {
      isFront: true,
      isAI: false,
      isBack: false,
      isAndroid: false,
      isIos: false,
      isTool: false,
      isCode: false,
      isRead: false
    };
  },
  components: {
    HeadSearch,
    [Icon.name]: Icon,
    [SwitchCell.name]: SwitchCell,
    [Row.name]: Row,
    [Col.name]: Col,
    [CellGroup.name]: CellGroup
  },
  methods: {}
};
</script>

<style scoped>
.van-cell {
  padding: 15px;
}
</style>