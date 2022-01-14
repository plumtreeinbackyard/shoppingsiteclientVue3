import axios from "axios";

const url = process.env.VUE_APP_API_URL;
const GET_PRODUCTS_API_URL = `${url}/api/products`;

// initial state
const state = () => ({
  all: []
});

// getters
const getters = {
  getOneProduct: state => id => state.all.find(product => product.id === id)
};

// actions
const actions = {
  getAllProducts({ commit }) {
    axios
      .get(GET_PRODUCTS_API_URL)
      .then(response => {
        commit("setProducts", response.data);
      })
      .catch(error => {
        // eslint-disable-next-line
        console.log(error);
      });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
