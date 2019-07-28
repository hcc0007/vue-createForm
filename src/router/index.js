import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routers: [
    {
      path: '/',
      name: 'DashBoard',
      component: () =>
        import('../views/DashBoard/index.vue')
    },
    {
      path: '/Gender',
      name: 'Gender',
      component: () => import('../views/Gender/index.vue')
    }
  ]
})
