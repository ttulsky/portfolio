<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div class="space-ghost"></div>
    <TheFooter></TheFooter>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader/index.vue";
import TheFooter from "./components/TheFooter/index.vue";

export default {
  name: "App",

  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
  },
};
</script>

<style scoped src="./App.css" />
