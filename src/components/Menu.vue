<template>
  <div class="bg-dark">
    <div class="container">
      <div class="row justify-content-between">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="width: 100%">
          <router-link to="/" class="navbar-brand text-align-left">Shopping Site Demo
            <br />
            <span style="color:#808080;font-size:60%;">Coded in Vue 3 and ASP.NET Core</span>
          </router-link>

          <div class="show-on-small-screen">
            <router-link to="/cart" class="nav-link">
              <div
                class="cart-icon"
                :style="{
                  backgroundImage: 'url(' + require('@/assets/img/shopping-cart.png') + ')'
                }"
              >
                <span class="cart-number" style="color: white;">{{ cartNumber }}</span>
              </div></router-link
            >
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse"
            id="navbarTogglerDemo01"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item" v-if="authState && authState.isAuthenticated && isAdmin">
                <router-link to="/admin" class="nav-link">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart" class="nav-link"
                  >Cart
                  <div
                    class="cart-icon"
                    :style="{
                      backgroundImage: 'url(' + require('@/assets/img/shopping-cart.png') + ')'
                    }"
                  >
                    <span class="cart-number" style="color: white;">{{ cartNumber }}</span>
                  </div>
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/myaccount"
                  v-if="authState && authState.isAuthenticated"
                  class="nav-link" style="color: #fff;">
                  <img src="@/assets/img/baseline_person_outline_white_18dp.png" />
                  {{claims.given_name}}
                </router-link>
              </li>
              <li class="nav-item">
                <div
                  v-if="!authState || !authState.isAuthenticated" v-on:click="login()"
                  class="nav-link" style="cursor: pointer;">
                  Login
                </div>
              </li>
              <li class="nav-item">
                <div
                  v-if="authState && authState.isAuthenticated" v-on:click="logout()"
                  class="nav-link" style="cursor: pointer;">
                  Logout
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

const PATH_TO_PROTECTED_ROUTE = "/";

export default {
  name: "Menu",
  setup() {
    const store = useStore();
    const cartNumber = computed(() => store.getters["cart/cartTotalItemNumber"]);
    return {
      cartNumber
    };
  },
  data: function() {
    return {
      isAdmin: false,
      claims: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(async() => {
        if (this.authState && this.authState.isAuthenticated) {
          this.claims = await this.$auth.getUser();
          this.isAdmin = this.claims.groups.includes("admin");
        }
      }, 1000);
    },
    login() {
      this.$auth.signInWithRedirect({ originalUri: PATH_TO_PROTECTED_ROUTE });
    },
    logout() {
      this.$auth.signOut({ postLogoutRedirectUri: `${window.location.origin}` });
    }
  }
};
</script>
