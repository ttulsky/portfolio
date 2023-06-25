<template>
  <TheProjectsHero />
  <div class="btns">
    <v-card class="mx-auto" max-width="300">
      <v-img
        src="imgs/Screen Shot 2023-06-24 at 5.57.30 PM.jpeg"
        height="175px"
        cover
      ></v-img>

      <v-card-title> Tyler's Blog Spot </v-card-title>

      <v-card-subtitle> My Blog On All Things Tech </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="green"
          href="https://fair-leotard-bass.cyclic.app/"
          target="https://fair-leotard-bass.cyclic.app/"
        >
          Tylers Blog Spot
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            A fun project built using JavaScript, Node, Express, EJS, and
            MongoDB NoSQL Database. This was a great way to learn about the
            flexibility of NoSQL schema types and how to use EJS scriptlets for
            dynamic rendering.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto" max-width="300">
      <v-img
        src="imgs/Screen Shot 2023-06-24 at 5.10.16 PM.jpeg"
        height="175px"
        cover
      ></v-img>

      <v-card-title> Sandbar-Zamami </v-card-title>

      <v-card-subtitle> A Website For A Small Business </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="green"
          href="https://www.sandbar-zamami.jp/"
          target="https://www.sandbar-zamami.jp/"
        >
          Sandbar
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            This was where it all began - my first foray into web design,
            crafted with the user-friendly Wix platform. Building this site was
            more than just an experience; it sparked a flame, igniting my
            interest and curiosity in the fascinating world of coding.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto" max-width="300">
      <v-img
        src="imgs/Screen Shot 2023-06-24 at 5.40.37 PM.png"
        height="175px"
        cover
      ></v-img>

      <v-card-title> Kaizen Koffee </v-card-title>

      <v-card-subtitle> An E-commerce Coffee Shop </v-card-subtitle>

      <v-card-actions>
        <v-btn
          color="green
"
          href="https://kaizen-koffee.web.app/"
          target="https://kaizen-koffee.web.app/"
        >
          Kaizen Koffee
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            Crafted utilizing the dynamic capabilities of Vue.js, coupled with
            the real-time features of Firebase, this project offered an engaging
            and stimulating experience. In the process, I delved into the
            fascinating world of coffee, gaining rich insights and knowledge
            that only amplified the enjoyment of the development journey.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import TheProjectsHero from "../components/TheProjectsHero.vue";

export default {
  data: () => ({
    show: false,
  }),
  components: {
    TheProjectsHero: TheProjectsHero,
  },
};
</script>

<style scoped>
.btns {
  overflow-y: auto;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  padding-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
}
</style>
