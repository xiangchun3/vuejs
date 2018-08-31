<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import routes from './router';
const router = new VueRouter(routes);

export default {
  name: 'App',
  router
}
</script>
