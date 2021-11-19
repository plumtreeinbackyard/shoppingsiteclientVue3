import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Admin from "../components/Admin.vue";
import Product from "../components/Product.vue";
import Cart from "../components/Cart.vue";
import Edit from "../components/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
