import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/auth/Register";
import Todos from "../views/todos/Todos";
import Login from "../views/auth/Login";
import TodoEdit from "../views/todos/TodoEdit";
import TodoCreate from "../views/todos/TodoCreate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/todos",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/todo/edit/:id",
    name: "Edit",
    component: TodoEdit,
  },
  {
    path: "/todo/create",
    name: "Create",
    component: TodoCreate,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.name !== "Login" && to.name !== "Register" && !isAuthenticated) {
    next({ name: "Login" });

    return;
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    isAuthenticated
  ) {
    return next({ name: "Home" });
  } else next();
});

export default router;
