<template>
  <div class="bg-027fff h-100">
    <HeadSearch type="2" title="登录"></HeadSearch>
    <div class="mt-1">
      <p class="c-fff font-12 t-c mb-1">掘金</p>
      <div class="ml-1 mr-1">
        <van-cell-group class="mb-1">
          <van-field placeholder="手机号/邮箱"/>
          <van-field placeholder="密码" type="password"/>
        </van-cell-group>
        <van-button class="w-100" size="normal">登录</van-button>
        <div class="clearfix mt-1 mb-3">
          <div class="left c-fff font-8">忘记密码?</div>
          <div class="right c-fff font-8">注册账号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";

import { Cell, CellGroup } from "vant";
import { Field, Button } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  }
};
</script>

<style scoped>
.w-100 {
  width: 100%;
  background-color: #006cd9;
  border: #006cd9;
  color: #fff;
}
.mb-3 {
  margin-bottom: 3rem;
}
.h-100 {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>