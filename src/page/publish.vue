<template>
  <div>
    <HeadSearch></HeadSearch>
    <div class="layout">
      <van-row type="flex" align="center" class="bb">
        <van-col span="3">
          <van-icon name="desktop-o"/>
        </van-col>
        <van-col span="21">
          <van-cell-group>
            <van-field placeholder="文章链接"/>
          </van-cell-group>
        </van-col>
      </van-row>
      <van-row type="flex" align="center" class="bb">
        <van-col span="3">
          <van-icon name="desktop-o"/>
        </van-col>
        <van-col span="21">
          <van-field placeholder="标题"/>
        </van-col>
      </van-row>
      <van-row type="flex" align="center" class="bb ">
        <van-col span="3">
          <van-icon name="desktop-o"/>
        </van-col>
        <van-col span="21">
          <van-field placeholder="此刻你的想法"/>
        </van-col>
      </van-row>
      <van-row type="flex" class="mt-1">
        <van-col span="3">
          <van-icon name="desktop-o"/>
        </van-col>
        <van-col span="21">
          <p class="mb-05 font-8 c-666">选择分类</p>
          <div>
            <ul>
              <li>后端</li>
              <li>前端</li>
              <li>Android</li>
              <li>iOS</li>
              <li>人工智能</li>
              <li>开发工具</li>
              <li>代码人生</li>
              <li>阅读</li>
            </ul>
          </div>
        </van-col>
      </van-row>
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
.bb {
  border-bottom: 1px solid #f4f4f4;
}
.layout {
  padding: 0 1rem;
}
ul li{
	float: left;
	padding:5px;
	background-color: #efefef;
	color:#c3c3c3;
	margin-right:1rem;
	margin-bottom:.5rem;
	font-size:.8rem;
}
.bb .van-cell{
	padding:10px 0 !important;
}
</style>