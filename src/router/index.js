import { createRouter, createWebHistory } from 'vue-router'

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
    component: ()=> import('../views/Login')
  },
  {
    'path': '/register',
    component: ()=> import('../views/Register')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
