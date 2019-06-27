<template>
  <div class="bg-027fff h-100">
    <HeadSearch type="2" title="忘记密码"></HeadSearch>
    <div class="mt-1">
      <div class="ml-1 mr-1">
        <p class="mb-05 c-fff font-6">请输入邮箱</p>
        <van-cell-group class="mb-1">
          <van-field placeholder="邮箱"/>
        </van-cell-group>
        <van-button class="w-100" size="normal">发送重置密码邮件</van-button>
        <p class="mt-1 c-fff font-6">回到登录页</p>
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
.send-btn {
  background-color: #fff;
  border-color: #fff;
  color: #4ba5ff;
}
.mt-1 ::placeholder {
  color: #ccc !important;
}
</style>