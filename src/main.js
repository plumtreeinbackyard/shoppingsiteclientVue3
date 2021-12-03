import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import OktaVue from "@okta/okta-vue";
import auth from "./auth";
import App from "./App.vue";
import router from "./router";
import store from "../store";

const { oktaAuth } = auth;

createApp(App)
  .use(router)
  .use(OktaVue, { oktaAuth })
  .use(store)
  .mount("#app");
