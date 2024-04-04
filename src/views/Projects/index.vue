<template>
  <TheProjectsHero />
  <div class="btns">
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

    <v-card class="mx-auto" max-width="300">
      <v-img
        src="/imgs/Screenshot 2024-04-02 at 10.13.20 AM.png"
        height="175px"
        cover
      ></v-img>

      <v-card-title> Akira Wines </v-card-title>

      <v-card-subtitle> An Organic Winery </v-card-subtitle>

      <v-card-actions>
        <v-btn
          class="custom-btn"
          href="https://www.akirawines.com/"
          target="https://www.akirawines.com/"
        >
          Akira Wines
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
            I had the pleasure of collaborating closely with a client dedicated
            to the craft of organic winemaking to bring their vision to life.
            Together, we crafted an elegant website that reflects the natural
            elegance of their product, utilizing the user-friendly and versatile
            WIX platform. This project was a wonderful journey that not only
            highlighted the client's passion for organic wines but also
            showcased our combined commitment to creating a digital presence as
            refined and authentic as the wines they produce.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto" max-width="300">
      <v-img
        src="/imgs/Screenshot 2024-04-02 at 10.38.43 AM.png"
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
          Tyler's Blog Spot
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
            A personal blog I built using JavaScript, Node, Express, EJS, with a
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

      <v-card-subtitle>A Craft Cocktail Bar </v-card-subtitle>

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
          :icon="show[3] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="toggle(3)"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show[3]">
          <v-divider></v-divider>

          <v-card-text>
            This was a website I built for a small business crafted with the
            user-friendly Wix platform. Building this site was an amazing
            experience early in my development career that sparked my interest
            and curiosity in the fascinating world of coding and design.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import TheProjectsHero from "../../components/TheProjectsHero/index.vue";

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

<style scoped src="./Projects.css" />
