// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './router'
import store from './vuex/store'
import { getArticleTab,getLastTime } from './filters'

Vue.use(VueAxios, axios)
Vue.filter('getArticleTab', getArticleTab);
Vue.filter('getLastTime', getLastTime);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
