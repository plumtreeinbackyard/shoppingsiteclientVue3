<template>
  <div class="main">
    <h1>Add products to database</h1>
    <form @submit.prevent="addProduct">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-4">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                v-model="newItem.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="Enter a product name"
                required
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="price">Price</label>
              <input
                v-model="newItem.price"
                type="number"
                min="0"
                step="0.01"
                class="form-control"
                id="price"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="inventory">Inventory</label>
              <input
                v-model="newItem.inventory"
                type="number"
                class="form-control"
                id="inventory"
                placeholder="Enter product inventory"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-dark mt-3">Add product</button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="container">
      <h1>Product list</h1>
      <table class="datatable display table table-striped">
        <thead>
          <tr>
            <th scope="col">Product name</th>
            <th scope="col">Price</th>
            <th scope="col">Inventory</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(product, index) in products" :key="index" style="cursor: pointer">
            <td>{{ product.title }}</td>
            <td>${{ product.price }}</td>
            <td>{{ product.inventory }}</td>
            <td>
              <router-link :to="{ name: 'Edit', params: { id: product.id } }">
                <img
                  src="@/assets/img/outline_edit_black_18dp.png"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit product"
                />
              </router-link>
              <img
                src="@/assets/img/baseline_delete_outline_black_24dp.png"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete product"
                @click="deleteProduct(index, product.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

const url = process.env.VUE_APP_API_URL;
const GET_PRODUCTS_API_URL = `${url}/api/products`;
const ADD_PRODUCT_API_URL = `${url}/api/products`;

export default {
  name: "Admin",
  setup() {
    let error = "";
    const products = ref([]);
    const newItem = ref({
      title: "",
      price: 0,
      inventory: 0
    });

    onMounted(async() => {
      try {
        const response = await axios.get(GET_PRODUCTS_API_URL);
        products.value = response.data;
      } catch (e) {
        error = "Something went wrong with getting products data from database!";
      }
    });

    const addProduct = async() => {
      try {
        const response = await axios.post(ADD_PRODUCT_API_URL, newItem.value);
        products.value.push(response.data);
        error = "";
        newItem.value = {
          title: "",
          price: 0,
          inventory: 0
        };
        // eslint-disable-next-line
        alert("One product has been added to database.");
      } catch (e) {
        error = "Something went wrong with saving form data!";
      }
    };

    const deleteProduct = async(index, id) => {
      const DELETE_PRODUCT_API_URL = `${url}/api/products/${id}`;
      // eslint-disable-next-line
      const r = confirm("Are you sure that you need to delete this product?");
      if (r) {
        try {
          await axios.delete(DELETE_PRODUCT_API_URL, { id });
          products.value.splice(index, 1);
        } catch (e) {
          error = "Something went wrong with deleting product!";
        }
      }
    };

    return {
      error,
      products,
      newItem,
      addProduct,
      deleteProduct
    };
  }
};
</script>
