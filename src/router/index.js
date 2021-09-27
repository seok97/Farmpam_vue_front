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
    path: "/shop/:pagename",
    name: "Shop",
    component: () => import("../components/Shopmain.vue"),
  },
  {
    path: "/sns",
    name: "Social",
    component: () => import("../components/Social"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login"),
  },

  {
    path: "/farmersignup",
    name: "FarmerSign",
    component: () => import("../components/FarmerSign.vue"),
  },
  {
    path: "/shop/goods/:pagename?/:category?",
    name: "ShopCategory",
    component: () => import("../components/ShopCategory"),
  },
  {
    path: "/shop/goods/:pagename?/detail/:itemId",
    name: "GoodsDetail",
    component: () => import("../components/GoodsDetail"),
  },
  {
    path: "/shop/goods/:pagename?/myshop/:farmer_name?/:farmer_email?",
    name: "MyShop",
    component: () => import("../components/MyShop"),
  },
  {
    path: "/shop/myshopmgmt/:pagename",
    name: "MyShopAdmin",
    component: () => import("../components/MyShopAdmin"),
  },
  {
    path: "/shop/goodsupdate/:pagename?/:itemidx",
    name: "MyGoodsUpdate",
    component: () => import("../components/MygoodsUpdate"),
  },
  {
    path: "/shop/insertItem/:pagename",
    name: "insertItem",
    component: () => import("../components/MyGoodsInsert"),
  },
  {
    path: "/shop/cart/:pagename",
    name: "Cart",
    component: () => import("../components/Item_bucket"),
  },
  {
    path: "/shop/buy/:pagename",
    name: "Buy",
    component: () => import("../components/Item_buy"),
  },
  {
    path: "/shop/more/:pagename?/:category",
    name: "MoreCategory",
    component: () => import("../components/MoreCategory"),
  },
  {
    path: "/shop/buylist/:pagename",
    name: "BuyList",
    component: () => import("../components/BuyList"),
  },
  {
    path: "/mypage",
    name: "Info",
    component: () => import("../components/Info"),
  },
  {
    path: "/Info_update",
    name: "updateInfo",
    component: () => import("../components/Info_update"),
  },
  {
    path: "/insertContent",
    name: "insertContent",
    component: () => import("../components/MyBoardInsert"),
  },
  {
    path: "/updateContent/:itemidx",
    name: "updateCContent",
    component: () => import("../components/MyBoardUpdate"),
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
