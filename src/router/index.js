import Vue from 'vue'
import Router from 'vue-router'

import Hello from 'components/Hello'
import Artlists from '../Artlists'
import Article from '../Article'
import Login from '../Login'

Vue.use(Router)

export default new Router({
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
      path: '*',
      redirect: '/'
    }
  ]
})
