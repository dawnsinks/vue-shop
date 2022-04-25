import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    'path': '/',
    component: ()=> import('../views/Home')
  },
  {
    'path': '/search',
    component: ()=> import('../views/Search')
  },
  {
    'path': '/login',
    component: ()=> import('../views/Login'),
    meta: {
      showFooter: true
    }
  },
  {
    'path': '/register',
    component: ()=> import('../views/Register'),
    meta: {
      showFooter: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
