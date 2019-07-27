import Vue from "vue"

import Element from "element-ui"

import App from "./App.vue"

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium'
})

new Vue({
  render: h => h(App)
}).$mount("#app")
