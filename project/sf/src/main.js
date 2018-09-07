import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
// 使用normalize.css reset 默认样式
import 'normalize.css';
import './assets/css/global.scss';

import routes from './router';
import components from './components';
import store from './store';  // vuex 状态管理

let token = sessionStorage.getItem("token");

// 初始化时，如果session包含token，则用户为登录状态
if(token){
  store.commit("changeLoginStatus", true);
  store.commit("refreshToken", token);
}

Vue.use(VueRouter);
const router = new VueRouter(routes);

// 注册全局组件，子组件引用时无需重复注册
Object.keys(components).forEach((key) => {
  let value = components[key];
  Vue.component(key, value);
});

new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
});