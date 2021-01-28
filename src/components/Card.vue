<template>
  <v-container>
    <v-card :loading="loading" class="tertiary px-2 my-0 mx-1 rounded-lg">
      <v-row class="text-center" wrap>
        <v-col align-self="center">
          <SearchSingleCurrency />
          <v-text-field
            v-model="currencyA"
            v-currency="{
              locale: 'en',
              currency: null,
              valueAsInteger: false,
              distractionFree: false,
              precision: 2,
              autoDecimalMode: true,
              valueRange: { min: 0 },
              allowNegative: false
            }"
            onfocus="this.placeholder = ''"
            placeholder="1.00"
            onblur="this.placeholder = '1.00'"
            :prepend-inner-icon="currencySymbolA"
            class="centered-input"
          />
        </v-col>
        <v-col
          class="ma-auto pa-auto"
          :class="{
            'mx-0': $vuetify.breakpoint.smAndDown,
            'px-0': $vuetify.breakpoint.smAndDown
          }"
          cols="auto"
          align-self="center"
        >
          <v-icon>mdi-arrow-split-vertical</v-icon>
        </v-col>
        <v-col align-self="center"
          ><SearchSingleCurrency />
          <v-text-field
            v-model="currencyB"
            v-currency="{
              locale: 'en',
              currency: null,
              valueAsInteger: false,
              distractionFree: false,
              precision: 2,
              autoDecimalMode: true,
              valueRange: { min: 0 },
              allowNegative: false
            }"
            onfocus="this.placeholder = ''"
            placeholder="1.00"
            onblur="this.placeholder = '1.00'"
            :prepend-inner-icon="currencySymbolA"
            class="centered-input"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SearchSingleCurrency from "@/components/SearchSingleCurrency.vue";

export default {
  name: "Card",

  props: ["currencySymbolA", "currencySymbolB"],

  components: {
    // HelloWorld,
    SearchSingleCurrency
  },

  data: () => ({
    currencyA: "1.00",
    currencyB: "1.00",
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

<style scoped>
::v-deep .centered-input input {
  text-align: center;
  font-size: 1.8em;
}
</style>
