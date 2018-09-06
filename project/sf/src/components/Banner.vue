<template>
  <div class="banner-wrapper">
    <mt-swipe :auto="5000">
      <mt-swipe-item v-for="item in items" :key="item.id">
        <a :href="item.href" rel="external nofollow" class="banner-bg">
          <img :src="item.url" class="img"/>
          <span class="desc">{{item.title}}</span>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from "mint-ui";
import 'mint-ui/lib/style.css'

export default {
  data() {
    return {
      items: [
        {
          title: "【资源集合】ES6元编程",
          href: "https://segmentfault.com/a/1190000016133613?utm_source=ad_index",
          url: "https://image-static.segmentfault.com/396/397/3963976698-5b879a718327c"
        },
        {
          title: "H5前端性能测试实践",
          href: "https://segmentfault.com/a/1190000016163966?utm_source=ad_index",
          url: "https://image-static.segmentfault.com/736/044/73604407-5b87997cc92a2"
        }
      ]
    };
  },
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  methods: {
      prev: function () {
          this.$refs.swipeWrapper.prev();
          console.log(this.$children);
      },
      next: function () {
          this.$refs.swipeWrapper.next();
      }
  }
}
</script>
<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
  .mint-swipe {
    height: 218px;
  }
  .banner-bg{
    background: center center no-repeat;
    background-size: contain;
  }
  .desc {
    font-weight: 600;
    opacity: 0.9;
    padding: 5px;
    height: 20px;
    line-height: 20px;
    width: 100%;
    color: #fff;
    background-color: gray;
    position: absolute;
    bottom: 0;
  }
</style>
