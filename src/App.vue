<template>
  <v-app>
    <TheHeader></TheHeader>
    <TheHero></TheHero>
    <v-main>
      <div>
        <router-view></router-view>
      </div>
    </v-main>
    <!-- <BtmHero></BtmHero> -->
    <TheFooter></TheFooter>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHero from "./components/TheHero.vue";
// import BtmHero from "./components/BtmHero.vue";

export default {
  name: "App",

  // data: () => ({
  //   drawer: false,
  // }),

  components: {
    TheHeader: TheHeader,
    TheFooter: TheFooter,
    TheHero: TheHero,
    // BtmHero: BtmHero,
  },
};
</script>
