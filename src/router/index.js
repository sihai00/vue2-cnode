import Vue from 'vue'
import Router from 'vue-router'

import Hello from 'components/Hello'
import Artlists from '../Artlists'
import Topic from '../Topic'
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
      path: '/topic/:id',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
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
