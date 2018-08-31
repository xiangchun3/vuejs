<template>
  <div class="sf-header">
    <router-link to="/search"><i class="fa fa-search pull-left"></i></router-link>
    <div class="sf-logo">
      <h1><router-link to="/">segmentfault</router-link></h1>
    </div>
    <router-link to="/login" class="login-btn pull-right"><i class="fa fa-user"></i></router-link>
  </div>
</template>
<script>
  import "../assets/css/font-awesome.min.css";
  export default {
    name: 'SfHeader',
  }
</script>

<style lang="scss" scoped>
  .sf-header{
    height: 2.75rem;
    line-height: 2.75rem;
    border-top: 3px solid #009a61;
    background-color: #fafafa;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
    
    a{color: #757575;}
    .fa-search, .fa-user {
        padding: .44rem .81rem;
        margin: .31rem .94rem;
        font-size: 1.25rem;
    }
    .sf-logo{
      width: 60%;
      display: inline-block;
      h1{
        margin: 0;
        text-align: center;
        a{
          background: url(../assets/images/logo-b.svg) center 8px no-repeat;
          background-size: contain;
          width: 60%;
          display: inline-block;
          text-indent: -10000rem;
        }
      }
    }
  }
</style>

