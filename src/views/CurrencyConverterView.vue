<template>
  <v-container
    class="d-flex flex-column px-0"
    style="maxWidth: 960px; height: calc(100vh - 56px);"
  >
    <Card
      class="mb-2 mx-auto"
      :class="{
        'px-1': $vuetify.breakpoint.xsAndDown,
        'mt-2': $vuetify.breakpoint.smAndDown,
        'mt-10': $vuetify.breakpoint.lgAndUp
      }"
      no-wrap
    />
    <v-spacer v-if="$vuetify.breakpoint.lgAndUp"></v-spacer>
    <p
      align="center"
      class="mb-1 font-weight-medium"
      :class="$vuetify.breakpoint.lgAndUp ? '' : 'mt-12'"
    >
      View more
    </p>
    <v-icon class="mx-auto mb-2">mdi-chevron-down</v-icon>
  </v-container>
</template>

<script>
import Card from "@/components/card.vue";

export default {
  name: "CurrencyConverterView",

  components: {
    Card
  }
};
</script>
