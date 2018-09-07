<template>
  <div class="news-list">
    <div class="feed-options">
      <h3>我的订阅<small>只看推荐</small></h3>
    </div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="news-item" v-for="item in list">
        <p>来自标签<a href="#">{{item.tags}}</a></p>
        <h4>{{item.title}}</h4>
        <p class="item-text">{{item.text}}</p>
        <p class="author-info">
          <span>
            <span class="wrap"><i class="fa fa-thumbs-up"></i></span>
            <span class="votes-num">x {{item.votesNum}}</span>
            赞
          </span>
          <span><a href="#">{{item.author}}</a></span>
          <span>{{item.time}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
export default {
  name: 'List',
  data () {
    return {
      list: null
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last);
        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted () {
    let that = this;
    axios({
      method: 'get',
      url: '/list'
    })
    .then(function(response){
      that.list = response.data.list;
      console.log(response.data);
    })
  }
}
</script>

<style lang="scss" scoped>
  .news-list{
    margin: 0 1rem;
    .feed-options{
      border-bottom: 1px solid #ddd;
      h3{
        font-weight: normal;
        margin: .625rem 0;
        font-size: 1rem;
      }
      small{
        font-size: .75rem;
        margin-left: .5rem;
        padding-left: .5rem;
        border-left: 1px solid #ddd;
      }
    }
    .news-item{
      font-size: .875rem;
      margin-top: 1.5rem;
      color: #9E9E9E;
      a{
        color: #9E9E9E;
        margin-left: .5rem;
      }
      h4{
        color: #212121;
        font-size: 1.125rem;
        font-weight: normal;
        margin: .625rem 0;
      }
      p{
        margin: .5rem 0;
        line-height: 1.3rem;
      }
      .item-text{
        font-size: .8125rem;
      }
      .author-info{
        font-size: .8125rem;
        a{
          color: #666;
          text-decoration: none;
        }
        .wrap{
          background-color: rgba(1,126,102,0.08);
          color: #009a61;
          padding: 0;
          display: inline-block;
          height: 24px;
          width: 24px;
          line-height: 24px;
          text-align: center;
          margin-right: 5px;
          border-radius: 12px;
          margin-bottom: 1px;
          .fa-thumbs-up{
            &::before{
              content: "\f164";
            }
          }
        }
        .votes-num{
          color: #009a61;
        }
      }
    }
  }
</style>


