<template>
  <v-container fill-height class="green">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="auto" md="auto" v-for="n in cards" :key="n">
        <Card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "GridOfCards",

  components: {
    Card
  },

  data: () => ({
    cards: new Array(5)
  })
};
</script>
