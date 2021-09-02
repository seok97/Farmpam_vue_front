import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/About.vue"),
  },
  {
    path: "/contack",
    name: "Contack",
    component: () => import("../components/Contack"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../components/Signup"),
  },

  {
    path: "/shop",
    name: "Shop",
    component: () => import("../components/Shopmain.vue"),
  },
  {
    path: "/sns",
    name: "Social",
    component: () => import("../components/Social"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../components/Products.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
