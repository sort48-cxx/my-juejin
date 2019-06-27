<template>
  <div class="bg-027fff h-100">
    <HeadSearch type="2" title="注册"></HeadSearch>
    <div class="mt-1">
      <div class="ml-1 mr-1">
        <van-cell-group class="mb-1">
          <van-field placeholder="手机号/邮箱"/>
          <van-field placeholder="用户名"/>
          <van-field placeholder="密码" type="password"/>
          <van-field v-model="sms" center clearable placeholder="短信验证码">
            <van-button slot="button" size="small" class="send-btn">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-button class="w-100" size="normal">注册</van-button>
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
.send-btn{
	background-color:#fff;
	border-color:#fff;
	color:#4BA5FF;
}
.mt-1 ::placeholder{
	color:#ccc !important;
}
</style>