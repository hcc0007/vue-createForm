import Vue from 'vue';
import Router from 'vue-router';
import layout from '@/views/layout/Layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/DashBoard/index.vue')
        },
        
        {
          path: 'form',
          name: 'form',
          component: () => import('@/views/GenerateForm/index.vue')
        }
      ]
    },
    {
      path: 'generate',
      name: 'generate',
      component: layout,
      redirect: 'form',
      children: [
      ]
    }
  ]
});
