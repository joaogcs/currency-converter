<template>
  <v-container>
    <v-card
      :loading="loading"
      class="tertiary px-2 my-0 mx-1 rounded-lg"
      color="secondary"
    >
      <v-row class="text-center" wrap>
        <v-col align-self="center">
          <SearchSingleCurrency
            :currency="defaultCurrencyA"
            @onSelection="updateCurrencyA"
          />
          <v-text-field
            ref="currencyA"
            type="text"
            v-model="currencyA.value"
            @focus="onFocusA"
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
          ><SearchSingleCurrency
            :currency="defaultCurrencyB"
            @onSelection="updateCurrencyB"
          />
          <v-text-field
            ref="currencyB"
            type="text"
            v-model="currencyB.value"
            @focus="onFocusB"
            class="centered-input"
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
            :prepend-inner-icon="currencySymbolB"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SearchSingleCurrency from "@/components/SearchSingleCurrency.vue";
import { setValue } from "vue-currency-input";

export default {
  name: "Card",

  props: ["currencySymbolA", "currencySymbolB"],

  components: {
    SearchSingleCurrency
  },

  data() {
    return {
      defaultCurrencyA: {
        id: "BRL",
        currencyName: "Brazilian Real",
        currencySymbol: "R$",
        value: "1"
      },
      defaultCurrencyB: {
        id: "USD",
        currencyName: "United States Dollar",
        currencySymbol: "$",
        value: "1"
      },
      currencyA: {
        id: "BRL",
        currencyName: "Brazilian Real",
        currencySymbol: "R$",
        value: "1"
      },
      currencyB: {
        id: "USD",
        currencyName: "United States Dollar",
        currencySymbol: "$",
        value: "1"
      },
      lockA: true,
      lockB: false,
      conversorScale: null,
      loading: false,
      selection: 1
    };
  },

  mounted() {},

  computed: {
    valueA: {
      get: function() {
        return this.currencyA.value;
      },
      set: val => {
        this.currencyA.value = val;
      }
    },
    valueB: {
      get: function() {
        return this.currencyB.value;
      },
      set: val => {
        this.currencyB.value = val;
      }
    }
  },

  watch: {
    async valueA() {
      if (this.lockB) return;

      if (!this.conversorScale) {
        await this.convert(this.currencyA.id, this.currencyB.id);
      }

      this.currencyB.value = (this.valueA * (this.conversorScale || 1)).toFixed(
        2
      );
    },
    async valueB() {
      if (this.lockA) return;

      if (!this.conversorScale) {
        await this.convert(this.currencyA.id, this.currencyB.id);
      }

      this.currencyA.value = (this.valueB / (this.conversorScale || 1)).toFixed(
        2
      );
    }
  },

  methods: {
    onFocusA() {
      this.lockA = true;
      this.lockB = false;
    },
    onFocusB() {
      this.lockA = false;
      this.lockB = true;
    },
    async updateCurrencyA(newCurrency) {
      this.currencyA.id = newCurrency.id;
      this.currencyA.currencyName = newCurrency.currencyName;
      this.currencyA.currencySymbol = newCurrency.currencySymbol;
      await this.convert(this.currencyA.id, this.currencyB.id);

      this.currencyB.value = (this.valueA * (this.conversorScale || 1)).toFixed(
        2
      );
    },
    async updateCurrencyB(newCurrency) {
      this.currencyB.id = newCurrency.id;
      this.currencyB.currencyName = newCurrency.currencyName;
      this.currencyB.currencySymbol = newCurrency.currencySymbol;
      await this.convert(this.currencyA.id, this.currencyB.id);

      this.currencyA.value = (this.valueB / (this.conversorScale || 1)).toFixed(
        2
      );
    },
    updateValueOfCurrencyA(val) {
      setValue(this.$refs.currencyA, val);
    },
    updateValueOfCurrencyB(val) {
      setValue(this.$refs.currencyB, val);
    },
    async convert(currencyA, currencyB) {
      let res = await fetch(
        `https://free.currencyconverterapi.com/api/v5/convert?q=${currencyA}_${currencyB}&compact=y&apiKey=d8b2e9d59ba3d57fba43`
      ).catch(err => {
        console.log(err);
        return;
      });
      res = await res.clone().json();
      this.conversorScale = res[`${currencyA}_${currencyB}`].val;
    }
  }
};
</script>

<style scoped>
::v-deep .centered-input input {
  text-align: center;
  font-size: 30px;
  /* color: var(--v-primary-base); */
}
</style>
