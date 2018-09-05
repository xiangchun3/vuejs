import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1,
    loginStatus: false
  },
  mutations: {
    add: state => state.count++,
    // 用户登录状态更新
    changeLoginStatus: (state, v) => {
      state.loginStatus = v;
    }
  }
})


export default store;