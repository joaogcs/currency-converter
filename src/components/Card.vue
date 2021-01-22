<template>
  <v-card
    :loading="loading"
    class="px-2 my-4 mx-4"
    min-width="250px"
    max-width="250px"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-row class="text-center">
      <v-col
        ><span>BRL</span>
        <v-text-field> </v-text-field>
      </v-col>
      <v-col><span>USD</span> <v-text-field> </v-text-field></v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Card",

  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  }
};
</script>
