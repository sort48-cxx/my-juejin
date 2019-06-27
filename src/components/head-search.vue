<template>
  <div class="hs-b">
    <!--白底 三要素 S-->
    <div class="bg-fff layout h-44" v-if="type==1">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#333" class="v-m" @click="goreturn"/>
        </van-col>
        <van-col span="17">
          <span class="font-10 c-333">{{title}}</span>
        </van-col>
        <van-col span="4" class="t-r">
          <van-icon name="ellipsis" color="#333" class="v-m"/>
        </van-col>
      </van-row>
    </div>
    <!--白底 三要素 E-->

    <!--蓝底 三要素 S-->
    <div class="bg-027fff layout h-44" v-if="type==2">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"  @click="goreturn"/>
        </van-col>
        <van-col span="19">
          <span class="font-10 c-fff">{{title}}</span>
        </van-col>
        <van-col span="2" v-if="isSearch==1">
          <van-icon name="search" color="#fff" @click="goURL('/search-info')"/>
        </van-col>
		<van-col span="2" v-if="isSearch==2">
          <van-icon name="plus" color="#fff" @click="goURL('/search-info')"/>
        </van-col>
      </van-row>
    </div>
    <!--蓝底 三要素 E-->


	<!--搜索 S-->
    <div class="bg-027fff layout type3" v-if="type==3">
      <van-row type="flex" align="center">
        <van-col span="2">
          <van-icon name="arrow-left" color="#fff" class="v-m"  @click="goreturn"/>
        </van-col>
        <van-col span="22">
          <van-field placeholder="搜索文章、用户、标签" class="input"/>
        </van-col>
      </van-row>
    </div>
	<!--搜索 E-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="17">
          <span class="font-10 c-fff">作者榜</span>
        </van-col>
		<van-col span="4">
          <span class="font-6 c-fff">排名规则</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44 bb">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="18">
          <span class="font-10 c-fff">分享文章</span>
        </van-col>
        <van-col span="3">
			<span class="c-fff font-8">发布</span></van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center" >
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">话题特别展示</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="18">
          <span class="font-10 c-fff">分享沸点</span>
        </van-col>
        <van-col span="3">
          <span class="c-fff font-8">发布</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">关注的人在看</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">话题广场</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">线下活动</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-fff layout h-44">
      <van-row type="flex" justify="space-between">
        <van-col span="12">
          <van-icon name="arrow-left" color="#333" class="v-m"/>
        </van-col>
        <van-col span="12" class="t-r">
          <van-icon name="weapp-nav" color="#333" class="v-m"/>
        </van-col>
      </van-row>
    </div>-->
    <!-- 
	<div class="bg-027fff layout h-44">
      <van-row type="flex" align="center" >
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">我</span>
        </van-col>
      </van-row>
    </div>-->
    <!-- 
    <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="18">
          <span class="font-10 c-fff">掘金</span>
        </van-col>
        <van-col span="3">
          <span class="c-fff font-8">保存</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center" >
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">消息中心</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- -->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">已购小册</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">阅读过的文章</span>
        </van-col>
      </van-row>
    </div>-->
    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="3">
          <van-icon name="arrow-left" color="#fff" class="v-m"/>
        </van-col>
        <van-col span="21">
          <span class="font-10 c-fff">设置</span>
        </van-col>
      </van-row>
    </div>-->
    <!-- <div class="bg-fff layout h-44">
      <van-row type="flex" justify="space-between">
        <van-col span="2">
          <van-icon name="arrow-left" color="#333" class="v-m"/>
        </van-col>
        <van-col span="8">
          <span class="font-10 c-333">设置密码</span>
        </van-col>
       
      </van-row>
    </div>-->
    <!-- <div class="bg-fff layout h-44">
      <van-row type="flex" justify="space-between">
        <van-col span="2">
          <van-icon name="arrow-left" color="#333" class="v-m"/>
        </van-col>
        <van-col span="22">
          <span class="font-10 c-333">推送消息设置</span>
        </van-col>
      </van-row>
    </div>-->

    <!-- <div class="bg-027fff layout h-44">
      <van-row type="flex" align="center">
        <van-col span="2">
          <van-icon name="arrow-left" color="#fff" class="v-m" @click="goreturn"/>
        </van-col>
      </van-row>
    </div>-->
  </div>
</template>

<script>
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Field } from "vant";
import { Tab, Tabs } from "vant";
import { NavBar } from "vant";
export default {
  data() {
    return {};
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar
  },
  props: ["type", "title", "isSearch"],
  methods: {
    goreturn() {
      this.$router.go(-1);
    },
	goURL(url) {
      this.$router.push(url);
    },
  }
};
</script>

<style scoped>
.input {
  color: #fff;
}
input ::placeholder {
  color: #fff !important;
}
.layout {
  padding: 0 1rem;
}
.van-cell {
  background-color: #027fff;
}
.h-44 {
  height: 44px;
  line-height: 44px;
}
.bb {
  border-bottom: 1px solid #ccc;
}
</style>