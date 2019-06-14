<template>
  <div>
    <HeadSearch></HeadSearch>
    <van-radio-group v-model="radio">
  <van-cell-group>
    <van-cell title="单选框 1" clickable @click="radio = '1'">
      <van-radio name="1" />
    </van-cell>
    <van-cell title="单选框 2" clickable @click="radio = '2'">
      <van-radio name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
  </div>
</template>

<script>
import HeadSearch from "../components/head-search";
import { RadioGroup, Radio,Cell,CellGroup } from 'vant';
export default {
  data() {
    return {};
  },
  components: {
    HeadSearch,
    [RadioGroup.name]: RadioGroup,
	[Radio.name]: Radio,
	[Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  }
};
</script>

<style scoped>

</style>