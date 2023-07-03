<template>
  <TheProjectsHero />
  <div class="btns">
    <v-card class="mx-auto" max-width="300">
      <v-img
        src="imgs/5894D1B6-076E-441D-A748-A6CC56211789_1_201_a.jpeg"
        height="175px"
        cover
      ></v-img>

      <v-card-title> Tyler's Blog Spot </v-card-title>

      <v-card-subtitle> My Blog On All Things Tech </v-card-subtitle>

      <v-card-actions>
        <v-btn
          class="custom-btn"
          color="green"
          href="https://fair-leotard-bass.cyclic.app/"
          target="https://fair-leotard-bass.cyclic.app/"
        >
          Tylers Blog Spot
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show[0] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggle(0)"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[0]">
          <v-divider></v-divider>

          <v-card-text>
            A fun project built using JavaScript, Node, Express, EJS, and a
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
          class="custom-btn"
          href="https://www.sandbar-zamami.jp/"
          target="https://www.sandbar-zamami.jp/"
        >
          Sandbar
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          :icon="show[1] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggle(1)"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[1]">
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
          class="custom-btn"
          href="https://kaizen-koffee.web.app/"
          target="https://kaizen-koffee.web.app/"
        >
          Kaizen Koffee
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show[2] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggle(2)"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[2]">
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
    show: [false, false, false],
  }),
  methods: {
    toggle(i) {
      this.show[i] = !this.show[i];
    },
  },
  components: {
    TheProjectsHero: TheProjectsHero,
  },
};
</script>

<style scoped>
.custom-btn {
  background-color: #4272a5 !important;
  color: #ffffff !important;
}
.custom-btn .v-btn:hover {
  background-color: #a8c3de; /* Or any color you like */
}
.btns {
  padding-bottom: 1%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  padding-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
}
@media screen and (max-width: 1100px) {
  .btns {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30%;
  }
}
</style>
