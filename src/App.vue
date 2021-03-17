<template>
  <v-app id="app">
    <Appbar @click="drawer = !drawer" @goTo="scrollTo($event)" />
    <DrawerLeft :drawer="drawer" @onChange="drawer = $event" />
    <DrawerRight />
    <v-main>
      <CurrencyConverterView id="Converter" />
      <v-divider class="mx-12"></v-divider>
      <v-fade-transition :hide-on-leave="true">
        <router-view></router-view>
      </v-fade-transition>
      <v-divider class="mx-12"></v-divider>
      <Footer id="Footer" class="my-auto" />
    </v-main>
  </v-app>
</template>

<script>
import DrawerLeft from "@/components/drawer.left.vue";
import DrawerRight from "@/components/drawer.right.vue";
import Appbar from "@/components/appbar.vue";
import CurrencyConverterView from "@/views/CurrencyConverterView.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    Appbar,
    DrawerLeft,
    DrawerRight,
    CurrencyConverterView,
    Footer
  },

  data: () => ({
    drawer: null
  }),

  methods: {},

  watch: {
    "$vuetify.breakpoint.lgAndUp"() {
      this.drawer = this.$vuetify.breakpoint.lgAndUp ? true : false;
    }
  }
};
</script>
