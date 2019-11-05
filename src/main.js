import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.directive( 'touppercase', {
  update (el) {
      el.value = el.value.toUpperCase()
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
