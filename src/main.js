import Vue from "vue";
import VueCurrencyInput from "vue-currency-input";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: "" }
};

Vue.use(VueCurrencyInput, pluginOptions);
