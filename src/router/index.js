import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse from '../views/Browse.vue'
import About from '../views/About.vue'
import pokeLists from '../views/pokeLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',

    component: About
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse,
  },
  {
    path: '/pokeLists',
    name: pokeLists,
    component: pokeLists
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
