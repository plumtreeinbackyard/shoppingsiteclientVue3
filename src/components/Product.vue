<template>
  <div class="main">
    <h1>Product detail</h1>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-sm-5 col-lg-4">
          <img src="@/assets/img/300x200.jpg" class="card-img img-fluid" />
        </div>
        <div class="col-12 col-sm-7 col-lg-8 text-left">
          <div class="card-body">
            <p class="card-text">{{ product.title }}</p>
            <p class="card-text">${{ product.price }}</p>
            <p class="card-text">
              Inventory: {{ product.inventory > 0 ? "In stock" : "Out of stock" }}
            </p>
            <form @submit.prevent="addToCart()">
              <div class="container pl-0">
                <div class="row">
                  <div class="col-6 col-lg-3">
                    <div class="form-group">
                      <input
                        v-model="quantity"
                        type="number"
                        min="0"
                        class="form-control"
                        id="quantity"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-6 col-lg-4 text-left">
                    <button :disabled="!isInventoryGood" type="submit" class="btn btn-dark">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p v-if="!isInventoryGood" class="card-text" style="color:red;">
              This product's inventory is lower than the quantity you required.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Product",
  setup() {
    const store = useStore();
    const route = useRoute();

    const { id } = route.params;
    const quantity = ref(0);

    const product = store.getters["products/getOneProduct"](id);

    const isInventoryGood = computed(() => parseInt(product.inventory, 10) >= quantity.value);

    const addProductToCart = () => store.dispatch("cart/addProductToCart", { id: id, quantity: quantity.value });

    const addToCart = () => {
      if (quantity.value) {
        addProductToCart()
          .then(() => setTimeout(() => alert("Added to cart."), 500)); // eslint-disable-line no-alert
        quantity.value = 0;
      } else {
        alert("Quantity should be greater than 0."); // eslint-disable-line no-alert
      }
    };
    return {
      id,
      quantity,
      product,
      isInventoryGood,
      addProductToCart,
      addToCart
    };
  }
};
</script>
