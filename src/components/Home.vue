<template>
  <div class="main">
    <h1>Product list</h1>
    <div v-if="isProductsEmpty" class="alert alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <p class="mb-0">{{ msg }}</p>
    </div>
    <div class="container" v-for="product in products" :key="product.id">
      <div class="card mb-3">
        <router-link :to="{ name: 'Product', params: { id: product.id } }">
          <div class="row no-gutters">
            <div class="col-5 col-lg-4">
              <img src="@/assets/img/300x200.jpg" class="card-img img-fluid" />
            </div>
            <div class="col-7 col-lg-8 text-left">
              <div class="card-body">
                <p class="card-text">
                  {{ product.title }}
                </p>
                <p class="card-text">${{ product.price }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProducts");
    const products = computed(() => store.state.products.all);
    const isProductsEmpty = computed(() => products.value.length === 0);

    return {
      products,
      isProductsEmpty,
      msg: "No products, please go to Admin page and add products to database."
    };
  }
};
</script>
