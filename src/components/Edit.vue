<template>
  <div class="main">
    <h1>Edit product</h1>
    <form @submit.prevent="editProduct">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="container">
        <div class="row align-items-left">
          <p class="col-8 text-left">Product ID: {{ id }}</p>
        </div>
        <div class="row align-items-center mt-3">
          <div class="col-4">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                v-model="product.title"
                type="text"
                class="form-control"
                id="title"
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="price">Price</label>
              <input
                v-model="product.price"
                type="number"
                min="0"
                step="0.01"
                class="form-control"
                id="price"
                required
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="inventory">Inventory</label>
              <input
                v-model="product.inventory"
                type="number"
                class="form-control"
                id="inventory"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-dark mt-3">Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import auth from "../auth";

const url = process.env.VUE_APP_API_URL;

export default {
  name: "Edit",
  setup() {
    const route = useRoute();
    const error = ref("");
    const { id } = route.params;
    const GET_PRODUCT_API_URL = `${url}/api/products/${id}`;
    const EDIT_PRODUCT_API_URL = `${url}/api/products/${id}`;
    const product = ref({});

    onMounted(async() => {
      try {
        const response = await axios.get(GET_PRODUCT_API_URL);
        product.value = response.data;
      } catch (e) {
        error.value = "Something went wrong with getting product data from database!";
      }
    });

    const addAuthHeader = {
      headers: { Authorization: `Bearer ${auth.oktaAuth.getAccessToken()}` }
    };

    const editProduct = async() => {
      try {
        await axios.put(EDIT_PRODUCT_API_URL, product.value, addAuthHeader);
        error.value = "";
        // eslint-disable-next-line
        alert("The product has been updated in database!");
        window.location.href = `${url}/admin`;
      } catch (e) {
        error.value = "Something went wrong with editing product!";
      }
    };

    return {
      error,
      id,
      product,
      editProduct
    };
  }
};
</script>
