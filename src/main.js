// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import HelloWorldPlugin from './plugins/HelloWorldPlugin'
import ErrorMsgPlugin from './plugins/ErrorMsgPlugin'

import MockApi from './mock/MockApi'

Vue.use(HelloWorldPlugin)
Vue.use(ErrorMsgPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
