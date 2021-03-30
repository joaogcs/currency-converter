<template>
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
        @click="setClick()"
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
              <div
                class="d-flex align-center"
                v-bind="attrs"
                v-on="on"
                @click="$vuetify.goTo('#Converter')"
              >
                <v-icon class="mr-3">mdi-cash-multiple</v-icon>
                <h4 class="hidden-md-and-down">
                  Currency converter
                </h4>
              </div>
            </router-link>
          </template>
          <span>Go to home page</span>
        </v-tooltip>
      </v-expand-transition>

      <v-spacer></v-spacer>
      <AppbarTooltip />
    </template>
  </v-app-bar>
</template>

<script>
import AppbarTooltip from "@/components/appbar.tooltip.vue";

export default {
  name: "Appbar",

  components: { AppbarTooltip },

  data: function() {
    return {
      appTitle: "Vuetify Currency Converter"
    };
  },

  methods: {
    setClick() {
      this.$emit("click");
    }
  }
};
</script>
