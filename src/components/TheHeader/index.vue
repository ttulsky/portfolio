<template>
  <div>
    <v-navigation-drawer class="drawer" v-model="drawer" temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Tyler Tulsky</v-list-item-title>
            <v-list-item-subtitle>ttulsky@gmail.com</v-list-item-subtitle>
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
      <router-link class="links" to="/"
        ><v-toolbar-title class="hover"
          >Tyler Tulsky | Full Stack Web Developer</v-toolbar-title
        ></router-link
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    $route(to, from) {
      // close drawer when route changes
      this.drawer = false;
    },
  },
  methods: {
    closeDrawer() {
      // close drawer when clicking outside of it
      this.drawer = false;
    },
  },
};
</script>

<style scoped src="./TheHeader.css" />
