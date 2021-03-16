<template>
  <v-navigation-drawer
    v-model="drawerFlag"
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
          <v-list-item
            v-for="(item, i) in newitems"
            :key="i"
            :to="item.to"
            @click="goTo(item.goTo)"
          >
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
</template>

<script>
export default {
  name: "DrawerLeft",

  props: ["drawer"],

  components: {},

  data: () => ({
    appTitle: "Vuetify Currency Converter",

    newitem: false,
    newitems: [
      { text: "Converter", icon: "mdi-home", goTo: "converter" },
      { text: "About", icon: "mdi-information", goTo: "about" }
    ]
  }),

  computed: {
    drawerFlag: {
      get: function() {
        return this.drawer;
      },
      set: function(val) {
        this.$emit("onChange", val);
      }
    }
  },

  methods: {
    goTo(val) {
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.drawer = false;
      }
      this.$emit("goTo", val);
    }
  },

  watch: {
    "$vuetify.breakpoint.lgAndUp"() {
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false;
    }
  }
};
</script>
