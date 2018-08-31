<template>
  <div>
    <SfHeader></SfHeader>
    <div class="wrapper">
      <div class="router-box">
        <HotLink></HotLink>
        用户信息：<span>{{count}}</span>
        登录状态：{{$store.state.loginStatus}}
        <input type="button" value="count+" @click="$store.commit('add')" />
      </div>
    </div>
    <SfBottom></SfBottom>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     count: store.state.count
  //   }
  // },
  computed: {
    // 当前页面实时更新
    count () {
      return this.$store.state.count;
    }
  }
}
</script>
