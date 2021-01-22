<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <router-link
            to="/"
            exact
            style="text-decoration: none; color: inherit;"
          >
            <div class="d-flex align-center" v-bind="attrs" v-on="on">
              <h2 class="grey--text text--darken-2">
                [LOGO]
              </h2>
              <h3 class="grey--text text--darken-2">
                Currency converter
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

export default {
  name: "App",

  // components: {
  //   HelloWorld
  // },

  data: () => ({
    //
  })
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
