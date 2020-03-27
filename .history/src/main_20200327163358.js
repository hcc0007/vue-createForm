import Vue from 'vue';

import Element from 'element-ui';

import App from './App.vue';
import router from './router/index.ts';

Vue.config.productionTip = false;

Vue.use(Element, {
  size: 'medium'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
