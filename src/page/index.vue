<template>
  <div class="index-b">
    <!-- 头部导航 S-->
    <div class="i-h-b" :class="isWhich == true ? 'is-top' :''">
      <van-row type="flex" align="center" class="bg-027fff" id="iHeader">
        <van-col span="19">
          <van-search placeholder="请输入搜索关键词" background="#027fff" @focus="goURL('/search-info')"/>
        </van-col>
        <van-col span="5" class="ml-02">
          <van-icon name="setting" size="1rem" color="#fff" @click="goURL('/tag')" class="v-m"/>
          <span class="c-fff font-10 v-m ml-02">标签</span>
        </van-col>
      </van-row>
      <van-row type="flex" align="center">
        <van-col span="21">
          <van-tabs background="#027fff" color="#fff" @click="onSelectTab">
            <van-tab title="关注"></van-tab>
            <van-tab title="推荐"></van-tab>
            <van-tab title="热榜"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="3" class="t-c">
          <van-icon name="arrow-down" size="1rem" color="#fff" @click="goURL('/set-tab')"/>
        </van-col>
      </van-row>
    </div>
    <!-- 头部导航 E-->

    <div class="main">
      <!-- 关注 S-->
      <div class="layout bg-f4" v-if="showtab_Index===0">
        <div class="mb-05">
          <van-cell title="发现更多掘金优秀作者" title-class="c-333" size="1.2rem" is-link to="/author"/>
        </div>
        <van-panel class="mb-1" @click="goURL('/article-info')">
          <div class="p-lr-15">
            <div class="pb-1 bb">
              <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
              <p
                class="font-6 c-666"
              >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
            </div>
            <div>
              <van-row type="flex" align="center" class="p-tb-05">
                <van-col span="8" class="t-c">
                  <van-icon name="flower-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">赞</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="chat-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="cluster-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">分享</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <div slot="header" class="p-lr-15 pt-1 mb-05">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="22">
                <div class="clearfix">
                  <div class="left">
                    <img class="art-logo">
                  </div>
                  <div class="left ml-h">
                    <p class="font-10 c-333 mb-02">阿里云云栖社区</p>
                    <p class="font-8 c-999">
                      <span class="mr-02">开发者</span>·
                      <span class="ml-02">47分钟前</span>
                    </p>
                  </div>
                </div>
              </van-col>
              <van-col span="2">
                <van-icon name="ellipsis" size="1rem" color="#ccc" @click="show=true"/>
              </van-col>
            </van-row>
          </div>
        </van-panel>
        <van-panel class="mb-1">
          <div class="p-lr-15">
            <div class="pb-1 bb">
              <p class="font-10 c-333 mb-05">ECMAScript6——数组操作方法_总结篇</p>
              <p
                class="font-6 c-666"
              >1. pop -删除数组的最后一个元素，把数组的长度减1，并且返回它被删除元素的值，如果数组变为空，则该方法不改变数组，返回undefine值; 2. push -方法是向数组末尾添加一个或者多个元素，并返回新的长度; 3. shift -把数组的第一个元素从其中删除，并返回被</p>
            </div>
            <div>
              <van-row type="flex" align="center" class="p-tb-05">
                <van-col span="8" class="t-c">
                  <van-icon name="flower-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">赞</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="chat-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="cluster-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">分享</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <div slot="header" class="p-lr-15 pt-1 mb-05">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="22">
                <div class="clearfix">
                  <div class="left">
                    <img class="art-logo">
                  </div>
                  <div class="left ml-h">
                    <p class="font-10 c-333 mb-02">碌星</p>
                    <p class="font-8 c-999">
                      <span class="mr-02">开发者</span>·
                      <span class="ml-02">10分钟前</span>
                    </p>
                  </div>
                </div>
              </van-col>
              <van-col span="2">
                <van-icon name="ellipsis" size="1rem" color="#ccc" @click="show=true"/>
              </van-col>
            </van-row>
          </div>
        </van-panel>
        <van-panel class="mb-1">
          <div class="p-lr-15">
            <div class="pb-1 bb">
              <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
              <p
                class="font-6 c-666"
              >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
            </div>
            <div>
              <van-row type="flex" align="center" class="p-tb-05">
                <van-col span="8" class="t-c">
                  <van-icon name="flower-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">赞</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="chat-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
                <van-col span="8" class="t-c">
                  <van-icon name="cluster-o" size="1.4rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">分享</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <div slot="header" class="p-lr-15 pt-1 mb-05">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="22">
                <div class="clearfix">
                  <div class="left">
                    <img class="art-logo">
                  </div>
                  <div class="left ml-h">
                    <p class="font-10 c-333 mb-02">阿里云云栖社区</p>
                    <p class="font-8 c-999">
                      <span class="mr-02">开发者</span>·
                      <span class="ml-02">47分钟前</span>
                    </p>
                  </div>
                </div>
              </van-col>
              <van-col span="2">
                <van-icon name="ellipsis" size="1rem" color="#ccc" @click="show=true"/>
              </van-col>
            </van-row>
          </div>
        </van-panel>
      </div>
      <!-- 关注 E-->

      <!-- 推荐 S-->
      <div class="layout bg-f4" v-if="showtab_Index===1">
        <van-panel class="mb-1">
          <div class="p-lr-15">
            <div>
              <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
              <p
                class="font-6 c-666"
              >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
            </div>
            <div>
              <van-row type="flex" align="center" class="p-tb-05">
                <van-col span="6">
                  <van-icon name="flower-o" size="1.2rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">22</span>
                </van-col>
                <van-col span="6">
                  <van-icon name="chat-o" size="1.2rem" color="#ccc"/>
                  <span class="font-8 c-ccc ml-02">评论</span>
                </van-col>
              </van-row>
            </div>
          </div>
          <div slot="header" class="p-lr-15 pt-1 mb-05">
            <van-row type="flex" justify="space-between" align="center">
              <van-col span="15">
                <img class="art-logo-2 v-m">
                <span class="font-6 c-666 v-m ml-02">阿里云云栖社区</span>
              </van-col>
              <van-col span="9" class="t-r">
                <span class="font-6 c-999 v-m">javascript/前端</span>
              </van-col>
            </van-row>
          </div>
        </van-panel>
      </div>
      <!-- 推荐 E-->

      <!-- 热榜 S-->
      <div v-if="showtab_Index===2">
        <div class="layout-1 bb">
          <van-tag round class="mr-h activity-bg">3日内</van-tag>
          <van-tag round class="mr-h">7日内</van-tag>
          <van-tag round class="mr-h">30日内</van-tag>
          <van-tag round class="mr-h">全部</van-tag>
        </div>
        <div class="layout bg-f4">
          <van-panel class="mb-1">
            <div class="p-lr-15">
              <div>
                <p class="font-10 c-333 mb-05">深度解读Helm3:</p>
                <p
                  class="font-6 c-666"
                >阿里云数据可视化应用工具DataV正式推出专业版，该版本为可视化领域专业团队和从业者量身打造，定位数据可视分析大屏搭建场景，让使用者可以轻松hold住复杂交互设计和实时数据.</p>
              </div>
              <div>
                <van-row type="flex" align="center" class="p-tb-05">
                  <van-col span="6">
                    <van-icon name="flower-o" size="1.2rem" color="#ccc"/>
                    <span class="font-8 c-ccc ml-02">22</span>
                  </van-col>
                  <van-col span="6">
                    <van-icon name="chat-o" size="1.2rem" color="#ccc"/>
                    <span class="font-8 c-ccc ml-02">评论</span>
                  </van-col>
                </van-row>
              </div>
            </div>
            <div slot="header" class="p-lr-15 pt-1 mb-05">
              <van-row type="flex" justify="space-between" align="center">
                <van-col span="15">
                  <img class="art-logo-2 v-m">
                  <span class="font-6 c-666 v-m ml-02">阿里云云栖社区</span>
                </van-col>
                <van-col span="9" class="t-r">
                  <span class="font-6 c-999 v-m">javascript/前端</span>
                </van-col>
              </van-row>
            </div>
          </van-panel>
        </div>
      </div>
      <!-- 热榜 E-->
    </div>
    <!-- 发布 S-->
    <div class="publish-icon">
      <van-icon name="add" size="3rem" color="#027fff" @click="goURL('/publish')"/>
    </div>
    <!-- 发布 E-->

    <!-- 上拉菜单 S-->
    <van-actionsheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="onCancel"
    />
    <!-- 上拉菜单 E-->

    <!-- 底部导航 S-->
    <!-- <Tabbar index="0"></Tabbar> -->
    <!-- 底部导航 E-->
  </div>
