<template>
  <div>
    <SfHeader></SfHeader>
    <div class="post-topheader">
      <div class="form-item">
        <input type="text" class="form-text" v-model="q" placeholder="请输入关键字搜索" />
      </div>
      <div class="form-item">
        <input type="button" class="form-btn" @click="search" value="搜索" />
      </div>

      <div class="type">
        <a href="all" class="active">全部</a>
        <a href="all">问答</a>
        <a href="all">文章</a>
        <a href="all">头条</a>
        <a href="all">讲堂</a>
        <a href="all">标签</a>
        <a href="all">用户</a>
        <a href="all">活动</a>
      </div>
    </div>
    <span>{{count}}</span>
    <SfBottom></SfBottom>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      count: this.$store.state.count,
      q: ''
    }
  },
  methods: {
    // 如果使用箭头函数无法获取vue实例对象this
    search: function () {
      // 请求被webpack-api-mocker拦截到本地mock文件
      axios({
        method: 'post',
        url: '/search',
        data: {
          q: this.q
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-topheader {
    background-color: #f6f6f6;
    .form-item{
      padding: 1rem;
      .form-text{
        width: 100%;
        height: 2.875rem;
        color: #555;
        line-height: 2.875rem;
        padding: 0.625rem 1rem;
        font-size: 1.125rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        background-color: #fff;
      }
      .form-btn{
        width: 100%;
        display: inline-block;
        border: 1px solid transparent;
        padding: 0.625rem 1rem;
        font-size: 1.125rem;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: #fff;
        background-color: #006741;
        border-color: #00432a;
      }
    }
    .type{
      margin: 0 0.625rem;
      line-height: 2rem;
      a{
        color:#009a61;
        padding: 0 0.625rem;
        margin-top: 1rem;
        font-size: .875rem;
        text-decoration: none;
        display: inline-block;
        &.active{
          color: #212121;
          border-bottom: 2px solid #009a61;
        }
      }
    }
  }
</style>
