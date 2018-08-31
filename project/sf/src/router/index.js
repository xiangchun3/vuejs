export default {
  mode: 'history',
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: () => import(/* webpackChunkName: "index" */'../views/Index')
    },
    {
      name: 'search',
      path: '/search',
      component: () => import(/* webpackChunkName: "search" */'../views/Search')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */'../views/Login')
    }
  ]
}