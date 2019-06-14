<template>
  <div class="bg-f4">
    <HeadSearch></HeadSearch>
    <div>
      <van-cell title="编辑推荐" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="关注人发布新文章" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="被他人关注" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="评论被回复" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="评论被点赞" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="文章被喜欢" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
      <van-cell title="文章被评论" icon="location-o">
        <div slot="default">
          <van-switch size="20px" class="v-m"/>
        </div>
      </van-cell>
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