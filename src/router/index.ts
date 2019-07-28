import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/index.vue')
        }
      ]
    }
  ]
})
