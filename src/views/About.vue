<template>
  <BtmHero />
  <div class="about">
    <p>
      Born and rasied in northen california near the heart of the silicon valley
      I have always had a close connection with the Tech Industy. It wasnt until
      I actully made my first website that I discovered the combination of
      creatvity and problem solving the web development offered. As someone who
      loves to learn, coding offers such a unique experience for me as there is
      so many topics to traverse and dive into to!
    </p>
    <br />
    <p>
      My approach to web development is to focus on creating a clean layout that
      offers a intuitive and user friendly experence for visitors. I am of the
      mindset that things can always be imporved so I never think of projects as
      done, but a work in progress. If you choose to work with me you will see
      my devotion to bringing your vision to life.
    </p>
    <br />
    <p>Lets develop something special today!</p>
  </div>
</template>
<script>
import BtmHero from "../components/BtmHero.vue";

export default {
  components: {
    BtmHero: BtmHero,
  },
};
</script>

<style scoped>
.about {
  padding-top: 5%;
  text-align: left;
  padding-left: 50px;
}
</style>
