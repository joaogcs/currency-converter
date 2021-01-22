<template>
  <v-container class="about">
    <v-row class="text-center mt-4" justify="center" align="center">
      <router-link to="/" exact style="text-decoration: none; color: inherit;"
        ><v-btn class="mx-4" elevation="1" small rounded>
          <v-icon>mdi-home-circle-outline</v-icon>
          <v-divider vertical class="mx-2"></v-divider>
          Home
        </v-btn>
      </router-link>
      <router-link
        to="/about"
        exact
        style="text-decoration: none; color: inherit;"
        ><v-btn class="mx-4" elevation="1" small rounded>
          <v-icon>mdi-information-outline</v-icon>
          <v-divider vertical class="mx-2"></v-divider>
          About
        </v-btn>
      </router-link>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          About
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />please join our online
          <a href="https://community.vuetifyjs.com" target="_blank"
            >Discord Community</a
          >
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
