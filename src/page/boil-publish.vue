<template>
  <div class="bg-fff children-b">
    <HeadSearch></HeadSearch>
    <van-cell-group class="mb-1">
      <van-field placeholder="发布沸点时选择话题会有更多曝光哦~" class="h"/>
    </van-cell-group>

    <div class="flex ml-h">
      <div>
        <span>添加话题 </span>
      </div>
      <!-- <div class="flex-1">
        <span>上班摸鱼</span>
        <span>今日最佳</span>
        <span>今天学到了</span>
        <span>一图胜千言</span>
        <span>提问回答</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Field } from "vant";
import { CellGroup } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
.h {
  height: 200px;
}
.flex {
  display: flex;
  align-items: center;
}
span {
  border: 1px solid #027fff;
  border-radius: 20px;
  font-size: 0.6rem;
  color: #027fff;
  padding: 3px 10px;
}
.flex-1 {
  flex: 1;
  overflow: hidden;
  overflow-x: scroll;
}
</style>