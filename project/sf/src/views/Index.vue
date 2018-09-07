<template>
  <div>
    <SfHeader></SfHeader>
    <div class="wrapper">
      <div class="router-box">
        <HotLink></HotLink>
      </div>
      <!-- 轮播 -->
      <Banner></Banner>
      <!-- 列表 -->
      <List></List>
    </div>
    <SfBottom></SfBottom>
  </div>
</template>

<script>
import List from '../components/List';
import Banner from '../components/Banner';
export default {
  components: {
    List,
    Banner
  },
  computed: {
    // 当前页面实时更新
    count () {
      return this.$store.state.count;
    }
  }
}
</script>
