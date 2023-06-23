<template>
  <!-- <div class="btns">
    <v-btn
      rounded="xl"
      color="black"
      href="https://kaizen-koffee.web.app/"
      target="https://kaizen-koffee.web.app/"
    >
      Kaizen Koffee
    </v-btn>
    <v-btn
      rounded="xl"
      color="black"
      href="https://www.sandbar-zamami.jp/"
      target="https://www.sandbar-zamami.jp/"
    >
      Sandbar
    </v-btn>
    <v-btn
      rounded="xl"
      color="black"
      href="https://fair-leotard-bass.cyclic.app/"
      target="https://fair-leotard-bass.cyclic.app/"
    >
      Tylers Blog Spot
    </v-btn>
  </div>
  <div>
    <p>
      this is your project page, use cards and show your projects with a preview
      img. have links on the cards. next to them list the tech used and have
      badges or icons with the symbols or imgs of the languages.
    </p>

    <br /> -->
  <!-- <template> -->
  <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

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
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<!-- </div>
</template> -->
<script>
export default {
  data: () => ({
    show: false,
  }),
};
</script>
<style scoped>
.btns {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
}
</style>
