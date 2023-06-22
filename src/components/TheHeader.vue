<template>
  <v-navigation-drawer v-model="drawer" bordered>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Tyler Tulsky</v-list-item-title>
          <v-list-item-subtitle>ttulsky@gmailcom</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>

    <v-list dense>
      <router-link class="links" to="/projects">
        <v-list-item
          prepend-icon="mdi-star"
          title="Projects"
          value="Projects"
        ></v-list-item>
      </router-link>
      <router-link class="links" to="/contact">
        <v-list-item
          prepend-icon="mdi-email"
          title="Connect"
          value="Connect"
        ></v-list-item>
      </router-link>
      <router-link class="links" to="/about">
        <v-list-item
          prepend-icon="mdi-message-text"
          title="About"
          value="About"
        ></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="white" dark app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Tyler Tulsky | Full Stack Web Developer</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.links {
  text-decoration: none;
  color: black;
}
</style>
