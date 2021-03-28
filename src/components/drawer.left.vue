<template>
  <v-navigation-drawer
    v-model="drawerFlag"
    :app="$vuetify.breakpoint.lgAndUp"
    :floating="$vuetify.breakpoint.lgAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    color="background"
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
              <div
                class="d-flex align-center"
                v-bind="attrs"
                v-on="on"
                @click="$vuetify.goTo('#Converter')"
              >
                <v-icon class="mr-3">mdi-cash-multiple</v-icon>
                <h4>
                  Currency converter
                </h4>
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
        <v-list-item-group v-model="newitem" color="primary" mandatory>
          <v-list-item
            v-for="(item, i) in newitems"
            :key="i"
            @click="onSelect(i)"
            link
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
      { text: "Converter", icon: "mdi-home", goTo: "Converter" },
      {
        text: "Details",
        icon: "mdi-dots-horizontal",
        to: "/",
        goTo: "Details"
      },
      { text: "About", icon: "mdi-information", to: "/about", goTo: "About" },
      { text: "Author", icon: "mdi-account", goTo: "Footer" }
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
    onSelect(index) {
      this.drawerFlag = this.$vuetify.breakpoint.lgAndUp ? true : false;
      if (this.newitems[index].to) {
        if (this.$router.currentRoute.path === this.newitems[index].to) {
          this.$vuetify.goTo(`#${this.newitems[index].goTo}`);
        } else {
          this.$router.push({ path: `${this.newitems[index].to}` }, () => {
            this.$nextTick(() => {
              this.$vuetify.goTo(`#${this.newitems[index].goTo}`);
            });
          });
        }
      } else {
        this.$vuetify.goTo(`#${this.newitems[index].goTo}`);
      }
    }
  },

  watch: {
    "$vuetify.breakpoint.lgAndUp"() {
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false;
    }
  }
};
</script>
