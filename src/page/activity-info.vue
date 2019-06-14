<template>
  <div class="">
    <HeadSearch></HeadSearch>
    
    <div>活动详情</div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Tab, Tabs } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Button } from "vant";
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
    [Button.name]: Button
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  height: auto;
  display: block;
}
.w-full {
  width: 100%;
}
ul li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color:#fff;
}
</style>