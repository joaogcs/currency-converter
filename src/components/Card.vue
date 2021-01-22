<template>
  <v-container>
    <v-card :loading="loading" class="px-2 ma-0" min-width="250px">
      <v-row class="text-center">
        <v-col align-self="center"
          ><span>BRL</span>
          <v-text-field> </v-text-field>
        </v-col>
        <v-col cols="auto" align-self="center">
          <v-icon>mdi-arrow-split-vertical</v-icon>
        </v-col>
        <v-col align-self="center"
          ><span>USD</span> <v-text-field> </v-text-field
        ></v-col>
      </v-row>
    </v-card>
  </v-container>
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
