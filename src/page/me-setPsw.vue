<template>
  <div class="children-b">
    <HeadSearch type="1" title="设置密码"></HeadSearch>
    <div class="ml-1 mr-1">
      <van-cell-group class="mb-1">
        <van-field v-model="value" placeholder="原密码" class="b-b"/>
        <van-field v-model="value" placeholder="新密码"/>
      </van-cell-group>
      <van-button type="primary" size="small" class="w-100">确定</van-button>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";

import { Cell, CellGroup, Row, Col } from "vant";
import { Field } from "vant";
import { Button } from "vant";
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
    [Field.name]: Field,
    [Button.name]: Button
  }
};
</script>

<style scoped>
.w-100{
	width:100%;
	background-color: #0080FF;
	border-color:#0080FF
}
</style>