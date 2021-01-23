<template>
  <v-app>
    <v-app-bar app>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link
            to="/"
            exact
            style="text-decoration: none; color: inherit;"
          >
            <div class="d-flex align-center" v-bind="attrs" v-on="on">
              <v-icon x-large class="mr-3">mdi-cash-multiple</v-icon>
              <h3>
                Title
              </h3>
            </div>
          </router-link>
        </template>
        <span>Go to home page</span>
      </v-tooltip>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link
            to="/"
            exact
            style="text-decoration: none; color: inherit;"
            ><v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-home-circle-outline</v-icon>
            </v-btn>
          </router-link>
        </template>
        <span>Home</span>
      </v-tooltip>

      <v-divider class="mx-2" vertical></v-divider>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
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

      <v-divider class="mx-2" vertical></v-divider>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link
            to="/about"
            exact
            style="text-decoration: none; color: inherit;"
            ><v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-information-outline</v-icon>
            </v-btn>
          </router-link>
        </template>
        <span>About</span>
      </v-tooltip>

      <v-divider class="mx-2" vertical></v-divider>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <span>Not implemented yet</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import QuickTools from "./components/QuickTools";

export default {
  name: "App",

  components: {
    // HelloWorld,
    // QuickTools
  },

  data: () => ({
    themeIcon: {
      light: "mdi-weather-sunny",
      dark: "mdi-weather-night"
    }
  }),

  methods: {}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
