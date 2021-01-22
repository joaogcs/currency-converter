<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col
        class="d-flex justify-center"
        cols="12"
        sm="auto"
        md="auto"
        v-for="n in cards"
        :key="n"
      >
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
