<template>
  <v-container>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      class="mb-n7 "
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
  </v-container>
</template>

<script>
export default {
  name: "Search",

  data: () => ({
    isEditing: false
  })
};
</script>

<style>
.v-autocomplete__content.v-menu__content {
  transform-origin: center top !important;
  transform: scale(0.95) !important;
}
</style>
