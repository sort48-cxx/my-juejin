<template>
  <div class="index-b">
    <HeadSearch></HeadSearch>
	

	<!--无数据 S-->
	<div class="t-c mt-1">
		<van-icon name="records" size="4rem" color="#ccc"/>
		<p class="font-6 c-999">暂无已购的小册</p>
	</div>
	<!--无数据 E-->
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
import { Panel } from "vant";
import { Cell, CellGroup } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Panel.name]: Panel,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
};
</script>

<style scoped>
.img-1 {
  width: 3.5rem;
  height: 3.5rem;
  display: block;
  background-color: #ccc;
}
.flex-align-center {
  align-items: center;
}
</style>