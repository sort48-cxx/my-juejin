<template>
  <div class="bg-f4">
    <HeadSearch></HeadSearch>
    <van-cell-group>
      <van-cell title="头像" class="flex-align-center">
        <div slot="default">
          <img
            src="https://user-gold-cdn.xitu.io/2019/1/11/1683a78ae7d12c82?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
            class="logo-1 t-r"
          >
        </div>
      </van-cell>
      <van-field label="用户名" placeholder="请输入用户名" class="b-b" input-align="right"/>
      <van-field label="职位" placeholder="请输入职位" class="b-b" input-align="right"/>
      <van-field label="公司" placeholder="请输入公司" class="b-b" input-align="right"/>
      <van-field label="简介" placeholder="请输入简介" class="b-b" input-align="right"/>
      <van-field label="博客地址" placeholder="请输入博客地址" class="b-b" input-align="right"/>
    </van-cell-group>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Cell, CellGroup, Row, Col } from "vant";
import { Field } from "vant";
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
    [Field.name]: Field
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
.b-b {
  border-bottom: 1px solid #f4f4f4;
}
.logo-1 {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.flex-align-center{
	align-items: center;
}
</style>