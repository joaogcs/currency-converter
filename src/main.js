import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueCurrencyInput from "vue-currency-input";
import VueClosable from "vue-closable";

Vue.config.productionTip = false;

Vue.use(VueCurrencyInput, pluginOptions);
Vue.use(VueClosable);

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
