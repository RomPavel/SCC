import Vue from 'vue'
import Router from 'vue-router'
//import cookie from 'vue-cookie'

import PageNotFound from '../views/PageNotFound'
import HomePage from '../views/HomePage'
import ProjectPage from '../views/ProjectPage'
import SummaryPage from '../views/SummaryPage'



Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      //meta: { localized: Boolean(cookie.get('Location')) },
      component: HomePage
    },
    // {
    //   path: '/auth',
    //   name: 'AuthPage',
    //   component: AuthPage
    // },
    {
      path: '/project/:id',
      name: 'ProjectPage',
      component: ProjectPage,
      props: true
    },
    {
      path: '/project/:id/summary',
      name: 'SummaryPage',
      component: SummaryPage,
      props: true
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/auth') {
//     to.meta.previousPage = from.path
//   }
//   if (to.path === '/checkout' && store.getters.getBasket.subtotal == 0) {
//     next('/');
//     return;
//   }
//   next()
// })
export default router
