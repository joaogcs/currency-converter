<template>
  <v-app id="app">
    <Appbar @click="drawer = !drawer" />
    <DrawerLeft
      :drawer="drawer"
      @onChange="drawer = $event"
      @goTo="scrollTo($event)"
    />
    <DrawerRight />
    <v-main>
      <CurrencyConverterView ref="converter" />
      <v-divider class="mx-12"></v-divider>
      <v-fade-transition :hide-on-leave="true">
        <router-view ref="about"></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script>
import DrawerLeft from "@/components/drawer.left.vue";
import DrawerRight from "@/components/drawer.right.vue";
import Appbar from "@/components/appbar.vue";
import CurrencyConverterView from "@/views/CurrencyConverterView.vue";

export default {
  name: "App",

  components: {
    Appbar,
    DrawerLeft,
    DrawerRight,
    CurrencyConverterView
  },

  data: () => ({
    drawer: null
  }),

  methods: {
    scrollTo(val) {
      this.$vuetify.goTo(this.$refs[val]);
    }
  },

  watch: {
    "$vuetify.breakpoint.lgAndUp"() {
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false;
    }
  }
};
</script>
