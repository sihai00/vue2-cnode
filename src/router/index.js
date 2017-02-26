import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'components/Hello'
import cnodeList from '../cnode-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cnode-list',
      component: cnodeList
    }
  ]
})
