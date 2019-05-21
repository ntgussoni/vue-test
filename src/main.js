import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/vue-test/" : "/",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");