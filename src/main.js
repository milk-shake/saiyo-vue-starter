import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './translations'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
