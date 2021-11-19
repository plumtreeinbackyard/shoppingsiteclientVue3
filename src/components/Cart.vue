<template>
  <div class="main">
    <h1>Your Cart</h1>
    <p v-show="!products.length">
      Your cart is empty, add some products to cart.
    </p>
    <form @submit.prevent="checkout()">
      <div v-show="products.length && !checkoutStatus">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-4"></div>
            <div class="col-5"></div>
            <div class="col-3">
              Price
            </div>
          </div>
        </div>
        <hr />
        <li v-for="(product, index) in products" :key="index">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-4">
                <img src="@/assets/img/300x200.jpg" class="img-fluid" />
              </div>
              <div class="col-5 text-left">
                <h5 class="font-weight-bold">{{ product.title }}</h5>
                <p>Quantity:</p>
                <div class="form-group">
                  <input
                    v-model="quantities[index]"
                    type="number"
                    min="1"
                    class="form-control"
                    style="width:80px;"
                    @input="changeQuantity(index, product.inventory, product.id, quantities[index])"
                  />
                  <span
                    v-if="parseInt(product.inventory, 10) < quantities[index]"
                    style="color:red;"
                  >
                    Low inventory
                  </span>
                </div>
                <p>
                  <a
                    href="javascript:void(0)"
                    @click="removeItem(product.id)"
                    style="color: #808080; text-decoration: underline; font-size: 85%;"
                    >Remove</a
                  >
                </p>
              </div>
              <div class="col-3">${{ product.price }}</div>
            </div>
          </div>
        </li>
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-9 text-right">Subtotal:</div>
            <div class="col-3">${{ total }}</div>
          </div>
        </div>
      </div>

      <p class="mt-5 mb-5">
        <button :disabled="!products.length || flag" type="submit" class="btn btn-dark">
          Checkout
        </button>
      </p>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Cart",
  setup() {
    const quantities = ref([]);
    const inventoryFlag = ref([]);
    let flag = false;

    const store = useStore();
    const { checkoutStatus } = store.state.cart;
    const products = computed(() => store.getters["cart/cartProducts"]);
    const total = computed(() => store.getters["cart/cartTotalPrice"]);

    const checkFlag = (index, inventory, quantity) => {
      // if item inventory is lower than required item quantity then flag 1 for item inventory state
      inventoryFlag.value[index] = parseInt(inventory, 10) < quantity ? 1 : 0;
      flag = inventoryFlag.value.reduce((sum, item) => sum + item, 0) > 0;
    };
    const changeQuantity = (index, inventory, id, quantity) => {
      store.dispatch("cart/changeQuantity", { id, quantity });
      checkFlag(index, inventory, quantity);
    };
    const checkout = () => {
      store.dispatch("cart/checkout", products.value)
        .then(() => setTimeout(() => alert("Checkout successful."), 500)); // eslint-disable-line no-alert
    };
    const removeItem = id => {
      store.dispatch("cart/removeItem", { id });
      // reload page to refresh products quantity
      window.location.reload();
    };

    products.value.forEach((product, index) => {
      quantities.value.push(product.quantity);
      checkFlag(index, product.inventory, quantities.value[index]);
    });

    return {
      quantities,
      inventoryFlag,
      flag,
      checkoutStatus,
      products,
      total,
      changeQuantity,
      checkout,
      removeItem
    };
  }
};
</script>
