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
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
  },
};
</script>

<style scoped>
.space-ghost {
  padding-top: 0px;
  display: none;
}

@media screen and (min-width: 1000px) {
  .space-ghost {
    display: block;
  }
}
</style>
