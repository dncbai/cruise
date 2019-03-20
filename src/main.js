import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App'
import './assets/font-icons/fonts.css'
import './style/common.css'
import cruConstants from './util/constants'
import cruUtil from './util/cruUtil'

Vue.prototype.cruConstants = cruConstants
Vue.prototype.cruUtil = cruUtil

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
