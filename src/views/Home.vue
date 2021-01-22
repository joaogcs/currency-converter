<template>
  <div class="home">
    <Search class="mt-2 mb-2" />
    <Ads class="mb-2" />
    <GridOfCards class="mb-2" />
    <Footer class="my-auto" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Search from "@/components/Search.vue";
import Ads from "@/components/Ads.vue";
import GridOfCards from "@/components/GridOfCards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Search,
    Ads,
    GridOfCards,
    Footer
  }
};
</script>
