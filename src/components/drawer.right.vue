<template>
  <v-navigation-drawer
    v-model="drawer"
    v-if="$vuetify.breakpoint.lgAndUp"
    app
    permanent
    clipped
    floating
    right
    color="background"
  >
    <template>
      <v-container fill-height>
        <v-row class="text-center" justify="center">
          <v-col>
            <h4>Tip</h4>
            <span>You can put some ads here</span>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DrawerRight"
};
</script>
