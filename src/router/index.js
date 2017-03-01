import Vue from 'vue'
import Router from 'vue-router'

import Hello from 'components/Hello'
import Artlists from '../Artlists'
import Article from '../Article'
import Login from '../Login'
import UserInfo from '../UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Artlists',
      component: Artlists
    },
    {
      path: '/Article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
