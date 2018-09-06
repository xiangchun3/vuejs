<template>
  <div>
    <SfHeader></SfHeader>
    <div class="wrapper">
      <div class="router-box">
        <HotLink></HotLink>
        <!-- 用户信息：<span>{{count}}</span>
        登录状态：{{$store.state.loginStatus}}
        <input type="button" value="count+" @click="$store.commit('add')" /> -->
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
  // data () {
  //   return {
  //     count: store.state.count
  //   }
  // },
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
