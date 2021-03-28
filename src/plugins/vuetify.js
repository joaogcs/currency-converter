import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: colors.grey.lighten3,
        tertiary: colors.grey.lighten3,
        accent: colors.green.lighten1,
        error: colors.red.accent3,
        background: colors.white
      },
      dark: {
        secondary: colors.grey.darken3,
        tertiary: colors.grey.darken4,
        accent: colors.green,
        error: colors.red.accent3,
        background: "#121212"
      }
    }
  }
});
