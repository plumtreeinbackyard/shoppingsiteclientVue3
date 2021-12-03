import { createRouter, createWebHistory } from "vue-router";
import { LoginCallback, navigationGuard } from "@okta/okta-vue";
import auth from "../auth";
import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
import Edit from "../components/Edit.vue";
import Myaccount from "../components/Myaccount.vue";

const CALLBACK_PATH = "/login/callback";

const routes = [
  {
    path: CALLBACK_PATH,
    component: LoginCallback
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true },
    beforeEnter: async(to, from, next) => {
      next(await auth.isInGroup("admin"));
    }
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/myaccount",
    name: "Myaccount",
    component: Myaccount,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(navigationGuard);

export default router;
