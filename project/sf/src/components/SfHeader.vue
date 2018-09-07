<template>
  <div class="sf-header">
    <router-link to="/search"><i class="fa fa-search pull-left"></i></router-link>
    <div class="sf-logo">
      <h1><router-link to="/">segmentfault</router-link></h1>
    </div>
    <router-link v-show="!$store.state.loginStatus" to="/login" class="login-btn pull-right"><i class="fa fa-user"></i></router-link>
    <div class="opts" v-show="$store.state.loginStatus">
      <li class="opts__item user dropdown hoverDropdown">
        <a class="dropdownBtn" href="javascript:;"><i class="fa fa-plus" style="margin-top: 7px"></i></a>
      </li>
      <li class="opts__item dropdown hoverDropdown write-btns mt0">
        <a class="dropdownBtn user-avatar" href="javascript:;" @click="logout"></a>
      </li>
    </div>
  </div>
</template>
<script>
  import "../assets/css/font-awesome.min.css";
  export default {
    name: 'SfHeader',
    methods: {
      // 登出
      logout () {
        this.$store.commit("changeLoginStatus", false);
        this.$store.commit("refreshToken", '');
        sessionStorage.removeItem("token");
        this.$router.push('/login');
      }
    }
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
    .opts {
      float: right;
      margin: 5px 5px;
      li{
        float: left;
        list-style: none;
        line-height: normal;
        font-size: 1.25rem;
      }
      .user-avatar{
        display: inline-block;
        padding: 0 12px;
        height: 34px;
        color: #757575;
        font-weight: 500;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        border-radius: 4px;

        margin-left: 10px;
        width: 34px;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        vertical-align: bottom;
        background-image: url('https://avatar-static.segmentfault.com/211/177/2111779611-55f8cd2f8dd8b_big64');
        background-size: contain;
      }
    }
  }
</style>

