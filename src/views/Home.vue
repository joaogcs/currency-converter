<template>
  <div class="home">
    <!-- <Ads class="mb-2" /> -->
    <Card
      class="mt-4 mb-2 mx-auto"
      :class="{
        'px-1': $vuetify.breakpoint.smAndDown
      }"
      style="maxWidth: 960px;"
      no-wrap
    />
    <SearchMultipleCurrency class="mt-2 mb-2 mx-auto" />
    <Footer class="my-auto" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// import Ads from "@/components/Ads.vue";
import SearchMultipleCurrency from "@/components/SearchMultipleCurrency.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Card,
    SearchMultipleCurrency,
    Footer
  }
};
</script>
