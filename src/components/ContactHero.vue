<template>
  <div class="hero-image">
    <div class="hero-text">
      <h2>We Look Forward to hearing from you!</h2>
      <router-link to="/projects">
        <v-btn rounded="xl" color="black"
          >Learn More About My Work</v-btn
        ></router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
body,
html {
  height: 100%;
}

/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/public/imgs/9397d5669480f918fe73cdb0e74ff5b8.jpeg");

  /* Set a specific height */
  height: 30%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

@media screen and (max-width: 700px) {
  .hero-image {
    height: 27%; /* Adjust this value as needed */
  }
}
</style>
