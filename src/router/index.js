import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Payment from "../views/Payment.vue";
import History from "../views/History.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/payment",
    name: "payment",
    component: Payment,
    props: true
  },
  {
    path: "/history",
    name: "history",
    component: History
  },
];

const router = new VueRouter({
  routes
});

export default router;
