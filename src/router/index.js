import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Comics from '@/components/comics/Comics'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comics',
      name: 'Comics',
      component: Comics
    },
  ]
})
