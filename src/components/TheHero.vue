<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>Hi, I'm Tyler</h1>
      <h3>Your Friendly Neighborhood Web Developer</h3>

      <v-btn rounded="xl" color="black">Hire Me Today!</v-btn>
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
    url("/Users/tylertulsky/Tylers Portfolio/portfolio/src/assets/imgs/1_Eh1ju0aZiQP5Q6UJ-KdevQ.jpeg");

  /* Set a specific height */
  height: 55%;

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
</style>
