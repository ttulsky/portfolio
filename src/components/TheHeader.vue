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
      <v-list-item
        prepend-icon="mdi-folder"
        title="My Files"
        value="myfiles"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Connect"
        value="Connect"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="About"
        value="About"
      ></v-list-item>
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
