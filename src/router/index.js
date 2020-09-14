import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/auth/Register'
import Login from '../views/auth/Login'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if ((to.name !== 'Login' && to.name !== 'Register') && !isAuthenticated) {
    next({ name: 'Login' })

    return;
  } else if ((to.name === 'Login' || to.name === 'Register') && isAuthenticated) {
    return next({ name: 'Home' })
  }
  else next()
})


export default router
