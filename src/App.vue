<template>
  <v-app id="app">
    <v-app-bar
      flat
      short
      clipped-right
      app
      style="border-bottom-style: solid;
  border-bottom-color: coral;
  border-bottom-width: 1px;"
    >
      <template>
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-expand-transition>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <router-link
                class="hidden-lg-and-up"
                to="/"
                exact
                style="text-decoration: none; color: inherit;"
              >
                <div class="d-flex align-center" v-bind="attrs" v-on="on">
                  <v-icon class="mr-3">mdi-cash-multiple</v-icon>
                  <v-responsive class="hidden-md-and-down">
                    <h3>
                      Currency converter
                    </h3>
                  </v-responsive>
                </div>
              </router-link>
            </template>
            <span>Go to home page</span>
          </v-tooltip>
        </v-expand-transition>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <router-link
              to="/about"
              exact
              style="text-decoration: none; color: inherit;"
              ><v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Share</span>
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
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :app="$vuetify.breakpoint.lgAndUp"
      :floating="$vuetify.breakpoint.lgAndUp"
      :temporary="$vuetify.breakpoint.smAndDown"
      fixed
    >
      <template>
        <v-app-bar
          flat
          short
          style="border-bottom-style: solid;
  border-bottom-color: coral;
  border-bottom-width: 1px;"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <router-link
                to="/"
                exact
                style="text-decoration: none; color: inherit;"
              >
                <div class="d-flex align-center" v-bind="attrs" v-on="on">
                  <v-icon class="mr-3">mdi-cash-multiple</v-icon>
                  <h3>
                    Currency converter
                  </h3>
                </div>
              </router-link>
            </template>
            <span>Go to home page</span>
          </v-tooltip>
        </v-app-bar>
      </template>
      <template>
        <v-list-item-group>
          <v-subheader>CONTENT</v-subheader>
          <v-list-item-group v-model="newitem" color="primary">
            <v-list-item v-for="(item, i) in newitems" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list-item-group>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawer_right"
      v-if="$vuetify.breakpoint.lgAndUp"
      app
      permanent
      clipped
      right
    >
      <template>
        <v-container fill-height>
          <v-row align="center" justify="center">
            <v-col>
              <div>Something fixed here</div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="d-flex flex-column px-0"
        style="maxWidth: 960px; height: calc(100vh - 56px);"
      >
        <Card
          class="mb-2 mx-auto"
          :class="{
            'px-1': $vuetify.breakpoint.xsAndDown,
            'mt-2': $vuetify.breakpoint.smAndDown,
            'mt-10': $vuetify.breakpoint.lgAndUp
          }"
          no-wrap
        />
        <!-- <v-spacer></v-spacer> -->
        <p align="center" class="mt-6 mb-1 font-weight-medium">
          See more
        </p>
        <v-icon class="mx-auto mb-2">mdi-chevron-down</v-icon>
      </v-container>
      <v-fade-transition :hide-on-leave="true">
        <router-view></router-view>
      </v-fade-transition>
      <!-- <HelloWorld /> -->
    </v-main>
  </v-app>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "App",

  components: {
    Card

    // HelloWorld,
    // QuickTools
  },

  data: () => ({
    appTitle: "Vuetify Currency Converter",
    clipped: false,

    newitem: false,
    newitems: [
      { text: "Option 1", icon: "mdi-clock" },
      { text: "Option 2", icon: "mdi-account" },
      { text: "Option 3", icon: "mdi-flag" }
    ],
    drawer: null,
    drawer_right: true,
    drawer_fixed: true,
    themeIcon: {
      light: "mdi-weather-sunny",
      dark: "mdi-weather-night"
    }
  }),

  watch: {
    "$vuetify.breakpoint.lgAndUp"() {
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false;
    }
  }
};
</script>
