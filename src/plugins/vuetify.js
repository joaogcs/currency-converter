import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.lighten3,
        secondary: colors.blue.lighten3,
        tertiary: colors.grey.lighten3,
        accent: colors.shades.black,
        error: colors.red.accent3
      },
      dark: {
        primary: colors.grey.darken3,
        secondary: colors.blue.lighten3,
        tertiary: colors.grey.darken4,
        accent: colors.shades.black,
        error: colors.red.accent3
      }
    }
  }
});
