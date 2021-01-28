<template>
  <v-container>
    <v-card :loading="loading" class="tertiary px-2 my-0 mx-1 rounded-lg">
      <v-row class="text-center" wrap>
        <v-col align-self="center">
          <SearchSingleCurrency />
          <v-text-field
            ref="currencyA"
            type="text"
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
            ref="currencyB"
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
import { setValue } from "vue-currency-input";
import SearchSingleCurrency from "@/components/SearchSingleCurrency.vue";

export default {
  name: "Card",

  props: ["currencySymbolA", "currencySymbolB"],

  components: {
    // HelloWorld,
    SearchSingleCurrency
  },

  mounted() {
    this.updateCurrencyA(1);
    this.updateCurrencyB(1);
  },

  data: () => ({
    currencyA: "",
    currencyB: "",
    loading: false,
    selection: 1
  }),

  methods: {
    updateCurrencyA(val) {
      setValue(this.$refs.currencyA, val);
    },
    updateCurrencyB(val) {
      setValue(this.$refs.currencyB, val);
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
