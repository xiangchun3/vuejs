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
    <div class="search-result">
      <span>登录状态：{{loginStatus}}</span>
      <h3 v-show="result">查找{{q}}，找到约 {{result.length}} 条结果</h3>
      <div v-for="item in result" class="result-item">
        <h2>
          <span v-if="item.isFixed" class="label-success">解决</span>
          <a href="#" v-html="highlightTitle(item.title)"></a>
        </h2>
        <!-- <a href="/q/1010000003713912" target="_blank">ubuntu上怎么设置默认<strong class="key">python</strong>命令是执行<strong class="key">python</strong>3而不是<strong class="key">python</strong>2</a> -->
        <p>{{item.des}}</p>
        <p>{{item.vote}}投票 {{item.answer}}答案</p>
      </div>
    </div>
    <SfBottom></SfBottom>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      loginStatus: this.$store.state.loginStatus,
      q: '',
      result: '',  // 查询结果
    }
  },

  methods: {
    // 注意：如果使用箭头函数无法获取vue实例对象this
    search: function () {
      if(this.q == ''){
        return;
      }
      let that = this;
      // 请求被webpack-api-mocker拦截到本地mock文件
      axios({
        method: 'post',
        url: '/search',
        data: {
          q: this.q
        }
      }).then(function(response){
        that.result = response.data;
      })
    },
    // 标题关键字高亮显示
    highlightTitle: function(title){
      let keyReg = new RegExp(this.q, 'g');

      return title.replace(keyReg, function(key){
        return "<strong class='key'>" + key + "</strong>"
      });
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
  .search-result{
    margin: 1rem;
    h3{
      color: #757575;
      font-weight: normal;
      font-size: 1rem;
    }
    .result-item{
      margin: 2rem 0;
      h2{
        font-size: 1rem;
        font-weight: normal;
        a{
          color: #009a61;
        }
        .label-success{
          font-size: .75rem;
          color: #fff;
          background-color: #5cb85c;
          padding: .2rem .5rem;
          display: inline-block;
          border-radius: 3px;
        }
      }
      p{
        color: #666;
        font-size: .8125rem;
        line-height: 1.2rem;
      }
    }
  }
</style>

<!-- 全局样式,不受scoped影响 -->
<style>
  .search-result .result-item h2 a .key{
    color: #D0021B;
    font-weight: bold;
  }
</style>

