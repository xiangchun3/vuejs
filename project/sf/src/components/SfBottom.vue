<template>
  <div class="bottom-nav">
    <div class="opts">
      <a class="opts-group active" href="/"><i class="fa fa-home" aria-hidden="true"></i><span>首页</span></a>
      <a class="opts-group" href="/questions"><i class="fa fa-comments" aria-hidden="true"></i><span>问答</span></a>
      <a class="opts-group" href="/blogs"><i class="fa fa-pencil-square" aria-hidden="true"></i><span>专栏</span></a>
      <a class="opts-group" href="/lives"><i class="fa fa-play-circle" aria-hidden="true"></i><span>讲堂</span></a>
      <div class="opts-group">
          <div class="btn-group dropup"><i class="fa fa-bars dropdown hoverDropdown" data-toggle="dropdown" aria-hidden="true"><span>更多</span></i>
              <ul class="dropdown-menu">
                  <li><a href="/jobs">职位</a></li>
                  <li><a href="/events">活动</a></li>
                  <li><a href="/tags">标签</a></li>
                  <li><a href="/badges">徽章</a></li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bottom-nav {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 49px;
      line-height: 49px;
      background-color: #fafafa;
      text-align: center;
      box-shadow: 0 -1px rgba(0,0,0,0.1), 0 -2px 10px rgba(0,0,0,0.1);
      .opts-group{
          display: inline-block;
          padding-top: 6px;
          line-height: 20px;
          color: #9e9e9e;
          width: 20%;
          cursor: pointer;
          text-decoration: none;
          &.active{
            color: #009a61;
          }
          span{
            font-size: .75rem;
            display: block;
          }
          .btn-group{
            color: #9e9e9e;
            vertical-align: inherit;
            position: relative;
            display: inline-block;
          }
      }
  }
</style>

