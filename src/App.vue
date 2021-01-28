<template>
  <v-app id="app">
    <v-app-bar
      flat
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
                  <v-icon x-large class="mr-3">mdi-cash-multiple</v-icon>
                  <v-responsive class="hidden-md-and-down">
                    <h3>
                      Title
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
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer_fixed"
      v-if="$vuetify.breakpoint.lgAndUp"
      app
      floating
      fixed
      left
    >
      <template>
        <v-app-bar
          flat
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
                  <v-icon x-large class="mr-3">mdi-cash-multiple</v-icon>
                  <h3>
                    Title
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

    <v-navigation-drawer v-else v-model="drawer" temporary fixed>
      <template>
        <v-app-bar
          flat
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
                  <v-icon x-large class="mr-3">mdi-cash-multiple</v-icon>
                  <h3>
                    Title
                  </h3>
                </div>
              </router-link>
            </template>
            <span>Go to home page</span>
          </v-tooltip>
        </v-app-bar>
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

    <v-main>
      <v-fade-transition hide-on-leave="true">
        <router-view></router-view>
      </v-fade-transition>
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
    appTitle: "App Prototype",
    clipped: false,

    newitem: false,
    newitems: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" }
    ],
    drawer: false,
    drawer_right: true,
    drawer_fixed: true,
    themeIcon: {
      light: "mdi-weather-sunny",
      dark: "mdi-weather-night"
    }
  }),

  methods: {}
};
</script>
