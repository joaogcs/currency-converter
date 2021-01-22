<template>
  <v-container class="red">
    <v-autocomplete
      v-model="model"
      :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      class="mb-0"
      color="white"
      hide-no-data
      hide-selected
      item-text="Description"
      item-value="API"
      label="Currencies"
      placeholder="Start typing to search"
      prepend-icon="mdi-database-search"
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
