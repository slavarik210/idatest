import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: []
  },
  mutations: {
    addHistory(state, payment) {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      state.transactions.push({
        price: payment.money,
        adress: payment.pay,
        data: today
      });
    }
  },
  actions: {},
  modules: {}
});
