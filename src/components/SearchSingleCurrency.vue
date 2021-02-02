<template>
  <v-container class="ma-0 pa-0">
    <v-responsive max-width="350x">
      <v-progress-linear
        :active="isLoading"
        :indeterminate="isLoading"
        color="secondary"
        rounded
      ></v-progress-linear>
      <v-autocomplete
        v-model="model"
        ref="SearchSingleCurrency"
        :items="items"
        @input="search = null"
        :search-input.sync="search"
        class="centered-input"
        item-color="secondary"
        hide-details="auto"
        hide-no-data
        hide-selected
        label="Search currencies"
        :prepend-inner-icon="
          $vuetify.breakpoint.smAndUp ? 'mdi-magnify' : undefined
        "
        :append-icon="$vuetify.breakpoint.smAndUp ? 'mdi-menu-down' : ''"
        :menu-props="{
          closeOnClick: true,
          closeOnContentClick: true,
          disableKeys: false,
          openOnClick: false,
          maxHeight: 304,
          offsetY: true,
          // rounded: 'b-xl',
          offsetOverflow: false,
          transition: 'slide-y-transition'
        }"
        auto-select-first
        filled
        solo
        :filter="filterObject"
        item-text="id"
        return-object
      >
        <template
          v-slot:selection="{ attr, on, item, selected }"
          v-bind="attr"
          v-on="on"
          :input-value="selected"
          color="accent"
          align-center
          justify-center
        >
          <v-spacer></v-spacer>
          <v-icon
            color="accent"
            :class="{
              'px-0': $vuetify.breakpoint.xsAndDown,
              'mx-1': $vuetify.breakpoint.xsAndDown,
              'ml-1': $vuetify.breakpoint.smAndUp,
              'mr-3': $vuetify.breakpoint.smAndUp,
              'px-auto': $vuetify.breakpoint.smAndUp
            }"
            left
          >
            mdi-currency-{{ item.id.toLowerCase() }}
          </v-icon>
          <h2 v-text="item.id" class="primary--text"></h2>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            v-if="$vuetify.breakpoint.mdAndUp"
            color="secondary"
            class="headline font-weight-light"
          >
            {{ item.id.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content
            @click="
              {
                dismissMobileKeyboard;
              }
            "
          >
            <v-list-item-title v-text="item.id"></v-list-item-title>
            <v-list-item-subtitle
              v-text="item.currencyName"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-currency-{{ item.id.toLowerCase() }}</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "SearchSingleCurrency",

  data: () => ({
    currencyNameLimit: 60,
    isLoading: false,
    entries: [],
    model: null,
    search: null,
    tab: null
  }),

  methods: {
    remove(id) {
      this.entries = this.entries.filter(
        entry => entry.id.toLowerCase() !== id.toLowerCase()
      );
    },
    filterObject(item, queryText) {
      return (
        item.id.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) >
          -1 ||
        item.currencyName
          .toLocaleLowerCase()
          .indexOf(queryText.toLocaleLowerCase()) > -1
      );
    },
    dismissMobileKeyboard() {
      this.$refs.SearchSingleCurrency.blur();
    },
    test(val) {
      alert(val);
    }
  },

  computed: {
    items() {
      return this.entries.map(entry => {
        const id = entry.id;

        return Object.assign({}, entry, { id });
      });
    }
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(
        `https://free.currconv.com/api/v7/currencies?apiKey=d8b2e9d59ba3d57fba43`
      )
        .then(res => res.clone().json())
        .then(res => {
          this.entries = Object.keys(res.results).map(key => res.results[key]);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
.v-autocomplete__content.v-menu__content {
  transform-origin: center top !important;
  /* transform: scale(0.95) !important; */
}
.v-progress-linear {
  transform-origin: center top !important;
  /* transform: scale(0.95) !important; */
}
</style>
