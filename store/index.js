import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import cart from "./modules/cart";
import products from "./modules/products";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    cart,
    products
  },
  strict: debug,
  plugins: [createPersistedState()]
});
