<template>
  <v-container>
    <v-progress-linear
      :active="true"
      :indeterminate="true"
      color="secondary"
      rounded
    ></v-progress-linear>
    <v-autocomplete
      v-model="model"
      :items="items"
      :search-input.sync="search"
      class="mb-n7"
      hide-no-data
      hide-selected
      label="Search currencies"
      placeholder="Start typing to search"
      append-icon="mdi-magnify"
      auto-select-first
      chips
      clearable
      deletable-chips
      filled
      multiple
      rounded
      solo
      return-object
    ></v-autocomplete>
    <v-expand-transition>
      <v-list v-if="model" class="red lighten-3">
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>
  </v-container>
</template>

<script>
export default {
  name: "Search",

  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null
  }),

  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.entries.map(entry => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    }
  },

  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.publicapis.org/entries")
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
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
  transform: scale(0.95) !important;
}
.v-progress-linear {
  transform-origin: center top !important;
  transform: scale(0.95) !important;
}
</style>
