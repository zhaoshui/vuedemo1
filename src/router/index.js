import Vue from 'vue'
import Router from 'vue-router'
// import goods from '@/components/route/goods'
// import judge from '@/components/route/judge'
// import seller from '@/components/route/seller'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/route/goods',
      component: resolve => require(['@/components/route/goods'], resolve)
    },
    {
      path: '/route/goods',
      name: 'goods',
      component: resolve => require(['@/components/route/goods'], resolve)
    },
    {
      path: '/route/judge',
      name: 'judge',
      component: resolve => require(['@/components/route/judge'], resolve)
    },
    {
      path: '/route/seller',
      name: 'seller',
      component: resolve => require(['@/components/route/seller'], resolve)
    }
  ]
})
