<template>
  <div class="bg-f4">
    <HeadSearch></HeadSearch>
    <div>
      <van-cell title="邮箱" icon="location-o" value="123456789@qq.com"/>
      <van-cell title="手机号" icon="location-o" value="13545645678"/>
      <van-cell title="修改账户密码" icon="location-o"/>
      <van-cell title="绑定新浪微博" icon="location-o">
        <div slot="default">
          <span class="v-m mr-02">某某某</span>
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="绑定微信" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="绑定GitHub" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="清除缓存" icon="location-o"/>
      <van-cell title="推送消息设置" icon="location-o"/>
      <van-cell title="移动网络下首页不显示图片" title-style="flex:2" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="自动检查粘贴板快速分享" title-style="flex:2" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="关于" icon="location-o"/>
    </div>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { Cell, CellGroup, Row, Col } from "vant";
import { Switch } from "vant";
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
    [Switch.name]: Switch
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
</style>