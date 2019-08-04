import Vue from 'vue'

import Element from 'element-ui'
import '@/styles/index.scss'

import router from './router'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
