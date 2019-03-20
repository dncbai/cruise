import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'

Vue.use(Router)

export default new Router({
  // eslint-disable-next-line
  //mode: 'history',   //need server suport
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/agent',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashboardView')
        },
        {
          path: '/agent',
          name: 'agent',
          component: () => import('../views/AgentView')
        },
        {
          path: '/myCruise',
          name: 'myCruise',
          component: () => import('../views/MyCruise')
        },
        {
          path: '/help',
          name: 'help',
          component: () => import('../views/Help')
        }
      ]
    }
  ]
})
