import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { path: '/products', name: 'products', component: () => import('./views/Products.vue'),},
    { path: '/product-detail/:id', name: 'product-detail', component: () => import('./views/Product-detail.vue'),},
    { path: '/solutions', name: 'solutions', component: () => import('./views/Solutions.vue')},
    { path: '/solution-detail/:id', name: 'solution-detail', component: () => import('./views/Solution-detail.vue')},
    { path: '/join', name: 'join', component: () => import('./views/Join.vue')},
    { path: '/contact', name: 'contact', component: () => import('./views/Contact.vue')},
    { path: '/performance', redirect:'/performance/fire/sis', name: 'performance', component: () => import('./views/Performance.vue'),
      children:[
        {
          path:'fire',
          redirect:'/performance/fire/sis',
          component: () => import('@/views/Performance/Performance-fire.vue'),
          children:[
            { path: 'sis', component: () => import('@/views/Performance/Performance-fire-sis.vue'),},
            { path: 'oos', component: () => import('@/views/Performance/Performance-fire-oos.vue'),},
            { path: 'realtime', component: () => import('@/views/Performance/Performance-fire-realtime.vue'),},
          ],
        },
        {
          path:'wind',
          component: () => import('@/views/Performance/Performance-wind.vue'),
        },
        {
          path:'hydro',
          component: () => import('@/views/Performance/Performance-hydro.vue'),
        },
        {
          path:'grid',
          component: () => import('@/views/Performance/Performance-grid.vue'),
        },
      ]
    },
  ],
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    }else if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0, }
    }
  },
})

/* router.beforeEach((to, from, next)=>{
  console.log(to);
  console.log(from);
  console.log(window)
  next();
}) */


export default router;
