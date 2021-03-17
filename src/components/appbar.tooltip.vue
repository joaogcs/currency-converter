<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <router-link
          to="/about"
          exact
          style="text-decoration: none; color: inherit;"
          ><v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="
              $nextTick(() => {
                $vuetify.goTo('#About');
              })
            "
          >
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </router-link>
      </template>
      <span>About</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          :class="{
            'mr-0': $vuetify.breakpoint.lgAndUp
          }"
          v-bind="attrs"
          v-on="on"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          <v-icon>{{
            $vuetify.theme.dark ? themeIcon.light : themeIcon.dark
          }}</v-icon>
        </v-btn>
      </template>
      <span>{{ $vuetify.theme.dark ? "Light Mode" : "Night Mode" }}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: "AppbarTooltip",

  components: {},

  data: function() {
    return {
      appTitle: "Vuetify Currency Converter",

      themeIcon: {
        light: "mdi-weather-sunny",
        dark: "mdi-weather-night"
      }
    };
  },

  methods: {
    setClick() {
      this.$emit("click");
    }
  }
};
</script>