</template>

<script>
import { Search } from "vant";
import { Row, Col } from "vant";
import { Icon } from "vant";
import { Tab, Tabs } from "vant";
import { Panel } from "vant";
import { Actionsheet } from "vant";
import { Tag } from "vant";
import { Cell, CellGroup } from "vant";

// import Tabbar from "../components/tabbar.vue";
export default {
  name: "Index",
  data() {
    return {
      showtab_Index: 0,
      show: false,
      isWhich: false,
      actions: [
        { name: "消息卡片" },
        { name: "微信" },
        { name: "朋友圈" },
        { name: "QQ" },
        { name: "微博" },
        { name: "报告文章" },
        { name: "复制链接" },
        { name: "浏览器打开" }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Panel.name]: Panel,
    [Actionsheet.name]: Actionsheet,
    [Tag.name]: Tag,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup

  },
  methods: {
    handleScroll() {
      var scrollTop = document.documentElement.scrollTop;
      var a = document.getElementById("iHeader").clientHeight;
      if (scrollTop > a) {
        this.isWhich = true;
      } else {
        this.isWhich = false;
      }
    },
    goURL(url) {
      this.$router.push(url);
    },
    goSelect() {
    console.log("点击成功");
    },
    onSelect(item) {
      this.show = false;
      switch(item.name){
    	  case '消息卡片':console.log("1");
    	  break;
    	  case '微信':
    		  console.log("2");
    	  break;
      }
    },
    onCancel(){
    	console.log("点击了！！");
    },
    onSelectTab(index) {
      this.showtab_Index = index;
    }
  }
};
</script>


<style scoped>
.main{
	position: fixed;
	top:98px;
	left:0;
	width:100%;
	height:100%;
	overflow: hidden;
    overflow-y: scroll;
}
.is-top {
  /* margin-top:-55px; */
  position: fixed;
  top: -55px;
  width: 100%;
}
.i-h-b {
  background-color: #027fff;
}
.bg-027fff {
  background-color: #027fff;
}
.van-search__content {
  background-color: #3699ff;
}
.van-search .van-cell {
  color: #fff;
}
.van-icon-search {
  font-size: 1.6rem !important;
}
.van-field__control {
  color: #fff !important;
}
.layout {
  /* padding: 1rem 0; */
  /* margin: 1rem */
  padding-bottom: 8rem;
}
.bg-f4 {
  background-color: #f4f4f4;
}
.p-lr-15 {
  padding-left: 15px;
  padding-right: 15px;
}
.p-tb-1 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.art-logo {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}
.bb {
  border-bottom: 1px solid #f4f4f4;
}
.p-tb-05 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.publish-icon {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
}
.art-logo-2 {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #e0e0e0;
  border-radius: 50%;
}
.layout-1 {
  padding: 0.5rem 1rem;
}
.activity-bg {
  background-color: #027fff !important;
}
</style>
