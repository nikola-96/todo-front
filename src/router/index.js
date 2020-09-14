import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.name !== 'Register' && !isAuthenticated) {
    next({ name: 'Register' })

    return;
  } else if (to.name === 'Register' && isAuthenticated) {
    return next({ name: 'Home' })
  }
  else next()
})


export default router
