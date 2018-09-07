<template>
  <div class="container">
    <div class="sf-logo">
      <h1><router-link to="/">segmentfault</router-link></h1>
    </div>

    
    <div class="panel panel-default center-block">
      <div class="panel-heading">
        <h3 class="panel-title">登录</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label for="">手机号或Email</label>
          <input type="text" class="form-text" placeholder="11 位手机号 或 Email" autocomplete="off" tabindex="1" id="username" name="username" v-model="username" v-validate="'required|username'" />
          <p class="error-tips" v-show="errors.has('username')">{{ errors.first('username') }}</p>
        </div>
        <div class="form-group">
          <label for="">密码</label><a href="#" class="pull-right">忘记密码</a>
          <input type="password" class="form-text" placeholder="请输入密码" autocomplete="off" tabindex="2" id="password" name="password" v-model="password" v-validate="'required|password_1'" />
          <p class="error-tips" v-show="errors.has('password')">{{ errors.first('password') }}</p>
        </div>
        <div class="form-group">
          <a href="#">手机验证码登录</a>
        </div>
        <div class="form-group">
          <a href="javascript:;" class="login-btn" @click="valid" tabindex="3">登录</a>
        </div>
        登录状态：{{this.$store.state.loginStatus}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import "@/utils/validate.js";
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css'
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    // 登录请求
    login: function(){
      let that = this;
      axios({
        method: 'post',
        url: '/login',
        data: {
          username: that.username,
          password: that.password
        }
      }).then(function(response){
        let result = response.data;
        if(result.data == 'success'){
          Toast(result.message);
          // 如果登录成功，则将返回token值保存到session中，所有请求头中使用，用于判断登录是否登录
          result.token && sessionStorage.setItem("token", result.token);
          that.$store.commit("changeLoginStatus", true);
          that.$store.commit("refreshToken", result.token);
          // 登录成功，跳转到首页
          that.$router.push('/');
        }
      });
    },
    // 登录前验证
    valid: function(){
      let that = this;
      that.$validator.validateAll().then(flag => {
        if (flag) {
          that.login();
        } else {
          console.log(this.errors);
          // debugger
          // Toast(this.errors.items[0].msg);
        }
      });
    }
  }
}
</script>


<style lang="scss" scoped>
  .container{
    background-color: #f3f3f3;
    padding: 0 1rem;
  }
  
  .sf-logo{
    width: 100%;
    display: inline-block;
    margin: 14px 0 15px 0;

    h1{
      margin: 0;
      text-align: center;
      a{
        background: url(../assets/images/logo-b.svg) center center no-repeat;
        background-size: contain;
        width: 46%;
        display: inline-block;
        text-indent: -10000rem;
      }
    }
  }

  .panel{
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    box-shadow: 0 1px 1px rgba(0,0,0,0.05);
    
    .panel-heading{
      color: #333;
      font-size: .875rem;
      background-color: #f5f5f5;
      border-color: #ddd;
      padding: 10px 15px;
      border-bottom: 1px solid transparent;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      .panel-title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: normal;
        color: inherit;
      }
    }
    .panel-body{
      padding: 10px 15px;
      .form-group{
        margin-bottom: 1rem;
        input{
          display: block;
        }
        label{
          color: #333333;
          font-size: .875rem;
          font-weight: bold;
          margin-bottom: 5px;
          display: inline-block;
        }
        a{
          font-size: .875rem;
          color: #009a61;
          text-decoration: none;
        }
        .form-text{
          display: block;
          width: 100%;
          height: 34px;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42858;
          color: #555;
          background-color: #fff;
          background-image: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
          box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
          -webkit-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
          -o-transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
          transition: border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s;
        }
        .login-btn{
          color: #fff;
          background-color: #009a61;
          border-color: #008151;
          display: block;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid transparent;
          border-radius: 4px;
          padding: 6px 12px;
          font-size: .875rem;
          line-height: 1.42858rem;
        }
        .error-tips{
          color: #cf0707;
          font-size: .875rem;
        }
      }
    }
  }

  .panel-default {
    border-color: #ddd;
  }
</style>
