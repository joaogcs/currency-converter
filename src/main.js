import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueCurrencyInput from "vue-currency-input";

Vue.config.productionTip = false;

Vue.use(VueCurrencyInput, pluginOptions);

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
