import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import coming from '@/components/coming_soon'
import top from '@/components/top250'
import User from '@/components/user.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'首页',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/coming',
      name:'即将上映',
      component:coming
    },
    {
      path:'/top250',
      name:'top250',
      component:top
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
