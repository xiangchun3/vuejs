<template>
  <div class="hot-link">
    <a href="#"><i class="fa fa-newspaper-o"></i><span>为你推荐</span></a>
    <a href="#"><i class="fa fa-thumbs-o-up"></i><span>近期热门</span></a>
    <a href="#" class="active"><i class="fa fa-globe"></i><span>最新内容</span></a>
    <a href="#"><i class="fa fa-server"></i><span>技术频道</span></a>
  </div>
</template>

<style lang="scss" scoped>
  .hot-link{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    padding: 0 1rem;
    a{
      width: 25%;
      height: 2.125rem;
      color: #757575;
      line-height: 2.125rem;
      font-size: .8125rem;
      display: inline-block;
      text-decoration: none;
      padding-left: .625rem;
      border-radius: 4px;
      i{
        margin-right: 2px;
      }
      &.active{
        background: #009A61;
        color: #fff;
        font-weight: 900;
      }
    }
    .fa-newspaper-o:before {
        content: "\f1ea";
    }
    .fa-thumbs-o-up:before {
        content: "\f087";
    }
    .fa-globe:before {
        content: "\f0ac";
    }
    .fa-server:before {
        content: "\f233";
    }
  }
</style>
